package adapter

import (
	"fmt"
	"os"
	"runtime"

	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/sirupsen/logrus"
)

type LogrusLogger struct {
	app    contracts.ApplicationInterface
	logrus *logrus.Logger
}

func NewLogrusLogger(app contracts.ApplicationInterface) contracts.LoggerInterface {
	logger := logrus.New()

	logger.SetOutput(os.Stdout)
	logger.SetFormatter(&logrus.TextFormatter{
		FullTimestamp:   true,
		TimestampFormat: "2006/01/02 15:04:05",
	})

	if app.IsDebug() {
		logger.SetLevel(logrus.DebugLevel)
	} else {
		logger.SetFormatter(&logrus.JSONFormatter{})
		logger.SetLevel(logrus.InfoLevel)
	}

	return &LogrusLogger{
		app:    app,
		logrus: logger,
	}
}

func (z *LogrusLogger) Debug(v ...any) {
	z.logrus.WithField(callerField()).Debug(v...)
}

func (z *LogrusLogger) Debugf(format string, v ...any) {
	z.logrus.WithField(callerField()).Debugf(format, v...)
}

func (z *LogrusLogger) Warning(v ...any) {
	z.logrus.WithField(callerField()).Warn(v...)
}

func (z *LogrusLogger) Warningf(format string, v ...any) {
	z.logrus.WithField(callerField()).Warnf(format, v...)
}

func (z *LogrusLogger) Info(v ...any) {
	z.logrus.WithField(callerField()).Info(v...)
}

func (z *LogrusLogger) Infof(format string, v ...any) {
	z.logrus.WithField(callerField()).Infof(format, v...)
}

func (z *LogrusLogger) Error(v ...any) {
	z.logrus.WithField(callerField()).Error(v...)
}

func (z *LogrusLogger) Errorf(format string, v ...any) {
	z.logrus.WithField(callerField()).Errorf(format, v...)
}

func (z *LogrusLogger) Fatal(v ...any) {
	z.logrus.WithField(callerField()).Fatal(v...)
}

func (z *LogrusLogger) Fatalf(format string, v ...any) {
	z.logrus.WithField(callerField()).Fatalf(format, v...)
}

func callerField() (string, string) {
	pc, _, _, _ := runtime.Caller(3)
	file, line := runtime.FuncForPC(pc).FileLine(pc)

	return "file", fmt.Sprintf("%s:%d.", file, line)
}
