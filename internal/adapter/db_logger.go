package adapter

import (
	"context"
	"errors"
	"fmt"
	"time"

	"gorm.io/gorm/utils"

	"github.com/duc-cnzj/execit/internal/xlog"

	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

type GormLoggerAdapter struct {
	level logger.LogLevel
}

func (g *GormLoggerAdapter) LogMode(level logger.LogLevel) logger.Interface {
	g.level = level

	return g
}

func (g *GormLoggerAdapter) Info(ctx context.Context, s string, i ...any) {
	if g.level >= logger.Info {
		xlog.Infof(s, i...)
	}
}

func (g *GormLoggerAdapter) Warn(ctx context.Context, s string, i ...any) {
	if g.level >= logger.Warn {
		xlog.Warningf(s, i...)
	}
}

func (g *GormLoggerAdapter) Error(ctx context.Context, s string, i ...any) {
	if g.level >= logger.Error {
		xlog.Errorf(s, i...)
	}
}

func (g *GormLoggerAdapter) Trace(ctx context.Context, begin time.Time, fc func() (string, int64), err error) {
	const (
		traceStr      = "[SQL]: [%.3fms] [rows:%v] %s %s"
		traceWarnStr  = "[SQL]: %s [%.3fms] [rows:%v] %s %s"
		traceErrStr   = "[SQL]: %s [%.3fms] [rows:%v] %s %s"
		slowThreshold = 200 * time.Millisecond
	)
	if g.level > logger.Silent {
		elapsed := time.Since(begin)
		switch {
		case err != nil && g.level >= logger.Error:
			if errors.Is(err, gorm.ErrRecordNotFound) {
				sql, rows := fc()
				if rows == -1 {
					xlog.Debugf(traceErrStr, err, float64(elapsed.Nanoseconds())/1e6, "-", sql, utils.FileWithLineNum())
				} else {
					xlog.Debugf(traceErrStr, err, float64(elapsed.Nanoseconds())/1e6, rows, sql, utils.FileWithLineNum())
				}
				return
			}
			sql, rows := fc()
			if rows == -1 {
				xlog.Errorf(traceErrStr, err, float64(elapsed.Nanoseconds())/1e6, "-", sql, utils.FileWithLineNum())
			} else {
				xlog.Errorf(traceErrStr, err, float64(elapsed.Nanoseconds())/1e6, rows, sql, utils.FileWithLineNum())
			}
		case elapsed > slowThreshold && g.level >= logger.Warn:
			sql, rows := fc()
			slowLog := fmt.Sprintf("(SLOW SQL) >= %v", slowThreshold)
			if rows == -1 {
				xlog.Warningf(traceWarnStr, slowLog, float64(elapsed.Nanoseconds())/1e6, "-", sql, utils.FileWithLineNum())
			} else {
				xlog.Warningf(traceWarnStr, slowLog, float64(elapsed.Nanoseconds())/1e6, rows, sql, utils.FileWithLineNum())
			}
		case g.level == logger.Info:
			sql, rows := fc()
			if rows == -1 {
				xlog.Infof(traceStr, float64(elapsed.Nanoseconds())/1e6, "-", sql, utils.FileWithLineNum())
			} else {
				xlog.Infof(traceStr, float64(elapsed.Nanoseconds())/1e6, rows, sql, utils.FileWithLineNum())
			}
		}
	}
}
