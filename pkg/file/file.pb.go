// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.17.3
// source: file/file.proto

package file

import (
	reflect "reflect"
	sync "sync"

	model "github.com/duc-cnzj/execit-client/model"
	_ "github.com/envoyproxy/protoc-gen-validate/validate"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type FileDeleteRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *FileDeleteRequest) Reset() {
	*x = FileDeleteRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_file_file_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FileDeleteRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FileDeleteRequest) ProtoMessage() {}

func (x *FileDeleteRequest) ProtoReflect() protoreflect.Message {
	mi := &file_file_file_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FileDeleteRequest.ProtoReflect.Descriptor instead.
func (*FileDeleteRequest) Descriptor() ([]byte, []int) {
	return file_file_file_proto_rawDescGZIP(), []int{0}
}

func (x *FileDeleteRequest) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

type FileDeleteResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	File *File `protobuf:"bytes,1,opt,name=file,proto3" json:"file,omitempty"`
}

func (x *FileDeleteResponse) Reset() {
	*x = FileDeleteResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_file_file_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FileDeleteResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FileDeleteResponse) ProtoMessage() {}

func (x *FileDeleteResponse) ProtoReflect() protoreflect.Message {
	mi := &file_file_file_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FileDeleteResponse.ProtoReflect.Descriptor instead.
func (*FileDeleteResponse) Descriptor() ([]byte, []int) {
	return file_file_file_proto_rawDescGZIP(), []int{1}
}

func (x *FileDeleteResponse) GetFile() *File {
	if x != nil {
		return x.File
	}
	return nil
}

type DeleteUndocumentedFilesRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *DeleteUndocumentedFilesRequest) Reset() {
	*x = DeleteUndocumentedFilesRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_file_file_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteUndocumentedFilesRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteUndocumentedFilesRequest) ProtoMessage() {}

func (x *DeleteUndocumentedFilesRequest) ProtoReflect() protoreflect.Message {
	mi := &file_file_file_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteUndocumentedFilesRequest.ProtoReflect.Descriptor instead.
func (*DeleteUndocumentedFilesRequest) Descriptor() ([]byte, []int) {
	return file_file_file_proto_rawDescGZIP(), []int{2}
}

type File struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Path         string `protobuf:"bytes,1,opt,name=path,proto3" json:"path,omitempty"`
	HumanizeSize string `protobuf:"bytes,2,opt,name=humanize_size,json=humanizeSize,proto3" json:"humanize_size,omitempty"`
	Size         int64  `protobuf:"varint,3,opt,name=size,proto3" json:"size,omitempty"`
	UploadBy     string `protobuf:"bytes,4,opt,name=upload_by,json=uploadBy,proto3" json:"upload_by,omitempty"`
}

func (x *File) Reset() {
	*x = File{}
	if protoimpl.UnsafeEnabled {
		mi := &file_file_file_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *File) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*File) ProtoMessage() {}

func (x *File) ProtoReflect() protoreflect.Message {
	mi := &file_file_file_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use File.ProtoReflect.Descriptor instead.
func (*File) Descriptor() ([]byte, []int) {
	return file_file_file_proto_rawDescGZIP(), []int{3}
}

func (x *File) GetPath() string {
	if x != nil {
		return x.Path
	}
	return ""
}

func (x *File) GetHumanizeSize() string {
	if x != nil {
		return x.HumanizeSize
	}
	return ""
}

func (x *File) GetSize() int64 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *File) GetUploadBy() string {
	if x != nil {
		return x.UploadBy
	}
	return ""
}

type DeleteUndocumentedFilesResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Items []*File `protobuf:"bytes,1,rep,name=items,proto3" json:"items,omitempty"`
}

func (x *DeleteUndocumentedFilesResponse) Reset() {
	*x = DeleteUndocumentedFilesResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_file_file_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteUndocumentedFilesResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteUndocumentedFilesResponse) ProtoMessage() {}

