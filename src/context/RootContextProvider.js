import React from "react";
import PropTypes from "prop-types";
import AuthContextProvider from "./auth/contextProvider";

const RootContextProvider = ({ children }) => (
  <AuthContextProvider>{children}</AuthContextProvider>
);

RootContextProvider.propTypes = {
  children: PropTypes.any,
};

export default RootContextProvider;
