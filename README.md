<h1 align="center">execit</h1>
<p align="center">exec any pod in one web page.</p>
<br><br>

## 💡 Intro

Super simple terminal management in k8s.

## ✨  Features

* multi cluster
* like kubernetes dashboard, but more simple and powerful.

## 🧀 Preview

![execit-preview](./images/img_1.png)
![execit](./images/img.png)

## 🚀  Installation

```shell
kubectl apply -f https://raw.githubusercontent.com/duc-cnzj/execit/master/deploy.yaml

kubectl port-forward -n execit svc/execit 31996:80
```

username: `admin`, password: `123456`

open http://localhost:31996

## TODO

- [x] Multi-cluster management
- [x] base on deployment, statefulset
- [ ] RBAC
- [ ] base permission for execit
