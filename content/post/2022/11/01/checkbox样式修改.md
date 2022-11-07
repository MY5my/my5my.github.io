---
title: "Checkbox样式修改"
date: 2022-11-01T10:17:58+08:00
draft: false
tags: ["checkbox"]
isCJKLanguage: true
categories: ["Css"]
---

##
>默认样式
```shell script
    input[type="checkbox"] {
    width: 16px;
    height: 16px;
    //margin: 0 4px 0 0;
    //使用appearance: none隐藏默认checkbox的框框，重写框框样式
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: absolute;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    cursor: pointer;
    //display: inline-block;
    float: left;
}
```
>未被选中的样式
```shell script
input [type="checkbox" ]::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    width: 100%;
    height: 100%;
    border: 0px;
    border-radius: 2px;
}
```
>选中的样式
```shell script
input[type="checkbox"]:checked::before {
    content: "\2713"; /*\2713 代表对勾*/
    background-color: #61a3e0;
    position: absolute;
    top: -1px;
    left: -1px;
    width: 100%;
    height: 100%;
    border: 1px solid #61a3e0;
    border-radius: 2px;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    line-height: 16px;
  }
```

