// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: metrics/metrics.proto

package metrics

import (
	"bytes"
	"errors"
	"fmt"
	"net"
	"net/mail"
	"net/url"
	"regexp"
	"sort"
	"strings"
	"time"
	"unicode/utf8"

	"google.golang.org/protobuf/types/known/anypb"
)

// ensure the imports are used
var (
	_ = bytes.MinRead
	_ = errors.New("")
	_ = fmt.Print
	_ = utf8.UTFMax
	_ = (*regexp.Regexp)(nil)
	_ = (*strings.Reader)(nil)
	_ = net.IPv4len
	_ = time.Duration(0)
	_ = (*url.URL)(nil)
	_ = (*mail.Address)(nil)
	_ = anypb.Any{}
	_ = sort.Sort
)

// Validate checks the field values on MetricsTopPodRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *MetricsTopPodRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on MetricsTopPodRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// MetricsTopPodRequestMultiError, or nil if none found.
func (m *MetricsTopPodRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *MetricsTopPodRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if m.GetClusterId() <= 0 {
		err := MetricsTopPodRequestValidationError{
			field:  "ClusterId",
			reason: "value must be greater than 0",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(m.GetNamespace()) < 1 {
		err := MetricsTopPodRequestValidationError{
			field:  "Namespace",
			reason: "value length must be at least 1 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(m.GetPod()) < 1 {
		err := MetricsTopPodRequestValidationError{
			field:  "Pod",
			reason: "value length must be at least 1 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(errors) > 0 {
		return MetricsTopPodRequestMultiError(errors)
	}

	return nil
}

// MetricsTopPodRequestMultiError is an error wrapping multiple validation
// errors returned by MetricsTopPodRequest.ValidateAll() if the designated
// constraints aren't met.
type MetricsTopPodRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m MetricsTopPodRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m MetricsTopPodRequestMultiError) AllErrors() []error { return m }

// MetricsTopPodRequestValidationError is the validation error returned by
// MetricsTopPodRequest.Validate if the designated constraints aren't met.
type MetricsTopPodRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e MetricsTopPodRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e MetricsTopPodRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e MetricsTopPodRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e MetricsTopPodRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e MetricsTopPodRequestValidationError) ErrorName() string {
	return "MetricsTopPodRequestValidationError"
}

// Error satisfies the builtin error interface
func (e MetricsTopPodRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sMetricsTopPodRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = MetricsTopPodRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = MetricsTopPodRequestValidationError{}

// Validate checks the field values on MetricsTopPodResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *MetricsTopPodResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on MetricsTopPodResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// MetricsTopPodResponseMultiError, or nil if none found.
func (m *MetricsTopPodResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *MetricsTopPodResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Cpu

	// no validation rules for Memory

	// no validation rules for HumanizeCpu

	// no validation rules for HumanizeMemory

	// no validation rules for Time

	// no validation rules for Length

	if len(errors) > 0 {
		return MetricsTopPodResponseMultiError(errors)
	}

	return nil
}

// MetricsTopPodResponseMultiError is an error wrapping multiple validation
// errors returned by MetricsTopPodResponse.ValidateAll() if the designated
// constraints aren't met.
type MetricsTopPodResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m MetricsTopPodResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m MetricsTopPodResponseMultiError) AllErrors() []error { return m }

// MetricsTopPodResponseValidationError is the validation error returned by
// MetricsTopPodResponse.Validate if the designated constraints aren't met.
type MetricsTopPodResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e MetricsTopPodResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e MetricsTopPodResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e MetricsTopPodResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e MetricsTopPodResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e MetricsTopPodResponseValidationError) ErrorName() string {
	return "MetricsTopPodResponseValidationError"
}

// Error satisfies the builtin error interface
func (e MetricsTopPodResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sMetricsTopPodResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = MetricsTopPodResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = MetricsTopPodResponseValidationError{}
