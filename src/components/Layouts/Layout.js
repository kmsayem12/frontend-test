import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
const { Content } = Layout;

function Layouts({ children }) {
  return (
    <Layout>
      <Content style={{ padding: "0 50px" }}>{children}</Content>
    </Layout>
  );
}

Layouts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layouts;
