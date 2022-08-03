---
title: "Vue解决axios在ie9下不发送请求"
date: 2020-12-03T17:30:21+08:00
draft: false
tags: ["vueaxios"]
isCJKLanguage: true
categories: ["Vue"]
---

## 安装命令
```shell script
  npm install es6-promise --save-dev

```
## 安装成功后，在main.js 
```shell script
import promise from 'es6-promise'
promise.polyfill()
```
