package picture

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"math/rand"
	"net/http"
	"strings"
	"sync"
	"time"

	"github.com/duc-cnzj/execit/internal/plugins"
	"github.com/duc-cnzj/execit/internal/xlog"
)

var (
	url      = "https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=%d&mkt=zh-CN"
	bingname = "picture_bing"
)

var _ plugins.PictureInterface = (*Bing)(nil)

func init() {
	rand.Seed(time.Now().UnixNano())

	p := &Bing{}
	plugins.RegisterPlugin(p.Name(), p)
}

type Item struct {
	Startdate     string `json:"startdate"`
	Fullstartdate string `json:"fullstartdate"`
	Enddate       string `json:"enddate"`
	URL           string `json:"url"`
	Urlbase       string `json:"urlbase"`
	Copyright     string `json:"copyright"`
	Copyrightlink string `json:"copyrightlink"`
	Title         string `json:"title"`
	Quiz          string `json:"quiz"`
	Wp            bool   `json:"wp"`
	Hsh           string `json:"hsh"`
	Drk           int    `json:"drk"`
	Top           int    `json:"top"`
	Bot           int    `json:"bot"`
	Hs            []any  `json:"hs"`
}

type Res struct {
	Images []Item `json:"images"`
}

type Bing struct {
	sync.RWMutex
	cacheItems []Item
	cacheDay   string
}

func (b *Bing) Name() string {
	return bingname
}

func (b *Bing) Initialize(args map[string]any) error {
	xlog.Info("[Plugin]: " + b.Name() + " plugin Initialize...")
	return nil
}

func (b *Bing) Destroy() error {
	xlog.Info("[Plugin]: " + b.Name() + " plugin Destroy...")
	return nil
}

func (b *Bing) Get(ctx context.Context, random bool) (*plugins.Picture, error) {
	key, n := 0, 8
	if random {
		key = rand.Intn(n - 1)
	}
	var res []Item
	day := time.Now().Format("2006-01-02")

	func() {
		b.RLock()
		defer b.RUnlock()
		if len(b.cacheItems) > 0 && b.cacheDay == day {
			xlog.Debug("use cache")
			res = b.cacheItems
		}
	}()

	if res == nil {
		b.Lock()
		defer b.Unlock()
		get, err := http.Get(fmt.Sprintf(url, n))
		if err != nil {
			return nil, err
		}
		defer get.Body.Close()
		var response Res
		all, _ := io.ReadAll(get.Body)
		err = json.Unmarshal(all, &response)
		if err != nil {
			return nil, err
		}
		res = response.Images
		b.cacheItems = response.Images
		b.cacheDay = day
	}

	return &plugins.Picture{
		Url:       "https://cn.bing.com/" + strings.TrimLeft(res[key].URL, "/"),
		Copyright: res[key].Copyright[:strings.Index(res[key].Copyright, "(©")],
	}, nil
}
