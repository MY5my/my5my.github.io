---
title: "禁止点击"
date: 2021-03-15T10:52:31+08:00
draft: false
tags: []
isCJKLanguage: true
categories: ["Css","Js"]
---

# 禁止div点击

## css属性：
```shell script
pointer-events: none;   
```
> 或者定义属性，在js中添加：
```shell script
$(".原类名").addClass("新类名");  
```
    
## js
>禁用
```shell script
$.fn.disable = function () {
    $(this).addClass("disable");
};
或者
$("#@id").enable();
```
>启用
 ```shell script
$.fn.enable = function () {
    $(this).removeClass("disable");
};
$("#@id").disable();
```



>vue checkbox禁止点击
* vue
```shell script
<input type="checkbox" v-model="threeCheckList" :value="item2.subjectSecond"  v-bind:disabled="item2.disabled==true" :class="{'disabledCss':item2.disabled==true}">
```
* css
```shell script
 .disabledCss {cursor: not-allowed !important;} //鼠标移上去显示禁止小图标
```
