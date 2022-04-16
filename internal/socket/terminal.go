package socket

import (
	"crypto/rand"
	"encoding/hex"
	"errors"
	"fmt"
	"io"
	"regexp"
	"runtime"
	"strconv"
	"strings"
	"sync"
	goatomic "sync/atomic"
	"time"

	"github.com/duc-cnzj/execit-client/event"
	app "github.com/duc-cnzj/execit/internal/app/helper"
	"github.com/duc-cnzj/execit/internal/models"

	websocket_pb "github.com/duc-cnzj/execit-client/websocket"
	"github.com/duc-cnzj/execit/internal/utils"
	"github.com/duc-cnzj/execit/internal/xlog"

	v1 "k8s.io/api/core/v1"
	"k8s.io/client-go/kubernetes"
	"k8s.io/client-go/kubernetes/scheme"
	"k8s.io/client-go/rest"
	"k8s.io/client-go/tools/remotecommand"
)

const (
	TAB                 = "\u0009"
	ETX                 = "\u0003"
	END_OF_TRANSMISSION = "\u0004"
	ESC                 = "\u001B"

	Up    = "\u2191"
	Down  = "\u2193"
	Left  = "\u2190"
	Right = "\u2192"
)

const (
	OpStdout = "stdout"
	OpStdin  = "stdin"
	OpResize = "resize"
	OpToast  = "toast"
)

type Container struct {
	Namespace string `json:"namespace"`
	Pod       string `json:"pod"`
	Container string `json:"container"`
	ClusterID int64  `json:"cluster_id"`
	Cluster   *models.Cluster
}

// PtyHandler is what remotecommand expects from a pty
type PtyHandler interface {
	io.Reader
	io.Writer
	remotecommand.TerminalSizeQueue
}

type MyPtyHandler struct {
	Container
	id       string
	conn     *WsConn
	sizeChan chan remotecommand.TerminalSize
	doneChan chan struct{}

	shellCh chan *websocket_pb.TerminalMessage

	closeLock sync.Mutex
	isClosed  bool

	cacheLock sync.RWMutex
	cache     []byte

	eMu     sync.Mutex
	eventID int

	first int32
}

func (t *MyPtyHandler) Close(reason string) {
	t.closeLock.Lock()
	if t.isClosed {
		t.closeLock.Unlock()
		return
	}
	t.isClosed = true
	t.closeLock.Unlock()

	NewMessageSender(t.conn, t.id, WsHandleExecShellMsg).SendProtoMsg(&websocket_pb.WsHandleShellResponse{
		Metadata: &websocket_pb.Metadata{
			Id:     t.conn.id,
			Uid:    t.conn.uid,
			Slug:   t.id,
			Type:   WsHandleExecShellMsg,
			Result: ResultSuccess,
		},
		TerminalMessage: &websocket_pb.TerminalMessage{
			SessionId: t.id,
			Op:        OpStdout,
			Data:      reason,
		},
		Container: &websocket_pb.Container{
			Namespace: t.Container.Namespace,
			Pod:       t.Container.Pod,
			Container: t.Container.Container,
			ClusterId: t.Container.ClusterID,
		},
	})

	t.shellCh <- &websocket_pb.TerminalMessage{
		Op:        OpStdin,
		Data:      ETX,
		SessionId: t.id,
	}
	time.Sleep(200 * time.Millisecond)
	t.shellCh <- &websocket_pb.TerminalMessage{
		Op:        OpStdin,
		Data:      END_OF_TRANSMISSION,
		SessionId: t.id,
	}
	close(t.shellCh)
	close(t.sizeChan)
	close(t.doneChan)
	t.cacheLock.RLock()
	if len(t.cache) > 0 {
		xlog.Infof("[Websocket]: user %v, send: '%v', namespace: %v, pod: %v.", t.conn.GetUser().Name, string(t.cache), t.Namespace, t.Pod)
	}
	t.cacheLock.RUnlock()
}

func (t *MyPtyHandler) SetEventID(ID int) {
	t.eMu.Lock()
	defer t.eMu.Unlock()
	t.eventID = ID
}

func (t *MyPtyHandler) GetEventID() int {
	t.eMu.Lock()
	defer t.eMu.Unlock()
	return t.eventID
}

// 当复制黏贴时会出现特殊字符串, 要替换掉
// [200~mime.types[201~
var pasteRegexp = regexp.MustCompile(`\[200~(.*?)\[201~`)

