import React, { useState, useEffect, useCallback, memo } from "react";
import { bg } from "../api/background";
import pb from "../api/compiled";
import { Form, Button, Input } from "antd";
import { useAuth } from "../contexts/auth";
import { useHistory } from "react-router-dom";
import {
  GoogleOutlined,
  GithubOutlined,
  QqOutlined,
  WechatOutlined,
  PushpinFilled,
  PushpinOutlined,
} from "@ant-design/icons";
import { settings as settingsApi } from "../api/auth";
import { setState, isRandomBg, toggleRandomBg } from "../utils/token";

const Login: React.FC = () => {
  const [bgInfo, setBgInfo] = useState<pb.BackgroundResponse>();
  const [settings, setSettings] = useState<pb.AuthSettingsResponse>();
  const [random, setRandom] = useState(isRandomBg());

  useEffect(() => {
    bg({ random: isRandomBg() }).then((res) => setBgInfo(res.data));
    settingsApi().then((res) => {
      setSettings(res.data);
    });
  }, []);

  const h = useHistory();
  const auth = useAuth();

  const renderOidcItem: (name: string) => React.ReactNode = useCallback(
    (name: string) => {
      switch (name) {
        case "wechat":
          return (
            <div className="login__sso-icon-item">
              <WechatOutlined />
            </div>
          );
        case "qq":
          return (
            <div className="login__sso-icon-item">
              <QqOutlined />
            </div>
          );
        case "github":
          return (
            <div className="login__sso-icon-item">
              <GithubOutlined />
            </div>
          );
        case "google":
          return (
            <div className="login__sso-icon-item">
              <GoogleOutlined />
            </div>
          );
        default:
          return <div className="login__sso-item__name">{name}</div>;
      }
    },
    []
  );

  return (
    <div
      className="login__bg"
      style={bgInfo?.url ? { backgroundImage: "url(" + bgInfo.url + ")" } : {}}
    >
      <div
        className="login__pin"
        onClick={() => {
          setRandom(toggleRandomBg());
        }}
        title={random ? "pin" : "unpin"}
      >
        {random ? <PushpinOutlined /> : <PushpinFilled />}
      </div>
      <div className="login__card">
        <div className="login__title"><span style={{textTransform: "uppercase"}}>ExecIt</span> Login</div>
        <div>
          <Form
            name="basic"
            onFinish={(values: any) => {
              auth.login(values.username, values.password, () => {
                h.push("/");
              });
            }}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: "please enter user name" }]}
            >
              <Input placeholder="username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please enter password" }]}
            >
              <Input.Password placeholder="password" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Login
              </Button>
            </Form.Item>

            <div className="login__sso-card">
              {settings?.items.map((item, index) => (
                <Form.Item key={index}>
                  <a
                    href="javascript(0);"
                    onClick={(e) => {
                      e.preventDefault();
                      setState(item.state || "");
                      window.location.href = item.url || "/login";
                    }}
                    className="login__sso-item"
                  >
                    {renderOidcItem(item.name || "")}
                  </a>
                </Form.Item>
              ))}
            </div>
          </Form>
        </div>
      </div>

      {bgInfo?.copyright ? (
        <div className="login__copyright">
          <div>{bgInfo.copyright}</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default memo(Login);
