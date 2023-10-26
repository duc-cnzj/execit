import React, { memo, useEffect, useState, useCallback, ReactNode } from "react";
import PodEntryPoint from "./PodEntrypoint";

import { cardAllContainers } from "../api/card";
import { Radio, Skeleton, Button, Tag } from "antd";
import pb from "../api/compiled";
import LazyLog from "../pkg/lazylog/components/LazyLog";
import { getLang, getToken } from "./../utils/token";
import { useTranslation } from "react-i18next";
import { AnsiUp } from "ansi_up";

const ProjectContainerLogs: React.FC<{
  cardId: number;
  clusterId: number;
  namespace: string;
  name: string;
  type: string;
}> = ({ clusterId, namespace, name, type, cardId }) => {
  const [value, setValue] = useState<string>();
  const { t } = useTranslation();
  const [list, setList] = useState<pb.container.Item[]>();

  const listContainer = useCallback(async () => {
    return cardAllContainers(cardId).then((res) => {
      setList(res.data.items);
      return res;
    });
  }, [cardId]);

  useEffect(() => {
    listContainer().then((res) => {
      if (res.data.items.length > 0) {
        let first = res.data.items[0];
        setValue(first.pod + "|" + first.container);
      }
    });
  }, [setList, namespace, listContainer]);

  const [timestamp, setTimestamp] = useState(new Date().getTime());

  const getUrl = () => {
    let [pod, container] = (value as string).split("|");

    return `${
      process.env.REACT_APP_BASE_URL
    }/api/containers/cards/${cardId}/clusters/${clusterId}/namespaces/${namespace}/pods/${pod}/containers/${container}/stream_logs?timestamp=${timestamp}&lang=${getLang()}`;
  };

  const reloadLog = useCallback((e: any) => {
    setValue(e.target.value);
    setTimestamp(new Date().getTime());
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Radio.Group value={value} style={{ marginBottom: 10 }}>
        {list?.map((item) => (
          <>
            <Radio
              onClick={reloadLog}
              key={item.pod + "|" + item.container}
              value={item.pod + "|" + item.container}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {item.container}
                <Tag color="magenta" style={{ marginLeft: 5 }}>
                  {item.pod}{" "}
                  {item.is_new && (
                    <span
                      style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        color: "red",
                        textShadow: "0px 0px 3px red",
                        marginRight: 3,
                      }}
                    >
                      new
                    </span>
                  )}
                </Tag>
                {item.proxies && item.proxies.length > 0 && (
                  <PodEntryPoint
                    clusterID={item.cluster_id}
                    namespace={namespace}
                    pod={item.pod}
                    proxies={item.proxies}
                  />
                )}
              </div>
            </Radio>
          </>
        ))}
      </Radio.Group>

      <div
        className="project-container-logs"
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
          height: "100%",
        }}
      >
        {value ? (
          <LazyLog
            renderErrLineFunc={(e: any) => {
              return JSON.parse(e.body).error.message;
            }}
            fetchOptions={{ headers: { Authorization: getToken() } }}
            enableSearch
            selectableLines
            captureHotkeys
            formatPart={(text: string): ReactNode => {
              let res = JSON.parse(text);
              if (res.error) {
                return (
                  <span style={{ textAlign: "center" }}>
                    <Button
                      type="text"
                      style={{ color: "red", fontSize: 12 }}
                      size="small"
                      onClick={() => setTimestamp(new Date().getTime())}
                    >
                      {t("Click to reload")}
                    </Button>
                  </span>
                );
              }
              return (
                <span
                  dangerouslySetInnerHTML={{
                    __html: new AnsiUp().ansi_to_html(res.result.log),
                  }}
                />
              );
            }}
            stream
            onError={(e: any) => {
              if (e.status === 404) {
                listContainer().then((res) => {
                  if (res.data.items.length > 0) {
                    let first = res.data.items[0];
                    setValue(first.pod + "|" + first.container);
                  }
                });
              }
            }}
            follow={true}
            url={getUrl()}
          />
        ) : (
          <Skeleton active />
        )}
      </div>
    </div>
  );
};

export default memo(ProjectContainerLogs);
