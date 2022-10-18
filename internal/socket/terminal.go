package socket

import (
	"bufio"
	"crypto/rand"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io"
	"os"
	"runtime"
	"strings"
	"sync"
	"time"

	"github.com/duc-cnzj/execit-client/event"
	"github.com/duc-cnzj/execit-client/rbac"
	websocket_pb "github.com/duc-cnzj/execit-client/websocket"
	app "github.com/duc-cnzj/execit/internal/app/helper"
	"github.com/duc-cnzj/execit/internal/auth"
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/models"
	trans "github.com/duc-cnzj/execit/internal/translator"
	"github.com/duc-cnzj/execit/internal/utils"
	"github.com/duc-cnzj/execit/internal/utils/date"
	"github.com/duc-cnzj/execit/internal/xlog"

	v1 "k8s.io/api/core/v1"
	"k8s.io/client-go/kubernetes"
	"k8s.io/client-go/kubernetes/scheme"
	"k8s.io/client-go/rest"
	"k8s.io/client-go/tools/remotecommand"
)

var (
	ETX                 = []byte("\u0003")
	END_OF_TRANSMISSION = []byte("\u0004")
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

type sizeStore struct {
	rwMu       sync.RWMutex
	cols, rows uint16

	resetMu sync.RWMutex
	reset   bool
}

func (s *sizeStore) ResetTerminalRowCol(reset bool) {
	s.resetMu.Lock()
	defer s.resetMu.Unlock()
	s.reset = reset
}

func (s *sizeStore) TerminalRowColNeedReset() bool {
	s.resetMu.RLock()
	defer s.resetMu.RUnlock()
	return s.reset
}

func (s *sizeStore) Set(cols, rows uint16) {
	s.rwMu.Lock()
	defer s.rwMu.Unlock()
	s.rows = rows
	s.cols = cols
}

func (s *sizeStore) Changed(cols, rows uint16) bool {
	s.rwMu.RLock()
	defer s.rwMu.RUnlock()
	if s.rows == 0 || s.cols == 0 {
		return false
	}
	if s.rows != rows {
		return true
	}
	if s.cols != cols {
		return true
	}

	return false
}

func (s *sizeStore) Cols() uint16 {
	s.rwMu.RLock()
	defer s.rwMu.RUnlock()
	return s.cols
}

func (s *sizeStore) Rows() uint16 {
	s.rwMu.RLock()
	defer s.rwMu.RUnlock()
	return s.rows
}

// PtyHandler is what remotecommand expects from a pty
type PtyHandler interface {
	Recorder() *Recorder
	Toast(string) error

	Send(*websocket_pb.TerminalMessage)
	Resize(remotecommand.TerminalSize)

	ResetTerminalRowCol(bool)
	TerminalMessageChan() chan *websocket_pb.TerminalMessage
	Rows() uint16
	Cols() uint16

	Close(string) bool
	IsClosed() bool

	io.Reader
	io.Writer
	remotecommand.TerminalSizeQueue
}

type Recorder struct {
	sync.RWMutex

	timer     timer
	filepath  string
	container Container
	f         *os.File
	shell     string
	startTime time.Time
	user      *contracts.UserInfo
	buffer    *bufio.Writer

	t    *MyPtyHandler
	once sync.Once

	rcMu       sync.RWMutex
	rows, cols uint16
}

var (
	startLine = "{\"version\": 2, \"width\": %d, \"height\": %d, \"timestamp\": %d, \"env\": {\"SHELL\": \"%s\", \"TERM\": \"xterm-256color\"}}\n"
	writeLine = "[%.6f, \"o\", %s]\n"
)

type timer interface {
	Now() time.Time
}

type realTimer struct{}

func (r realTimer) Now() time.Time {
	return time.Now()
}

func (r *Recorder) HeadLine(cols, rows uint16) {
	r.rcMu.Lock()
	defer r.rcMu.Unlock()
	r.cols = max(r.cols, cols)
	r.rows = max(r.rows, rows)
}

func max[T uint16 | int | int64](i, j T) T {
	if i < j {
		return j
	}
	return i
}

func (r *Recorder) Write(data string) (err error) {
	r.Lock()
	defer r.Unlock()
	r.once.Do(func() {
		var file *os.File
		file, err = app.Uploader().Disk("tmp").NewFile(fmt.Sprintf("%s/%s/%s",
			r.t.conn.GetUser().Name,
			r.timer.Now().Format("2006-01-02"),
			fmt.Sprintf("recorder-%d-%s-%s-%s-%s.cast.tmp", r.t.ClusterID, r.t.Namespace, r.t.Pod, r.t.Container.Container, utils.RandomString(20))))
		if err != nil {
			return
		}
		r.f = file
		r.buffer = bufio.NewWriterSize(r.f, 1024*20)
		r.filepath = file.Name()
		r.startTime = r.timer.Now()
		r.HeadLine(106, 25)
	})
	marshal, err := json.Marshal(data)
	if err != nil {
		xlog.Error(err)
	}
	_, err = r.buffer.WriteString(fmt.Sprintf(writeLine, float64(time.Since(r.startTime).Microseconds())/1000000, string(marshal)))
	return err
}

func (r *Recorder) Resize(cols, rows uint16) {
	r.HeadLine(cols, rows)
}

func (r *Recorder) Close() error {
	r.RLock()
	defer r.RUnlock()
	var err error
	if r.buffer == nil || r.startTime.IsZero() {
		return nil
	}
	r.buffer.Flush()
	realFile, _ := app.Uploader().Disk("shell").NewFile(fmt.Sprintf("%s/%s/%s",
		r.t.conn.GetUser().Name,
		r.timer.Now().Format("2006-01-02"),
		fmt.Sprintf("recorder-%d-%s-%s-%s-%s.cast", r.t.ClusterID, r.t.Namespace, r.t.Pod, r.t.Container.Container, utils.RandomString(20))))
	xlog.Debugf("tmp: %v\nreal: %v", r.f.Name(), realFile.Name())
	func() {
		defer func() {
			r.f.Close()
			app.Uploader().Delete(r.f.Name())
		}()
		r.f.Seek(0, 0)
		func() {
			r.rcMu.Lock()
			defer r.rcMu.Unlock()
			realFile.WriteString(fmt.Sprintf(startLine, r.cols, r.rows, r.startTime.Unix(), r.shell))
		}()
		io.Copy(realFile, r.f)
	}()
	stat, e := realFile.Stat()
	if e != nil {
		realFile.Close()
		app.Uploader().Delete(realFile.Name())
		return e
	}
	var emptyFile bool = true
	if stat.Size() > 0 {
		file := &models.File{
			Path:      realFile.Name(),
			Size:      uint64(stat.Size()),
			Username:  r.user.Name,
			ClusterID: int(r.container.ClusterID),
			Namespace: r.container.Namespace,
			Pod:       r.container.Pod,
			Container: r.container.Container,
		}
		app.DB().Create(file)
		var emodal = models.Event{
			Action:   uint8(event.ActionType_Shell),
			Username: r.user.Name,
			Message:  fmt.Sprintf("user exec container: '%s' namespace: '%s', pod： '%s', cluster_id: '%d'", r.container.Container, r.container.Namespace, r.container.Pod, r.container.ClusterID),
			FileID:   &file.ID,
			Duration: date.HumanDuration(time.Since(r.startTime)),
		}
		app.DB().Create(&emodal)
		emptyFile = false
	}
	realFile.Close()
	if emptyFile {
		app.Uploader().Delete(realFile.Name())
	}
	return err
}

type MyPtyHandler struct {
	Container

	id        string
	conn      *WsConn
	sizeStore sizeStore
	recorder  *Recorder
	doneChan  chan struct{}

	shellMu sync.RWMutex
	shellCh chan *websocket_pb.TerminalMessage

	sizeMu   sync.RWMutex
	sizeChan chan remotecommand.TerminalSize

	closeMu sync.RWMutex
	closed  bool
}

func (t *MyPtyHandler) Send(m *websocket_pb.TerminalMessage) {
	t.shellMu.Lock()
	defer t.shellMu.Unlock()

	select {
	case <-t.doneChan:
		close(t.shellCh)
		xlog.Warning("shell chan closed")
		return
	default:
	}

	select {
	case t.shellCh <- m:
	default:
		xlog.Warning("shell chan full")
	}
}

func (t *MyPtyHandler) Resize(size remotecommand.TerminalSize) {
	t.sizeMu.Lock()
	defer t.sizeMu.Unlock()
	select {
	case <-t.doneChan:
		close(t.sizeChan)
		return
	default:
	}

	select {
	case t.sizeChan <- size:
	default:
		xlog.Warning("size chan full")
	}
}

func (t *MyPtyHandler) IsClosed() bool {
	t.closeMu.RLock()
	defer t.closeMu.RUnlock()
	return t.closed
}

func (t *MyPtyHandler) CloseDoneChan() bool {
	t.closeMu.Lock()
	defer t.closeMu.Unlock()
	if t.closed {
		return false
	}
	t.closed = true
	xlog.Debug("close prev chan")
	close(t.doneChan)
	return true
}

func (t *MyPtyHandler) Recorder() *Recorder {
	return t.recorder
}

func (t *MyPtyHandler) Rows() uint16 {
	return t.sizeStore.Rows()
}

func (t *MyPtyHandler) Cols() uint16 {
	return t.sizeStore.Cols()
}

func (t *MyPtyHandler) ResetTerminalRowCol(reset bool) {
	t.sizeStore.ResetTerminalRowCol(reset)
}

func (t *MyPtyHandler) TerminalMessageChan() chan *websocket_pb.TerminalMessage {
	return t.shellCh
}

func (t *MyPtyHandler) Close(reason string) bool {
	t.closeMu.Lock()
	defer t.closeMu.Unlock()
	if t.closed {
		return false
	}
	t.closed = true

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
			Data:      []byte(reason),
		},
		Container: &websocket_pb.Container{
			Namespace: t.Container.Namespace,
			Pod:       t.Container.Pod,
			Container: t.Container.Container,
			ClusterId: t.Container.ClusterID,
		},
	})

	t.Send(&websocket_pb.TerminalMessage{
		Op:        OpStdin,
		Data:      ETX,
		SessionId: t.id,
	})
	time.Sleep(200 * time.Millisecond)
	t.Send(&websocket_pb.TerminalMessage{
		Op:        OpStdin,
		Data:      END_OF_TRANSMISSION,
		SessionId: t.id,
	})
	t.recorder.Close()
	close(t.doneChan)
	return true
}

