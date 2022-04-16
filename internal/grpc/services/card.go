package services

import (
	"context"
	"errors"
	"fmt"
	"sort"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"gorm.io/gorm"
	apierrors "k8s.io/apimachinery/pkg/api/errors"

	"github.com/duc-cnzj/execit-client/card"
	"github.com/duc-cnzj/execit-client/event"
	app "github.com/duc-cnzj/execit/internal/app/helper"
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/event/events"
	"github.com/duc-cnzj/execit/internal/models"
	"github.com/duc-cnzj/execit/internal/scopes"
	"github.com/duc-cnzj/execit/internal/utils"
)

func init() {
	RegisterServer(func(s grpc.ServiceRegistrar, app contracts.ApplicationInterface) {
		card.RegisterCardSvcServer(s, new(CardSvc))
	})
	RegisterEndpoint(card.RegisterCardSvcHandlerFromEndpoint)
}

type CardSvc struct {
	card.UnimplementedCardSvcServer
}

func (c *CardSvc) All(ctx context.Context, request *card.CardAllRequest) (*card.CardAllResponse, error) {
	var cards []models.Card

	if err := app.DB().Preload("Cluster").Order("`id` DESC").Find(&cards).Error; err != nil {
		return nil, err
	}

	type Key struct {
		clusterID   int
		clusterName string
		namespace   string
	}
	var groups = make(map[Key][]*card.CardItems)
	fn := func(clusterID int, clusterName, ns string) Key {
		return Key{
			clusterID:   clusterID,
			clusterName: clusterName,
			namespace:   ns,
		}
	}
	for _, m := range cards {
		k := fn(m.ClusterID, m.Cluster.Name, m.Namespace)
		if cardItems, ok := groups[k]; ok {
			groups[k] = append(cardItems, &card.CardItems{
				Id:          int64(m.ID),
				ClusterId:   int64(m.ClusterID),
				Namespace:   m.Namespace,
				Name:        m.Name,
				Type:        m.Type,
				ClusterName: m.Cluster.Name,
			})
		} else {
			groups[k] = []*card.CardItems{
				{
					Id:          int64(m.ID),
					ClusterId:   int64(m.ClusterID),
					Namespace:   m.Namespace,
					Name:        m.Name,
					Type:        m.Type,
					ClusterName: m.Cluster.Name,
				},
			}
		}
	}
	var clists []*card.CardItemsList
	for key, cardItems := range groups {
		clists = append(clists, &card.CardItemsList{
			ClusterId:   int64(key.clusterID),
			Namespace:   key.namespace,
			ClusterName: key.clusterName,
			Items:       cardItems,
		})
	}
	sort.Sort(sortCardItemsList(clists))

	return &card.CardAllResponse{Items: clists}, nil
}

type sortCardItemsList []*card.CardItemsList

func (s sortCardItemsList) Len() int {
	return len(s)
}

func (s sortCardItemsList) Less(i, j int) bool {
	return s[i].Namespace < s[j].Namespace
}

func (s sortCardItemsList) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

func (c *CardSvc) List(ctx context.Context, request *card.CardListRequest) (*card.CardListResponse, error) {
	var (
		page     = int(request.Page)
		pageSize = int(request.PageSize)
		cards    []models.Card
		count    int64
	)
	if err := app.DB().Preload("Cluster").Scopes(scopes.Paginate(&page, &pageSize)).Order("`id` DESC").Find(&cards).Error; err != nil {
		return nil, err
	}
	app.DB().Model(&models.Cluster{}).Count(&count)

	var items []*card.CardItems
	for _, m := range cards {
		getItems, err := m.GetItems()
		if apierrors.IsNotFound(err) {
			app.DB().Delete(&c)
			app.Event().Dispatch(events.EventCardDeleted, events.EventCardDeletedData{
				Card: &m,
			})
		}
		items = append(items, &card.CardItems{
			Id:          int64(m.ID),
			ClusterId:   int64(m.ClusterID),
			Namespace:   m.Namespace,
			Name:        m.Name,
			Type:        m.Type,
			ClusterName: m.Cluster.Name,
			Items:       getItems,
		})
	}
	return &card.CardListResponse{
		Page:     int64(page),
		PageSize: int64(pageSize),
		Count:    count,
		Items:    items,
	}, nil
}

func (c *CardSvc) Create(ctx context.Context, request *card.CardCreateRequest) (*card.CardCreateResponse, error) {
	var ca models.Card
	if err := app.DB().Where("`type` = ? and `name` = ? and `namespace` = ? and `cluster_id` = ?", request.Type, request.Name, request.Namespace, request.ClusterId).First(&ca).Error; err != nil {
		if !errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, status.Error(codes.Internal, err.Error())
		}
		ca = models.Card{
			Type:      request.Type,
			Namespace: request.Namespace,
			Name:      request.Name,
			ClusterID: int(request.ClusterId),
		}
		app.DB().Create(&ca)
	}
	app.Event().Dispatch(events.EventCardCreated, events.EventCardCreatedData{
		Card: &ca,
	})
	AuditLog(MustGetUser(ctx).Name, event.ActionType_Create, fmt.Sprintf("add card item, cluster '%d' namesapce '%s' name '%s'", ca.ClusterID, ca.Namespace, ca.Name))
	return &card.CardCreateResponse{
		Id:        int64(ca.ID),
		Type:      ca.Type,
		Namespace: ca.Namespace,
		Name:      ca.Name,
		ClusterId: int64(ca.ClusterID),
		CreatedAt: utils.ToRFC3339DatetimeString(&ca.CreatedAt),
		UpdatedAt: utils.ToRFC3339DatetimeString(&ca.UpdatedAt),
		DeletedAt: utils.ToRFC3339DatetimeString(&ca.DeletedAt.Time),
	}, nil
}

func (c *CardSvc) Show(ctx context.Context, request *card.CardShowRequest) (*card.CardShowResponse, error) {
	var ca models.Card
	app.DB().Preload("Cluster").Where("`id` = ?", request.CardId).First(&ca)
	items, _ := ca.GetItems()
	return &card.CardShowResponse{
		Id:        int64(ca.ID),
		Type:      ca.Type,
		Namespace: ca.Namespace,
		Name:      ca.Name,
		ClusterId: int64(ca.ClusterID),
		CreatedAt: utils.ToRFC3339DatetimeString(&ca.CreatedAt),
		UpdatedAt: utils.ToRFC3339DatetimeString(&ca.UpdatedAt),
		DeletedAt: utils.ToRFC3339DatetimeString(&ca.DeletedAt.Time),
		Items:     items,
	}, nil
}

func (c *CardSvc) Delete(ctx context.Context, request *card.CardDeleteRequest) (*card.CardDeleteResponse, error) {
	var ca models.Card
	if err := app.DB().First(&ca, request.CardId).Error; err == nil {
		app.DB().Delete(&ca)
		AuditLog(MustGetUser(ctx).Name, event.ActionType_Delete, fmt.Sprintf("delete card item, cluster '%d' namesapce '%s' name '%s'", ca.ClusterID, ca.Namespace, ca.Name))
	}
	app.Event().Dispatch(events.EventCardDeleted, events.EventCardDeletedData{
		Card: &ca,
	})

	return &card.CardDeleteResponse{}, nil
}

func (c *CardSvc) AllContainers(ctx context.Context, request *card.CardAllContainersRequest) (*card.CardAllContainersResponse, error) {
	var ca models.Card
	app.DB().Preload("Cluster").Where("`id` = ?", request.CardId).First(&ca)
	items, _ := ca.GetItems()
	return &card.CardAllContainersResponse{Items: items}, nil
}
