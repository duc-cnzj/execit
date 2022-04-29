package socket

import (
	"encoding/json"
	"fmt"
	"net/http"
	"sync"
	"time"

	"github.com/google/uuid"
	"github.com/gorilla/websocket"
	"google.golang.org/protobuf/proto"

	websocket_pb "github.com/duc-cnzj/execit-client/websocket"
	app "github.com/duc-cnzj/execit/internal/app/helper"
	"github.com/duc-cnzj/execit/internal/auth"
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/middlewares"
	"github.com/duc-cnzj/execit/internal/plugins"
	"github.com/duc-cnzj/execit/internal/utils"
	"github.com/duc-cnzj/execit/internal/xlog"
)

type HandleRequestFunc func(c *WsConn, t websocket_pb.Type, message []byte)

var handlers map[websocket_pb.Type]HandleRequestFunc = map[websocket_pb.Type]HandleRequestFunc{
	WsAuthorize:          HandleWsAuthorize,
	WsHandleCloseShell:   HandleWsHandleCloseShell,
	WsHandleExecShellMsg: HandleWsHandleExecShellMsg,
	WsHandleExecShell:    HandleWsHandleExecShell,
	WsHandleSetLang:      HandleWsHandleSetLang,
}

type lang struct {
	l string
	sync.RWMutex
}

func (l *lang) Set(lang string) {
	l.Lock()
	defer l.Unlock()
	l.l = lang
}

func (l *lang) Get() string {
	l.RLock()
	defer l.RUnlock()
	return l.l
}

type WsConn struct {
	id   string
	uid  string
	conn *websocket.Conn

	lang *lang

	userMu           sync.RWMutex
	user             *contracts.UserInfo
	pubSub           plugins.PubSub
	terminalSessions SessionMapper
}

func (wc *WebsocketManager) initConn(r *http.Request, c *websocket.Conn) *WsConn {
	var uid string
	uid = r.URL.Query().Get("uid")
	if uid == "" {
		uid = uuid.New().String()
	}
	id := uuid.New().String()

	ps := plugins.GetWsSender().New(uid, id)
	var wsconn = &WsConn{
		pubSub: ps,
		id:     id,
		uid:    uid,
		conn:   c,
		lang:   &lang{l: middlewares.MustGetLang(r.Context())},
	}
	wsconn.terminalSessions = &SessionMap{Sessions: make(map[string]*MyPtyHandler), conn: wsconn}
	app.Metrics().IncWebsocketConn()
	Wait.Inc()

	return wsconn
}

func (c *WsConn) Shutdown() {
	xlog.Debug("[Websocket]: Ws exit ")

	c.terminalSessions.CloseAll()
	c.pubSub.Close()
	c.conn.Close()
	app.Metrics().DecWebsocketConn()
	Wait.Dec()
}

func (c *WsConn) SetUser(info *contracts.UserInfo) {
	c.userMu.Lock()
	defer c.userMu.Unlock()
	auth.FillUserPermission(info)
	c.user = info
}

func (c *WsConn) GetUser() *contracts.UserInfo {
	c.userMu.RLock()
	defer c.userMu.RUnlock()
	return c.user
}

func (c *WsConn) GetShellChannel(sessionID string) (chan *websocket_pb.TerminalMessage, error) {
	if handler, ok := c.terminalSessions.Get(sessionID); ok {
		return handler.shellCh, nil
	}

	return nil, fmt.Errorf("%v not found channel", sessionID)
}

type WebsocketManager struct{}

func NewWebsocketManager() *WebsocketManager {
	return &WebsocketManager{}
}

func (wc *WebsocketManager) Info(writer http.ResponseWriter, request *http.Request) {
	writer.Header().Set("Content-Type", "application/json")
	marshal, _ := json.Marshal(plugins.GetWsSender().New("", "").Info())
	writer.Write(marshal)
}

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func (wc *WebsocketManager) Ws(w http.ResponseWriter, r *http.Request) {
	c, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		xlog.Error(err)
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("cant Upgrade websocket connection"))
		return
	}

	wsconn := wc.initConn(r, c)

	defer wsconn.Shutdown()

	go write(wsconn)

	NewMessageSender(wsconn, "", WsSetUid).SendMsg(wsconn.uid)

	ch := make(chan struct{}, 1)
	go func() {
		var err error
		defer func() {
			xlog.Debugf("[Websocket]: go read exit, err: %v", err)
		}()
		defer utils.HandlePanic("[Websocket]: read recovery")
		err = read(wsconn)
		ch <- struct{}{}
	}()

	select {
	case <-app.App().Done():
		return
	case <-ch:
		return
	}
}

