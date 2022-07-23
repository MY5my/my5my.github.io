---
title: "垂直居中div"
date: 2021-03-16T11:13:17+08:00
draft: true
tags: ["垂直居中div"]
isCJKLanguage: true
categories: ["Css"]
---

# css
```shell
<div class="parentDiv">
    <div class="childDiv"></div>
</div>
```

## 已知宽高时
```shell script
 .parentDiv {
    position: relative;
    width: 500px;
    height: 500px;
    border:1px solid red;
}

.childDiv {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px; 
    margin-top: -150px; 
    width: 300px;
    height: 300px;
    border:1px solid blue;
}
```


## 未知宽高


