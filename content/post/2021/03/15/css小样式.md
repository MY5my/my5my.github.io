---
title: "Css小样式"
date: 2021-03-015T10:52:31+08:00
draft: true
tags: ["样式"]
isCJKLanguage: false
categories: ["Css"]
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
