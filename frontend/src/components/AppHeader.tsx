import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useWs, useWsReady } from "../contexts/useWebsocket";
import { UserOutlined } from "@ant-design/icons";
import { useAuth } from "../contexts/auth";
import { removeToken } from "../utils/token";
import { useHistory } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import pb from "../api/compiled";
import {
  LogoutOutlined,
  SettingOutlined,
  ReadOutlined,
  NotificationOutlined,
  KeyOutlined,
} from "@ant-design/icons";
import { useLang } from "../i18n/useI18n";
import { useTranslation } from "react-i18next";

const AppHeader: React.FC = () => {
  const lang = useLang();
  const h = useHistory();
  const { user, isAdmin } = useAuth();
  const { t } = useTranslation();
  const ws = useWs();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        className="app-title"
        style={{
          color: useWsReady() ? "white" : "red",
          textTransform: "lowercase",
        }}
      >
          {t("exec-it")}
      </Link>
      <div style={{ display: "flex", alignItems: "center" }}>
        <svg
          style={{ width: 18, height: 18, marginRight: 5 }}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <a
          className="app__lang-switcher"
          href="javascript(0);"
          onClick={(e) => {
            e.preventDefault();
            let langStr: string;
            if (lang.langName === "中文") {
              langStr = "en";
            } else {
              langStr = "zh";
            }
            lang.setLang(langStr);
            let s = pb.websocket.WsHandleSetLangInput.encode({
              type: pb.websocket.Type.HandleSetLang,
              lang: langStr,
            }).finish();
            ws?.send(s);
          }}
        >
          {lang.langName}
        </a>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {user ? (
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item style={{ fontSize: 12 }} key="0">
                    <a href="/docs/index.html" target="_blank">
                      <ReadOutlined /> {t("api document")}
                    </a>
                  </Menu.Item>
                  {isAdmin() ? (
                    <>
                      <Menu.Item style={{ fontSize: 12 }} key="1">
                        <a
                          href="javascript(0);"
                          onClick={(e) => {
                            e.preventDefault();
                            h.push("/cluster-manager");
                          }}
                        >
                          <SettingOutlined /> {t("cluster manager")}
                        </a>
                      </Menu.Item>
                      <Menu.Item style={{ fontSize: 12 }} key="2">
                        <a
                          href="javascript(0);"
                          onClick={(e) => {
                            e.preventDefault();
                            h.push("/events");
                          }}
                        >
                          <NotificationOutlined /> {t("events")}
                        </a>
                      </Menu.Item>
                      <Menu.Item style={{ fontSize: 12 }} key="3">
                        <a
                          href="javascript(0);"
                          onClick={(e) => {
                            e.preventDefault();
                            h.push("/rbac");
                          }}
                        >
                          <KeyOutlined /> {t("rbac")}
                        </a>
                      </Menu.Item>
                    </>
                  ) : (
                    <></>
                  )}

                  <Menu.Divider />
                  <Menu.Item style={{ fontSize: 12 }} key="100">
                    <a
                      href="javascript(0);"
                      onClick={(e) => {
                        e.preventDefault();
                        removeToken();
                        if (user.logout_url) {
                          window.location.href = user.logout_url;
                        } else {
                          h.push("/login");
                        }
                      }}
                    >
                      <LogoutOutlined /> {t("logout")}
                    </a>
                  </Menu.Item>
                </Menu>
              }
              trigger={["click"]}
            >
              <a
                href="javascript(0);"
                style={{ marginLeft: 20, color: "white" }}
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                {user.avatar ? (
                  <img
                    className="avatar"
                    style={{ borderRadius: "50%", width: 20, height: 20 }}
                    src={user.avatar}
                    alt="avatar"
                  />
                ) : (
                  <UserOutlined />
                )}

                <span style={{ fontSize: 12, marginLeft: 5 }}>{user.name}</span>
              </a>
            </Dropdown>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(AppHeader);
