import React, { FC, lazy, Suspense, useEffect } from "react";
import { Layout } from "antd";
import AppContent from "./components/AppContent";
import { ProvideWebsocket } from "./contexts/useWebsocket";
import { Switch, Route, useLocation } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import { PrivateRoute } from "./contexts/auth";
import RBAC from "./components/RBAC";
import { GlobalScrollbar } from "mac-scrollbar";
import "mac-scrollbar/dist/mac-scrollbar.css";
import { useDispatch } from "react-redux";
import { clearOpenedModals } from "./store/actions";

const { Header, Content, Footer } = Layout;

const ClusterManager = lazy(() => import("./components/ClusterManager"));

const Events = lazy(() => import("./components/Events"));

const App: FC = () => {
  const lo = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (lo.pathname !== "/") {
      dispatch(clearOpenedModals());
    }
  }, [lo.pathname, dispatch]);

  return (
    <ProvideWebsocket>
      <GlobalScrollbar />
      <Layout className="app">
        <Header
          className="app__header"
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            overflow: "hidden",
          }}
        >
          <AppHeader />
        </Header>
        <Content className="app-content">
          <Switch>
            <PrivateRoute path={`/cluster-manager`}>
              <Suspense fallback={null}>
                <ClusterManager />
              </Suspense>
            </PrivateRoute>
            <PrivateRoute path={`/events`}>
              <Suspense fallback={null}>
                <Events />
              </Suspense>
            </PrivateRoute>
            <PrivateRoute path={`/rbac`}>
              <Suspense fallback={null}>
                <RBAC />
              </Suspense>
            </PrivateRoute>
            <PrivateRoute path={`/`} exact>
              <AppContent />
            </PrivateRoute>
            <Route path="*" exact>
              404
            </Route>
          </Switch>
        </Content>
        <Footer className="app-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </ProvideWebsocket>
  );
};

export default App;
