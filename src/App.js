import React from "react";
import Layout from "./components/Layouts";
import AppRoutes from "./router";
import "./App.less";

const App = () => (
  <div className="App">
    <Layout>
      <AppRoutes />
    </Layout>
  </div>
);

export default App;
