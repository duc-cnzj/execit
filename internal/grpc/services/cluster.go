package services

import (
	"context"
	"errors"
	"fmt"
	"sort"
	"time"

	"gorm.io/gorm"
	authorizationv1 "k8s.io/api/authorization/v1"
	"k8s.io/apimachinery/pkg/api/meta"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/labels"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes"
	restclient "k8s.io/client-go/rest"
	"k8s.io/client-go/tools/clientcmd"

	"github.com/duc-cnzj/execit-client/cluster"
	"github.com/duc-cnzj/execit-client/event"
	"github.com/duc-cnzj/execit-client/model"
	app "github.com/duc-cnzj/execit/internal/app/helper"
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/event/events"
	"github.com/duc-cnzj/execit/internal/models"
	"github.com/duc-cnzj/execit/internal/scopes"
	"github.com/duc-cnzj/execit/internal/utils/date"
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

func (c *ClusterSvc) List(ctx context.Context, request *cluster.ListRequest) (*cluster.ListResponse, error) {
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
			CreatedAt:    date.ToRFC3339DatetimeString(&m.CreatedAt),
			UpdatedAt:    date.ToRFC3339DatetimeString(&m.UpdatedAt),
			DeletedAt:    date.ToRFC3339DatetimeString(&m.DeletedAt.Time),
			Namespace:    m.Namespace,
		})
	}

	return &cluster.ListResponse{
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
		Verb:        "list",
		Group:       "",
		Resource:    "pods",
		Subresource: "",
	},
	{
		Verb:        "get",
		Group:       "",
		Resource:    "pods",
		Subresource: "log",
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
		Verb:        "list",
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
		Resource:    "statefulsets",
		Subresource: "",
	},
	{
		Verb:        "list",
		Group:       "apps",
		Resource:    "statefulsets",
		Subresource: "",
	},
	{
		Verb:        "watch",
		Group:       "apps",
		Resource:    "statefulsets",
		Subresource: "",
	},
}

