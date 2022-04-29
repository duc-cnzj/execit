import React, { useEffect, createContext, useState, useContext } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { message } from "antd";
import { login, info } from "../api/auth";
import { setToken, getToken, removeToken } from "../utils/token";
import pb from "../api/compiled";
import { t } from "i18next";

export const authContext = createContext<any>(null);

const realAuth = {
  async signin(username: string, password: string) {
    return login({ username, password }).then((res) => {
      setToken(res.data.token);
      return this.info();
    });
  },
  async signout() {
    removeToken();
  },
  async info() {
    console.log(getToken());
    return info();
  },
};

function ProvideAuth({ children }: { children: any }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

function useAuth(): {
  login: (username: string, password: string, cb: () => void) => {};
  user: pb.auth.InfoResponse;
  setUser: (u: pb.auth.InfoResponse) => void;
  logout: (cb: () => void) => {};
  isAdmin: () => boolean;
  hasCardPermission: (cardID: number) => boolean;
} {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState<pb.auth.InfoResponse>();

  const h = useHistory();
  useEffect(() => {
    if (getToken() && !user) {
      info()
        .then((res) => {
          setUser(res.data);
        })
        .catch((e) => {
          removeToken();
          h.push("/login");
        });
    }
  }, [user, h]);

  const signin = (username: string, password: string, cb: any) => {
    realAuth
      .signin(username, password)
      .then((res) => {
        setUser(res.data);
        cb();
        message.success(t("Login successfully"));
      })
      .catch((e) => {
        console.log(e);
        message.error(t("wrong username or password"));
      });
  };

  const signout = (cb: any) => {
    realAuth.signout().then(() => {
      setUser(undefined);
      cb();
      message.success(t("Login successfully"));
    });
  };

  const isAdmin = () => {
    return user ? user.is_admin : false;
  };

  const hasCardPermission = (cardID: number): boolean => {
    if (user?.is_admin) {
      return true;
    }
    let has: boolean = false;
    if (user?.permissions) {
      for (let index = 0; index < user.permissions.length; index++) {
        const element = user?.permissions[index];
        if (element.permission === pb.rbac.Permission.Card) {
          for (let index = 0; index < element.items.length; index++) {
            if (Number(element.items[index]) === Number(cardID)) {
              return true
            }
          }
          break;
        }
      }
    }
    return has;
  };

  return {
    setUser,
    user,
    isAdmin,
    login: signin,
    logout: signout,
    hasCardPermission,
  };
}

function PrivateRoute({
  path,
  exact,
  children,
  ...rest
}: {
  exact?: boolean;
  path: string;
  children: any;
}) {
  return (
    <Route
      {...rest}
      exact={exact}
      render={({ location }) =>
        getToken() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
function GuestRoute({
  path,
  children,
  ...rest
}: {
  path: string;
  children: any;
}) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !getToken() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export { ProvideAuth, PrivateRoute, useAuth, useProvideAuth, GuestRoute };
