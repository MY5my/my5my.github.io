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
   state:{
      count: 100
   },
   mutations: {
      addCount(state, val = 1) {
        state.count += val;
      }
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
