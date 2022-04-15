import React, { useEffect, memo } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { exchange, info } from "../api/auth";
import { setToken, setLogoutUrl } from "../utils/token";
import { useAuth } from "../contexts/auth";
import { getState, removeState } from "../utils/token";
import { message } from "antd";
import { useTranslation } from "react-i18next";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Callback: React.FC = () => {
  let query = useQuery();
  const h = useHistory();
  let code = query.get("code");
  let state = query.get("state");
  const {t} =useTranslation()
  const auth = useAuth();
  if (!code) {
    h.push("/login");
  }
  useEffect(() => {
    if (code) {
      if (state === getState()) {
        exchange({ code }).then((res) => {
          setToken(res.data.token);
          info().then((res) => {
            setLogoutUrl(res.data.logout_url);
            auth.setUser(res.data);
          });
          h.push("/");
        });
      } else {
        message.error(t("The state is inconsistent, please log in again"));
        removeState();
        h.push("/login");
      }
    }
  }, [code, h, auth, state, t]);

  return <div>login....</div>;
};

export default memo(Callback);
