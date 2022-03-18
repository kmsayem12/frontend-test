import { authUrl } from "../../api/endpoints";
import http from "../../services";

export const Auth = {
  login: (data) => http.post(authUrl, data),
};