func RunAccessCheck(cli kubernetes.Interface, namespace string) (bool, error) {
	for _, o := range checkList {
		sar := &authorizationv1.SelfSubjectAccessReview{
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

func (c *ClusterSvc) Create(ctx context.Context, request *cluster.CreateRequest) (*cluster.CreateResponse, error) {
	if app.DB().Where("`name` = ?", request.Name).First(&models.Cluster{}).Error == nil {
		return nil, status.Errorf(codes.AlreadyExists, "cluster name '%s' already exists", request.Name)
	}

	if err, ok := checkKubeConfigAccess(request.KubeConfig, request.Namespace); !ok {
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

	return &cluster.CreateResponse{
		Id:        int64(clm.ID),
		Name:      clm.Name,
		CreatedAt: date.ToRFC3339DatetimeString(&clm.CreatedAt),
		UpdatedAt: date.ToRFC3339DatetimeString(&clm.UpdatedAt),
		DeletedAt: date.ToRFC3339DatetimeString(&clm.DeletedAt.Time),
	}, nil
}

func checkKubeConfigAccess(config string, namespace string) (error, bool) {
	var (
		cc         clientcmd.ClientConfig
		err        error
		restConfig *restclient.Config
		validOk    bool
		client     *kubernetes.Clientset
	)
	cc, err = clientcmd.NewClientConfigFromBytes([]byte(config))
	if err == nil {
		restConfig, err = cc.ClientConfig()
		if err == nil {
			restConfig.Timeout = 10 * time.Second
			client, err = kubernetes.NewForConfig(restConfig)
			if err == nil {
				validOk, err = RunAccessCheck(client, namespace)
			}
		}
	}

	return err, validOk
}

func (c *ClusterSvc) Update(ctx context.Context, req *cluster.UpdateRequest) (*cluster.UpdateResponse, error) {
	var cl models.Cluster
	if err := app.DB().First(&cl, req.Id).Error; err != nil {
		return nil, status.Errorf(codes.NotFound, "cluster id: '%d' not exists", req.Id)
	}
	if err, ok := checkKubeConfigAccess(req.KubeConfig, req.Namespace); !ok {
		return nil, err
	}
	var newCl = cl
	app.DB().Model(&newCl).Updates(map[string]any{
		"namespace":   req.GetNamespace(),
		"kube_config": req.GetKubeConfig(),
	})

	app.App().ReleaseKubeClient(cl.Name)
	events.AuditLog(MustGetUser(ctx).Name, event.ActionType_Update, fmt.Sprintf("update cluster '%s' host: '%s'", cl.Name, cl.ClusterConfig().Host), cl, newCl)

	return &cluster.UpdateResponse{}, nil
}

type sortClusterItemsList []*cluster.Items

func (s sortClusterItemsList) Len() int {
	return len(s)
}

func (s sortClusterItemsList) Less(i, j int) bool {
	return s[i].Namespace < s[j].Namespace
}

func (s sortClusterItemsList) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

type sortClusterItems []*cluster.Item

func (s sortClusterItems) Len() int {
	return len(s)
}

func (s sortClusterItems) Less(i, j int) bool {
	return s[i].Name < s[j].Name
}

func (s sortClusterItems) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

func (c *ClusterSvc) Show(ctx context.Context, request *cluster.ShowRequest) (*cluster.ShowResponse, error) {
	var cl models.Cluster
	if err := app.DB().Where("`id` = ?", request.ClusterId).First(&cl).Error; err != nil {
		return nil, status.Errorf(codes.NotFound, "clusterID: %d", request.ClusterId)
	}
	var cards []*models.Card
	var existsMap = make(map[string]*models.Card)
	app.DB().Find(&cards)
	for _, card := range cards {
		existsMap[keyFn(card.ClusterID, card.Namespace, card.Name, card.Type)] = card
	}

	client, err := app.App().LoadKubeClient(cl.Name, []byte(cl.KubeConfig), cl.Namespace)
	if err != nil {
		return nil, err
	}
	list, _ := client.DeploymentLister().List(labels.Everything())
	var items = make(map[string]*cluster.Items)
	objToItems(cl, "Deployment", existsMap, list, items)
	statefulList, _ := client.StatefulSetLister().List(labels.Everything())
	objToItems(cl, "StatefulSet", existsMap, statefulList, items)
	jobList, _ := client.JobLister().List(labels.Everything())
	objToItems(cl, "Job", existsMap, jobList, items)
	var result = make([]*cluster.Items, 0)

	for k, clusterItems := range items {
		var ss = sortClusterItems(clusterItems.Items)
		sort.Sort(ss)
		result = append(result, &cluster.Items{
			Namespace: k,
			Items:     ss,
		})
	}
	results := sortClusterItemsList(result)
	sort.Sort(&results)

	return &cluster.ShowResponse{
		Id:           int64(cl.ID),
		Name:         cl.Name,
		ApiServerUrl: cl.ClusterConfig().Host,
		CreatedAt:    date.ToRFC3339DatetimeString(&cl.CreatedAt),
		UpdatedAt:    date.ToRFC3339DatetimeString(&cl.UpdatedAt),
		DeletedAt:    date.ToRFC3339DatetimeString(&cl.DeletedAt.Time),
		Items:        results,
	}, nil
}

func (c *ClusterSvc) Delete(ctx context.Context, request *cluster.DeleteRequest) (*cluster.DeleteResponse, error) {
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
	AuditLog(MustGetUser(ctx).Name, event.ActionType_Delete, fmt.Sprintf("delete cluster '%s' host: '%s'", cl.Name, cl.ClusterConfig().Host))

	return &cluster.DeleteResponse{}, nil
}

func (c *ClusterSvc) Authorize(ctx context.Context, fullMethodName string) (context.Context, error) {
	if !MustGetUser(ctx).IsAdmin() {
		return nil, status.Error(codes.PermissionDenied, ErrorPermissionDenied.Error())
	}

	return ctx, nil
}
func keyFn(clusterID int, namespace, name, t string) string {
	return fmt.Sprintf("c:%d-ns:%s-name:%s-type:%s", clusterID, namespace, name, t)
}
func objToItems[T runtime.Object](cl models.Cluster, kind string, existsMap map[string]*models.Card, objs []T, items map[string]*cluster.Items) {
	for _, s := range objs {
		var cardID int64

		state, _ := meta.Accessor(s)
		card, exists := existsMap[keyFn(cl.ID, state.GetNamespace(), state.GetName(), kind)]
		if exists {
			cardID = int64(card.ID)
		}

		if responseItems, ok := items[state.GetNamespace()]; ok {
			items[state.GetNamespace()] = &cluster.Items{
				Items: append(responseItems.Items, &cluster.Item{
					Namespace: state.GetNamespace(),
					Type:      kind,
					Name:      state.GetName(),
					Enabled:   exists,
					ClusterId: int64(cl.ID),
					CardId:    cardID,
				}),
			}
		} else {
			items[state.GetNamespace()] = &cluster.Items{
				Items: []*cluster.Item{
					{
						Namespace: state.GetNamespace(),
						Type:      kind,
						Name:      state.GetName(),
						Enabled:   exists,
						ClusterId: int64(cl.ID),
						CardId:    cardID,
					},
				},
			}
		}
	}
}
