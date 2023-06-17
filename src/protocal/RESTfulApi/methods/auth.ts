import { Post, Get } from "../axios";
import type { LoginParams, LoginRes } from "./interface/auth";
const route = {
  login: "/api/staff/login", // 登入
  version: "/api/version"
};

// 登入
export const Login = (params: LoginParams): Promise<LoginRes> => Post(route.login, params);
export const GetVersion = (): any => Get(route.version);