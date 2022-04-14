package utils

import (
	"time"
)

func ToRFC3339DatetimeString(t *time.Time) string {
	return t.Format(time.RFC3339)
}
