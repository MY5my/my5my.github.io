---
title: "VueAxios封装"
date: 2022-08-04T10:04:37+08:00
draft: false
tags: ["Axios"]
isCJKLanguage: true
categories: ["Vue"]
---
## 全局声明引用
```shell script
import utils from "./assets/common/utils"//公共的js文件
需要将utils挂载到Vue中，Vue.prototype.$utils = utils;
在组件中直接this.$utils就可以使用了
```
>一个js文件是可以有多个 export，但是一个js文件中只能有一个export default
##多个变量在一个js 文件中声明 调用公共方法

utils.js中封装axios方法
```shell script
import axios from 'axios';
// axios.defaults.headers["token"] = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : ''; /* 让ajax携带token */
export default {
  publicUrl: '公共请求',
  request,//下方请求封装
  showLoading, 
  hideLoading,
  data() {
    return {
    }
  }
}
```
>封装请求
```shell script
function request(method, url, params, form, showError, code) {
  sessionStorage.setItem('token', 'token')
  var contetType = '', dataGet, dataPost;
  // showError 是否展示错误信息 不传默认为展示
  if (showError || showError == undefined) {
    showError = true
  } else {
    showError = false
  }
  //返回值是否有code 不穿默认有
  if (code || code == undefined) {
    code = true
  } else {
    code = false
  }
  if (!form) {
    contetType = 'application/json; charset=utf-8'
  } else {
    contetType = 'application/x-www-form-urlencoded'
  }
  // if (method == 'get') {
  //   dataGet = params
  // } else {
  //   dataPost = params
  // }
  return new Promise((resolve, reject) => {
    axios({
      headers: {
        'Content-Type': contetType,
        'token': sessionStorage.getItem('token') ? sessionStorage.getItem('token') : '' /* 让ajax携带token */
      },
      method: method,
      url: url,
      data: params, //get 请求直接在请求url 后面拼接参数
      withCredentials: true,
    }).then((res) => {
      if (code) {
        if (res.data.code == -1) {
          console.log('请先登录个人帐户')
        } else {
          resolve(res.data)
        }
      } else {
        resolve(res)
      }
    }).catch((res) => {
      if (showError) {
        // that.$message({
        //     message: res.data.message,
        //     type: 'warning'
        // });
        console.log(res, '请求错误信息')
      }
    })
  })
}


```


>加载loading
```shell script
// 展示loading
function showLoading() {
  let that = this;
  that.loading = Loading.service({
    // lock: true,// 打开会导致首页 点击底部tab 页面返回顶部
    text: '加载中...',
    spinner: 'el-icon-loading',
    customClass: 'loadCss',
    background: 'rgba(0, 0, 0, 0.7)'
  });
}

//隐藏loading
function hideLoading() {
  this.loading.close();
}

```

>.vue 文件中使用
```shell script
getData(){
    this.$utils.showLoading();
        this.$utils.request('get', this.$utils.publicUrl + '接口', '参数', false).then(res => {
            this.$utils.hideLoading();
            // console.log(res.data, '---unit_detail')
        }).catch(res => {
          // console.log(222222)
    })
}
```
