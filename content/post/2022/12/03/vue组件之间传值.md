---
title: "Vue父子组件通信方式"
date: 2022-12-13T16:19:32+08:00
draft: false
tags: [""]
isCJKLanguage: true
categories: ["Vue"]
---
# 概述：

>父子通信：
>父向子传递数据是通过 props，子向父是通过 events（$emit）；通过父链/子链也可以通信（$parent/$children），ref 也可以访问组件实例；provide/inject ； API：$attrs/$listeners


# 父子组件间通信
## 1.props父子组件传值
* 父组件通过:名称=“自定义传值”向子组件传值
* 子组件通过props接受传递过来的值

父组件
```shell script
  <SearchBox :paramVal="paramVal" ></SearchBox>
  this.paramVal = '父组件向子组件传递的参数值'
```
子组件接受方法一
```shell script
  props:["paramVal"]
```
子组件接受方法二
```shell script
   props:{
        paramVal:{
        	//type:类型规定
            type:Number,
            //default:默认值
            default:0,
            //require:是否是必传
            require:true,
        }
   },
   //使用时直接this.paramVal使用
```


## 2.$emit父子组件传值
* 子传父通过 $emit 实现
* 在子组件中通过 $emit 方法传值给父组件
* 在父页面中的子组件标签中自定义事件接收

子组件
```shell script
//html
<template>
  <div>
    <button @click="giveFun">传递给父组件</button>
  </div>
</template>

//js
methods:{
    giveFun(){
        //emit 中第一个值是在父页面中接收的 事件名称 例如：childFun 要同父组件中@后面的名称一致
        //emit 中第二个值是要传递的数据  例如：我是子组件传递的值
        this.$emit("childFun",'我是子组件传递的值')
    }
}
```

父组件
```shell script
//html
<template>
  <div>
    <div>我是接收子组件的值:{{this.childValue}}</div>
    <Child :count="count" @childFun="acceptFun"></Child>
  </div>
</template>

//js
data () {
    return {
      childValue:"",
    },
},
methods:{
  //子组件调用给父组件传值$emit后会触发父组件的该方法
  acceptFun(val){
    //val代表子组件的传值，用childValue接收
    this.childValue=val
  }
}
```


## 3.ref获取组件实例
* 父组件使用子组件时绑定属性ref
* 在父组件中可以使用 this.$ref.子组件的ref值.子组件属性或者this.$ref.子组件的ref值.子组件方法

子组件
```shell script
data () {
    return {
      childValue:"子组件值",
    },
},
methods:{
    childFun() {
      alert('父组件会调用子组件中此方法')
    },
}
```
父组件
```shell script
//html
  <CollectBox  ref="childCollect" @closeDetails="closeDetails"></CollectBox>
//js
methods:{
  closeDetails(){
   this.$ref.childCollect.childFun()//弹出文本
   console.log(this.$ref.childCollect.childValue)//会打印子组件值
  }
}
```
