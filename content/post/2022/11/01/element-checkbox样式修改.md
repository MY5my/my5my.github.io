---
title: "Element Checkbox样式修改"
date: 2022-11-01T09:11:15+08:00
draft: false
tags: ["Checkbox样式调整"]
isCJKLanguage: true
categories: ["Vue","element"]
---


## checkbox 样式修改  

>未选中时的样式
```shell script
/deep/ .el-checkbox {
    background: #fff;
    padding: 10px 10px;
    line-height: 100%;
    border-radius: 4px;
    margin-right: 10px;
}
```

>选中状态时的样式
```shell script
/deep/ .el-checkbox.is-checked {
    background: #EDF6F2;
    border: 1px solid #47A87D;
    padding: 10px 10px;
    border-radius: 4px;
}
```
>选中的 checkbox 样式
```shell script

/deep/ .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
    background-color: #47a87d;
    border-color: #47a87d;
}
```

```shell script
/deep/ .el-checkbox__input.is-checked+.el-checkbox__label{
  color: #47a87d;
}
```

>选中状态、同时设置了disabled为true的复选框的样式（HTML代码中第一个checkbox的disabled设置为了true
```shell script
/deep/ .el-checkbox.is-disabled.is-checked {
  padding: 10px 10px;
  border-radius: 4px;
}
```

>选中状态、且disabled设置为true的checkbox的文本的样式
```shell script
/deep/ .el-checkbox__input.is-disabled + span.el-checkbox__label{
  color: #47a87d;
  cursor: not-allowed;
}
```

>选中状态、disabled设置为true的复选框，设置其可勾选方框的样式
```shell script
/deep/ .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
background-color: #47a87d;
border-color: #47a87d;
}
```

