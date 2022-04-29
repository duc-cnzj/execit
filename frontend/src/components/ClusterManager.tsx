import React, { useState, useEffect, useCallback, memo } from "react";
import {
  Card,
  Skeleton,
  Divider,
  List,
  Button,
  Modal,
  message,
  Form,
  Empty,
  Input,
  Tabs,
} from "antd";
import pb from "../api/compiled";
import InfiniteScroll from "react-infinite-scroll-component";
import { cardCreate, cardDelete } from "../api/card";
import {
  clusterList,
  clusterCreate,
  clusterDelete,
  clusterShow,
} from "../api/cluster";
import MyCodeMirror from "./MyCodeMirror";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const { TabPane } = Tabs;

const defaultPageSize = 15;

const ClusterManager: React.FC = () => {
  const [paginate, setPaginate] = useState<{
    page: number;
    page_size: number;
    count: number;
  }>({ page: 0, page_size: defaultPageSize, count: 0 });
  const [list, setList] = useState<pb.model.ClusterModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { t } = useTranslation();
  const [current, setCurrent] = useState<{
    clusterID: number;
    detail?: pb.cluster.ShowResponse;
  }>({
    clusterID: 0,
    detail: undefined,
  });
  const load = useCallback(() => {
    setLoading(true);
    clusterList({ page: 1, page_size: defaultPageSize })
      .then(({ data }) => {
        setList(data.items);
        setPaginate({
          page: Number(data.page),
          page_size: Number(data.page_size),
          count: Number(data.count),
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setList, setPaginate]);

  useEffect(() => {
    load();
  }, [load]);

  const onCancel = useCallback(() => {
    setIsModalVisible(false);
    setCurrent({ clusterID: 0 });
  }, []);

  useEffect(() => {
    current.clusterID > 0 &&
      clusterShow(current.clusterID).then((res) => {
        setCurrent((c) => ({ ...c, detail: res.data }));
      });
  }, [current.clusterID]);

  const onAdd = useCallback(
    (item: pb.cluster.Item) => {
      cardCreate({
        cluster_id: item.cluster_id,
        namespace: item.namespace,
        name: item.name,
        type: item.type,
      }).then((res) => {
        clusterShow(current.clusterID).then((res) => {
          setCurrent((c) => ({ ...c, detail: res.data }));
          message.success(t("success"));
        });
      });
    },
    [current.clusterID, t]
  );
  const onDelete = useCallback(
    (cardID: number) => {
      cardID > 0 &&
        cardDelete(cardID).then((res) => {
          clusterShow(current.clusterID).then((res) => {
            setCurrent((c) => ({ ...c, detail: res.data }));
            message.success(t("success"));
          });
        });
    },
    [current.clusterID, t]
  );
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    clusterList({ page: paginate.page + 1, page_size: paginate.page_size })
      .then(({ data: res }) => {
        setList((data) => [...data, ...res.items]);
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

  const getHeight = () => {
    let h = window.innerHeight - 260;
    if (h < 400) {
      return 400;
    }
    return h;
  };
  const [isAddClusterVisible, setIsAddClusterVisible] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    clusterCreate({
      name: values.name,
      kube_config: values.kube_config,
      namespace: values.namespace,
    })
      .then(() => {
        message.success(t("success"));
        setIsAddClusterVisible(false);
        form.resetFields();
        load();
      })
      .catch((e) => {
        message.error(e.response.data.message);
      });
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
          <div>{t("cluster management")}</div>
          <Button type="dashed" onClick={() => setIsAddClusterVisible(true)}>
            {t("add cluster")}
          </Button>
          <Modal
            title={t("add cluster")}
            footer={null}
            width={"60%"}
            visible={isAddClusterVisible}
            onCancel={() => {
              setIsAddClusterVisible(false);
              form.resetFields();
            }}
          >
            <Form
              name="basic"
              form={form}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label={t("cluster name")}
                name="name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item label={t("cluster namespace")} name="namespace">
                <Input />
              </Form.Item>

              <Form.Item
                label="kube config"
                name="kube_config"
                rules={[{ required: true }]}
                style={{ maxHeight: 550, overflowY: "auto" }}
              >
                <MyCodeMirror
                  options={{
                    mode: "yaml",
                    theme: "dracula",
                  }}
                />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  {t("Submit")}
                </Button>
              </Form.Item>
            </Form>
          </Modal>
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
          dataLength={list.length}
          next={loadMoreData}
          hasMore={paginate.count > list.length}
          loader={<Skeleton avatar={false} paragraph={{ rows: 1 }} active />}
          endMessage={
            <Divider plain>
              {t("hei man, don't turn it over, it's over!")}
            </Divider>
          }
          scrollableTarget="scrollableDiv"
        >
          <List
            dataSource={list}
            locale={{
              emptyText: (
                <Empty
                  imageStyle={{
                    height: 60,
                  }}
                  description={
                    <span>{t("Don't have any project cards yet")}</span>
                  }
                >
                  <Button
                    type="primary"
                    onClick={() => {
                      setIsAddClusterVisible(true);
                    }}
                  >
                    {t("Create Now")}
                  </Button>
                </Empty>
              ),
            }}
            renderItem={(item: pb.model.ClusterModel) => (
              <List.Item
                className="git__list-item"
                key={item.id}
                actions={[
                  <Button
                    onClick={() => {
                      setCurrent({ clusterID: item.id });
                      setIsModalVisible(true);
                    }}
                  >
                    {t("add card")}
                  </Button>,
                  <Button
                    danger
                    onClick={() => {
                      clusterDelete(item.id)
                        .then(() => {
                          message.success("success");
                          load();
                        })
                        .catch((e) => message.error(e.response.data.message));
                    }}
                  >
                    {t("delete")}
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  key={item.id}
                  title={<div style={{ fontSize: 16 }}>{item.name}</div>}
                  description={item.api_server_url}
                />
              </List.Item>
            )}
          />
        </InfiniteScroll>
        <Modal
          width={"80%"}
          title={
            current.detail
              ? `${current.detail.name} ${current.detail.api_server_url}`
              : ""
          }
          visible={isModalVisible}
          onCancel={onCancel}
          footer={null}
        >
          <Skeleton loading={!current.detail}>
            <Tabs
              tabPosition="left"
              className="cluster-manager__tabs"
              style={{ height: 550 }}
            >
              {current.detail?.items &&
                current.detail?.items.map(
                  (item: pb.cluster.Items, idx: number) => (
                    <TabPane
                      tab={item.namespace}
                      key={item.namespace}
                      style={{ height: "100%", overflowY: "auto" }}
                    >
                      <DetailItems
                        items={item.items}
                        onAdd={onAdd}
                        onDelete={onDelete}
                      />
                    </TabPane>
                  )
                )}
            </Tabs>
          </Skeleton>
        </Modal>
      </div>
    </Card>
  );
};

const DetailItems: React.FC<{
  items?: pb.cluster.Item[];
  onAdd: (item: pb.cluster.Item) => void;
  onDelete: (cardID: number) => void;
}> = ({ items, onAdd, onDelete }) => {
  return (
    <div>
      <List
        style={{ height: "100%" }}
        size="small"
        bordered
        dataSource={items}
        renderItem={(item) => (
          <List.Item
            actions={[
              item.enabled ? (
                <Button
                  type="dashed"
                  danger
                  onClick={() => onDelete(item.card_id)}
                >
                  {t("remove")}
                </Button>
              ) : (
                <Button type="dashed" onClick={() => onAdd(item)}>
                  {t("add")}
                </Button>
              ),
            ]}
          >
            {item.name}
          </List.Item>
        )}
      />
    </div>
  );
};

export default memo(ClusterManager);
