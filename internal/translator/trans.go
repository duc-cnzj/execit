package trans

import (
	"encoding/json"
	"errors"
	"html/template"

	"github.com/duc-cnzj/execit/internal/translator/langs"
	"github.com/duc-cnzj/execit/internal/xlog"

	"github.com/nicksnyder/go-i18n/v2/i18n"
	"golang.org/x/text/language"
)

var (
	Booted bool
	bundle *i18n.Bundle

	zhLocalizer *i18n.Localizer
	enLocalizer *i18n.Localizer

	Matcher = language.NewMatcher([]language.Tag{
		language.Chinese,
		language.English,
	})
)

func Init() {
	bundle = i18n.NewBundle(language.Chinese)
	bundle.RegisterUnmarshalFunc("json", json.Unmarshal)
	bundle.MustParseMessageFileBytes(langs.ZH.Bytes(), "zh.json")
	bundle.MustParseMessageFileBytes(langs.EN.Bytes(), "en.json")

	zhLocalizer = i18n.NewLocalizer(bundle, "zh")
	enLocalizer = i18n.NewLocalizer(bundle, "en")
	Booted = true
}

func RTrans(key string, replace any, locale string) string {
	if !Booted {
		return key
	}

	localize, err := GetLocalizer(locale).
		Localize(&i18n.LocalizeConfig{
			DefaultMessage: &i18n.Message{
				ID:    key,
				Other: key,
			},
			TemplateData: replace,
		})
	if err != nil {
		xlog.Debug(err)
	}

	return localize
}

func RTransToHtml(key string, replace any, locale string) template.HTML {
	if !Booted {
		return template.HTML(key)
	}

	localize, err := GetLocalizer(locale).
		Localize(&i18n.LocalizeConfig{
			DefaultMessage: &i18n.Message{
				ID:    key,
				Other: key,
			},
			TemplateData: replace,
		})
	if err != nil {
		xlog.Debug(err)
	}

	return template.HTML(localize)
}

func GetLocalizer(locale string) *i18n.Localizer {
	switch locale {
	case "zh":
		return zhLocalizer
	case "en":
		return enLocalizer
	default:
		return zhLocalizer
	}
}

func T(key string, locale string) string {
	return RTrans(key, nil, locale)
}

func TError(err error, locale string) error {
	return errors.New(T(err.Error(), locale))
}

func RTError(err error, replace any, locale string) error {
	return errors.New(RTrans(err.Error(), replace, locale))
}

func TToError(key string, locale string) error {
	return errors.New(T(key, locale))
}

func RTToError(key string, replace any, locale string) error {
	return errors.New(RTrans(key, replace, locale))
}
