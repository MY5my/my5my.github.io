---
title: "Checkbox"
date: 2021-01-09T16:41:47+08:00
draft: false
tags: ["HTML","表单","checkbox"]
isCJKLanguage: true
categories: ["HTML","表单"]
---

>遍历未勾选的
```shell 
var chk_value=[]
$("input[name='item']").not("input:checked").each(function(){//遍历每一个名字为interest的复选框，其中选中的执行函数
   //chk_value.push($(this).parent().parent().index());//将选中的值添加到数组chk_value中
   //chk_value.push($(this).index());//将选中的值添加到数组chk_value中
});
```


>遍历选中的
```shell 
$('input[name="item"]:checked').each(function(){//遍历每一个名字为interest的复选框，其中选中的执行函数
    chk_value.push($(this).parent().parent().index());//将选中的值添加到数组chk_value中
});
```
