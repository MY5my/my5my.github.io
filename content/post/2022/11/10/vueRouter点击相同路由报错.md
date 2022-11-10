---
title: "VueRouter点击相同路由报错"
date: 2022-11-10T09:41:50+08:00
draft: false
tags: ["router"]
isCJKLanguage: true
categories: ["Vue"]
---
## 原因
可能是vue在3.0以上的版本中的错误提示，不允许从当前路由跳转到当前路由，点击重复路由产生的报错信息;
回调形式改成promise api了，返回的是promise，如果没有捕获到错误，控制台始终会出现如上图的警告。


## 报错信息
![配置文件](/images/vue/vuerouterbc.jpg)
```shell script
Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location: "/".
```


## 解决办法
1.vue-router进行降级 (不推荐使用)
    1).卸载原有版本安装新版本
    ```shell script
      npm uninstall vue-router
      npm i vue-router@3.0.0
    ```
    2).直接安装对应版本
    ```shell script
      npm i vue-router@3.0 -S
    ```
2.在让router.js中增加如下代码，重写原型上的push方法,统一处理错误信息。(推荐)
```shell script
//解决 点击相同路由报错问题
const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//如push没有效果可将push改为replace
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

```

3.在每个使用this.$router.push跳转时,使用 catch 方法捕获 router.push 异常。
```shell script
this.$router.push(route).catch(err => {
  console.log('输出报错',err)
})
```
4.补齐router.push()的第三个参数
```shell script
this.$router.push(route, () => {}, (e) => {
    console.log('输出报错',e) 
})
```
