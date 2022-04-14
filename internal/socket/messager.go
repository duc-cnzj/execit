package socket

import (
	"sync"

	websocket_pb "github.com/duc-cnzj/execit-client/websocket"
	"github.com/duc-cnzj/execit/internal/plugins"
)

type Msger interface {
	SendEndError(error)
	SendError(error)
	SendMsg(string)
	SendProtoMsg(plugins.WebsocketMessage)
}

type messager struct {
	mu        sync.RWMutex
	isStopped bool
	stoperr   error

	conn     *WsConn
	slugName string
	wsType   websocket_pb.Type
}

func NewMessageSender(conn *WsConn, slugName string, wsType websocket_pb.Type) Msger {
	return &messager{conn: conn, slugName: slugName, wsType: wsType}
}

func (ms *messager) Stop(err error) {
	ms.mu.Lock()
	defer ms.mu.Unlock()
	ms.stoperr = err
	ms.isStopped = true
}

func (ms *messager) IsStopped() bool {
	ms.mu.RLock()
	defer ms.mu.RUnlock()

	return ms.isStopped
}

func (ms *messager) SendEndError(err error) {
	res := &WsResponse{
		Metadata: &websocket_pb.Metadata{
			Slug:   ms.slugName,
			Type:   ms.wsType,
			Result: ResultError,
			End:    true,
			Uid:    ms.conn.uid,
			Id:     ms.conn.id,
			Data:   err.Error(),
		},
	}
	ms.send(res)
}

func (ms *messager) SendError(err error) {
	res := &WsResponse{
		Metadata: &websocket_pb.Metadata{
			Slug:   ms.slugName,
			Type:   ms.wsType,
			Result: ResultError,
			End:    false,
			Uid:    ms.conn.uid,
			Id:     ms.conn.id,
			Data:   err.Error(),
		},
	}
	ms.send(res)
}

func (ms *messager) SendMsg(msg string) {
	res := &WsResponse{
		Metadata: &websocket_pb.Metadata{
			Slug:   ms.slugName,
			Type:   ms.wsType,
			Result: ResultSuccess,
			End:    false,
			Uid:    ms.conn.uid,
			Id:     ms.conn.id,
			Data:   msg,
		},
	}
	ms.send(res)
}

func (ms *messager) SendProtoMsg(msg plugins.WebsocketMessage) {
	ms.send(msg)
}

func (ms *messager) send(res plugins.WebsocketMessage) {
	if ms.IsStopped() {
		return
	}
	ms.conn.pubSub.ToSelf(res)
}
