---
title: "Vue store的用法"
date: 2022-12-03T17:50:25+08:00
draft: false
tags: ["vuex"]
isCJKLanguage: true
categories: ["Vue"]
---

1. 使用 store 之前，先要安装 vuex 
```
 npm install vuex
```
2.新建 store 文件夹，再新建 index.js 文件：
```
import Vue from "vue";
import Vuex from "vuex";

export default new Vuex.Store({
// 数据存放状态，初始值
   state:{  
      count: 100,//定义变量
   },
//mutations是操作state数据的方法的集合，比如对该数据的修改、增加、删除等
   mutations: {
      addCount(state, val = 1) {//操作变量
        state.count += val;
      }
   },
//在mutation方法中进行异步操作，将会引起数据失效。所以提供了Actions来专门进行异步操作，最终提交mutation方法
    actions:{
          addCount(context, payload) {
                context.commit("addCount", payload);
          },
    },
//模块化状态管理
    modules: { 
    },
// 加工state成员给外界
    getters = { 
    }

});
```
3. 在main.js 文件中导入,并注册到 vue 根实例中
```
import store from './store';

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
```

4. 在页面的methods中调用，获取值this.$store.commit('addCount') 
```shell script
this.$store.commit('addCount');  // 加 1
this.$store.commit('subCount');  // 减 1
```