func (t *MyPtyHandler) Read(p []byte) (n int, err error) {
	var (
		msg *websocket_pb.TerminalMessage
		ok  bool
	)
	select {
	case <-t.doneChan:
		return copy(p, END_OF_TRANSMISSION), fmt.Errorf("[Websocket]: %v doneChan closed", t.id)
	case msg, ok = <-t.shellCh:
		if !ok {
			return copy(p, END_OF_TRANSMISSION), fmt.Errorf("[Websocket]: %v channel closed", t.id)
		}
	}

	switch msg.Op {
	case OpStdin:
		return copy(p, msg.Data), nil
	case OpResize:
		xlog.Debugf("[Websocket]: resize cols: %v  rows: %v", msg.Cols, msg.Rows)
		t.Resize(remotecommand.TerminalSize{Width: uint16(msg.Cols), Height: uint16(msg.Rows)})
		return 0, nil
	default:
		return copy(p, END_OF_TRANSMISSION), fmt.Errorf("unknown message type '%s'", msg.Op)
	}
}

func (t *MyPtyHandler) Write(p []byte) (n int, err error) {
	select {
	case <-t.doneChan:
		return 0, fmt.Errorf("%v doneChan closed", t.id)
	default:
	}
	if !t.IsClosed() {
		t.recorder.Write(string(p))
		if t.sizeStore.TerminalRowColNeedReset() && t.sizeStore.Cols() != 0 {
			t.sizeStore.ResetTerminalRowCol(false)
			t.Resize(remotecommand.TerminalSize{Width: t.sizeStore.Cols(), Height: t.sizeStore.Rows()})
		}
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
				Data:      []byte(p),
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
		if size.Width != 0 && size.Height != 0 {
			if t.sizeStore.Changed(size.Width, size.Height) {
				t.recorder.Resize(size.Width, size.Height)
			}
			t.sizeStore.Set(size.Width, size.Height)
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
			Data:      []byte(p),
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
	Get(sessionId string) (PtyHandler, bool)
	Set(sessionId string, session PtyHandler)
	CloseAll()
	Close(sessionId string, status uint32, reason string)
}

// SessionMap stores a map of all MyPtyHandler objects and a sessLock to avoid concurrent conflict
type SessionMap struct {
	conn *WsConn

	sessLock sync.RWMutex
	Sessions map[string]PtyHandler
}

func (sm *SessionMap) Send(m *websocket_pb.TerminalMessage) {
	sm.sessLock.RLock()
	defer sm.sessLock.RUnlock()
	if h, ok := sm.Sessions[m.SessionId]; ok {
		if !h.IsClosed() {
			h.Send(m)
		}
	}
}

// Get return a given terminalSession by sessionId
func (sm *SessionMap) Get(sessionId string) (PtyHandler, bool) {
	sm.sessLock.RLock()
	defer sm.sessLock.RUnlock()
	h, ok := sm.Sessions[sessionId]
	return h, ok
}

// Set store a MyPtyHandler to SessionMap
func (sm *SessionMap) Set(sessionId string, session PtyHandler) {
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
	sm.Sessions = map[string]PtyHandler{}
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
	"command terminated with exit code 130",
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
		session.Recorder().shell = shell
		err = startProcess(k8sClient, cfg, container, cmd, session)
	} else {
		// No shell given or it was not valid: try some shells until one succeeds or all fail
		// FIXME: if the first shell fails then the first keyboard event is lost
		for idx, testShell := range validShells {
			if session.IsClosed() {
				xlog.Debugf("session 已关闭，不会继续尝试连接其他 shell: '%s'", strings.Join(validShells[idx:], ", "))
				break
			}
			cmd := []string{testShell}
			session.Recorder().shell = testShell
			if err = startProcess(k8sClient, cfg, container, cmd, session); err == nil {
				break
			}
			// 当出现 bash 回退的时候，需要注意，resize 不会触发，导致，新的 'sh', cols, rows 和用户端不一致，所以需要重置，
			// 通过 sizeStore 记录上次用户的 rows, cols, 当 bash 回退时，在用户输入时应用到新的 sh 中
			session = resetSession(session)
			conn.terminalSessions.Set(sessionId, session)
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

func resetSession(session PtyHandler) PtyHandler {
	var cols, rows uint16 = 106, 25
	func() {
		ticker := time.NewTicker(100 * time.Millisecond)
		af := time.NewTimer(3 * time.Second)
		defer ticker.Stop()
		defer af.Stop()
		for session.Cols() == 0 {
			select {
			case <-ticker.C:
				break
			case <-af.C:
				return
			}
		}
		cols = session.Cols()
		rows = session.Rows()
	}()

	spty := session.(*MyPtyHandler)
	var newSession PtyHandler = session
	if spty.CloseDoneChan() {
		newSession = &MyPtyHandler{
			Container: spty.Container,
			recorder:  spty.recorder,
			id:        spty.id,
			conn:      spty.conn,
			doneChan:  make(chan struct{}),
			sizeChan:  make(chan remotecommand.TerminalSize, 1),
			shellCh:   make(chan *websocket_pb.TerminalMessage, 100),
			sizeStore: sizeStore{
				cols:  cols,
				rows:  rows,
				reset: true,
			},
		}
	}
	return newSession
}

type TerminalResponse struct {
	ID string `json:"id"`
}

func HandleExecShell(input *websocket_pb.WsHandleExecShellInput, conn *WsConn) (string, error) {
	if !auth.HasPermissionFor(conn.GetUser(), rbac.Permission_Card, input.CardId) {
		return "", trans.TToError("forbidden", conn.lang.Get())
	}
	k8sClient := utils.K8sClientByClusterID(input.ClusterId)

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

	pty := &MyPtyHandler{
		Container: c,
		id:        sessionID,
		conn:      conn,
		sizeChan:  make(chan remotecommand.TerminalSize, 1),
		doneChan:  make(chan struct{}),
		shellCh:   make(chan *websocket_pb.TerminalMessage, 100),
		recorder: &Recorder{
			timer:     realTimer{},
			user:      conn.GetUser(),
			container: c,
		},
	}
	pty.recorder.t = pty
	conn.terminalSessions.Set(sessionID, pty)

	go WaitForTerminal(conn, k8sClient.Client(), k8sClient.RestConfig(), &c, "", sessionID)

	return sessionID, nil
}
