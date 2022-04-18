package services

import (
	"context"
	"errors"
	"fmt"
	"sort"
	"time"

	"gorm.io/gorm"
	authorizationv1 "k8s.io/api/authorization/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/labels"
	"k8s.io/client-go/kubernetes"
	restclient "k8s.io/client-go/rest"
	"k8s.io/client-go/tools/clientcmd"

	"github.com/duc-cnzj/execit-client/cluster"
	"github.com/duc-cnzj/execit-client/event"
	"github.com/duc-cnzj/execit-client/model"
	app "github.com/duc-cnzj/execit/internal/app/helper"
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/models"
	"github.com/duc-cnzj/execit/internal/scopes"
	"github.com/duc-cnzj/execit/internal/utils"
	"github.com/duc-cnzj/execit/internal/xlog"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func init() {
	RegisterServer(func(s grpc.ServiceRegistrar, app contracts.ApplicationInterface) {
		cluster.RegisterClusterSvcServer(s, new(ClusterSvc))
	})
	RegisterEndpoint(cluster.RegisterClusterSvcHandlerFromEndpoint)
}

type ClusterSvc struct {
	cluster.UnimplementedClusterSvcServer
}

func (c *ClusterSvc) List(ctx context.Context, request *cluster.ClusterListRequest) (*cluster.ClusterListResponse, error) {
	var (
		page     = int(request.Page)
		pageSize = int(request.PageSize)
		clusters []models.Cluster
		count    int64
	)
	if err := app.DB().Scopes(scopes.Paginate(&page, &pageSize)).Order("`id` DESC").Find(&clusters).Error; err != nil {
		return nil, err
	}
	app.DB().Model(&models.Cluster{}).Count(&count)
	res := make([]*model.ClusterModel, 0, len(clusters))
	for _, m := range clusters {
		res = append(res, &model.ClusterModel{
			Id:           int64(m.ID),
			Name:         m.Name,
			KubeConfig:   m.KubeConfig,
			ApiServerUrl: m.ClusterConfig().Host,
			CreatedAt:    utils.ToRFC3339DatetimeString(&m.CreatedAt),
			UpdatedAt:    utils.ToRFC3339DatetimeString(&m.UpdatedAt),
			DeletedAt:    utils.ToRFC3339DatetimeString(&m.DeletedAt.Time),
		})
	}

	return &cluster.ClusterListResponse{
		Page:     int64(page),
		PageSize: int64(pageSize),
		Count:    count,
		Items:    res,
	}, nil
}

var checkList = []struct {
	Verb        string
	Group       string
	Resource    string
	Subresource string
}{
	{
		Verb:        "get",
		Group:       "",
		Resource:    "pods",
		Subresource: "",
	},
	{
		Verb:        "watch",
		Group:       "",
		Resource:    "pods",
		Subresource: "",
	},
	{
		Verb:        "create",
		Group:       "",
		Resource:    "pods",
		Subresource: "exec",
	},
	{
		Verb:        "get",
		Group:       "apps",
		Resource:    "deployments",
		Subresource: "",
	},
	{
		Verb:        "watch",
		Group:       "apps",
		Resource:    "deployments",
		Subresource: "",
	},
	{
		Verb:        "get",
		Group:       "apps",
		Resource:    "statefulSets",
		Subresource: "",
	},
	{
		Verb:        "watch",
		Group:       "apps",
		Resource:    "statefulSets",
		Subresource: "",
	},
}

func RunAccessCheck(cli kubernetes.Interface, namespace string) (bool, error) {
	for _, o := range checkList {
		var sar *authorizationv1.SelfSubjectAccessReview
		sar = &authorizationv1.SelfSubjectAccessReview{
			Spec: authorizationv1.SelfSubjectAccessReviewSpec{
				ResourceAttributes: &authorizationv1.ResourceAttributes{
					Namespace:   namespace,
					Verb:        o.Verb,
					Group:       o.Group,
					Resource:    o.Resource,
					Subresource: o.Subresource,
				},
			},
		}

		response, err := cli.AuthorizationV1().SelfSubjectAccessReviews().Create(context.TODO(), sar, metav1.CreateOptions{})
		if err != nil {
			return false, err
		}

		if !response.Status.Allowed {
			return false, fmt.Errorf("not allowed Resource: '%s', Subresource: '%s', Group: '%s', Verb '%s', namespace: '%s'", o.Resource, o.Subresource, o.Group, o.Verb, namespace)
		}
	}

	return true, nil
}

func (c *ClusterSvc) Create(ctx context.Context, request *cluster.ClusterCreateRequest) (*cluster.ClusterCreateResponse, error) {
	if app.DB().Where("`name` = ?", request.Name).First(&models.Cluster{}).Error == nil {
		return nil, status.Errorf(codes.AlreadyExists, "cluster name '%s' already exists", request.Name)
	}

	var (
		cc         clientcmd.ClientConfig
		err        error
		restConfig *restclient.Config
		validOk    bool
		client     *kubernetes.Clientset
	)
	cc, err = clientcmd.NewClientConfigFromBytes([]byte(request.KubeConfig))
	if err == nil {
		restConfig, err = cc.ClientConfig()
		if err == nil {
			restConfig.Timeout = 5 * time.Second
			client, err = kubernetes.NewForConfig(restConfig)
			if err == nil {
				validOk, err = RunAccessCheck(client, request.Namespace)
			}
		}
	}
	if !validOk {
		return nil, err
	}

	var clm models.Cluster
	if err := app.DB().Where("`name` = ? and `namespace` = ?", request.Name, request.Namespace).First(&clm).Error; err != nil {
		if !errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, err
		}
		clm = models.Cluster{
			Name:       request.Name,
			KubeConfig: request.KubeConfig,
			Namespace:  request.Namespace,
		}
		app.DB().Create(&clm)
	}

	AuditLog(MustGetUser(ctx).Name, event.ActionType_Create, fmt.Sprintf("add cluster '%s' host: '%s'", clm.Name, clm.ClusterConfig().Host))

	return &cluster.ClusterCreateResponse{
		Id:        int64(clm.ID),
		Name:      clm.Name,
		CreatedAt: utils.ToRFC3339DatetimeString(&clm.CreatedAt),
		UpdatedAt: utils.ToRFC3339DatetimeString(&clm.UpdatedAt),
		DeletedAt: utils.ToRFC3339DatetimeString(&clm.DeletedAt.Time),
	}, nil
}

