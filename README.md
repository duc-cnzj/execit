<h1 align="center">execit</h1>
<p align="center">exec any pod in one web page.</p>
<br><br>

## 💡 Intro

in kubernetes.

## ✨  Installation

```shell
kubectl apply -f https://raw.githubusercontent.com/duc-cnzj/execit/master/deploy.yaml
kubectl port-forward -n execit svc/execit 31996:80
```

open http://localhost:31996

## ✨  Features

* multi cluster
* like kubernetes dashboard, but more simple and powerful.

## TODO

- [x] Multi-cluster management
- [x] base on deployment, statefulset
- [ ] RBAC