func (x *DeleteUndocumentedFilesResponse) ProtoReflect() protoreflect.Message {
	mi := &file_file_file_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteUndocumentedFilesResponse.ProtoReflect.Descriptor instead.
func (*DeleteUndocumentedFilesResponse) Descriptor() ([]byte, []int) {
	return file_file_file_proto_rawDescGZIP(), []int{4}
}

func (x *DeleteUndocumentedFilesResponse) GetItems() []*File {
	if x != nil {
		return x.Items
	}
	return nil
}

type DiskInfoRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *DiskInfoRequest) Reset() {
	*x = DiskInfoRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_file_file_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DiskInfoRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DiskInfoRequest) ProtoMessage() {}

func (x *DiskInfoRequest) ProtoReflect() protoreflect.Message {
	mi := &file_file_file_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DiskInfoRequest.ProtoReflect.Descriptor instead.
func (*DiskInfoRequest) Descriptor() ([]byte, []int) {
	return file_file_file_proto_rawDescGZIP(), []int{5}
}

type DiskInfoResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Usage         int64  `protobuf:"varint,1,opt,name=usage,proto3" json:"usage,omitempty"`
	HumanizeUsage string `protobuf:"bytes,2,opt,name=humanize_usage,json=humanizeUsage,proto3" json:"humanize_usage,omitempty"`
}

func (x *DiskInfoResponse) Reset() {
	*x = DiskInfoResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_file_file_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DiskInfoResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DiskInfoResponse) ProtoMessage() {}

func (x *DiskInfoResponse) ProtoReflect() protoreflect.Message {
	mi := &file_file_file_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DiskInfoResponse.ProtoReflect.Descriptor instead.
func (*DiskInfoResponse) Descriptor() ([]byte, []int) {
	return file_file_file_proto_rawDescGZIP(), []int{6}
}

func (x *DiskInfoResponse) GetUsage() int64 {
	if x != nil {
		return x.Usage
	}
	return 0
}

func (x *DiskInfoResponse) GetHumanizeUsage() string {
	if x != nil {
		return x.HumanizeUsage
	}
	return ""
}

type FileListRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Page           int64 `protobuf:"varint,1,opt,name=page,proto3" json:"page,omitempty"`
	PageSize       int64 `protobuf:"varint,2,opt,name=page_size,json=pageSize,proto3" json:"page_size,omitempty"`
	WithoutDeleted bool  `protobuf:"varint,3,opt,name=without_deleted,json=withoutDeleted,proto3" json:"without_deleted,omitempty"`
}

func (x *FileListRequest) Reset() {
	*x = FileListRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_file_file_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FileListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FileListRequest) ProtoMessage() {}

func (x *FileListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_file_file_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FileListRequest.ProtoReflect.Descriptor instead.
func (*FileListRequest) Descriptor() ([]byte, []int) {
	return file_file_file_proto_rawDescGZIP(), []int{7}
}

func (x *FileListRequest) GetPage() int64 {
	if x != nil {
		return x.Page
	}
	return 0
}

func (x *FileListRequest) GetPageSize() int64 {
	if x != nil {
		return x.PageSize
	}
	return 0
}

func (x *FileListRequest) GetWithoutDeleted() bool {
	if x != nil {
		return x.WithoutDeleted
	}
	return false
}

type FileListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Page     int64              `protobuf:"varint,1,opt,name=page,proto3" json:"page,omitempty"`
	PageSize int64              `protobuf:"varint,2,opt,name=page_size,json=pageSize,proto3" json:"page_size,omitempty"`
	Items    []*model.FileModel `protobuf:"bytes,3,rep,name=items,proto3" json:"items,omitempty"`
	Count    int64              `protobuf:"varint,4,opt,name=count,proto3" json:"count,omitempty"`
}

func (x *FileListResponse) Reset() {
	*x = FileListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_file_file_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FileListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FileListResponse) ProtoMessage() {}

