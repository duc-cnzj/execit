package socket

import (
	"time"

	websocket_pb "github.com/duc-cnzj/execit-client/websocket"
)

const (
	ResultError   = websocket_pb.ResultType_Error
	ResultSuccess = websocket_pb.ResultType_Success

	WsSetUid             = websocket_pb.Type_SetUid
	WsInternalError      = websocket_pb.Type_InternalError
	WsHandleExecShell    = websocket_pb.Type_HandleExecShell
	WsHandleExecShellMsg = websocket_pb.Type_HandleExecShellMsg
	WsHandleCloseShell   = websocket_pb.Type_HandleCloseShell
	WsAuthorize          = websocket_pb.Type_HandleAuthorize
	WsHandleSetLang      = websocket_pb.Type_HandleSetLang

	// Maximum message size allowed from peer.
	maxMessageSize = 1024 * 5
	// Time allowed to write a message to the peer.
	writeWait = 10 * time.Second
	// Time allowed to read the next pong message from the peer.
	pongWait = 60 * time.Second
	// Send pings to peer with this period. Must be less than pongWait.
	pingPeriod = (pongWait * 9) / 10
)

type WsResponse = websocket_pb.WsMetadataResponse
