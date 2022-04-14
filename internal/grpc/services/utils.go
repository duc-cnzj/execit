package services

import (
	"errors"

	eventpb "github.com/duc-cnzj/execit-client/event"
	"github.com/duc-cnzj/execit/internal/auth"
	"github.com/duc-cnzj/execit/internal/event/events"
)

var ErrorPermissionDenied = errors.New("do not have permission to perform this operation")

var MustGetUser = auth.MustGetUser

var AuditLog = func(username string, action eventpb.ActionType, msg string) {
	events.AuditLog(username, action, msg, nil, nil)
}
var FileAuditLog = func(username string, msg string, fileID int) {
	events.FileAuditLog(username, msg, fileID)
}
