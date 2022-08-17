---
title: "Vue锚点"
date: 2022-06-09T14:06:01+08:00
draft: false
tags: ["锚点定位"]
isCJKLanguage: true
categories: ["Vue"]
---



## 页面可滚动时才有用

> 最简单的办法
```shell
html：
<div>
    <div class="left">
        <div id="Abstract">
            AbstractAbstractAbstractAbstractAbstract
        </div>
        <div id="Cited">
            CitedCitedCitedCitedCitedCited
        </div>
    </div>
    <div class="right">
        <ul>
            <li  @click="returnTop('#Abstract')"></li>    
            <li  @click="returnTop('#Cited')"></li>    
        </ul>
    </div>
</div>

js:
returnTop(url){
    document.getElementById(url).scrollIntoView();
}

```



>第二种
```shell 
html:
<div>
    <div><a href="javascript:void(0)"  @click="gotoIdCon('#id-'+index)" v-for="index in 20"> {{index}}</a></div>
        <div :id="'id-'+index" class="item" v-for="index in 20">
        {{index}}<span>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</span>
     </div>
</div>

js:
gotoIdCon(selector) {
    var idSelector = this.$el.querySelector(selector)
    document.documentElement.scrollTop = idSelector.offsetTop
},

```


## A页面点击按钮  跳转B页面指定位置
A页面
```shell script
<el-button type="primary"  @click="goToFun('assessmentPage','setDiv')">页面跳转</el-button>
    path:路径
    id:跳转到的id
    goToFun(path,id){
        var path=path
        var Id=id;
        localStorage.setItem('toId',Id);
        this.$router.push(path);
    }
```

B页面
```shell script
<div id="setDiv">要跳转到的div 加上id 与A页面的id传值一样</div>
created(){
 this.$nextTick(() => {
    this.toLocal()
  })
},
mounted(){
    //跳转设置模块div
    let _this = this;
    _this.$nextTick(function () {
    window.addEventListener('scroll', _this.handleScroll)
    })
},
//用完后记得将存储的锚点置空，否则会影响其他页面跳转到当前页面
destroyed() {
  localStorage.setItem('toId', '');
},
methods:{
    //锚点跳转
    toLocal() {
        //查找存储的锚点id
        let Id = localStorage.getItem('toId');
        let toElement = document.getElementById(Id);
        //锚点存在跳转
        if (Id) {
          toElement.scrollIntoView()
        }
    },
}
```
