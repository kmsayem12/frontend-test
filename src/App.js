import React from "react";
import Layout from "./components/Layouts";
import AppRoutes from "./router";
import RootContextProvider from "./context";

import "./App.less";

const App = () => (
  <div className="App">
    <RootContextProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </RootContextProvider>
  </div>
);

export default App;
