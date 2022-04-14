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

const { TabPane } = Tabs;

const defaultPageSize = 15;

const ClusterManager: React.FC = () => {
  const [paginate, setPaginate] = useState<{
    page: number;
    page_size: number;
    count: number;
  }>({ page: 0, page_size: defaultPageSize, count: 0 });
  const [list, setList] = useState<pb.ClusterModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [current, setCurrent] = useState<{
    clusterID: number;
    detail?: pb.ClusterShowResponse;
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
    (item: pb.ClusterItem) => {
      cardCreate({
        cluster_id: item.cluster_id,
        namespace: item.namespace,
        name: item.name,
        type: item.type,
      }).then((res) => {
        clusterShow(current.clusterID).then((res) => {
          setCurrent((c) => ({ ...c, detail: res.data }));
        });
      });
    },
    [current.clusterID]
  );
  const onDelete = useCallback(
    (cardID: number) => {
      cardID > 0 &&
        cardDelete(cardID).then((res) => {
          clusterShow(current.clusterID).then((res) => {
            setCurrent((c) => ({ ...c, detail: res.data }));
          });
        });
    },
    [current.clusterID]
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
  const onFinish = (values: any) => {
    clusterCreate({ name: values.name, kube_config: values.kube_config })
      .then(() => {
        message.success("success");
        setIsAddClusterVisible(false);
        load()
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
          <div>cluster management</div>
          <Button type="dashed" onClick={() => setIsAddClusterVisible(true)}>
            add cluster
          </Button>
          <Modal
            title="add cluster"
            footer={null}
            width={"60%"}
            visible={isAddClusterVisible}
            onCancel={() => setIsAddClusterVisible(false)}
          >
            <Form
              name="basic"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="cluster name"
                name="name"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="kube config"
                name="kube_config"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
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
                  Submit
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
            <Divider plain>hei man, don't turn it over, it's over!</Divider>
          }
          scrollableTarget="scrollableDiv"
        >
          <List
            dataSource={list}
            renderItem={(item: pb.ClusterModel) => (
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
                    show
                  </Button>,
                  <Button
                    danger
                    onClick={() => {
                      clusterDelete(item.id)
                        .then(() => {
                          message.success("success")
                          load()
                        })
                        .catch((e) => message.error(e.response.data.message));
                    }}
                  >
                    delete
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
                  (item: pb.ClusterItems, idx: number) => (
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
  items?: pb.ClusterItem[];
  onAdd: (item: pb.ClusterItem) => void;
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
                  remove
                </Button>
              ) : (
                <Button type="dashed" onClick={() => onAdd(item)}>
                  add
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
