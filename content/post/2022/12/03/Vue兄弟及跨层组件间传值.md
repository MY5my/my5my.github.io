---
title: "Vue兄弟及跨层组件间传值"
date: 2022-12-03T17:08:08+08:00
draft: false
tags: [""]
isCJKLanguage: true
categories: ["Vue"]
---
# 概述：
>兄弟通信：
Bus、Vuex


>跨级通信：
Bus、Vuex、provide/inject API、$attrs/$listeners


## 实现步骤
* 兄弟之间传值通过 EventBus做中间的桥梁
* 在components文件中新建一个 js 文件,页面中导入Vue实例,然后导出一个new Vue()
* 在需要兄弟之间传值的组件中导入这个文件
* 传值时通过导入的文件调用$emit 实现($emit("事件名称",需要传递的值))
* 接收时通过导入的文件调用$on通过回调函数实现
* 两者之间的自定义属性名保持一致。


1.component 文件夹中创建文件 eventBus.js,用来实现兄弟组件通信
```shell script
import Vue from "vue";
export default new Vue()
```
2.兄弟组件A中
```shell script
//html
<template>
    <div>
       <button @click="send">A组件给B组件传值</button>
    </div>
</template>
//js
methods: {
   send() {
     bus.$emit("share",'我是A组件');
   },
 },
```
3.兄弟组件B中
```shell script
//html
<template>
    <div>
        接收A组件的值{{this.acceptValue}}
    </div>
</template>
//js
data(){
    return{
        accept:''
    }
},
mounted(){
    bus.$on("share",val=>{
        this.acceptValue = val
    })
}

```
