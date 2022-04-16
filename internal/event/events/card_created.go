package events

import (
	websocket_pb "github.com/duc-cnzj/execit-client/websocket"
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/models"
	"github.com/duc-cnzj/execit/internal/plugins"
)

var EventCardCreated contracts.Event = "EventCardCreated"

func init() {
	Register(EventCardCreated, HandleCardSync)
}

type EventCardCreatedData struct {
	Card *models.Card
}

func (d *EventCardCreatedData) GetCard() *models.Card {
	return d.Card
}

func HandleCardSync(a any, event contracts.Event) error {
	if _, ok := a.(CardSync); ok {
		plugins.GetWsSender().New("", "").ToAll(&websocket_pb.WsMetadataResponse{
			Metadata: &websocket_pb.Metadata{
				Type: websocket_pb.Type_HandleSyncCard,
			},
		})
	}
	return nil
}
