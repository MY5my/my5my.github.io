---
title: "Vuex数据"
date: 2022-12-03T17:50:25+08:00
draft: true
tags: ["vuex"]
isCJKLanguage: true
categories: ["Vue"]
---

```shell script
// 注册代码
const store = new Vue.Store({
  state:{
    count: 100
  },
  mutations: {
    addCount(state, val = 1) {
      state.count += val;
    }，
    subCount(state, val = 1) {
      state.count -= val;
    }
  }
})

// 组件调用
this.$store.commit('addCount');  // 加 1
this.$store.commit('subCount');  // 减 1
```
