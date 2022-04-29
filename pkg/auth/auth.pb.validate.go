// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: auth/auth.proto

package auth

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

	rbac "github.com/duc-cnzj/execit-client/rbac"
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

	_ = rbac.Permission(0)
)

// Validate checks the field values on LoginRequest with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *LoginRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on LoginRequest with the rules defined
// in the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in LoginRequestMultiError, or
// nil if none found.
func (m *LoginRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *LoginRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if len(m.GetUsername()) < 1 {
		err := LoginRequestValidationError{
			field:  "Username",
			reason: "value length must be at least 1 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(m.GetPassword()) < 1 {
		err := LoginRequestValidationError{
			field:  "Password",
			reason: "value length must be at least 1 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(errors) > 0 {
		return LoginRequestMultiError(errors)
	}

	return nil
}

// LoginRequestMultiError is an error wrapping multiple validation errors
// returned by LoginRequest.ValidateAll() if the designated constraints aren't met.
type LoginRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m LoginRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m LoginRequestMultiError) AllErrors() []error { return m }

// LoginRequestValidationError is the validation error returned by
// LoginRequest.Validate if the designated constraints aren't met.
type LoginRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e LoginRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e LoginRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e LoginRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e LoginRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e LoginRequestValidationError) ErrorName() string { return "LoginRequestValidationError" }

// Error satisfies the builtin error interface
func (e LoginRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sLoginRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = LoginRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = LoginRequestValidationError{}

// Validate checks the field values on LoginResponse with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *LoginResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on LoginResponse with the rules defined
// in the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in LoginResponseMultiError, or
// nil if none found.
func (m *LoginResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *LoginResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Token

	// no validation rules for ExpiresIn

	if len(errors) > 0 {
		return LoginResponseMultiError(errors)
	}

	return nil
}

// LoginResponseMultiError is an error wrapping multiple validation errors
// returned by LoginResponse.ValidateAll() if the designated constraints
// aren't met.
type LoginResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m LoginResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m LoginResponseMultiError) AllErrors() []error { return m }

// LoginResponseValidationError is the validation error returned by
// LoginResponse.Validate if the designated constraints aren't met.
type LoginResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e LoginResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e LoginResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e LoginResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e LoginResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e LoginResponseValidationError) ErrorName() string { return "LoginResponseValidationError" }

// Error satisfies the builtin error interface
func (e LoginResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sLoginResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = LoginResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = LoginResponseValidationError{}

// Validate checks the field values on ExchangeRequest with the rules defined
// in the proto definition for this message. If any rules are violated, the
// first error encountered is returned, or nil if there are no violations.
func (m *ExchangeRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on ExchangeRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// ExchangeRequestMultiError, or nil if none found.
func (m *ExchangeRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *ExchangeRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if len(m.GetCode()) < 1 {
		err := ExchangeRequestValidationError{
			field:  "Code",
			reason: "value length must be at least 1 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(errors) > 0 {
		return ExchangeRequestMultiError(errors)
	}

	return nil
}

// ExchangeRequestMultiError is an error wrapping multiple validation errors
// returned by ExchangeRequest.ValidateAll() if the designated constraints
// aren't met.
type ExchangeRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m ExchangeRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m ExchangeRequestMultiError) AllErrors() []error { return m }

// ExchangeRequestValidationError is the validation error returned by
// ExchangeRequest.Validate if the designated constraints aren't met.
type ExchangeRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ExchangeRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ExchangeRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ExchangeRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ExchangeRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ExchangeRequestValidationError) ErrorName() string { return "ExchangeRequestValidationError" }

// Error satisfies the builtin error interface
func (e ExchangeRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sExchangeRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ExchangeRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ExchangeRequestValidationError{}

// Validate checks the field values on ExchangeResponse with the rules defined
// in the proto definition for this message. If any rules are violated, the
// first error encountered is returned, or nil if there are no violations.
func (m *ExchangeResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on ExchangeResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// ExchangeResponseMultiError, or nil if none found.
func (m *ExchangeResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *ExchangeResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Token

	// no validation rules for ExpiresIn

	if len(errors) > 0 {
		return ExchangeResponseMultiError(errors)
	}

	return nil
}

// ExchangeResponseMultiError is an error wrapping multiple validation errors
// returned by ExchangeResponse.ValidateAll() if the designated constraints
// aren't met.
type ExchangeResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m ExchangeResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m ExchangeResponseMultiError) AllErrors() []error { return m }

// ExchangeResponseValidationError is the validation error returned by
// ExchangeResponse.Validate if the designated constraints aren't met.
type ExchangeResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ExchangeResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ExchangeResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ExchangeResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ExchangeResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ExchangeResponseValidationError) ErrorName() string { return "ExchangeResponseValidationError" }

// Error satisfies the builtin error interface
func (e ExchangeResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sExchangeResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ExchangeResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ExchangeResponseValidationError{}

// Validate checks the field values on InfoRequest with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *InfoRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on InfoRequest with the rules defined in
// the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in InfoRequestMultiError, or
// nil if none found.
func (m *InfoRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *InfoRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if len(errors) > 0 {
		return InfoRequestMultiError(errors)
	}

	return nil
}

// InfoRequestMultiError is an error wrapping multiple validation errors
// returned by InfoRequest.ValidateAll() if the designated constraints aren't met.
type InfoRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m InfoRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m InfoRequestMultiError) AllErrors() []error { return m }

// InfoRequestValidationError is the validation error returned by
// InfoRequest.Validate if the designated constraints aren't met.
type InfoRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e InfoRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e InfoRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e InfoRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e InfoRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e InfoRequestValidationError) ErrorName() string { return "InfoRequestValidationError" }

