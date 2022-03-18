import { devicesUrl, notifyUrl } from "../../api/endpoints";
import http from "../../services";

export const Device = {
  device: () => http.get(devicesUrl),
  notify: (data) => http.post(notifyUrl, data),
};
