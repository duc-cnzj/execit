package middlewares

import (
	"context"
	"net/http"

	trans "github.com/duc-cnzj/execit/internal/translator"
	grpc_middleware "github.com/grpc-ecosystem/go-grpc-middleware"
	"golang.org/x/text/language"
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
)

type i18nKey struct{}

func I18n(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if lang := r.Header.Get("Accept-Language"); lang != "" {
			tag, _ := language.MatchStrings(trans.Matcher, lang)
			base, _ := tag.Base()
			r = r.WithContext(context.WithValue(r.Context(), i18nKey{}, base.String()))
		} else {
			r = r.WithContext(context.WithValue(r.Context(), i18nKey{}, "en"))
		}

		h.ServeHTTP(w, r)
	})
}

func In18nUnaryClientInterceptor() grpc.UnaryClientInterceptor {
	return func(ctx context.Context, method string, req, reply any, cc *grpc.ClientConn, invoker grpc.UnaryInvoker, opts ...grpc.CallOption) error {
		var (
			md metadata.MD
			ok bool
		)
		md, ok = metadata.FromOutgoingContext(ctx)
		if ok {
			md.Set("lang", ctx.Value(i18nKey{}).(string))
		} else {
			md = metadata.New(map[string]string{
				"lang": ctx.Value(i18nKey{}).(string),
			})
		}
		outgoingContext := metadata.NewOutgoingContext(ctx, md)
		return invoker(outgoingContext, method, req, reply, cc)
	}
}

func I18nUnaryServerInterceptor() grpc.UnaryServerInterceptor {
	return func(ctx context.Context, req any, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (resp any, err error) {
		if incomingContext, ok := metadata.FromIncomingContext(ctx); ok {
			langs := incomingContext.Get("lang")
			if len(langs) > 0 {
				ctx = context.WithValue(ctx, i18nKey{}, langs[0])
			}
		} else {
			ctx = context.WithValue(ctx, i18nKey{}, "en")
		}

		return handler(ctx, req)
	}
}

func I18nStreamServerInterceptor() grpc.StreamServerInterceptor {
	return func(srv any, ss grpc.ServerStream, info *grpc.StreamServerInfo, handler grpc.StreamHandler) error {
		var newCtx context.Context
		if incomingContext, ok := metadata.FromIncomingContext(ss.Context()); ok {
			langs := incomingContext.Get("lang")
			if len(langs) > 0 {
				newCtx = context.WithValue(ss.Context(), i18nKey{}, langs[0])
			}
		} else {
			newCtx = context.WithValue(ss.Context(), i18nKey{}, "en")
		}
		wrapped := grpc_middleware.WrapServerStream(ss)
		wrapped.WrappedContext = newCtx
		return handler(srv, wrapped)
	}
}

func I18nStreamClientInterceptor() grpc.StreamClientInterceptor {
	return func(ctx context.Context, desc *grpc.StreamDesc, cc *grpc.ClientConn, method string, streamer grpc.Streamer, opts ...grpc.CallOption) (grpc.ClientStream, error) {
		var (
			md metadata.MD
			ok bool
		)
		md, ok = metadata.FromOutgoingContext(ctx)
		if ok {
			md.Set("lang", ctx.Value(i18nKey{}).(string))
		} else {
			md = metadata.New(map[string]string{
				"lang": ctx.Value(i18nKey{}).(string),
			})
		}
		ctx = metadata.NewOutgoingContext(ctx, md)
		return streamer(ctx, desc, cc, method)
	}
}

func MustGetLang(ctx context.Context) string {
	return ctx.Value(i18nKey{}).(string)
}
