---
title: "Vue定位滚动"
date: 2022-06-09T10:12:27+08:00
draft: false
tags: ["srcollto"]
isCJKLanguage: true
categories: ["Vue"]
---

## 适用于vue2.x和vue3.x版本

>安装插件
```shell script
npm install --save vue-scrollto
```
>在main中引入并使用
```shell script
var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)

```
>在页面使用 
如下图所示
![代码1](/images/vue/scroll1.jpg)

## 点击按钮上加上
```shell script
v-scroll-to="'#setDiv'"
```
![代码2](/images/vue/scroll2.jpg)

## 在需要跳转的地方加上
```shell script
id="setDiv"
```