// Error satisfies the builtin error interface
func (e InfoRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sInfoRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = InfoRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = InfoRequestValidationError{}

// Validate checks the field values on Permission with the rules defined in the
// proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *Permission) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Permission with the rules defined in
// the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in PermissionMultiError, or
// nil if none found.
func (m *Permission) ValidateAll() error {
	return m.validate(true)
}

func (m *Permission) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Permission

	if len(errors) > 0 {
		return PermissionMultiError(errors)
	}

	return nil
}

// PermissionMultiError is an error wrapping multiple validation errors
// returned by Permission.ValidateAll() if the designated constraints aren't met.
type PermissionMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m PermissionMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m PermissionMultiError) AllErrors() []error { return m }

// PermissionValidationError is the validation error returned by
// Permission.Validate if the designated constraints aren't met.
type PermissionValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e PermissionValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e PermissionValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e PermissionValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e PermissionValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e PermissionValidationError) ErrorName() string { return "PermissionValidationError" }

// Error satisfies the builtin error interface
func (e PermissionValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sPermission.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = PermissionValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = PermissionValidationError{}

// Validate checks the field values on InfoResponse with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *InfoResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on InfoResponse with the rules defined
// in the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in InfoResponseMultiError, or
// nil if none found.
func (m *InfoResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *InfoResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Id

	// no validation rules for Avatar

	// no validation rules for Name

	// no validation rules for Email

	// no validation rules for LogoutUrl

	// no validation rules for IsAdmin

	for idx, item := range m.GetPermissions() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, InfoResponseValidationError{
						field:  fmt.Sprintf("Permissions[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, InfoResponseValidationError{
						field:  fmt.Sprintf("Permissions[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return InfoResponseValidationError{
					field:  fmt.Sprintf("Permissions[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if len(errors) > 0 {
		return InfoResponseMultiError(errors)
	}

	return nil
}

// InfoResponseMultiError is an error wrapping multiple validation errors
// returned by InfoResponse.ValidateAll() if the designated constraints aren't met.
type InfoResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m InfoResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m InfoResponseMultiError) AllErrors() []error { return m }

// InfoResponseValidationError is the validation error returned by
// InfoResponse.Validate if the designated constraints aren't met.
type InfoResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e InfoResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e InfoResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e InfoResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e InfoResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e InfoResponseValidationError) ErrorName() string { return "InfoResponseValidationError" }

// Error satisfies the builtin error interface
func (e InfoResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sInfoResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = InfoResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = InfoResponseValidationError{}

// Validate checks the field values on SettingsRequest with the rules defined
// in the proto definition for this message. If any rules are violated, the
// first error encountered is returned, or nil if there are no violations.
func (m *SettingsRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on SettingsRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// SettingsRequestMultiError, or nil if none found.
func (m *SettingsRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *SettingsRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if len(errors) > 0 {
		return SettingsRequestMultiError(errors)
	}

	return nil
}

// SettingsRequestMultiError is an error wrapping multiple validation errors
// returned by SettingsRequest.ValidateAll() if the designated constraints
// aren't met.
type SettingsRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m SettingsRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m SettingsRequestMultiError) AllErrors() []error { return m }

// SettingsRequestValidationError is the validation error returned by
// SettingsRequest.Validate if the designated constraints aren't met.
type SettingsRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e SettingsRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e SettingsRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e SettingsRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e SettingsRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e SettingsRequestValidationError) ErrorName() string { return "SettingsRequestValidationError" }

// Error satisfies the builtin error interface
func (e SettingsRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sSettingsRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = SettingsRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = SettingsRequestValidationError{}

// Validate checks the field values on SettingsResponse with the rules defined
// in the proto definition for this message. If any rules are violated, the
// first error encountered is returned, or nil if there are no violations.
func (m *SettingsResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on SettingsResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// SettingsResponseMultiError, or nil if none found.
func (m *SettingsResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *SettingsResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	for idx, item := range m.GetItems() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, SettingsResponseValidationError{
						field:  fmt.Sprintf("Items[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, SettingsResponseValidationError{
						field:  fmt.Sprintf("Items[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return SettingsResponseValidationError{
					field:  fmt.Sprintf("Items[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if len(errors) > 0 {
		return SettingsResponseMultiError(errors)
	}

	return nil
}

// SettingsResponseMultiError is an error wrapping multiple validation errors
// returned by SettingsResponse.ValidateAll() if the designated constraints
// aren't met.
type SettingsResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m SettingsResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m SettingsResponseMultiError) AllErrors() []error { return m }

// SettingsResponseValidationError is the validation error returned by
// SettingsResponse.Validate if the designated constraints aren't met.
type SettingsResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e SettingsResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e SettingsResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e SettingsResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e SettingsResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e SettingsResponseValidationError) ErrorName() string { return "SettingsResponseValidationError" }

// Error satisfies the builtin error interface
func (e SettingsResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sSettingsResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = SettingsResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = SettingsResponseValidationError{}

// Validate checks the field values on SettingsResponse_OidcSetting with the
// rules defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *SettingsResponse_OidcSetting) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on SettingsResponse_OidcSetting with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// SettingsResponse_OidcSettingMultiError, or nil if none found.
func (m *SettingsResponse_OidcSetting) ValidateAll() error {
	return m.validate(true)
}

func (m *SettingsResponse_OidcSetting) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Enabled

	// no validation rules for Name

	// no validation rules for Url

	// no validation rules for EndSessionEndpoint

	// no validation rules for State

	if len(errors) > 0 {
		return SettingsResponse_OidcSettingMultiError(errors)
	}

	return nil
}

// SettingsResponse_OidcSettingMultiError is an error wrapping multiple
// validation errors returned by SettingsResponse_OidcSetting.ValidateAll() if
// the designated constraints aren't met.
type SettingsResponse_OidcSettingMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m SettingsResponse_OidcSettingMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m SettingsResponse_OidcSettingMultiError) AllErrors() []error { return m }

// SettingsResponse_OidcSettingValidationError is the validation error returned
// by SettingsResponse_OidcSetting.Validate if the designated constraints
// aren't met.
type SettingsResponse_OidcSettingValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e SettingsResponse_OidcSettingValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e SettingsResponse_OidcSettingValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e SettingsResponse_OidcSettingValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e SettingsResponse_OidcSettingValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e SettingsResponse_OidcSettingValidationError) ErrorName() string {
	return "SettingsResponse_OidcSettingValidationError"
}

// Error satisfies the builtin error interface
func (e SettingsResponse_OidcSettingValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sSettingsResponse_OidcSetting.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = SettingsResponse_OidcSettingValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = SettingsResponse_OidcSettingValidationError{}
