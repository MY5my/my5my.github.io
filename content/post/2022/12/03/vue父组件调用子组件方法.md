---
title: "Vue父组件调用子组件方法"
date: 2023-02-01T17:08:08+08:00
draft: false
tags: [""]
isCJKLanguage: true
categories: ["Vue"]
---
## 子组件
```shell script
childFun() {
  console.log('父组件会调用子组件中此方法')
  this.visibe=false
},
```
## 父组件
```shell script
//html
  <CollectBox  ref="childCollect" @closeDetails="closeDetails"></CollectBox>
//js
methods:{
  closeDetails(){
   this.$ref.childCollect.childFun()
  }
}
```
