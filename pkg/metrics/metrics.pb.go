// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.17.3
// source: metrics/metrics.proto

package metrics

import (
	reflect "reflect"
	sync "sync"

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

type TopPodRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ClusterId int64  `protobuf:"varint,1,opt,name=cluster_id,json=clusterId,proto3" json:"cluster_id,omitempty"`
	Namespace string `protobuf:"bytes,2,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Pod       string `protobuf:"bytes,3,opt,name=pod,proto3" json:"pod,omitempty"`
}

func (x *TopPodRequest) Reset() {
	*x = TopPodRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_metrics_metrics_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TopPodRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TopPodRequest) ProtoMessage() {}

func (x *TopPodRequest) ProtoReflect() protoreflect.Message {
	mi := &file_metrics_metrics_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TopPodRequest.ProtoReflect.Descriptor instead.
func (*TopPodRequest) Descriptor() ([]byte, []int) {
	return file_metrics_metrics_proto_rawDescGZIP(), []int{0}
}

func (x *TopPodRequest) GetClusterId() int64 {
	if x != nil {
		return x.ClusterId
	}
	return 0
}

func (x *TopPodRequest) GetNamespace() string {
	if x != nil {
		return x.Namespace
	}
	return ""
}

func (x *TopPodRequest) GetPod() string {
	if x != nil {
		return x.Pod
	}
	return ""
}

type TopPodResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Cpu            float64 `protobuf:"fixed64,1,opt,name=cpu,proto3" json:"cpu,omitempty"`
	Memory         float64 `protobuf:"fixed64,2,opt,name=memory,proto3" json:"memory,omitempty"`
	HumanizeCpu    string  `protobuf:"bytes,3,opt,name=humanize_cpu,json=humanizeCpu,proto3" json:"humanize_cpu,omitempty"`
	HumanizeMemory string  `protobuf:"bytes,4,opt,name=humanize_memory,json=humanizeMemory,proto3" json:"humanize_memory,omitempty"`
	Time           string  `protobuf:"bytes,5,opt,name=time,proto3" json:"time,omitempty"`
	Length         int64   `protobuf:"varint,6,opt,name=length,proto3" json:"length,omitempty"`
}

func (x *TopPodResponse) Reset() {
	*x = TopPodResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_metrics_metrics_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TopPodResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TopPodResponse) ProtoMessage() {}

func (x *TopPodResponse) ProtoReflect() protoreflect.Message {
	mi := &file_metrics_metrics_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TopPodResponse.ProtoReflect.Descriptor instead.
func (*TopPodResponse) Descriptor() ([]byte, []int) {
	return file_metrics_metrics_proto_rawDescGZIP(), []int{1}
}

func (x *TopPodResponse) GetCpu() float64 {
	if x != nil {
		return x.Cpu
	}
	return 0
}

func (x *TopPodResponse) GetMemory() float64 {
	if x != nil {
		return x.Memory
	}
	return 0
}

func (x *TopPodResponse) GetHumanizeCpu() string {
	if x != nil {
		return x.HumanizeCpu
	}
	return ""
}

func (x *TopPodResponse) GetHumanizeMemory() string {
	if x != nil {
		return x.HumanizeMemory
	}
	return ""
}

func (x *TopPodResponse) GetTime() string {
	if x != nil {
		return x.Time
	}
	return ""
}

func (x *TopPodResponse) GetLength() int64 {
	if x != nil {
		return x.Length
	}
	return 0
}

var File_metrics_metrics_proto protoreflect.FileDescriptor

var file_metrics_metrics_proto_rawDesc = []byte{
	0x0a, 0x15, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2f, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63,
	0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x07, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73,
	0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e,
	0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x17,
	0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2f, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x79, 0x0a, 0x0d, 0x54, 0x6f, 0x70, 0x50, 0x6f,
	0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x26, 0x0a, 0x0a, 0x63, 0x6c, 0x75, 0x73,
	0x74, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x42, 0x07, 0xfa, 0x42,
	0x04, 0x22, 0x02, 0x20, 0x00, 0x52, 0x09, 0x63, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x49, 0x64,
	0x12, 0x25, 0x0a, 0x09, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x42, 0x07, 0xfa, 0x42, 0x04, 0x72, 0x02, 0x20, 0x01, 0x52, 0x09, 0x6e, 0x61,
	0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x12, 0x19, 0x0a, 0x03, 0x70, 0x6f, 0x64, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x42, 0x07, 0xfa, 0x42, 0x04, 0x72, 0x02, 0x20, 0x01, 0x52, 0x03, 0x70,
	0x6f, 0x64, 0x22, 0xb2, 0x01, 0x0a, 0x0e, 0x54, 0x6f, 0x70, 0x50, 0x6f, 0x64, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x63, 0x70, 0x75, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x01, 0x52, 0x03, 0x63, 0x70, 0x75, 0x12, 0x16, 0x0a, 0x06, 0x6d, 0x65, 0x6d, 0x6f, 0x72,
	0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x01, 0x52, 0x06, 0x6d, 0x65, 0x6d, 0x6f, 0x72, 0x79, 0x12,
	0x21, 0x0a, 0x0c, 0x68, 0x75, 0x6d, 0x61, 0x6e, 0x69, 0x7a, 0x65, 0x5f, 0x63, 0x70, 0x75, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x68, 0x75, 0x6d, 0x61, 0x6e, 0x69, 0x7a, 0x65, 0x43,
	0x70, 0x75, 0x12, 0x27, 0x0a, 0x0f, 0x68, 0x75, 0x6d, 0x61, 0x6e, 0x69, 0x7a, 0x65, 0x5f, 0x6d,
	0x65, 0x6d, 0x6f, 0x72, 0x79, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0e, 0x68, 0x75, 0x6d,
	0x61, 0x6e, 0x69, 0x7a, 0x65, 0x4d, 0x65, 0x6d, 0x6f, 0x72, 0x79, 0x12, 0x12, 0x0a, 0x04, 0x74,
	0x69, 0x6d, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x69, 0x6d, 0x65, 0x12,
	0x16, 0x0a, 0x06, 0x6c, 0x65, 0x6e, 0x67, 0x74, 0x68, 0x18, 0x06, 0x20, 0x01, 0x28, 0x03, 0x52,
	0x06, 0x6c, 0x65, 0x6e, 0x67, 0x74, 0x68, 0x32, 0xaa, 0x02, 0x0a, 0x07, 0x4d, 0x65, 0x74, 0x72,
	0x69, 0x63, 0x73, 0x12, 0x86, 0x01, 0x0a, 0x06, 0x54, 0x6f, 0x70, 0x50, 0x6f, 0x64, 0x12, 0x16,
	0x2e, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x54, 0x6f, 0x70, 0x50, 0x6f, 0x64, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x17, 0x2e, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73,
	0x2e, 0x54, 0x6f, 0x70, 0x50, 0x6f, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x4b, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x45, 0x12, 0x43, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x6d, 0x65,
	0x74, 0x72, 0x69, 0x63, 0x73, 0x2f, 0x63, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x73, 0x2f, 0x7b,
	0x63, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x7d, 0x2f, 0x6e, 0x61, 0x6d, 0x65,
	0x73, 0x70, 0x61, 0x63, 0x65, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65,
	0x7d, 0x2f, 0x70, 0x6f, 0x64, 0x73, 0x2f, 0x7b, 0x70, 0x6f, 0x64, 0x7d, 0x12, 0x95, 0x01, 0x0a,
	0x0c, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x54, 0x6f, 0x70, 0x50, 0x6f, 0x64, 0x12, 0x16, 0x2e,
	0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x54, 0x6f, 0x70, 0x50, 0x6f, 0x64, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x17, 0x2e, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e,
	0x54, 0x6f, 0x70, 0x50, 0x6f, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x52,
	0x82, 0xd3, 0xe4, 0x93, 0x02, 0x4c, 0x12, 0x4a, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x6d, 0x65, 0x74,
	0x72, 0x69, 0x63, 0x73, 0x2f, 0x63, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x73, 0x2f, 0x7b, 0x63,
	0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x7d, 0x2f, 0x6e, 0x61, 0x6d, 0x65, 0x73,
	0x70, 0x61, 0x63, 0x65, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x7d,
	0x2f, 0x70, 0x6f, 0x64, 0x73, 0x2f, 0x7b, 0x70, 0x6f, 0x64, 0x7d, 0x2f, 0x73, 0x74, 0x72, 0x65,
	0x61, 0x6d, 0x30, 0x01, 0x42, 0x33, 0x5a, 0x31, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x64, 0x75, 0x63, 0x2d, 0x63, 0x6e, 0x7a, 0x6a, 0x2f, 0x65, 0x78, 0x65, 0x63,
	0x69, 0x74, 0x2d, 0x63, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x2f, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63,
	0x73, 0x3b, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_metrics_metrics_proto_rawDescOnce sync.Once
	file_metrics_metrics_proto_rawDescData = file_metrics_metrics_proto_rawDesc
)

func file_metrics_metrics_proto_rawDescGZIP() []byte {
	file_metrics_metrics_proto_rawDescOnce.Do(func() {
		file_metrics_metrics_proto_rawDescData = protoimpl.X.CompressGZIP(file_metrics_metrics_proto_rawDescData)
	})
	return file_metrics_metrics_proto_rawDescData
}

var file_metrics_metrics_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_metrics_metrics_proto_goTypes = []interface{}{
	(*TopPodRequest)(nil),  // 0: metrics.TopPodRequest
	(*TopPodResponse)(nil), // 1: metrics.TopPodResponse
}
var file_metrics_metrics_proto_depIdxs = []int32{
	0, // 0: metrics.Metrics.TopPod:input_type -> metrics.TopPodRequest
	0, // 1: metrics.Metrics.StreamTopPod:input_type -> metrics.TopPodRequest
	1, // 2: metrics.Metrics.TopPod:output_type -> metrics.TopPodResponse
	1, // 3: metrics.Metrics.StreamTopPod:output_type -> metrics.TopPodResponse
	2, // [2:4] is the sub-list for method output_type
	0, // [0:2] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_metrics_metrics_proto_init() }
func file_metrics_metrics_proto_init() {
	if File_metrics_metrics_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_metrics_metrics_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TopPodRequest); i {
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
		file_metrics_metrics_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TopPodResponse); i {
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
			RawDescriptor: file_metrics_metrics_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_metrics_metrics_proto_goTypes,
		DependencyIndexes: file_metrics_metrics_proto_depIdxs,
		MessageInfos:      file_metrics_metrics_proto_msgTypes,
	}.Build()
	File_metrics_metrics_proto = out.File
	file_metrics_metrics_proto_rawDesc = nil
	file_metrics_metrics_proto_goTypes = nil
	file_metrics_metrics_proto_depIdxs = nil
}
