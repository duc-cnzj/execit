package wssender

import (
	"encoding/json"

	websocket_pb "github.com/duc-cnzj/execit-client/websocket"
	"google.golang.org/protobuf/proto"
)

func transformToResponse(message proto.Message) []byte {
	marshal, _ := proto.Marshal(message)
	return marshal
}

func protoToMessage(m proto.Message, to websocket_pb.To, id string) Message {
	return Message{
		Data: transformToResponse(m),
		To:   to,
		ID:   id,
	}
}

func decodeMessage(data []byte) (msg Message, err error) {
	err = json.Unmarshal(data, &msg)
	return
}

type Message struct {
	Data []byte
	To   websocket_pb.To
	ID   string
}

func (m Message) Marshal() []byte {
	marshal, _ := json.Marshal(&m)
	return marshal
}