func (t *MyPtyHandler) Read(p []byte) (n int, err error) {
	if goatomic.CompareAndSwapInt32(&t.first, 0, 1) {
		xlog.Warning("swapped!!!")
		var emodal = models.Event{
			Action:   uint8(event.ActionType_Shell),
			Username: t.conn.GetUser().Name,
			Message:  fmt.Sprintf("user exec container: '%s' namespace: '%s', pod： '%s', cluster_id: '%d'", t.Container.Container, t.Container.Namespace, t.Container.Pod, t.Container.ClusterID),
		}
		app.DB().Create(&emodal)
		t.SetEventID(emodal.ID)
	}
	select {
	case <-t.doneChan:
		return copy(p, END_OF_TRANSMISSION), fmt.Errorf("[Websocket]: %v doneChan closed", t.id)
	default:
	}
	msg, ok := <-t.shellCh
	if !ok {
		return copy(p, END_OF_TRANSMISSION), fmt.Errorf("%v channel closed", t.id)
	}
	switch msg.Op {
	case OpStdin:
		t.cacheLock.Lock()
		textQuoted := strconv.QuoteToASCII(msg.Data)
		textUnquoted := textQuoted[1 : len(textQuoted)-1]
		xlog.Debugf("input: '%v'", textUnquoted)
		switch {
		case pasteRegexp.MatchString(msg.Data):
			submatch := pasteRegexp.FindStringSubmatch(msg.Data)
			if len(submatch) == 2 {
				t.cache = append(t.cache, []byte(submatch[1])...)
			}
		case msg.Data == ETX:
			t.cache = append(t.cache, []byte("[ctrl+C]")...)
			fallthrough
		case msg.Data == "\r":
			fallthrough
		case msg.Data == "\n":
			xlog.Infof("[Websocket]: user %v, send: '%v', namespace: %v, pod: %v.", t.conn.GetUser().Name, string(t.cache), t.Namespace, t.Pod)
			app.DB().Create(&models.Command{
				ClusterID: int(t.Container.ClusterID),
				Namespace: t.Container.Namespace,
				Pod:       t.Container.Pod,
				Container: t.Container.Container,
				Command:   string(t.cache),
				EventID:   t.GetEventID(),
			})
			t.cache = make([]byte, 0, 20)
		default:
			t.cache = append(t.cache, []byte(filterSpecialCharacters(msg.Data))...)
		}

		t.cacheLock.Unlock()
		return copy(p, msg.Data), nil
	case OpResize:
		xlog.Debugf("[Websocket]: resize cols: %v  rows: %v", msg.Cols, msg.Rows)
		t.sizeChan <- remotecommand.TerminalSize{Width: uint16(msg.Cols), Height: uint16(msg.Rows)}
		return 0, nil
	default:
		return copy(p, END_OF_TRANSMISSION), fmt.Errorf("unknown message type '%s'", msg.Op)
	}
}

const (
	ShellUp     = "[A"
	ShellDown   = "[B"
	ShellLeft   = "[D"
	ShellRight  = "[C"
	ShellDelete = "\u007f"
)

var shellMap = map[string]string{
	ShellDelete:         "⌫",
	ESC:                 "",
	TAB:                 "[TAB]",
	END_OF_TRANSMISSION: "[ctrl+D]",
	ShellUp:             Up,
	ShellDown:           Down,
	ShellLeft:           Left,
	ShellRight:          Right,
}

func filterSpecialCharacters(s string) string {
	for old, newS := range shellMap {
		s = strings.ReplaceAll(s, old, newS)
	}
	return s
}

func (t *MyPtyHandler) Write(p []byte) (n int, err error) {
	select {
	case <-t.doneChan:
		return 0, fmt.Errorf("%v doneChan closed!", t.id)
	default:
	}
	send := true
	t.closeLock.Lock()
	if t.isClosed {
		send = false
	}
	t.closeLock.Unlock()
	if send {
		NewMessageSender(t.conn, t.id, WsHandleExecShellMsg).SendProtoMsg(&websocket_pb.WsHandleShellResponse{
			Metadata: &websocket_pb.Metadata{
				Id:     t.conn.id,
				Uid:    t.conn.uid,
				Slug:   t.id,
				Type:   WsHandleExecShellMsg,
				Result: ResultSuccess,
			},
			TerminalMessage: &websocket_pb.TerminalMessage{
				Op:        OpStdout,
				Data:      string(p),
				SessionId: t.id,
			},
			Container: &websocket_pb.Container{
				Namespace: t.Container.Namespace,
				Pod:       t.Container.Pod,
				Container: t.Container.Container,
				ClusterId: t.Container.ClusterID,
			},
		})
	}

	return len(p), nil
}

