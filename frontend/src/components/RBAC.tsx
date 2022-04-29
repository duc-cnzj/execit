import React, { useState, useEffect, useCallback, memo, useMemo } from "react";
import {
  Card,
  Skeleton,
  Divider,
  List,
  Tag,
  Button,
  Modal,
  Input,
  message,
  Select,
} from "antd";
import pb from "../api/compiled";
import InfiniteScroll from "react-infinite-scroll-component";
import { rbacList, rbacApprove, rbacRevoke, rbacReject } from "../api/rbac";
import { useTranslation } from "react-i18next";
import { debounce } from "lodash";

const defaultPageSize = 15;
const { Option } = Select;

const RBAC: React.FC = () => {
  const [search, setSearch] = useState<{ email: string; state: pb.rbac.State }>(
    {
      email: "",
      state: 0,
    }
  );
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const [paginate, setPaginate] = useState<{
    page: number;
    page_size: number;
    count: number;
  }>({ page: 0, page_size: defaultPageSize, count: 0 });
  const [data, setData] = useState<pb.rbac.UserPermission[]>([]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [revokeID, setRevokeID] = useState(0);
  const [revokeReason, setRevokeReason] = useState("");

  const handleOk = () => {
    if (revokeReason.length === 0) {
      message.error(t("rbac.revoke_reason_empty"));
      return;
    }
    revokeID > 0 &&
      rbacRevoke({ id: revokeID, reason: revokeReason })
        .then((res) => {
          setData(
            data.map((v) =>
              v.id === revokeID && res.data.permission
                ? {
                    ...v,
                    state: res.data.permission.state,
                    reason: res.data.permission.reason,
                  }
                : v
            )
          );
          message.success(t("success"));
        })
        .finally(() => {
          setRevokeID(0);
          setRevokeReason("");
          setIsModalVisible(false);
        });
  };

  const handleCancel = () => {
    setRevokeID(0);
    setRevokeReason("");
    setIsModalVisible(false);
  };
  const [isRejectModalVisible, setIsRejectModalVisible] = useState(false);

  const [rejectID, setRejectID] = useState(0);
  const [rejectReason, setRejectReason] = useState("");

  const handleRejectOk = () => {
    if (rejectReason.length === 0) {
      message.error(t("rbac.reject_reason_empty"));
      return;
    }
    rejectID > 0 &&
      rbacReject({ id: rejectID, reason: rejectReason })
        .then((res) => {
          setData(
            data.map((v) =>
              v.id === rejectID && res.data.permission
                ? {
                    ...v,
                    state: res.data.permission.state,
                    reason: res.data.permission.reason,
                  }
                : v
            )
          );
          message.success(t("success"));
        })
        .finally(() => {
          setRejectID(0);
          setRejectReason("");
          setIsRejectModalVisible(false);
        });
  };

  const handleRejectCancel = () => {
    setRejectID(0);
    setRejectReason("");
    setIsRejectModalVisible(false);
  };

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    rbacList({
      page: paginate.page + 1,
      page_size: paginate.page_size,
      email: search.email,
      state: search.state,
    })
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
  const fetch = useCallback((email, state) => {
    setLoading(true);
    rbacList({
      page: 1,
      page_size: defaultPageSize,
      email: email,
      state: state,
    })
      .then(({ data: res }) => {
        setData(res.items);
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
  }, []);

  const searchFn = useMemo(
    () =>
      debounce((email, state) => {
        fetch(email, state);
      }, 1000),
    [fetch]
  );

  useEffect(() => {
    rbacList({ page: 1, page_size: defaultPageSize, email: "", state: 0 })
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

  const getHeight = () => {
    let h = window.innerHeight - 260;
    if (h < 400) {
      return 400;
    }
    return h;
  };

  const getStateStyle = useCallback(
    (type: pb.rbac.State): React.ReactNode => {
      let style = { fontSize: 12, marginLeft: 5 };
      switch (type) {
        case pb.rbac.State.Approved:
          return (
            <Tag color="#52c41a" style={style}>
              {t("Approved")}
            </Tag>
          );
        case pb.rbac.State.Rejected:
          return (
            <Tag color="#f5222d" style={style}>
              {t("Rejected")}
            </Tag>
          );
        case pb.rbac.State.Request:
          return (
            <Tag color="#1890ff" style={style}>
              {t("Request")}
            </Tag>
          );
        case pb.rbac.State.Revoked:
          return (
            <Tag color="#d1d5db" style={style}>
              {t("Revoked")}
            </Tag>
          );
        default:
          return (
            <Tag color="#f1c40f" style={style}>
              {t("unknown")}
            </Tag>
          );
      }
    },
    [t]
  );

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
          <div>{t("rbac")}</div>
          <div style={{ display: "flex" }}>
            <Input
              allowClear
              size="small"
              placeholder={t("email")}
              onChange={(v) => {
                setSearch((s) => ({ ...s, email: v.target.value }));
                searchFn(v.target.value, search.state);
              }}
            />
            <Select
              size="small"
              defaultValue={pb.rbac.State._}
              style={{ width: 120, fontSize: 12 }}
              onChange={(v) => {
                setSearch((s) => ({ ...s, state: v }));
                fetch(search.email, v);
              }}
            >
              <Option value={pb.rbac.State._}>{t("all")}</Option>
              <Option value={pb.rbac.State.Approved}>{t("Approved")}</Option>
              <Option value={pb.rbac.State.Rejected}>{t("Rejected")}</Option>
              <Option value={pb.rbac.State.Request}>{t("Request")}</Option>
              <Option value={pb.rbac.State.Revoked}>{t("Revoked")}</Option>
            </Select>
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
            renderItem={(item: pb.rbac.UserPermission) => (
              <List.Item key={item.id} className="rbac__list-item">
                <div>
                  {getStateStyle(item.state)}
                  {t("The user")}:{" "}
                  <span style={{ fontSize: 16, fontWeight: "bold" }}>
                    {item.username}
                    <span style={{ fontSize: 12, fontWeight: "normal" }}>
                      ({item.email})
                    </span>
                  </span>{" "}
                  {t("Initiate a permission request")} {item.description}
                  {(item.state === pb.rbac.State.Rejected ||
                    item.state === pb.rbac.State.Revoked) && (
                    <span>
                      , {t("reason")}: {item.reason}
                    </span>
                  )}
                </div>
                {item.state === pb.rbac.State.Request && (
                  <div>
                    <Button
                      type="primary"
                      onClick={() => {
                        rbacApprove({ id: item.id }).then((res) => {
                          setData(
                            data.map((v) =>
                              v.id === item.id && res.data.permission
                                ? { ...v, state: res.data.permission?.state }
                                : v
                            )
                          );
                          message.success(t("success"));
                        });
                      }}
                      style={{ marginRight: 5 }}
                    >
                      {t("approved")}
                    </Button>
                    <Button
                      danger
                      type="dashed"
                      onClick={() => {
                        setRejectID(item.id);
                        setIsRejectModalVisible(true);
                      }}
                    >
                      {t("reject")}
                    </Button>
                  </div>
                )}
                {item.state === pb.rbac.State.Approved && (
                  <div>
                    <Button
                      type="dashed"
                      onClick={() => {
                        setRevokeID(item.id);
                        setIsModalVisible(true);
                      }}
                      danger
                    >
                      {t("revoke")}
                    </Button>
                  </div>
                )}
              </List.Item>
            )}
          />
        </InfiniteScroll>
        <Modal
          title={t("revoke permission confirm")}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Yes"
          cancelText="No"
        >
          <Input
            autoFocus
            placeholder={t("revoke reason")}
            value={revokeReason}
            onChange={(v) => setRevokeReason(v.target.value)}
          />
        </Modal>
        <Modal
          title={t("reject permission confirm")}
          visible={isRejectModalVisible}
          onOk={handleRejectOk}
          onCancel={handleRejectCancel}
          okText="Yes"
          cancelText="No"
        >
          <Input
            autoFocus
            placeholder={t("reject reason")}
            value={rejectReason}
            onChange={(v) => setRejectReason(v.target.value)}
          />
        </Modal>
      </div>
    </Card>
  );
};

export default memo(RBAC);
