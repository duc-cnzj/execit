import React, { useEffect, useState, memo } from "react";
import { DraggableModalProvider } from "../pkg/DraggableModal/DraggableModalProvider";
import "../pkg/DraggableModal/index.css";
import pb from "../api/compiled";
import { Card, Row, Col } from "antd";
import { cardAll } from "../api/card";
import NamespaceCardItem from "./NamespaceCardItem";

const AppContent: React.FC = () => {
  const [data, setData] = useState<pb.CardItemsList[]>([]);

  useEffect(() => {
    cardAll().then((res) => {
      setData(res.data.items);
    });
  }, []);

  return (
    <DraggableModalProvider>
      <div className="content" style={{ marginBottom: 30 }}>
        <Row gutter={[16, 16]}>
          {data.map((item) => (
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
                  <div style={{ width: "300" }}>
                    <span style={{ marginRight: 10 }}>
                      cluster: {item.cluster_name}
                    </span>
                    <span>namespace: {item.namespace}</span>
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
          ))}
        </Row>
      </div>
    </DraggableModalProvider>
  );
};

export default memo(AppContent);
