---
title: "VueAxios封装"
date: 2022-08-04T10:04:37+08:00
draft: false
tags: [""]
isCJKLanguage: true
categories: ["Vue"]
---

```shell script
在main.js里import websocket from './websocket.js',后，
需要将websocket挂载到Vue中，Vue.prototype.$webscoket = websocket。
在组件中直接this.$webscoket就可以使用了
```


## 一个js文件是可以有多个 export，但是一个js文件中只能有一个export default
想要多个变量时