func (t *MyPtyHandler) Next() *remotecommand.TerminalSize {
	select {
	case size, ok := <-t.sizeChan:
		if !ok {
			return nil
		}
		return &size
	case <-t.doneChan:
		return nil
	}
}

// Toast can be used to send the user any OOB messages
// hterm puts these in the center of the terminal
func (t *MyPtyHandler) Toast(p string) error {
	NewMessageSender(t.conn, t.id, WsHandleExecShellMsg).SendProtoMsg(&websocket_pb.WsHandleShellResponse{
		Metadata: &websocket_pb.Metadata{
			Id:     t.conn.id,
			Uid:    t.conn.uid,
			Slug:   t.id,
			Type:   WsHandleExecShellMsg,
			Result: ResultSuccess,
		},
		TerminalMessage: &websocket_pb.TerminalMessage{
			Op:        OpToast,
			Data:      p,
			SessionId: t.id,
		},
		Container: &websocket_pb.Container{
			Namespace: t.Container.Namespace,
			Pod:       t.Container.Pod,
			Container: t.Container.Container,
			ClusterId: t.Container.ClusterID,
		},
	})
	return nil
}

type SessionMapper interface {
	Send(message *websocket_pb.TerminalMessage)
	Get(sessionId string) (*MyPtyHandler, bool)
	Set(sessionId string, session *MyPtyHandler)
	CloseAll()
	Close(sessionId string, status uint32, reason string)
}

// SessionMap stores a map of all MyPtyHandler objects and a sessLock to avoid concurrent conflict
type SessionMap struct {
	conn *WsConn

	sessLock sync.RWMutex
	Sessions map[string]*MyPtyHandler
}

func (sm *SessionMap) Send(m *websocket_pb.TerminalMessage) {
	sm.sessLock.RLock()
	defer sm.sessLock.RUnlock()
	if h, ok := sm.Sessions[m.SessionId]; ok {
		select {
		case h.shellCh <- m:
		default:
			xlog.Warningf("[Websocket]: sessionId %v 的 shellCh 满了: %d", m.SessionId, len(h.shellCh))
		}
	}
}

// Get return a given terminalSession by sessionId
func (sm *SessionMap) Get(sessionId string) (*MyPtyHandler, bool) {
	sm.sessLock.RLock()
	defer sm.sessLock.RUnlock()
	h, ok := sm.Sessions[sessionId]
	return h, ok
}

// Set store a MyPtyHandler to SessionMap
func (sm *SessionMap) Set(sessionId string, session *MyPtyHandler) {
	sm.sessLock.Lock()
	defer sm.sessLock.Unlock()
	sm.Sessions[sessionId] = session
}

func (sm *SessionMap) CloseAll() {
	xlog.Debug("[Websocket]: close all.")
	sm.sessLock.Lock()
	defer sm.sessLock.Unlock()

	for _, s := range sm.Sessions {
		s.Close("websocket conn closed")
	}
	sm.Sessions = map[string]*MyPtyHandler{}
}

// Close shuts down the SockJS connection and sends the status code and reason to the client
// Can happen if the process exits or if there is an error starting up the process
// For now the status code is unused and reason is shown to the user (unless "")
func (sm *SessionMap) Close(sessionId string, status uint32, reason string) {
	xlog.Debugf("[Websocket]: session %v closed, reason: %s.", sessionId, reason)
	sm.sessLock.Lock()
	defer sm.sessLock.Unlock()
	if s, ok := sm.Sessions[sessionId]; ok {
		delete(sm.Sessions, sessionId)
		go s.Close(reason)
	}
}

