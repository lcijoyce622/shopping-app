import type { AxiosRequestConfig } from "axios";

export const basic: AxiosRequestConfig = {
  method: "post",
  baseURL: "",
  transformRequest: [
    (data: any, headers: any) => {
      headers["Content-Type"] = "application/json";
      // headers.Authorization =
      //   localStorage.getHash(storageConst.tokenInfo)
      //     ? `Bearer ${localStorage.getHash(storageConst.tokenInfo).token}`
      //     : "";
      return data;
    }
  ],
  headers: {
    "Content-Type": "multipart/form-data"
  },
  // 攜帶憑證
  withCredentials: false,
  // 返回資料型別
  responseType: "json"
};
