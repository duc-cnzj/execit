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
  "exec-it": {
    en: "exec-it",
    zh: "命令行工具",
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
  all: {
    en: "all",
    zh: "全部",
  },
  search: {
    en: "search",
    zh: "搜索",
  },
  remove: {
    en: "remove",
    zh: "删除",
  },
  "cluster namespace": {
    en: "cluster namespace",
    zh: "集群命名空间",
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
  Approved: {
    en: "Approved",
    zh: "已批准",
  },
  Rejected: {
    en: "Rejected",
    zh: "已拒绝",
  },
  Request: {
    en: "Request",
    zh: "请求中",
  },
  Revoked: {
    en: "Revoked",
    zh: "已撤销",
  },
  "The user": {
    en: "The user",
    zh: "用户",
  },
  "revoke reason": {
    en: "revoke reason",
    zh: "撤销原因",
  },
  "rbac.revoke_reason_empty": {
    en: "revoke reason can't empty",
    zh: "撤销原因不能为空",
  },
  "revoke permission confirm": {
    en: "revoke permission confirm",
    zh: "撤销权限确认",
  },
  "Are you sure you want to revoke this permission?": {
    en: "Are you sure you want to revoke this permission?",
    zh: "确定要撤销这个权限？",
  },
  "reject reason": {
    en: "reject reason",
    zh: "拒绝原因",
  },
  "unknown": {
    en: "unknown",
    zh: "未知",
  },
  "email": {
    en: "email",
    zh: "邮箱",
  },
  "apply for": {
    en: "apply for",
    zh: "点击申请",
  },
  "apply for permission": {
    en: "apply for permission",
    zh: "申请权限",
  },
  "reason": {
    en: "reason",
    zh: "理由",
  },
  "request sent": {
    en: "request sent",
    zh: "请求已发送",
  },
  "rbac.reject_reason_empty": {
    en: "reject reason can't empty",
    zh: "拒绝原因不能为空",
  },
  "reject permission confirm": {
    en: "reject permission confirm",
    zh: "拒绝权限确认",
  },
  "Are you sure you want to reject this permission?": {
    en: "Are you sure you want to reject this permission?",
    zh: "确定要拒绝这个权限？",
  },
  "Initiate a permission request": {
    en: "Initiate a permission request",
    zh: "发起权限申请",
  },
  approved: {
    en: "approved",
    zh: "通过",
  },
  reject: {
    en: "reject",
    zh: "驳回",
  },
  revoke: {
    en: "revoke",
    zh: "撤销",
  },
  rbac: {
    en: "RBAC",
    zh: "权限管理",
  },
  "viewing Operation Records": {
    en: "viewing Operation Records",
    zh: "查看操作记录",
  },
  "speed": {
    en: "speed",
    zh: "速度",
  },
  "login": {
    en: "login",
    zh: "登录",
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
  "size": {
    en: "size",
    zh: "大小",
  },
  username: {
    en: "username",
    zh: "用户名",
  },
  "show changes": {
    en: "show changes",
    zh: "显示变更",
  },
  duration: {
    en: "duration",
    zh: "时长",
  },
  "Are you sure you want to delete this file?": {
    en: "Are you sure you want to delete this file?",
    zh: "确定要删除此文件吗？",
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
