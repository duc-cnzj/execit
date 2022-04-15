import React, { useState, useCallback, memo, lazy, Suspense } from "react";
import { DraggableModal } from "../pkg/DraggableModal";
import { Button, Tabs, Skeleton, Badge } from "antd";
import ErrorBoundary from "./ErrorBoundary";
import pb from "../api/compiled";

import TabLog from "./TabLog";
import { useTranslation } from "react-i18next";
const Shell = lazy(() => import("./TabShell"));

const { TabPane } = Tabs;

const NamespaceCardItem: React.FC<{
  item: pb.CardItems;
}> = ({ item }) => {
  const [visible, setVisible] = useState(false);
  const onOk = useCallback(() => setVisible(true), []);
  const [resizeAt, setResizeAt] = useState<number>(0);

  const onCancel = useCallback(() => {
    setVisible(false);
  }, []);
  const { t } = useTranslation();

  return (
    <div className="project-detail">
      <Button
        onClick={() => {
          onOk();
        }}
        title={item.type}
        className="project-detail__show-button"
        type="dashed"
      >
        <span
          title={item.name}
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            marginRight: 5,
          }}
        >
          {item.name}
        </span>
      </Button>
      <DraggableModal
        onResize={() => {
          setResizeAt(new Date().getTime());
        }}
        className="draggable-modal"
        visible={visible}
        initialWidth={900}
        initialHeight={600}
        footer={null}
        keyboard={false}
        onCancel={onCancel}
        title={
          <Badge.Ribbon
            className="project-detail__badge"
            placement="start"
            text={
              <>
                {item.namespace}
                <span
                  style={{ fontSize: 10, paddingLeft: 5, color: "#93c5fd" }}
                >
                  ({item.cluster_name})
                </span>
              </>
            }
          >
            <div style={{ textAlign: "center", fontSize: 18 }}>{item.name}</div>
          </Badge.Ribbon>
        }
      >
        <Tabs
          destroyInactiveTabPane
          defaultActiveKey="1"
          centered
          style={{ height: "100%" }}
        >
          <TabPane tab={t("logs")} key="container-logs">
            <TabLog
              cardId={item.id}
              clusterId={item.cluster_id}
              namespace={item.namespace}
              name={item.name}
              type={item.type}
            />
          </TabPane>
          <TabPane tab={t("terminal")} key="shell" style={{ height: "100%" }}>
            <Suspense fallback={<Skeleton active />}>
              <ErrorBoundary>
                <Shell
                  resizeAt={resizeAt}
                  cardId={item.id}
                  clusterId={item.cluster_id}
                  namespace={item.namespace}
                  name={item.name}
                  type={item.type}
                />
              </ErrorBoundary>
            </Suspense>
          </TabPane>
        </Tabs>
      </DraggableModal>
    </div>
  );
};

export default memo(NamespaceCardItem);