type sortClusterItemsList []*cluster.ClusterItems

func (s sortClusterItemsList) Len() int {
	return len(s)
}

func (s sortClusterItemsList) Less(i, j int) bool {
	return s[i].Namespace < s[j].Namespace
}

func (s sortClusterItemsList) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

type sortClusterItems []*cluster.ClusterItem

func (s sortClusterItems) Len() int {
	return len(s)
}

func (s sortClusterItems) Less(i, j int) bool {
	return s[i].Name < s[j].Name
}

func (s sortClusterItems) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

func (c *ClusterSvc) Show(ctx context.Context, request *cluster.ClusterShowRequest) (*cluster.ClusterShowResponse, error) {
	var cl models.Cluster
	if err := app.DB().Where("`id` = ?", request.ClusterId).First(&cl).Error; err != nil {
		return nil, status.Errorf(codes.NotFound, "clusterID: %d", request.ClusterId)
	}
	var cards []*models.Card
	var existsMap = make(map[string]*models.Card)
	app.DB().Find(&cards)
	keyFn := func(clusterID int, namespace, name, t string) string {
		return fmt.Sprintf("c:%d-ns:%s-name:%s-type:%s", clusterID, namespace, name, t)
	}
	for _, card := range cards {
		existsMap[keyFn(card.ClusterID, card.Namespace, card.Name, card.Type)] = card
	}

	client, err := app.App().LoadKubeClient(cl.Name, []byte(cl.KubeConfig), cl.Namespace)
	if err != nil {
		return nil, err
	}
	list, _ := client.DeploymentLister().List(labels.Everything())
	var items = make(map[string]*cluster.ClusterItems)
	for _, deployment := range list {
		var cardID int64
		card, exists := existsMap[keyFn(cl.ID, deployment.Namespace, deployment.Name, "Deployment")]
		if exists {
			cardID = int64(card.ID)
		}
		if responseItems, ok := items[deployment.Namespace]; ok {
			items[deployment.Namespace] = &cluster.ClusterItems{
				Items: append(responseItems.Items, &cluster.ClusterItem{
					Namespace: deployment.Namespace,
					Type:      "Deployment",
					Name:      deployment.Name,
					Enabled:   exists,
					ClusterId: int64(cl.ID),
					CardId:    cardID,
				}),
			}
		} else {
			items[deployment.Namespace] = &cluster.ClusterItems{
				Items: []*cluster.ClusterItem{
					{
						Namespace: deployment.Namespace,
						Type:      "Deployment",
						Name:      deployment.Name,
						Enabled:   exists,
						ClusterId: int64(cl.ID),
						CardId:    cardID,
					},
				},
			}
		}
	}

	statefulList, _ := client.StatefulSetLister().List(labels.Everything())
	for _, state := range statefulList {
		var cardID int64
		card, exists := existsMap[keyFn(cl.ID, state.Namespace, state.Name, "StatefulSet")]
		if exists {
			cardID = int64(card.ID)
		}

		if responseItems, ok := items[state.Namespace]; ok {
			items[state.Namespace] = &cluster.ClusterItems{
				Items: append(responseItems.Items, &cluster.ClusterItem{
					Namespace: state.Namespace,
					Type:      "StatefulSet",
					Name:      state.Name,
					Enabled:   exists,
					ClusterId: int64(cl.ID),
					CardId:    cardID,
				}),
			}
		} else {
			items[state.Namespace] = &cluster.ClusterItems{
				Items: []*cluster.ClusterItem{
					{
						Namespace: state.Namespace,
						Type:      "StatefulSet",
						Name:      state.Name,
						Enabled:   exists,
						ClusterId: int64(cl.ID),
						CardId:    cardID,
					},
				},
			}
		}
	}
	var result = make([]*cluster.ClusterItems, 0)

	for k, clusterItems := range items {
		var ss = sortClusterItems(clusterItems.Items)
		sort.Sort(ss)
		result = append(result, &cluster.ClusterItems{
			Namespace: k,
			Items:     ss,
		})
	}
	results := sortClusterItemsList(result)
	sort.Sort(&results)

	return &cluster.ClusterShowResponse{
		Id:           int64(cl.ID),
		Name:         cl.Name,
		ApiServerUrl: cl.ClusterConfig().Host,
		CreatedAt:    utils.ToRFC3339DatetimeString(&cl.CreatedAt),
		UpdatedAt:    utils.ToRFC3339DatetimeString(&cl.UpdatedAt),
		DeletedAt:    utils.ToRFC3339DatetimeString(&cl.DeletedAt.Time),
		Items:        results,
	}, nil
}

func (c *ClusterSvc) Delete(ctx context.Context, request *cluster.ClusterDeleteRequest) (*cluster.ClusterDeleteResponse, error) {
	var cl models.Cluster
	if err := app.DB().Transaction(func(db *gorm.DB) error {
		if err := db.Where("`id` = ?", request.ClusterId).First(&cl).Error; err != nil {
			return err
		}
		if err := db.Delete(&cl).Error; err != nil {
			return err
		}
		if err := db.Where("`cluster_id` = ?", cl.ID).Delete(&models.Card{}).Error; err != nil {
			return err
		}
		if err := app.App().ReleaseKubeClient(cl.Name); err != nil {
			xlog.Error(err)
		}

		return nil
	}); err != nil {
		return nil, err
	}
	AuditLog(MustGetUser(ctx).Name, event.ActionType_Create, fmt.Sprintf("delete cluster '%s' host: '%s'", cl.Name, cl.ClusterConfig().Host))

	return &cluster.ClusterDeleteResponse{}, nil
}
