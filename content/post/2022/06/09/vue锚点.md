---
title: "Vue锚点"
date: 2022-06-09T14:06:01+08:00
draft: false
tags: ["Vue锚点定位"]
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