import axios from "axios";
import * as fn from "./fn";
import { basic } from "./config";
import type { ResObject } from "./interface";

// create
const axiosIns = axios.create(basic);

// 回傳攔截
axiosIns.interceptors.response.use(
  (response): any => fn.HandleSuccessRes(response),
  (error) => fn.HandleErrorRes(error)
);

// ==============================================================================
// GetMethod
interface AnyParams {
  [key: string]: any;
}

export const Get = (uri: string, param: AnyParams | undefined = undefined): Promise<ResObject> => {
  return new Promise<ResObject>((resolve) => {
    axiosIns
      .get(`${uri}${fn.ToQueryStr(param)}`)
      .then((response: any) => resolve(response));
  });
};

// Post method
export const Post = (uri: string, param: AnyParams): Promise<ResObject> => {
  return new Promise<ResObject>((resolve) => {
    axiosIns
      .post(uri, JSON.stringify(param))
      .then((response: any) => resolve(response));
  });
};

// Put method
export const Put = (uri: string, param: AnyParams,
): Promise<ResObject> => {
  return new Promise<ResObject>((resolve) => {
    axiosIns
      .put(uri, JSON.stringify(param))
      .then((response: any) => resolve(response));
  });
};

// Delete method
export const Delete = (uri: string, param: AnyParams): Promise<ResObject> => {
  return new Promise<ResObject>((resolve) => {
    axiosIns
      .delete(`${uri}${fn.ToQueryStr(param)}`)
      .then((response: any) => resolve(response));
  });
};
