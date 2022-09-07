// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.17.3
// source: file/file.proto

package file

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

// FileSvcClient is the client API for FileSvc service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type FileSvcClient interface {
	//  文件列表
	List(ctx context.Context, in *ListRequest, opts ...grpc.CallOption) (*ListResponse, error)
	//  records 文件信息
	ShowRecords(ctx context.Context, in *ShowRecordsRequest, opts ...grpc.CallOption) (*ShowRecordsResponse, error)
	//  删除文件
	Delete(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*DeleteResponse, error)
	//  DeleteUndocumentedFiles 删除未被记录的文件，model 表中没有，但是文件目录中有
	DeleteUndocumentedFiles(ctx context.Context, in *DeleteUndocumentedFilesRequest, opts ...grpc.CallOption) (*DeleteUndocumentedFilesResponse, error)
	// DiskInfo 查看上传文件目录大小
	DiskInfo(ctx context.Context, in *DiskInfoRequest, opts ...grpc.CallOption) (*DiskInfoResponse, error)
}

type fileSvcClient struct {
	cc grpc.ClientConnInterface
}

func NewFileSvcClient(cc grpc.ClientConnInterface) FileSvcClient {
	return &fileSvcClient{cc}
}

func (c *fileSvcClient) List(ctx context.Context, in *ListRequest, opts ...grpc.CallOption) (*ListResponse, error) {
	out := new(ListResponse)
	err := c.cc.Invoke(ctx, "/file.FileSvc/List", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileSvcClient) ShowRecords(ctx context.Context, in *ShowRecordsRequest, opts ...grpc.CallOption) (*ShowRecordsResponse, error) {
	out := new(ShowRecordsResponse)
	err := c.cc.Invoke(ctx, "/file.FileSvc/ShowRecords", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileSvcClient) Delete(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*DeleteResponse, error) {
	out := new(DeleteResponse)
	err := c.cc.Invoke(ctx, "/file.FileSvc/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileSvcClient) DeleteUndocumentedFiles(ctx context.Context, in *DeleteUndocumentedFilesRequest, opts ...grpc.CallOption) (*DeleteUndocumentedFilesResponse, error) {
	out := new(DeleteUndocumentedFilesResponse)
	err := c.cc.Invoke(ctx, "/file.FileSvc/DeleteUndocumentedFiles", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileSvcClient) DiskInfo(ctx context.Context, in *DiskInfoRequest, opts ...grpc.CallOption) (*DiskInfoResponse, error) {
	out := new(DiskInfoResponse)
	err := c.cc.Invoke(ctx, "/file.FileSvc/DiskInfo", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// FileSvcServer is the server API for FileSvc service.
// All implementations must embed UnimplementedFileSvcServer
// for forward compatibility
type FileSvcServer interface {
	//  文件列表
	List(context.Context, *ListRequest) (*ListResponse, error)
	//  records 文件信息
	ShowRecords(context.Context, *ShowRecordsRequest) (*ShowRecordsResponse, error)
	//  删除文件
	Delete(context.Context, *DeleteRequest) (*DeleteResponse, error)
	//  DeleteUndocumentedFiles 删除未被记录的文件，model 表中没有，但是文件目录中有
	DeleteUndocumentedFiles(context.Context, *DeleteUndocumentedFilesRequest) (*DeleteUndocumentedFilesResponse, error)
	// DiskInfo 查看上传文件目录大小
	DiskInfo(context.Context, *DiskInfoRequest) (*DiskInfoResponse, error)
	mustEmbedUnimplementedFileSvcServer()
}

// UnimplementedFileSvcServer must be embedded to have forward compatible implementations.
type UnimplementedFileSvcServer struct {
}

func (UnimplementedFileSvcServer) List(context.Context, *ListRequest) (*ListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedFileSvcServer) ShowRecords(context.Context, *ShowRecordsRequest) (*ShowRecordsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ShowRecords not implemented")
}
func (UnimplementedFileSvcServer) Delete(context.Context, *DeleteRequest) (*DeleteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (UnimplementedFileSvcServer) DeleteUndocumentedFiles(context.Context, *DeleteUndocumentedFilesRequest) (*DeleteUndocumentedFilesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteUndocumentedFiles not implemented")
}
func (UnimplementedFileSvcServer) DiskInfo(context.Context, *DiskInfoRequest) (*DiskInfoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DiskInfo not implemented")
}
func (UnimplementedFileSvcServer) mustEmbedUnimplementedFileSvcServer() {}

// UnsafeFileSvcServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to FileSvcServer will
// result in compilation errors.
type UnsafeFileSvcServer interface {
	mustEmbedUnimplementedFileSvcServer()
}

func RegisterFileSvcServer(s grpc.ServiceRegistrar, srv FileSvcServer) {
	s.RegisterService(&FileSvc_ServiceDesc, srv)
}

func _FileSvc_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileSvcServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/file.FileSvc/List",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileSvcServer).List(ctx, req.(*ListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileSvc_ShowRecords_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ShowRecordsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileSvcServer).ShowRecords(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/file.FileSvc/ShowRecords",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileSvcServer).ShowRecords(ctx, req.(*ShowRecordsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileSvc_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileSvcServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/file.FileSvc/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileSvcServer).Delete(ctx, req.(*DeleteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileSvc_DeleteUndocumentedFiles_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteUndocumentedFilesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileSvcServer).DeleteUndocumentedFiles(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/file.FileSvc/DeleteUndocumentedFiles",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileSvcServer).DeleteUndocumentedFiles(ctx, req.(*DeleteUndocumentedFilesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileSvc_DiskInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DiskInfoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileSvcServer).DiskInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/file.FileSvc/DiskInfo",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileSvcServer).DiskInfo(ctx, req.(*DiskInfoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// FileSvc_ServiceDesc is the grpc.ServiceDesc for FileSvc service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var FileSvc_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "file.FileSvc",
	HandlerType: (*FileSvcServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "List",
			Handler:    _FileSvc_List_Handler,
		},
		{
			MethodName: "ShowRecords",
			Handler:    _FileSvc_ShowRecords_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _FileSvc_Delete_Handler,
		},
		{
			MethodName: "DeleteUndocumentedFiles",
			Handler:    _FileSvc_DeleteUndocumentedFiles_Handler,
		},
		{
			MethodName: "DiskInfo",
			Handler:    _FileSvc_DiskInfo_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "file/file.proto",
}
