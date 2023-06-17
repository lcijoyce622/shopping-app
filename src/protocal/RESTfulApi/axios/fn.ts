import type { AxiosResponse } from "axios";
import type { ResObject, AnyObject } from "./interface";

const errData: ResObject = {
  data: null,
  status: {
    err: 2,
    code: "",
    message: "",
    emessage: "",
    details: []
  }
};

// 回傳成功
export const HandleSuccessRes = (response: AxiosResponse): ResObject => {
  // TODO 攔截器
  return response.data;
};

// 回傳失敗
export const HandleErrorRes = (error: Error): ResObject => {
  console.log("err", error);
  // 未知異常
  return errData;
};

// Object 轉換為 query
export const ToQueryStr = (params: AnyObject | undefined): string => {
  if (!params) return "";
  return `?${Object.entries(params)
    .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
    .join("&")}`;
};