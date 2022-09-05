import React, { useState, useEffect, useCallback, memo } from "react";
import { getHighlightSyntax } from "../utils/highlight";
import ReactDiffViewer from "react-diff-viewer";
import {
  Card,
  Skeleton,
  Divider,
  List,
  Tag,
  Button,
  Modal,
  Popconfirm,
  message,
} from "antd";
import pb from "../api/compiled";
import InfiniteScroll from "react-infinite-scroll-component";
import { events } from "../api/event";
import {
  deleteFile,
  downloadFile,
  diskInfo as diskInfoApi,
  deleteUndocumentedFiles,
} from "../api/file";
import ErrorBoundary from "../components/ErrorBoundary";
import { useTranslation } from "react-i18next";
import AsciinemaPlayer from "./Player";
import { getToken } from "../utils/token";

const defaultPageSize = 15;

const EventList: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const [diskInfo, setDiskInfo] = useState<pb.file.DiskInfoResponse>();
  const [paginate, setPaginate] = useState<{
    page: number;
    page_size: number;
    count: number;
  }>({ page: 0, page_size: defaultPageSize, count: 0 });
  const [data, setData] = useState<pb.event.ListItem[]>([]);

  useEffect(() => {
    diskInfoApi().then(({ data }) => setDiskInfo(data));
  }, []);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    events({ page: paginate.page + 1, page_size: paginate.page_size })
      .then(({ data: res }) => {
        setData((data) => [...data, ...res.items]);
        setPaginate({
          page: Number(res.page),
          page_size: Number(res.page_size),
          count: Number(res.count),
        });
        setLoading(false);
      })
      .catch((e) => {
        message.error(e.response.data.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    events({ page: 1, page_size: defaultPageSize })
      .then(({ data: res }) => {
        setData((data) => [...data, ...res.items]);
        setPaginate({
          page: Number(res.page),
          page_size: Number(res.page_size),
          count: Number(res.count),
        });
      })
      .catch((e) => {
        message.error(e.response.data.message);
      });
  }, []);

  const [config, setConfig] = useState({ old: "", new: "", title: "" });

  const getActionStyle = useCallback(
    (type: pb.event.ActionType): React.ReactNode => {
      let style = { fontSize: 12, marginLeft: 5 };
      switch (type) {
        case pb.event.ActionType.Create:
          return (
            <Tag color="#1890ff" style={style}>
              {t("Create")}
            </Tag>
          );
        case pb.event.ActionType.Shell:
          return (
            <Tag color="#1890ff" style={style}>
              {t("Exec Shell")}
            </Tag>
          );
        case pb.event.ActionType.Update:
          return (
            <Tag color="#52c41a" style={style}>
              {t("Update")}
            </Tag>
          );
        case pb.event.ActionType.Delete:
          return (
            <Tag color="#f5222d" style={style}>
              {t("Delete")}
            </Tag>
          );
        case pb.event.ActionType.Upload:
          return (
            <Tag color="#fcd34d" style={style}>
              {t("Upload")}
            </Tag>
          );
        case pb.event.ActionType.Download:
          return (
            <Tag color="#2dd4bf" style={style}>
              {t("Download")}
            </Tag>
          );
        default:
          return (
            <Tag color="#f1c40f" style={style}>
              {t("mystery")}
            </Tag>
          );
      }
    },
    [t]
  );

  const highlightSyntax = useCallback(
    (str: string) => (
      <code
        dangerouslySetInnerHTML={{
          __html: getHighlightSyntax(str, "yaml"),
        }}
      />
    ),
    []
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleOk = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const [shellModalVisible, setShellModalVisible] = useState(false);
  const [fileID, setFileID] = useState(0);

  const [clearLoading, setClearLoading] = useState(false);
  const clearDisk = useCallback(() => {
    setClearLoading(true);
    deleteUndocumentedFiles().then((res) => {
      message.success(t("Cleaned up successfully"));
      diskInfoApi()
        .then(({ data }) => {
          setDiskInfo(data);
        })
        .finally(() => {
          setClearLoading(false);
        });
    });
  }, [t]);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
  }, []);
  const getHeight = () => {
    let h = window.innerHeight - 260;
    if (h < 400) {
      return 400;
    }
    return h;
  };

  return (
    <Card
      title={
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            {t("events")}: {paginate.count} {t("total")}
          </div>
          <div
            style={{
              fontSize: 12,
              fontWeight: "normal",
              textTransform: "uppercase",
            }}
          >
            {t("file space")}:{" "}
            <Button
              loading={clearLoading}
              style={{ fontSize: 10 }}
              type="link"
              onClick={clearDisk}
            >
              {diskInfo?.humanize_usage} {t("Click to clean up")}
            </Button>
          </div>
        </div>
      }
      bordered={false}
      bodyStyle={{
        height: getHeight(),
        overflowY: "auto",
        padding: 0,
      }}
      style={{
        marginTop: 20,
        marginBottom: 30,
      }}
    >
      <div id="scrollableDiv" style={{ height: "100%", overflowY: "auto" }}>
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={paginate.count > data.length}
          loader={<Skeleton avatar={false} paragraph={{ rows: 1 }} active />}
          endMessage={
            <Divider plain>
              {t("hei man, don't turn it over, it's over!")}
            </Divider>
          }
          scrollableTarget="scrollableDiv"
        >
          <List
            dataSource={data}
            renderItem={(item: pb.event.ListItem) => (
              <List.Item key={item.id} className="events__list-item">
                <List.Item.Meta
                  title={
                    <div>
                      {item.username}
                      {getActionStyle(item.action)}
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: "normal",
                        }}
                      >
                        {item.event_at}
                      </span>
                    </div>
                  }
                  description={`${item.message}`}
                />
                {item.file_id > 0 && item.action === pb.event.ActionType.Shell && (
                  <>
                    <Button
                      type="dashed"
                      style={{ marginRight: 5 }}
                      onClick={() => {
                        setShellModalVisible(true);
                        setFileID(item.file_id);
                      }}
                    >
                      {t("viewing Operation Records")}
                      {item.duration && (
                        <span style={{ fontSize: "10px", marginLeft: 5 }}>
                          ({t("duration")}: {item.duration})
                        </span>
                      )}
                    </Button>
                    <DeleteFile
                      onDelete={() => {
                        deleteFile({ id: item.file_id })
                          .then((res) => {
                            setData(
                              data.map((v) =>
                                v.id === item.id ? { ...v, file_id: 0 } : v
                              )
                            );
                            message.success(t("successfully deleted"));
                          })
                          .catch((e) => message.error(e.response.data.message));
                      }}
                    />
                  </>
                )}
                {item.file_id > 0 && item.action === pb.event.ActionType.Upload && (
                  <>
                    <Button
                      type="dashed"
                      style={{ marginRight: 5 }}
                      onClick={() => {
                        downloadFile(item.file_id);
                      }}
                    >
                      {t("download file")}
                    </Button>
                    <DeleteFile
                      onDelete={() => {
                        deleteFile({ id: item.file_id })
                          .then((res) => {
                            setData(
                              data.map((v) =>
                                v.id === item.id ? { ...v, file_id: 0 } : v
                              )
                            );
                            message.success(t("successfully deleted"));
                          })
                          .catch((e) => message.error(e.response.data.message));
                      }}
                    />
                  </>
                )}
                {!!(item.old || item.new) ? (
                  <Button
                    type="dashed"
                    onClick={() => {
                      setConfig({
                        old: item.old,
                        new: item.new,
                        title: `[${item.username}]: ` + item.message,
                      });
                      showModal();
                    }}
                  >
                    {t("show changes")}
                  </Button>
                ) : (
                  <></>
                )}
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
      <Modal
        width={"80%"}
        title={config.title}
        visible={isModalVisible}
        okText={"ok"}
        footer={null}
        cancelText={"cancel"}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ErrorBoundary>
          <div style={{ maxHeight: 550, overflowY: "auto" }}>
            <ReactDiffViewer
              disableWordDiff
              styles={{
                line: { fontSize: 12, wordBreak: "break-word" },
              }}
              useDarkTheme
              showDiffOnly
              splitView={config.old !== ""}
              renderContent={highlightSyntax}
              oldValue={config.old}
              newValue={config.new}
            />
          </div>
        </ErrorBoundary>
      </Modal>
      <Modal
        width={"65%"}
        title={null}
        destroyOnClose
        visible={shellModalVisible}
        footer={null}
        onCancel={() => {
          setShellModalVisible(false);
          setFileID(0);
        }}
      >
        <div style={{ width: "100%" }}>
          {fileID > 0 && (
            <AsciinemaPlayer
              speed={1.5}
              src={{
                url: `${process.env.REACT_APP_BASE_URL}/api/raw_file/${fileID}`,
                fetchOpts: {
                  method: "GET",
                  headers: { Authorization: getToken() },
                },
              }}
              cols={106}
              rows={24}
              idleTimeLimit={3}
              fit={"width"}
              terminalLineHeight={1.5}
              preload
              theme="tango"
            />
          )}
        </div>
      </Modal>
    </Card>
  );
};

const DeleteFile: React.FC<{ onDelete: () => void }> = ({ onDelete }) => {
  const { t } = useTranslation();
  return (
    <Popconfirm
      title={t("Are you sure you want to delete this file?")}
      onConfirm={onDelete}
      okText="Yes"
      cancelText="No"
    >
      <Button type="dashed" style={{ marginRight: 5 }} danger>
        {t("delete file")}
      </Button>
    </Popconfirm>
  );
};

export default memo(EventList);
