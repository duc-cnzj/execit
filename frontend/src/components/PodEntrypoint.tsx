import React, { memo } from "react";
import { Button, Popover } from "antd";
import { container } from "../api/compiled";
import { LinkOutlined } from "@ant-design/icons";
import {newProxy} from '../api/container'

const PodProxyEndpoint: React.FC<{
  clusterID: number;
  namespace: string;
  pod: string;
  proxies: container.ProxyInfo[]
}> = ({ proxies, clusterID, namespace, pod }) => {

  return  <Popover content={
    <div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
    {proxies.map((v, k) =>
          <Button
              style={{width: "auto", fontSize: 12, padding: 0}}
              target="_blank"
              size={"small"}
              href={`${v.url}`}
              type="link"
              onClick={()=>{
                newProxy({
                  cluster_id: clusterID,
                  namespace: namespace,
                  pod: pod,
                  port: v.port,
                })
              }}
          >{v.name}({v.port})</Button>
    )}
    </div>
  }>
    <LinkOutlined className={"pod-proxy-link"} />
  </Popover>
};

export default memo(PodProxyEndpoint);