func (x *FileListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_file_file_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FileListResponse.ProtoReflect.Descriptor instead.
func (*FileListResponse) Descriptor() ([]byte, []int) {
	return file_file_file_proto_rawDescGZIP(), []int{8}
}

func (x *FileListResponse) GetPage() int64 {
	if x != nil {
		return x.Page
	}
	return 0
}

func (x *FileListResponse) GetPageSize() int64 {
	if x != nil {
		return x.PageSize
	}
	return 0
}

func (x *FileListResponse) GetItems() []*model.FileModel {
	if x != nil {
		return x.Items
	}
	return nil
}

func (x *FileListResponse) GetCount() int64 {
	if x != nil {
		return x.Count
	}
	return 0
}

var File_file_file_proto protoreflect.FileDescriptor

var file_file_file_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x66, 0x69, 0x6c, 0x65, 0x2f, 0x66, 0x69, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e,
	0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x17, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2f, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61,
	0x74, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x11, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x2f,
	0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x2c, 0x0a, 0x11, 0x46,
	0x69, 0x6c, 0x65, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x12, 0x17, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x42, 0x07, 0xfa, 0x42,
	0x04, 0x22, 0x02, 0x28, 0x01, 0x52, 0x02, 0x69, 0x64, 0x22, 0x2f, 0x0a, 0x12, 0x46, 0x69, 0x6c,
	0x65, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x19, 0x0a, 0x04, 0x66, 0x69, 0x6c, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x05, 0x2e,
	0x46, 0x69, 0x6c, 0x65, 0x52, 0x04, 0x66, 0x69, 0x6c, 0x65, 0x22, 0x20, 0x0a, 0x1e, 0x44, 0x65,
	0x6c, 0x65, 0x74, 0x65, 0x55, 0x6e, 0x64, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x65, 0x64,
	0x46, 0x69, 0x6c, 0x65, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22, 0x70, 0x0a, 0x04,
	0x46, 0x69, 0x6c, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x70, 0x61, 0x74, 0x68, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x70, 0x61, 0x74, 0x68, 0x12, 0x23, 0x0a, 0x0d, 0x68, 0x75, 0x6d, 0x61,
	0x6e, 0x69, 0x7a, 0x65, 0x5f, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0c, 0x68, 0x75, 0x6d, 0x61, 0x6e, 0x69, 0x7a, 0x65, 0x53, 0x69, 0x7a, 0x65, 0x12, 0x12, 0x0a,
	0x04, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x04, 0x73, 0x69, 0x7a,
	0x65, 0x12, 0x1b, 0x0a, 0x09, 0x75, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x5f, 0x62, 0x79, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x75, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x42, 0x79, 0x22, 0x3e,
	0x0a, 0x1f, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x55, 0x6e, 0x64, 0x6f, 0x63, 0x75, 0x6d, 0x65,
	0x6e, 0x74, 0x65, 0x64, 0x46, 0x69, 0x6c, 0x65, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x1b, 0x0a, 0x05, 0x69, 0x74, 0x65, 0x6d, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x05, 0x2e, 0x46, 0x69, 0x6c, 0x65, 0x52, 0x05, 0x69, 0x74, 0x65, 0x6d, 0x73, 0x22, 0x11,
	0x0a, 0x0f, 0x44, 0x69, 0x73, 0x6b, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x22, 0x4f, 0x0a, 0x10, 0x44, 0x69, 0x73, 0x6b, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x75, 0x73, 0x61, 0x67, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x05, 0x75, 0x73, 0x61, 0x67, 0x65, 0x12, 0x25, 0x0a, 0x0e, 0x68,
	0x75, 0x6d, 0x61, 0x6e, 0x69, 0x7a, 0x65, 0x5f, 0x75, 0x73, 0x61, 0x67, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0d, 0x68, 0x75, 0x6d, 0x61, 0x6e, 0x69, 0x7a, 0x65, 0x55, 0x73, 0x61,
	0x67, 0x65, 0x22, 0x7d, 0x0a, 0x0f, 0x46, 0x69, 0x6c, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x04, 0x70, 0x61, 0x67, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x03, 0x42, 0x07, 0xfa, 0x42, 0x04, 0x22, 0x02, 0x28, 0x01, 0x52, 0x04, 0x70, 0x61,
	0x67, 0x65, 0x12, 0x24, 0x0a, 0x09, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x73, 0x69, 0x7a, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x03, 0x42, 0x07, 0xfa, 0x42, 0x04, 0x22, 0x02, 0x28, 0x01, 0x52, 0x08,
	0x70, 0x61, 0x67, 0x65, 0x53, 0x69, 0x7a, 0x65, 0x12, 0x27, 0x0a, 0x0f, 0x77, 0x69, 0x74, 0x68,
	0x6f, 0x75, 0x74, 0x5f, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x08, 0x52, 0x0e, 0x77, 0x69, 0x74, 0x68, 0x6f, 0x75, 0x74, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65,
	0x64, 0x22, 0x7b, 0x0a, 0x10, 0x46, 0x69, 0x6c, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x70, 0x61, 0x67, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x03, 0x52, 0x04, 0x70, 0x61, 0x67, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x70, 0x61, 0x67,
	0x65, 0x5f, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x08, 0x70, 0x61,
	0x67, 0x65, 0x53, 0x69, 0x7a, 0x65, 0x12, 0x20, 0x0a, 0x05, 0x69, 0x74, 0x65, 0x6d, 0x73, 0x18,
	0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0a, 0x2e, 0x46, 0x69, 0x6c, 0x65, 0x4d, 0x6f, 0x64, 0x65,
	0x6c, 0x52, 0x05, 0x69, 0x74, 0x65, 0x6d, 0x73, 0x12, 0x14, 0x0a, 0x05, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x32, 0xf2,
	0x02, 0x0a, 0x07, 0x46, 0x69, 0x6c, 0x65, 0x53, 0x76, 0x63, 0x12, 0x3f, 0x0a, 0x04, 0x4c, 0x69,
	0x73, 0x74, 0x12, 0x10, 0x2e, 0x46, 0x69, 0x6c, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x11, 0x2e, 0x46, 0x69, 0x6c, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x12, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x0c, 0x12,
	0x0a, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x12, 0x4a, 0x0a, 0x06, 0x44,
	0x65, 0x6c, 0x65, 0x74, 0x65, 0x12, 0x12, 0x2e, 0x46, 0x69, 0x6c, 0x65, 0x44, 0x65, 0x6c, 0x65,
	0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x13, 0x2e, 0x46, 0x69, 0x6c, 0x65,
	0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x17,
	0x82, 0xd3, 0xe4, 0x93, 0x02, 0x11, 0x2a, 0x0f, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x66, 0x69, 0x6c,
	0x65, 0x73, 0x2f, 0x7b, 0x69, 0x64, 0x7d, 0x12, 0x8a, 0x01, 0x0a, 0x17, 0x44, 0x65, 0x6c, 0x65,
	0x74, 0x65, 0x55, 0x6e, 0x64, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x65, 0x64, 0x46, 0x69,
	0x6c, 0x65, 0x73, 0x12, 0x1f, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x55, 0x6e, 0x64, 0x6f,
	0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x65, 0x64, 0x46, 0x69, 0x6c, 0x65, 0x73, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x20, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x55, 0x6e, 0x64,
	0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x65, 0x64, 0x46, 0x69, 0x6c, 0x65, 0x73, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x2c, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x26, 0x2a, 0x24,
	0x2f, 0x61, 0x70, 0x69, 0x2f, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x2f, 0x64, 0x65, 0x6c, 0x65, 0x74,
	0x65, 0x5f, 0x75, 0x6e, 0x64, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x65, 0x64, 0x5f, 0x66,
	0x69, 0x6c, 0x65, 0x73, 0x12, 0x4d, 0x0a, 0x08, 0x44, 0x69, 0x73, 0x6b, 0x49, 0x6e, 0x66, 0x6f,
	0x12, 0x10, 0x2e, 0x44, 0x69, 0x73, 0x6b, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x11, 0x2e, 0x44, 0x69, 0x73, 0x6b, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x1c, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x16, 0x12, 0x14, 0x2f,
	0x61, 0x70, 0x69, 0x2f, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x2f, 0x64, 0x69, 0x73, 0x6b, 0x5f, 0x69,
	0x6e, 0x66, 0x6f, 0x42, 0x2d, 0x5a, 0x2b, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x64, 0x75, 0x63, 0x2d, 0x63, 0x6e, 0x7a, 0x6a, 0x2f, 0x65, 0x78, 0x65, 0x63, 0x69,
	0x74, 0x2d, 0x63, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x2f, 0x66, 0x69, 0x6c, 0x65, 0x3b, 0x66, 0x69,
	0x6c, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_file_file_proto_rawDescOnce sync.Once
	file_file_file_proto_rawDescData = file_file_file_proto_rawDesc
)

