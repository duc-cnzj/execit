package services

import (
	"context"
	"errors"
	"fmt"

	"github.com/dustin/go-humanize"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"gopkg.in/yaml.v2"
	"gorm.io/gorm"

	eventpb "github.com/duc-cnzj/execit-client/event"
	"github.com/duc-cnzj/execit-client/file"
	"github.com/duc-cnzj/execit-client/model"
	app "github.com/duc-cnzj/execit/internal/app/helper"
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/event/events"
	"github.com/duc-cnzj/execit/internal/models"
	"github.com/duc-cnzj/execit/internal/scopes"
	"github.com/duc-cnzj/execit/internal/utils"
	"github.com/duc-cnzj/execit/internal/xlog"
)

func init() {
	RegisterServer(func(s grpc.ServiceRegistrar, app contracts.ApplicationInterface) {
		file.RegisterFileSvcServer(s, new(FileSvc))
	})
	RegisterEndpoint(file.RegisterFileSvcHandlerFromEndpoint)
}

type FileSvc struct {
	file.UnimplementedFileSvcServer
}

func (m *FileSvc) List(ctx context.Context, request *file.FileListRequest) (*file.FileListResponse, error) {
	var (
		page     = int(request.Page)
		pageSize = int(request.PageSize)
		files    []models.File
		count    int64
	)
	ss := []func(*gorm.DB) *gorm.DB{
		func(db *gorm.DB) *gorm.DB {
			if !request.GetWithoutDeleted() {
				db = db.Unscoped()
			}
			return db
		},
	}
	if err := app.DB().Scopes(append(ss, scopes.Paginate(&page, &pageSize))...).Order("`id` DESC").Find(&files).Error; err != nil {
		return nil, err
	}
	app.DB().Model(&models.File{}).Scopes(ss...).Count(&count)

	var res = make([]*model.FileModel, 0, len(files))
	for _, ff := range files {
		var (
			deletedAt string
			isDeleted bool
		)
		if ff.DeletedAt.Valid {
			isDeleted = true
			deletedAt = utils.ToRFC3339DatetimeString(&ff.DeletedAt.Time)
		}
		res = append(res, &model.FileModel{
			Id:            int64(ff.ID),
			Path:          ff.Path,
			Size:          ff.Size,
			Username:      ff.Username,
			Namespace:     ff.Namespace,
			Pod:           ff.Pod,
			Container:     ff.Container,
			ContainerPath: ff.ContainerPath,
			CreatedAt:     utils.ToRFC3339DatetimeString(&ff.CreatedAt),
			UpdatedAt:     utils.ToRFC3339DatetimeString(&ff.UpdatedAt),
			DeletedAt:     deletedAt,
			IsDeleted:     isDeleted,
		})
	}

	return &file.FileListResponse{
		Page:     int64(page),
		PageSize: int64(pageSize),
		Items:    res,
		Count:    count,
	}, nil
}

func (m *FileSvc) DiskInfo(ctx context.Context, request *file.DiskInfoRequest) (*file.DiskInfoResponse, error) {
	size, err := app.Uploader().DirSize(app.Config().UploadDir)
	if err != nil {
		return nil, err
	}
	return &file.DiskInfoResponse{
		Usage:         size,
		HumanizeUsage: humanize.Bytes(uint64(size)),
	}, nil
}

type listFiles []*file.File

type item struct {
	Name string `yaml:"name"`
	Size string `yaml:"size"`
}

func (l listFiles) PrettyYaml() string {
	var items = make([]item, 0, len(l))
	for _, f := range l {
		items = append(items, item{
			Name: f.Path,
			Size: f.HumanizeSize,
		})
	}
	marshal, _ := yaml.Marshal(items)
	return string(marshal)
}

func (m *FileSvc) DeleteUndocumentedFiles(ctx context.Context, _ *file.DeleteUndocumentedFilesRequest) (*file.DeleteUndocumentedFilesResponse, error) {
	var (
		files       []models.File
		mapFilePath = make(map[string]struct{})

		clearList = make(listFiles, 0)
	)

	app.DB().Select("ID", "Path").Find(&files)
	for _, f := range files {
		mapFilePath[f.Path] = struct{}{}
	}

	directoryFiles, _ := app.Uploader().AllDirectoryFiles(app.Config().UploadDir)
	for _, directoryFile := range directoryFiles {
		if _, ok := mapFilePath[directoryFile.Path()]; !ok {
			clearList = append(clearList, &file.File{
				Path:         directoryFile.Path(),
				HumanizeSize: humanize.Bytes(directoryFile.Size()),
				Size:         int64(directoryFile.Size()),
			})
			if err := app.Uploader().Delete(directoryFile.Path()); err != nil {
				xlog.Error(err)
			}
		}
	}
	app.Uploader().RemoveEmptyDir(app.Config().UploadDir)
	events.AuditLog(MustGetUser(ctx).Name, eventpb.ActionType_Delete, "delete unrecorded files", clearList, nil)

	return &file.DeleteUndocumentedFilesResponse{Items: clearList}, nil
}

func (*FileSvc) Delete(ctx context.Context, request *file.FileDeleteRequest) (*file.FileDeleteResponse, error) {
	var f = &models.File{ID: int(request.Id)}
	if err := app.DB().First(&f).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, status.Error(codes.NotFound, err.Error())
		}
		return nil, status.Error(codes.Internal, err.Error())
	}
	f.DeleteFile()
	AuditLog(
		MustGetUser(ctx).Name,
		eventpb.ActionType_Delete,
		fmt.Sprintf("Deleted file: '%s', the file was uploaded by %s, size is %s", f.Path, f.Username, humanize.Bytes(f.Size)))

	return &file.FileDeleteResponse{}, nil
}

func (m *FileSvc) Authorize(ctx context.Context, fullMethodName string) (context.Context, error) {
	if !MustGetUser(ctx).IsAdmin() {
		return nil, status.Error(codes.PermissionDenied, ErrorPermissionDenied.Error())
	}

	return ctx, nil
}
