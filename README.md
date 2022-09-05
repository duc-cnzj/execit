<h1 align="center">exec-it</h1>
<p align="center">exec pods in one web page.</p>
<br><br>

## 💡 Intro

Super simple terminal management tool in k8s.

## ✨  Features

* multi cluster
* like kubernetes dashboard, but more simple and friendly.
* audit log.
* i18n.

## 🚀  Installation

```shell
kubectl apply -f https://raw.githubusercontent.com/duc-cnzj/execit/master/deploy.yaml

kubectl port-forward -n execit svc/execit 31996:80
```

username: `admin`, password: `123456`

open http://localhost:31996

## 💡 Minimum permissions required

| Resource     | Verbs            |
| ------------ | ---------------- |
| pods         | `get`, `list`, `watch` |
| deployments  | `get`, `list`, `watch` |
| statefulsets | `get`, `list`, `watch` |
| pods/exec    | `create`         |
| pods/log     | `get`            |
| metrics.k8s.io/pods(optional)  | `get` |


## 🧀 Preview

![execit-preview](./images/img_1.png)
![execit](./images/img.png)
![user commands](./images/img_2.png)

## TODO

- [x] Multi-cluster management
- [x] base on deployment, statefulset
- [x] RBAC
- [x] base permission for execit