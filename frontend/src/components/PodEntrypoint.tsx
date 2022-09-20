import React, { memo } from "react";
import { Button, Popover } from "antd";
import { container } from "../api/compiled";
import { LinkOutlined } from "@ant-design/icons";

const PodProxyEndpoint: React.FC<{
  proxies: container.ProxyInfo[]
}> = ({ proxies }) => {

  return  <Popover content={
    <div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
    {proxies.map((v, k) =>
          <Button
              style={{width: "auto", fontSize: 12, padding: 0}}
              target="_blank"
              size={"small"}
              href={`${v.url}`}
              type="link"
          >{v.name}({v.port})</Button>
    )}
    </div>
  }>
    <LinkOutlined className={"pod-proxy-link"} />
  </Popover>
};

export default memo(PodProxyEndpoint);
