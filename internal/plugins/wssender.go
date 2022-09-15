package plugins

import (
	"sync"

	"google.golang.org/protobuf/proto"

	websocket_pb "github.com/duc-cnzj/execit-client/websocket"
	app "github.com/duc-cnzj/execit/internal/app/helper"
	"github.com/duc-cnzj/execit/internal/contracts"
)

var wsSenderOnce sync.Once

const (
	ToSelf   = websocket_pb.To_ToSelf
	ToAll    = websocket_pb.To_ToAll
	ToOthers = websocket_pb.To_ToOthers
)

type WsMetadataResponse = websocket_pb.WsMetadataResponse

type WebsocketMessage interface {
	proto.Message
	GetMetadata() *websocket_pb.Metadata
}

var _ WebsocketMessage = (*WsMetadataResponse)(nil)

type WsSender interface {
	New(uid, id string) PubSub
}

type PubSub interface {
	Info() any
	Uid() string
	ID() string
	ToSelf(WebsocketMessage) error
	ToAll(WebsocketMessage) error
	ToOthers(WebsocketMessage) error
	Subscribe() <-chan []byte
	Close() error
}

func GetWsSender() WsSender {
	pcfg := app.Config().WsSenderPlugin
	p := app.App().GetPluginByName(pcfg.Name)
	wsSenderOnce.Do(func() {
		if err := p.Initialize(pcfg.GetArgs()); err != nil {
			panic(err)
		}
		app.App().RegisterAfterShutdownFunc(func(applicationInterface contracts.ApplicationInterface) {
			p.Destroy()
		})
	})

	return p.(WsSender)
}

type EmptyPubSub struct{}

func (e *EmptyPubSub) Info() any {
	return nil
}

func (e *EmptyPubSub) Uid() string {
	return ""
}

func (e *EmptyPubSub) ID() string {
	return ""
}

func (e *EmptyPubSub) ToSelf(message WebsocketMessage) error {
	return nil
}

func (e *EmptyPubSub) ToAll(message WebsocketMessage) error {
	return nil
}

func (e *EmptyPubSub) ToOthers(message WebsocketMessage) error {
	return nil
}

func (e *EmptyPubSub) Subscribe() <-chan []byte {
	return nil
}

func (e *EmptyPubSub) Close() error {
	return nil
}
