import axios from "axios";
import { message } from "antd";
import { getLocalStorage } from "../lib/helpers";

export const cancelTokenSource = axios.CancelToken.source();

const http = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  const auth_token = getLocalStorage("auth_token");
  if (auth_token) {
    const token = `token ${auth_token}`;
    config.headers.Authorization = token;
  }
  return config;
});

http.interceptors.response.use(null, (error) => {
  if (error?.response?.message) {
    message.error(error.response.message);
    return { error };
  }

  message.error("Something went wrong!");

  return { error };
});

export default http;
