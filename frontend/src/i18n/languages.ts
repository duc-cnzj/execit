interface Lang {
  [k: string]: {
    zh: string;
    en: string;
  };
}

interface LangResult {
  [k: string]: {
    translation: { [k: string]: string };
  };
}
const languages: Lang = {
  duc: {
    en: "hello",
    zh: "你好",
  },
  "Don't have any project cards yet": {
    en: "Don't have any project cards yet",
    zh: "还没有任何项目卡片",
  },
  "Create Now": {
    en: "Create Now",
    zh: "立即创建",
  },
  "api document": {
    en: "api document",
    zh: "api文档",
  },
  "cluster manager": {
    en: "cluster manager",
    zh: "集群管理",
  },
  events: {
    en: "events",
    zh: "事件",
  },
  logout: {
    en: "logout",
    zh: "退出",
  },
  "add cluster": {
    en: "add cluster",
    zh: "添加集群",
  },
  "cluster name": {
    en: "cluster name",
    zh: "集群名称",
  },
  "hei man, don't turn it over, it's over!": {
    en: "hei man, don't turn it over, it's over!",
    zh: "老铁，别翻了到底了！",
  },
  "cluster management": {
    en: "cluster management",
    zh: "集群管理",
  },
  Submit: {
    en: "Submit",
    zh: "提交",
  },
  success: {
    en: "success",
    zh: "成功",
  },
  "The state is inconsistent, please log in again": {
    en: "The state is inconsistent, please log in again",
    zh: "状态不一致，请重新登录",
  },
  Create: {
    en: "Create",
    zh: "创建",
  },
  Update: {
    en: "Update",
    zh: "更新",
  },
  Delete: {
    en: "Delete",
    zh: "删除",
  },
  Upload: {
    en: "Upload",
    zh: "上传",
  },
  add: {
    en: "add",
    zh: "添加",
  },
  remove: {
    en: "remove",
    zh: "删除",
  },
  Download: {
    en: "Download",
    zh: "下载",
  },
  "download file": {
    en: "download file",
    zh: "下载文件",
  },
  mystery: {
    en: "mystery",
    zh: "神秘",
  },
  logs: {
    en: "logs",
    zh: "日志",
  },
  terminal: {
    en: "terminal",
    zh: "终端",
  },
  "Exec Shell": {
    en: "Exec Shell",
    zh: "执行 shell",
  },
  total: {
    en: "total",
    zh: "总数",
  },
  commands: {
    en: "commands",
    zh: "命令",
  },
  "show commands": {
    en: "show commands",
    zh: "显示命令",
  },
  "wrong username or password": {
    en: "wrong username or password",
    zh: "用户名或密码错误",
  },
  "file space": {
    en: "file space",
    zh: "文件空间",
  },
  "Login successfully": {
    en: "Login successfully",
    zh: "登录成功",
  },
  "User not logged in": {
    en: "User not logged in",
    zh: "用户未登录",
  },
  password: {
    en: "password",
    zh: "密码",
  },
  "Login expired. Please log in again": {
    en: "Login expired. Please log in again",
    zh: "登录过期，请重新登录",
  },
  namespace: {
    en: "namespace",
    zh: "命名空间",
  },
  delete: {
    en: "delete",
    zh: "删除",
  },
  "add card": {
    en: "add card",
    zh: "添加卡片",
  },
  "uploading...": {
    en: "uploading...",
    zh: "上传中...",
  },
  "upload to container": {
    en: "upload to container",
    zh: "上传到容器",
  },
  "File {{info.file.name}} upload failed": {
    en: "File {{info.file.name}} upload failed",
    zh: "文件{{info.file.name}}上传失败",
  },
  "File {{name}} failed to upload to container": {
    en: "File {{name}} failed to upload to container",
    zh: "文件{{name}}上传到容器失败",
  },
  "File {{name}} has been uploaded under container {{pod_file_path}}": {
    en: "File {{name}} has been uploaded under container {{pod_file_path}}",
    zh: "文件{{name}}已上传到容器{{pod_file_path}}",
  },
  "The maximum file size cannot exceed 50MB!": {
    en: "The maximum file size cannot exceed 50MB!",
    zh: "文件大小不能超过50MB！",
  },
  "Click to reload": {
    en: "Click to reload",
    zh: "点击重新加载",
  },
  username: {
    en: "username",
    zh: "用户名",
  },
  "show changes": {
    en: "show changes",
    zh: "显示变更",
  },
  Login: {
    en: "Login",
    zh: "登录",
  },
  "delete file": {
    en: "delete file",
    zh: "删除文件",
  },
  "successfully deleted": {
    en: "successfully deleted",
    zh: "删除成功",
  },
  "Click to clean up": {
    en: "Click to clean up",
    zh: "点击清理",
  },
  "Cleaned up successfully": {
    en: "Cleaned up successfully",
    zh: "清理成功",
  },
};

const transformLanguages = (l: Lang): LangResult => {
  let zh: { [k: string]: string } = {},
    en: { [k: string]: string } = {};
  Object.keys(l).forEach((k) => {
    zh[k] = l[k].zh;
    en[k] = l[k].en;
  });
  return { zh: { translation: zh }, en: { translation: en } };
};

export default transformLanguages(languages);
