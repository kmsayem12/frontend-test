import React, { useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import PropTypes from "prop-types";
import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorageItem,
} from "../../lib/helpers";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const getStorageData = getLocalStorage("auth_token");
    if (getStorageData) {
      setToken(getStorageData);
    }
  }, []);

  useEffect(() => {
    if (token) {
      setLocalStorage("auth_token", token);
    } else {
      removeLocalStorageItem("auth_token");
    }
  }, [token]);

  return (
    <AuthContext.Provider value={[token, setToken]}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.any,
};

export default AuthContextProvider;
