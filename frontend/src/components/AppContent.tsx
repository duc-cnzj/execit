import React, { useEffect, useState, memo } from "react";
import { DraggableModalProvider } from "../pkg/DraggableModal/DraggableModalProvider";
import "../pkg/DraggableModal/index.css";
import pb from "../api/compiled";
import { Card, Row, Col, Empty, Button, Tag } from "antd";
import { cardAll } from "../api/card";
import NamespaceCardItem from "./NamespaceCardItem";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectSyncAt } from "../store/reducers/card";
import { sortBy } from "lodash";
import { useAuth } from "../contexts/auth";

const AppContent: React.FC = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<pb.card.ItemsList[]>([]);
  const h = useHistory();
  useEffect(() => {
    cardAll().then((res) => {
      setData(res.data.items);
    });
  }, []);
  const s = useSelector(selectSyncAt);
  useEffect(() => {
    cardAll().then((res) => {
      setData(res.data.items);
    });
  }, [s]);
  const { hasCardPermission } = useAuth();

  return (
    <DraggableModalProvider>
      <div className="content" style={{ marginBottom: 30 }}>
        <Row gutter={[16, 16]}>
          {data.length > 0 ? (
            data.map((item) => (
              <Col
                md={12}
                lg={8}
                sm={12}
                xs={24}
                key={`${item.cluster_id}-${item.namespace}`}
              >
                <Card
                  style={{ width: "100%" }}
                  title={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ fontSize: 12 }}>
                        {t("namespace")}:{" "}
                        <span style={{ fontSize: 14, fontWeight: "bold" }}>
                          {item.namespace}
                        </span>
                      </span>
                      <Tag
                        className="content__cluster-tag"
                        style={{
                          borderRadius: 15,
                          maxWidth: "30%",
                          padding: "0 15px",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          height: 24,
                          lineHeight: "24px",
                        }}
                        title={`cluster: ${item.cluster_name}`}
                      >
                        {item.cluster_name}
                      </Tag>
                    </div>
                  }
                >
                  <Row gutter={[8, 8]}>
                    {sortBy(
                      item.items,
                      (item) => !hasCardPermission(item.id)
                    ).map((data, idx) => (
                      <Col key={idx} md={12} xs={24} sm={24}>
                        <NamespaceCardItem item={data} />
                      </Col>
                    ))}
                  </Row>
                </Card>
              </Col>
            ))
          ) : (
            <Col span={24}>
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
                    h.push("/cluster-manager");
                  }}
                >
                  {t("Create Now")}
                </Button>
              </Empty>
            </Col>
          )}
        </Row>
      </div>
    </DraggableModalProvider>
  );
};

export default memo(AppContent);
