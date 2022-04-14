package bootstrappers

import (
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/event"
	mevent "github.com/duc-cnzj/execit/internal/event/events"
	"github.com/duc-cnzj/execit/internal/xlog"
)

type EventBootstrapper struct{}

func (e *EventBootstrapper) Bootstrap(app contracts.ApplicationInterface) error {
	app.SetEventDispatcher(event.NewDispatcher(app))

	for e, listeners := range mevent.RegisteredEvents() {
		for _, listener := range listeners {
			app.EventDispatcher().Listen(e, listener)
		}
	}

	xlog.Debug("EventBootstrapper booted.")

	return nil
}
