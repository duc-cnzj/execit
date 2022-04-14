// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.17.3
// source: picture/picture.proto

package picture

import (
	reflect "reflect"
	sync "sync"

	_ "github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2/options"
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

type BackgroundRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Random bool `protobuf:"varint,1,opt,name=random,proto3" json:"random,omitempty"`
}

func (x *BackgroundRequest) Reset() {
	*x = BackgroundRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_picture_picture_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BackgroundRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BackgroundRequest) ProtoMessage() {}

func (x *BackgroundRequest) ProtoReflect() protoreflect.Message {
	mi := &file_picture_picture_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BackgroundRequest.ProtoReflect.Descriptor instead.
func (*BackgroundRequest) Descriptor() ([]byte, []int) {
	return file_picture_picture_proto_rawDescGZIP(), []int{0}
}

func (x *BackgroundRequest) GetRandom() bool {
	if x != nil {
		return x.Random
	}
	return false
}

type BackgroundResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Url       string `protobuf:"bytes,1,opt,name=url,proto3" json:"url,omitempty"`
	Copyright string `protobuf:"bytes,2,opt,name=copyright,proto3" json:"copyright,omitempty"`
}

func (x *BackgroundResponse) Reset() {
	*x = BackgroundResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_picture_picture_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BackgroundResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BackgroundResponse) ProtoMessage() {}

func (x *BackgroundResponse) ProtoReflect() protoreflect.Message {
	mi := &file_picture_picture_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BackgroundResponse.ProtoReflect.Descriptor instead.
func (*BackgroundResponse) Descriptor() ([]byte, []int) {
	return file_picture_picture_proto_rawDescGZIP(), []int{1}
}

func (x *BackgroundResponse) GetUrl() string {
	if x != nil {
		return x.Url
	}
	return ""
}

func (x *BackgroundResponse) GetCopyright() string {
	if x != nil {
		return x.Copyright
	}
	return ""
}

var File_picture_picture_proto protoreflect.FileDescriptor

var file_picture_picture_proto_rawDesc = []byte{
	0x0a, 0x15, 0x70, 0x69, 0x63, 0x74, 0x75, 0x72, 0x65, 0x2f, 0x70, 0x69, 0x63, 0x74, 0x75, 0x72,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x2d, 0x67, 0x65,
	0x6e, 0x2d, 0x6f, 0x70, 0x65, 0x6e, 0x61, 0x70, 0x69, 0x76, 0x32, 0x2f, 0x6f, 0x70, 0x74, 0x69,
	0x6f, 0x6e, 0x73, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x2b, 0x0a, 0x11, 0x42, 0x61, 0x63, 0x6b, 0x67, 0x72, 0x6f,
	0x75, 0x6e, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x72, 0x61,
	0x6e, 0x64, 0x6f, 0x6d, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x72, 0x61, 0x6e, 0x64,
	0x6f, 0x6d, 0x22, 0x44, 0x0a, 0x12, 0x42, 0x61, 0x63, 0x6b, 0x67, 0x72, 0x6f, 0x75, 0x6e, 0x64,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x75, 0x72, 0x6c, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x75, 0x72, 0x6c, 0x12, 0x1c, 0x0a, 0x09, 0x63, 0x6f,
	0x70, 0x79, 0x72, 0x69, 0x67, 0x68, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63,
	0x6f, 0x70, 0x79, 0x72, 0x69, 0x67, 0x68, 0x74, 0x32, 0x66, 0x0a, 0x07, 0x50, 0x69, 0x63, 0x74,
	0x75, 0x72, 0x65, 0x12, 0x5b, 0x0a, 0x0a, 0x42, 0x61, 0x63, 0x6b, 0x67, 0x72, 0x6f, 0x75, 0x6e,
	0x64, 0x12, 0x12, 0x2e, 0x42, 0x61, 0x63, 0x6b, 0x67, 0x72, 0x6f, 0x75, 0x6e, 0x64, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x13, 0x2e, 0x42, 0x61, 0x63, 0x6b, 0x67, 0x72, 0x6f, 0x75,
	0x6e, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x24, 0x82, 0xd3, 0xe4, 0x93,
	0x02, 0x19, 0x12, 0x17, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x70, 0x69, 0x63, 0x74, 0x75, 0x72, 0x65,
	0x2f, 0x62, 0x61, 0x63, 0x6b, 0x67, 0x72, 0x6f, 0x75, 0x6e, 0x64, 0x92, 0x41, 0x02, 0x62, 0x00,
	0x42, 0x33, 0x5a, 0x31, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x64,
	0x75, 0x63, 0x2d, 0x63, 0x6e, 0x7a, 0x6a, 0x2f, 0x65, 0x78, 0x65, 0x63, 0x69, 0x74, 0x2d, 0x63,
	0x6c, 0x69, 0x65, 0x6e, 0x74, 0x2f, 0x70, 0x69, 0x63, 0x74, 0x75, 0x72, 0x65, 0x3b, 0x70, 0x69,
	0x63, 0x74, 0x75, 0x72, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_picture_picture_proto_rawDescOnce sync.Once
	file_picture_picture_proto_rawDescData = file_picture_picture_proto_rawDesc
)

func file_picture_picture_proto_rawDescGZIP() []byte {
	file_picture_picture_proto_rawDescOnce.Do(func() {
		file_picture_picture_proto_rawDescData = protoimpl.X.CompressGZIP(file_picture_picture_proto_rawDescData)
	})
	return file_picture_picture_proto_rawDescData
}

var file_picture_picture_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_picture_picture_proto_goTypes = []interface{}{
	(*BackgroundRequest)(nil),  // 0: BackgroundRequest
	(*BackgroundResponse)(nil), // 1: BackgroundResponse
}
var file_picture_picture_proto_depIdxs = []int32{
	0, // 0: Picture.Background:input_type -> BackgroundRequest
	1, // 1: Picture.Background:output_type -> BackgroundResponse
	1, // [1:2] is the sub-list for method output_type
	0, // [0:1] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_picture_picture_proto_init() }
func file_picture_picture_proto_init() {
	if File_picture_picture_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_picture_picture_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BackgroundRequest); i {
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
		file_picture_picture_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BackgroundResponse); i {
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
			RawDescriptor: file_picture_picture_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_picture_picture_proto_goTypes,
		DependencyIndexes: file_picture_picture_proto_depIdxs,
		MessageInfos:      file_picture_picture_proto_msgTypes,
	}.Build()
	File_picture_picture_proto = out.File
	file_picture_picture_proto_rawDesc = nil
	file_picture_picture_proto_goTypes = nil
	file_picture_picture_proto_depIdxs = nil
}
