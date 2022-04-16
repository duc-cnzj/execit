package events

import (
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/models"
)

var EventCardDeleted contracts.Event = "EventCardDeleted"

func init() {
	Register(EventCardDeleted, HandleCardSync)
}

type CardSync interface {
	GetCard() *models.Card
}

type EventCardDeletedData struct {
	Card *models.Card
}

func (d EventCardDeletedData) GetCard() *models.Card {
	return d.Card
}
