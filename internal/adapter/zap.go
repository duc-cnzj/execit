package adapter

import (
	"github.com/duc-cnzj/execit/internal/contracts"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
)

type ZapLogger struct {
	app   contracts.ApplicationInterface
	sugar *zap.SugaredLogger
}

func NewZapLogger(app contracts.ApplicationInterface) contracts.LoggerInterface {
	var (
		logger *zap.Logger
		cfg    zap.Config
	)

	opts := []zap.Option{zap.AddStacktrace(zapcore.ErrorLevel), zap.AddCallerSkip(2)}
	if app.IsDebug() {
		cfg = zap.NewDevelopmentConfig()
		cfg.EncoderConfig.EncodeLevel = zapcore.CapitalColorLevelEncoder
	} else {
		cfg = zap.NewProductionConfig()
	}
	cfg.EncoderConfig.TimeKey = "time"
	cfg.EncoderConfig.CallerKey = "file"
	cfg.EncoderConfig.EncodeTime = zapcore.TimeEncoderOfLayout("2006-01-02 15:04:05.000")
	logger, _ = cfg.Build(opts...)

	app.RegisterAfterShutdownFunc(func(app contracts.ApplicationInterface) {
		logger.Info("zap synchronized.")
		logger.Sync()
	})

	return &ZapLogger{app: app, sugar: logger.Sugar()}
}

func (z *ZapLogger) Debug(v ...any) {
	z.sugar.Debug(v...)
}

func (z *ZapLogger) Debugf(format string, v ...any) {
	z.sugar.Debugf(format, v...)
}

func (z *ZapLogger) Warning(v ...any) {
	z.sugar.Warn(v...)
}

func (z *ZapLogger) Warningf(format string, v ...any) {
	z.sugar.Warnf(format, v...)
}

func (z *ZapLogger) Info(v ...any) {
	z.sugar.Info(v...)
}

func (z *ZapLogger) Infof(format string, v ...any) {
	z.sugar.Infof(format, v...)
}

func (z *ZapLogger) Error(v ...any) {
	z.sugar.Error(v...)
}

func (z *ZapLogger) Errorf(format string, v ...any) {
	z.sugar.Errorf(format, v...)
}

func (z *ZapLogger) Fatal(v ...any) {
	z.sugar.Fatal(v...)
}

func (z *ZapLogger) Fatalf(format string, v ...any) {
	z.sugar.Fatalf(format, v...)
}