func write(wsconn *WsConn) error {
	defer utils.HandlePanic("Websocket: Write")

	ticker := time.NewTicker(pingPeriod)
	defer func() {
		xlog.Debugf("[Websocket]: go write exit")
		ticker.Stop()
		wsconn.conn.Close()
	}()
	ch := wsconn.pubSub.Subscribe()
	for {
		select {
		case message, ok := <-ch:
			wsconn.conn.SetWriteDeadline(time.Now().Add(writeWait))
			if !ok {
				return wsconn.conn.WriteMessage(websocket.CloseMessage, []byte{})
			}

			w, err := wsconn.conn.NextWriter(websocket.BinaryMessage)
			if err != nil {
				return err
			}
			w.Write(message)

			if err := w.Close(); err != nil {
				return err
			}
		case <-ticker.C:
			xlog.Debugf("[Websocket]: tick ping/pong uid: %s, id: %s", wsconn.uid, wsconn.id)
			wsconn.conn.SetWriteDeadline(time.Now().Add(writeWait))
			if err := wsconn.conn.WriteMessage(websocket.PingMessage, nil); err != nil {
				return err
			}
		}
	}
}

func read(wsconn *WsConn) error {
	wsconn.conn.SetReadLimit(maxMessageSize)
	wsconn.conn.SetReadDeadline(time.Now().Add(pongWait))
	wsconn.conn.SetPongHandler(func(string) error {
		wsconn.conn.SetReadDeadline(time.Now().Add(pongWait))
		xlog.Debugf("[Websocket]: received heartbeat id: %s, uid %s", wsconn.id, wsconn.uid)
		return nil
	})
	for {
		var wsRequest websocket_pb.WsRequestMetadata
		_, message, err := wsconn.conn.ReadMessage()
		if err != nil {
			xlog.Debugf("[Websocket]: read error: %v", err)
			return err
		}
		if err := proto.Unmarshal(message, &wsRequest); err != nil {
			NewMessageSender(wsconn, "", WsInternalError).SendEndError(err)

			continue
		}

		go func(wsRequest *websocket_pb.WsRequestMetadata, message []byte) {
			if handler, ok := handlers[wsRequest.Type]; ok {
				handler(wsconn, wsRequest.Type, message)
			}
		}(&wsRequest, message)
	}
}

func HandleWsAuthorize(c *WsConn, t websocket_pb.Type, message []byte) {
	defer utils.HandlePanic("HandleWsAuthorize")

	var input websocket_pb.AuthorizeTokenInput
	if err := proto.Unmarshal(message, &input); err != nil {
		xlog.Error("[Websocket]: " + err.Error())
		NewMessageSender(c, "", t).SendEndError(err)

		return
	}

	if claims, b := app.Auth().VerifyToken(input.Token); b {
		c.SetUser(claims.UserInfo)
	}
}

func HandleWsHandleSetLang(c *WsConn, t websocket_pb.Type, message []byte) {
	defer utils.HandlePanic("HandleWsHandleSetLang")
	xlog.Info("Set   lang")
	var input websocket_pb.WsHandleSetLangInput
	if err := proto.Unmarshal(message, &input); err != nil {
		xlog.Error("[Websocket]: " + err.Error())
		return
	}

	c.lang.Set(input.Lang)
}

func HandleWsHandleCloseShell(c *WsConn, t websocket_pb.Type, message []byte) {
	defer utils.HandlePanic("HandleWsHandleCloseShell")

	var input websocket_pb.TerminalMessageInput
	if err := proto.Unmarshal(message, &input); err != nil {
		xlog.Error(err.Error())
		NewMessageSender(c, "", t).SendEndError(err)

		return
	}
	xlog.Debugf("[Websocket]: %v Receive a message that the client actively disconnected", input.Message.SessionId)
	c.terminalSessions.Close(input.Message.SessionId, 0, "")
}

func HandleWsHandleExecShellMsg(c *WsConn, t websocket_pb.Type, message []byte) {
	defer utils.HandlePanic("HandleWsHandleExecShellMsg")

	var input websocket_pb.TerminalMessageInput
	if err := proto.Unmarshal(message, &input); err != nil {
		NewMessageSender(c, "", t).SendEndError(err)

		return
	}
	if input.Message.SessionId != "" {
		c.terminalSessions.Send(input.Message)
	}
}

func HandleWsHandleExecShell(c *WsConn, t websocket_pb.Type, message []byte) {
	var input websocket_pb.WsHandleExecShellInput
	if err := proto.Unmarshal(message, &input); err != nil {
		NewMessageSender(c, "", t).SendEndError(err)
		return
	}

	sessionID, err := HandleExecShell(&input, c)
	if err != nil {
		xlog.Error(err)
		NewMessageSender(c, "", WsHandleExecShell).SendEndError(err)
		return
	}

	xlog.Debugf("[Websocket]: Received initialize connection WsHandleExecShell message id: %v", sessionID)

	NewMessageSender(c, "", WsHandleExecShell).SendProtoMsg(&websocket_pb.WsHandleShellResponse{
		Metadata: &websocket_pb.Metadata{
			Id:     c.id,
			Uid:    c.uid,
			Type:   WsHandleExecShell,
			Result: ResultSuccess,
		},
		TerminalMessage: &websocket_pb.TerminalMessage{
			SessionId: sessionID,
		},
		Container: &websocket_pb.Container{
			Namespace: input.Namespace,
			Pod:       input.Pod,
			Container: input.Container,
			ClusterId: input.ClusterId,
		},
	})
}
