import React, { FC, lazy, Suspense } from "react";
import { Layout } from "antd";
import AppContent from "./components/AppContent";
import { ProvideWebsocket } from "./contexts/useWebsocket";
import { Switch, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import { PrivateRoute } from "./contexts/auth";
const { Header, Content, Footer } = Layout;

const ClusterManager = lazy(
  () => import("./components/ClusterManager")
);

const Events = lazy(() => import("./components/Events"));

const App: FC = () => {
  return (
    <ProvideWebsocket>
      <Layout className="app">
        <Header className="app__header" style={{ position: "fixed", zIndex: 1, width: "100%", overflow: "hidden" }}>
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
