package client

import (
	"context"
	"crypto/tls"
	"io"
	"strings"
	"sync/atomic"

	"github.com/duc-cnzj/execit-client/auth"
	"github.com/duc-cnzj/execit-client/card"
	"github.com/duc-cnzj/execit-client/cluster"
	"github.com/duc-cnzj/execit-client/container"
	"github.com/duc-cnzj/execit-client/event"
	"github.com/duc-cnzj/execit-client/file"
	"github.com/duc-cnzj/execit-client/metrics"
	"github.com/duc-cnzj/execit-client/picture"
	"github.com/duc-cnzj/execit-client/version"

	"github.com/cenkalti/backoff/v4"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
)

type Interface interface {
	io.Closer
	SetBearerToken(string)

	Auth() auth.AuthClient
	Picture() picture.PictureClient
	Version() version.VersionClient
	Event() event.EventClient

	Container() container.ContainerSvcClient
	File() file.FileSvcClient
	Metrics() metrics.MetricsClient
	Cluster() cluster.ClusterSvcClient
	Card() card.CardSvcClient
}

type Client struct {
	singleflight Group

	UnaryClientInterceptors  []grpc.UnaryClientInterceptor
	StreamClientInterceptors []grpc.StreamClientInterceptor
	username, password       string
	authTokenValue           atomic.Value

	tls *tls.Config

	conn        *grpc.ClientConn
	dialOptions []grpc.DialOption

	auth      auth.AuthClient
	container container.ContainerSvcClient
	event     event.EventClient
	metrics   metrics.MetricsClient
	picture   picture.PictureClient
	version   version.VersionClient
	file      file.FileSvcClient
	cluster   cluster.ClusterSvcClient
	card      card.CardSvcClient
}

func NewClient(addr string, opts ...Option) (Interface, error) {
	c := &Client{}

	for _, opt := range opts {
		opt(c)
	}

	dial, err := grpc.Dial(addr, c.buildDialOptions()...)

	if err != nil {
		return nil, err
	}
	c.conn = dial

	c.auth = auth.NewAuthClient(dial)
	c.container = container.NewContainerSvcClient(dial)
	c.event = event.NewEventClient(dial)
	c.metrics = metrics.NewMetricsClient(dial)
	c.picture = picture.NewPictureClient(dial)
	c.version = version.NewVersionClient(dial)
	c.file = file.NewFileSvcClient(dial)
	c.cluster = cluster.NewClusterSvcClient(dial)
	c.card = card.NewCardSvcClient(dial)

	if c.password != "" || c.username != "" {
		if err := c.getToken(); err != nil {
			return nil, err
		}
	}

	return c, nil
}

func (c *Client) SetBearerToken(token string) {
	c.setToken(token)
}

func (c *Client) hasCredentials() bool {
	return c.username != "" && c.password != ""
}

func (c *Client) Close() error {
	if c.conn != nil {
		return c.conn.Close()
	}

	return nil
}

func (c *Client) Auth() auth.AuthClient {
	return c.auth
}

func (c *Client) Container() container.ContainerSvcClient {
	return c.container
}

func (c *Client) Event() event.EventClient {
	return c.event
}

func (c *Client) File() file.FileSvcClient {
	return c.file
}

func (c *Client) Metrics() metrics.MetricsClient {
	return c.metrics
}

func (c *Client) Picture() picture.PictureClient {
	return c.picture
}

func (c *Client) Cluster() cluster.ClusterSvcClient {
	return c.cluster
}

func (c *Client) Card() card.CardSvcClient {
	return c.card
}

func (c *Client) Version() version.VersionClient {
	return c.version
}

func (c *Client) authToken() string {
	v := c.authTokenValue.Load()
	if v != nil {
		return v.(string)
	}
	return ""
}

func (c *Client) buildDialOptions() []grpc.DialOption {
	if c.tls == nil {
		c.dialOptions = append(c.dialOptions, grpc.WithTransportCredentials(insecure.NewCredentials()))
	}
	if !c.hasCredentials() && c.authTokenValue.Load() == nil {
		c.dialOptions = append(c.dialOptions, grpc.WithPerRPCCredentials(&clientauth{c: c}))
	}

	c.dialOptions = append(c.dialOptions, grpc.WithChainUnaryInterceptor(c.UnaryClientInterceptors...))
	c.dialOptions = append(c.dialOptions, grpc.WithChainStreamInterceptor(c.StreamClientInterceptors...))

	return c.dialOptions
}

func (c *Client) getToken() error {
	login, err, _ := c.singleflight.Do("Retry", func() (interface{}, error) {
		return c.auth.Login(context.TODO(), &auth.LoginRequest{
			Username: c.username,
			Password: c.password,
		})
	})
	if err != nil {
		return err
	}

	c.setToken(login.(*auth.LoginResponse).Token)
	return nil
}

func (c *Client) setToken(token string) {
	if len(token) > 6 && !strings.EqualFold("Bearer", token[0:6]) {
		token = "Bearer " + token
	}
	c.authTokenValue.Store(token)
}

type Option func(*Client)

type clientauth struct {
	c *Client
}

func (a *clientauth) GetRequestMetadata(ctx context.Context, uri ...string) (map[string]string, error) {
	return map[string]string{
		"Authorization": a.c.authToken(),
	}, nil
}

func (a *clientauth) RequireTransportSecurity() bool {
	return false
}

func WithAuth(username, password string) Option {
	return func(c *Client) {
		c.username = username
		c.password = password
		c.dialOptions = append(c.dialOptions, grpc.WithPerRPCCredentials(&clientauth{c: c}))
	}
}

func WithBearerToken(token string) Option {
	return func(c *Client) {
		c.setToken(token)
		c.dialOptions = append(c.dialOptions, grpc.WithPerRPCCredentials(&clientauth{c: c}))
	}
}

// WithTokenAutoRefresh
// TODO c.StreamClientInterceptors 有点难搞，好在目前没用到，之后用到了需要搞一下
func WithTokenAutoRefresh() Option {
	return func(c *Client) {
		c.UnaryClientInterceptors = append(c.UnaryClientInterceptors,
			func(
				ctx context.Context,
				method string,
				req, reply interface{},
				cc *grpc.ClientConn,
				invoker grpc.UnaryInvoker,
				opts ...grpc.CallOption) error {
				err := invoker(ctx, method, req, reply, cc, opts...)
				operation := func() error {
					if gerr := c.getToken(); gerr != nil {
						return gerr
					}
					return invoker(ctx, method, req, reply, cc, opts...)
				}
				var bf backoff.BackOff = backoff.WithContext(backoff.NewExponentialBackOff(), ctx)
				bf = backoff.WithMaxRetries(bf, 5)

				if c.hasCredentials() && status.Code(err) == codes.Unauthenticated && method != "/Auth/Login" {
					return backoff.Retry(operation, bf)
				}
				return err
			})
	}
}

// WithTransportCredentials 暂时不支持
//func WithTransportCredentials(tls *tls.Config) Option {
//	return func(c *Client) {
//		c.tls = tls
//		c.dialOptions = append(c.dialOptions, grpc.WithTransportCredentials(credentials.NewTLS(tls)))
//	}
//}

func WithUnaryClientInterceptor(op grpc.UnaryClientInterceptor) Option {
	return func(c *Client) {
		c.UnaryClientInterceptors = append(c.UnaryClientInterceptors, op)
	}
}

func WithStreamClientInterceptor(op grpc.StreamClientInterceptor) Option {
	return func(c *Client) {
		c.StreamClientInterceptors = append(c.StreamClientInterceptors, op)
	}
}
