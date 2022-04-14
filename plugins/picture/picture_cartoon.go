package picture

import (
	"context"
	"math/rand"
	"time"

	"github.com/duc-cnzj/execit/internal/plugins"
	"github.com/duc-cnzj/execit/internal/xlog"
)

var (
	nameCartoon          = "picture_cartoon"
	urls        []string = []string{
		"https://cloud.qqshabi.cn/api/images/api.php",
		// 以下全部防盗链
		//"http://api.btstu.cn/sjbz/?lx=suiji",
		//"http://api.btstu.cn/sjbz/?lx=dongman",
		//"https://acg.toubiec.cn/random.php",
		//"http://www.dmoe.cc/random.php",
		//"https://api.ixiaowai.cn/api/api.php",
	}
)

var _ plugins.PictureInterface = (*Cartoon)(nil)

func init() {
	rand.Seed(time.Now().UnixNano())
	p := &Cartoon{}
	plugins.RegisterPlugin(p.Name(), p)
}

type Cartoon struct{}

func (c *Cartoon) Get(ctx context.Context, random bool) (*plugins.Picture, error) {
	return &plugins.Picture{
		Url:       urls[rand.Intn(len(urls))],
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
