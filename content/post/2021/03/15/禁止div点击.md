---
title: "禁止div点击"
date: 2021-03-15T10:52:31+08:00
draft: false
tags: ["禁止div点击"]
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

# 超出显示省略号
>普通模式
```shell script
display:inline-block; 
overflow:hidden; 
white-space:nowrap; 
text-overflow:ellipsis;
```

#英文单词换行
```shell script
word-break:break-all;
word-wrap:break-word;
```

#两行截取  2行超出显示...
```shell script
display: -webkit-box;
overflow: hidden;
white-space: normal!important;
text-overflow: ellipsis;
word-wrap: break-word;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
```

#select
```shell script

<select onmouseover="selbox($(this))" ></select>
<script>
function selbox(a){
  var val = a.val();
  a.attr("title",val);
}
</script>
```