func file_file_file_proto_rawDescGZIP() []byte {
	file_file_file_proto_rawDescOnce.Do(func() {
		file_file_file_proto_rawDescData = protoimpl.X.CompressGZIP(file_file_file_proto_rawDescData)
	})
	return file_file_file_proto_rawDescData
}

var file_file_file_proto_msgTypes = make([]protoimpl.MessageInfo, 9)
var file_file_file_proto_goTypes = []interface{}{
	(*FileDeleteRequest)(nil),               // 0: FileDeleteRequest
	(*FileDeleteResponse)(nil),              // 1: FileDeleteResponse
	(*DeleteUndocumentedFilesRequest)(nil),  // 2: DeleteUndocumentedFilesRequest
	(*File)(nil),                            // 3: File
	(*DeleteUndocumentedFilesResponse)(nil), // 4: DeleteUndocumentedFilesResponse
	(*DiskInfoRequest)(nil),                 // 5: DiskInfoRequest
	(*DiskInfoResponse)(nil),                // 6: DiskInfoResponse
	(*FileListRequest)(nil),                 // 7: FileListRequest
	(*FileListResponse)(nil),                // 8: FileListResponse
	(*model.FileModel)(nil),                 // 9: FileModel
}
var file_file_file_proto_depIdxs = []int32{
	3, // 0: FileDeleteResponse.file:type_name -> File
	3, // 1: DeleteUndocumentedFilesResponse.items:type_name -> File
	9, // 2: FileListResponse.items:type_name -> FileModel
	7, // 3: FileSvc.List:input_type -> FileListRequest
	0, // 4: FileSvc.Delete:input_type -> FileDeleteRequest
	2, // 5: FileSvc.DeleteUndocumentedFiles:input_type -> DeleteUndocumentedFilesRequest
	5, // 6: FileSvc.DiskInfo:input_type -> DiskInfoRequest
	8, // 7: FileSvc.List:output_type -> FileListResponse
	1, // 8: FileSvc.Delete:output_type -> FileDeleteResponse
	4, // 9: FileSvc.DeleteUndocumentedFiles:output_type -> DeleteUndocumentedFilesResponse
	6, // 10: FileSvc.DiskInfo:output_type -> DiskInfoResponse
	7, // [7:11] is the sub-list for method output_type
	3, // [3:7] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_file_file_proto_init() }
func file_file_file_proto_init() {
	if File_file_file_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_file_file_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FileDeleteRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_file_file_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FileDeleteResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_file_file_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteUndocumentedFilesRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_file_file_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*File); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_file_file_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteUndocumentedFilesResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_file_file_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DiskInfoRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_file_file_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DiskInfoResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_file_file_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FileListRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_file_file_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FileListResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_file_file_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   9,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_file_file_proto_goTypes,
		DependencyIndexes: file_file_file_proto_depIdxs,
		MessageInfos:      file_file_file_proto_msgTypes,
	}.Build()
	File_file_file_proto = out.File
	file_file_file_proto_rawDesc = nil
	file_file_file_proto_goTypes = nil
	file_file_file_proto_depIdxs = nil
}
