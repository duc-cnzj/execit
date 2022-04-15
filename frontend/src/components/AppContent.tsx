import React, { useEffect, useState, memo } from "react";
import { DraggableModalProvider } from "../pkg/DraggableModal/DraggableModalProvider";
import "../pkg/DraggableModal/index.css";
import pb from "../api/compiled";
import { Card, Row, Col, Empty, Button, Tag } from "antd";
import { cardAll } from "../api/card";
import NamespaceCardItem from "./NamespaceCardItem";
import { useHistory } from "react-router-dom";
import { useLang } from "../contexts/useI18n";

const AppContent: React.FC = () => {
  const [data, setData] = useState<pb.CardItemsList[]>([]);
  const h = useHistory();
  useEffect(() => {
    cardAll().then((res) => {
      setData(res.data.items);
    });
  }, []);

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
                        namespace:{" "}
                        <span style={{ fontSize: 14, fontWeight: "bold" }}>
                          {item.namespace}
                        </span>
                      </span>
                      <Tag
                        className="content__cluster-tag"
                        style={{
                          borderRadius: 15,
                          width: "30%",
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
                    {item.items.map((data, idx) => (
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
                description={<span>Don't have any project cards yet</span>}
              >
                <Button
                  type="primary"
                  onClick={() => {
                    h.push("/cluster-manager");
                  }}
                >
                  Create Now
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
