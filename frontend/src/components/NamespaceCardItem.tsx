import React, {
  useState,
  useCallback,
  memo,
  lazy,
  Suspense,
  useMemo,
} from "react";
import { DraggableModal } from "../pkg/DraggableModal";
import { Button, Tabs, Skeleton, Badge, Popover, message } from "antd";
import ErrorBoundary from "./ErrorBoundary";
import pb from "../api/compiled";
import { rbacApplyFor, rbacNotApprovedReason } from "../api/rbac";
import { throttle } from "lodash";
import TabLog from "./TabLog";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/auth";
const Shell = lazy(() => import("./TabShell"));

const { TabPane } = Tabs;

const NamespaceCardItem: React.FC<{
  item: pb.card.Items;
}> = ({ item }) => {
  const [visible, setVisible] = useState(false);
  const onOk = useCallback(() => setVisible(true), []);
  const [resizeAt, setResizeAt] = useState<number>(0);
  const [reason, setReason] = useState("");
  const fetchReason = useMemo(
    () =>
      throttle((id) => {
        rbacNotApprovedReason({
          subject_id: id,
          permission: pb.rbac.Permission.Card,
        }).then(({ data }) => {
          setReason(data.reason);
        });
      }, 10000),
    []
  );

  const onCancel = useCallback(() => {
    setVisible(false);
  }, []);
  const { t } = useTranslation();

  const { hasCardPermission } = useAuth();
  const MyButton: React.ReactNode = (
    <Button
      style={{ width: "100%" }}
      disabled={!hasCardPermission(item.id)}
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
  );

  return (
    <div className="project-detail">
      {!hasCardPermission(item.id) ? (
        <Popover
          placement="top"
          overlayInnerStyle={{ maxWidth: 200, whiteSpace: "pre" }}
          content={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Button
                type="link"
                size="small"
                className="project-detail__tooltip-button"
                onClick={() => {
                  rbacApplyFor({
                    subject_id: item.id,
                    permission: pb.rbac.Permission.Card,
                  }).then(() => {
                    message.success(t("request sent"));
                  });
                }}
              >
                {t("apply for")}
              </Button>
              <div style={{wordBreak: "break-all", whiteSpace: "normal" }}>
                {reason && (
                  <p style={{ fontSize: 10}}>
                    {t("reject reason")}: {reason}
                  </p>
                )}
              </div>
            </div>
          }
          title={t("apply for permission")}
        >
          <div
            onMouseEnter={() => {
              fetchReason(item.id);
            }}
          >
            {MyButton}
          </div>
        </Popover>
      ) : (
        <>{MyButton}</>
      )}

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
                <span style={{ fontSize: 10, paddingLeft: 5 }}>
                  {item.namespace}
                  <span style={{ marginLeft: 5 }}>({item.cluster_name})</span>
                </span>
              </>
            }
          >
            <div
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
            >
              {item.name}
            </div>
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
