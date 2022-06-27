package picture

import (
	"context"
	"math/rand"
	"net/http"
	"time"

	"github.com/duc-cnzj/execit/internal/plugins"
	"github.com/duc-cnzj/execit/internal/xlog"
)

var (
	nameCartoon          = "picture_cartoon"
	urls        []string = []string{
		"https://api.btstu.cn/sjbz/?lx=dongman",
		"https://www.dmoe.cc/random.php",
		"https://api.ixiaowai.cn/api/api.php",
	}
)

var _ plugins.PictureInterface = (*Cartoon)(nil)

func init() {
	rand.Seed(time.Now().UnixNano())
	p := &Cartoon{}
	plugins.RegisterPlugin(p.Name(), p)
}

type Cartoon struct{}

var client = http.Client{
	CheckRedirect: func(req *http.Request, via []*http.Request) error {
		return http.ErrUseLastResponse
	},
}

func (c *Cartoon) Get(ctx context.Context, random bool) (*plugins.Picture, error) {
	weburl := urls[rand.Intn(len(urls))]
	response, err := client.Get(weburl)
	if err != nil {
		return nil, err
	}
	defer response.Body.Close()
	xlog.Debugf("[Picture]: request %s", weburl)

	return &plugins.Picture{
		Url:       response.Header.Get("Location"),
		Copyright: "",
	}, nil
}

func (c *Cartoon) Name() string {
	return nameCartoon
}

func (c *Cartoon) Initialize(args map[string]any) error {
	xlog.Info("[Plugin]: " + c.Name() + " plugin Initialize...")
	return nil
}

func (c *Cartoon) Destroy() error {
	xlog.Info("[Plugin]: " + c.Name() + " plugin Destroy...")
	return nil
}
