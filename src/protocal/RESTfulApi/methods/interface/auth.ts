import type { Status } from "@/protocal/RESTfulApi/axios/interface";
// Login ---------------------------------
// API 需要的值
export interface LoginParams {
  account: string;
  password: string;
}
// API 回傳的 data
export interface LoginResData {
  [key: string]: string;
}
// API 回傳結構
export interface LoginRes {
  data: LoginResData;
  status: Status;
}
// other ---------------------------------