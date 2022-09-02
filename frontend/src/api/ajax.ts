import { message } from "antd";
import {
  getToken,
  getLang,
  removeToken,
  getLogoutUrl,
  removeLogoutUrl,
} from "./../utils/token";
import axios from "axios";
import { t } from "i18next";

const ajax = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  //   timeout: 1000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

// 添加请求拦截器
ajax.interceptors.request.use(
  (config) => {
    if (config.headers) {
      config.headers["Authorization"] = getToken();
      config.headers["Accept-Language"] = getLang();
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
ajax.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response;
  },
  (error) => {
    // 对响应错误做点什么
    if (error.response.status === 401) {
      if (getToken()) {
        removeToken();
        message.error(t<string>("Login expired. Please log in again"));
      }
      setTimeout(() => {
        if (window.location.pathname !== "/login") {
          let href = getLogoutUrl() || "/login";
          removeLogoutUrl();
          window.location.href = href;
        }
      }, 1000);
    }
    return Promise.reject(error);
  }
);

export default ajax;
