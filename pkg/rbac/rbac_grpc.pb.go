// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.17.3
// source: rbac/rbac.proto

package rbac

import (
	context "context"

	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// RBACClient is the client API for RBAC service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type RBACClient interface {
	List(ctx context.Context, in *ListRequest, opts ...grpc.CallOption) (*ListResponse, error)
	ApplyFor(ctx context.Context, in *ApplyForRequest, opts ...grpc.CallOption) (*ApplyForResponse, error)
	Approve(ctx context.Context, in *ApproveRequest, opts ...grpc.CallOption) (*ApproveResponse, error)
	Reject(ctx context.Context, in *RejectRequest, opts ...grpc.CallOption) (*RejectResponse, error)
	Revoke(ctx context.Context, in *RevokeRequest, opts ...grpc.CallOption) (*RevokeResponse, error)
}

type rBACClient struct {
	cc grpc.ClientConnInterface
}

func NewRBACClient(cc grpc.ClientConnInterface) RBACClient {
	return &rBACClient{cc}
}

func (c *rBACClient) List(ctx context.Context, in *ListRequest, opts ...grpc.CallOption) (*ListResponse, error) {
	out := new(ListResponse)
	err := c.cc.Invoke(ctx, "/rbac.RBAC/List", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *rBACClient) ApplyFor(ctx context.Context, in *ApplyForRequest, opts ...grpc.CallOption) (*ApplyForResponse, error) {
	out := new(ApplyForResponse)
	err := c.cc.Invoke(ctx, "/rbac.RBAC/ApplyFor", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *rBACClient) Approve(ctx context.Context, in *ApproveRequest, opts ...grpc.CallOption) (*ApproveResponse, error) {
	out := new(ApproveResponse)
	err := c.cc.Invoke(ctx, "/rbac.RBAC/Approve", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *rBACClient) Reject(ctx context.Context, in *RejectRequest, opts ...grpc.CallOption) (*RejectResponse, error) {
	out := new(RejectResponse)
	err := c.cc.Invoke(ctx, "/rbac.RBAC/Reject", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *rBACClient) Revoke(ctx context.Context, in *RevokeRequest, opts ...grpc.CallOption) (*RevokeResponse, error) {
	out := new(RevokeResponse)
	err := c.cc.Invoke(ctx, "/rbac.RBAC/Revoke", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// RBACServer is the server API for RBAC service.
// All implementations must embed UnimplementedRBACServer
// for forward compatibility
type RBACServer interface {
	List(context.Context, *ListRequest) (*ListResponse, error)
	ApplyFor(context.Context, *ApplyForRequest) (*ApplyForResponse, error)
	Approve(context.Context, *ApproveRequest) (*ApproveResponse, error)
	Reject(context.Context, *RejectRequest) (*RejectResponse, error)
	Revoke(context.Context, *RevokeRequest) (*RevokeResponse, error)
	mustEmbedUnimplementedRBACServer()
}

// UnimplementedRBACServer must be embedded to have forward compatible implementations.
type UnimplementedRBACServer struct {
}

func (UnimplementedRBACServer) List(context.Context, *ListRequest) (*ListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedRBACServer) ApplyFor(context.Context, *ApplyForRequest) (*ApplyForResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ApplyFor not implemented")
}
func (UnimplementedRBACServer) Approve(context.Context, *ApproveRequest) (*ApproveResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Approve not implemented")
}
func (UnimplementedRBACServer) Reject(context.Context, *RejectRequest) (*RejectResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Reject not implemented")
}
func (UnimplementedRBACServer) Revoke(context.Context, *RevokeRequest) (*RevokeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Revoke not implemented")
}
func (UnimplementedRBACServer) mustEmbedUnimplementedRBACServer() {}

// UnsafeRBACServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to RBACServer will
// result in compilation errors.
type UnsafeRBACServer interface {
	mustEmbedUnimplementedRBACServer()
}

func RegisterRBACServer(s grpc.ServiceRegistrar, srv RBACServer) {
	s.RegisterService(&RBAC_ServiceDesc, srv)
}

func _RBAC_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RBACServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/rbac.RBAC/List",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RBACServer).List(ctx, req.(*ListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _RBAC_ApplyFor_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ApplyForRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RBACServer).ApplyFor(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/rbac.RBAC/ApplyFor",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RBACServer).ApplyFor(ctx, req.(*ApplyForRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _RBAC_Approve_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ApproveRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RBACServer).Approve(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/rbac.RBAC/Approve",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RBACServer).Approve(ctx, req.(*ApproveRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _RBAC_Reject_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RejectRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RBACServer).Reject(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/rbac.RBAC/Reject",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RBACServer).Reject(ctx, req.(*RejectRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _RBAC_Revoke_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RevokeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RBACServer).Revoke(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/rbac.RBAC/Revoke",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RBACServer).Revoke(ctx, req.(*RevokeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// RBAC_ServiceDesc is the grpc.ServiceDesc for RBAC service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var RBAC_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "rbac.RBAC",
	HandlerType: (*RBACServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "List",
			Handler:    _RBAC_List_Handler,
		},
		{
			MethodName: "ApplyFor",
			Handler:    _RBAC_ApplyFor_Handler,
		},
		{
			MethodName: "Approve",
			Handler:    _RBAC_Approve_Handler,
		},
		{
			MethodName: "Reject",
			Handler:    _RBAC_Reject_Handler,
		},
		{
			MethodName: "Revoke",
			Handler:    _RBAC_Revoke_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "rbac/rbac.proto",
}