// startProcess is called by handleAttach
// Executed cmd in the Container specified in request and connects it up with the ptyHandler (a session)
func startProcess(k8sClient kubernetes.Interface, cfg *rest.Config, container *Container, cmd []string, ptyHandler PtyHandler) error {
	namespace := container.Namespace
	podName := container.Pod
	containerName := container.Container

	req := k8sClient.CoreV1().RESTClient().Post().
		Resource("pods").
		Name(podName).
		Namespace(namespace).
		SubResource("exec")

	req.VersionedParams(&v1.PodExecOptions{
		Container: containerName,
		Command:   cmd,
		Stdin:     true,
		Stdout:    true,
		Stderr:    true,
		TTY:       true,
	}, scheme.ParameterCodec)

	exec, err := remotecommand.NewSPDYExecutor(cfg, "POST", req.URL())
	if err != nil {
		return err
	}

	return exec.Stream(remotecommand.StreamOptions{
		Stdin:             ptyHandler,
		Stdout:            ptyHandler,
		Stderr:            ptyHandler,
		TerminalSizeQueue: ptyHandler,
		Tty:               true,
	})
}

// GenMyPtyHandlerId generates a random session ID string. The format is not really interesting.
// This ID is used to identify the session when the client opens the SockJS connection.
// Not the same as the SockJS session id! We can't use that as that is generated
// on the client side and we don't have it yet at this point.
func GenMyPtyHandlerId() (string, error) {
	bytes := make([]byte, 16)
	if _, err := rand.Read(bytes); err != nil {
		xlog.Error(err)

		return "", err
	}
	id := make([]byte, hex.EncodedLen(len(bytes)))
	hex.Encode(id, bytes)
	return string(id), nil
}

// isValidShell checks if the shell is an allowed one
func isValidShell(validShells []string, shell string) bool {
	for _, validShell := range validShells {
		if validShell == shell {
			return true
		}
	}
	return false
}

var silenceShellExitMessages = []string{
	"command terminated with exit code 126",
}

func silence(err error) bool {
	for _, message := range silenceShellExitMessages {
		if strings.Contains(err.Error(), message) {
			return true
		}
	}
	return false
}

// WaitForTerminal is called from apihandler.handleAttach as a goroutine
// Waits for the SockJS connection to be opened by the client the session to be bound in handleMyPtyHandler
func WaitForTerminal(conn *WsConn, k8sClient kubernetes.Interface, cfg *rest.Config, container *Container, shell, sessionId string) {
	defer func() {
		utils.HandlePanic("Websocket: WaitForTerminal")
		xlog.Debugf("[Websocket]: WaitForTerminal EXIT: total go: %v", runtime.NumGoroutine())
	}()
	var err error
	validShells := []string{"bash", "sh", "powershell", "cmd"}

	session, _ := conn.terminalSessions.Get(sessionId)
	if isValidShell(validShells, shell) {
		cmd := []string{shell}
		err = startProcess(k8sClient, cfg, container, cmd, session)
	} else {
		// No shell given or it was not valid: try some shells until one succeeds or all fail
		// FIXME: if the first shell fails then the first keyboard event is lost
		for _, testShell := range validShells {
			cmd := []string{testShell}
			if err = startProcess(k8sClient, cfg, container, cmd, session); err == nil {
				break
			}
		}
	}

	if err != nil {
		xlog.Debugf("[Websocket]: %v", err.Error())
		if !silence(err) {
			session.Toast(err.Error())
		}
		conn.terminalSessions.Close(sessionId, 2, err.Error())
		return
	}

	conn.terminalSessions.Close(sessionId, 1, "Process exited")
}

type TerminalResponse struct {
	ID string `json:"id"`
}

func HandleExecShell(input *websocket_pb.WsHandleExecShellInput, conn *WsConn) (string, error) {
	k8sClient := utils.K8sClientByClusterID(input.ClusterId)
	if running, reason := utils.IsPodRunning(k8sClient.Client(), input.Namespace, input.Pod); !running {
		return "", errors.New(reason)
	}

	sessionID, err := GenMyPtyHandlerId()
	if err != nil {
		return "", err
	}
	var cu models.Cluster
	app.DB().First(&cu, input.ClusterId)
	var c = Container{
		Namespace: input.Namespace,
		Pod:       input.Pod,
		Container: input.Container,
		ClusterID: input.ClusterId,
		Cluster:   &cu,
	}

	conn.terminalSessions.Set(sessionID, &MyPtyHandler{
		Container: c,
		id:        sessionID,
		conn:      conn,
		sizeChan:  make(chan remotecommand.TerminalSize, 1),
		doneChan:  make(chan struct{}, 1),
		shellCh:   make(chan *websocket_pb.TerminalMessage, 100),
		cache:     make([]byte, 0, 20),
	})

	go WaitForTerminal(conn, k8sClient.Client(), k8sClient.RestConfig(), &c, "", sessionID)

	return sessionID, nil
}
