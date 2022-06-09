---
title: "Input验证"
date: 2021-01-09T14:04:08+08:00
draft: false
tags: ["HTML","表单","input"]
isCJKLanguage: true
categories: ["HTML","表单"]
---


## input验证

>只能输入正数，负数，小数
```shell 
onkeyup="value=value.replace(/[^\-?\d.]/g,'')"
```


>只能输入正数，小数
```shell 
onkeyup="value=value.replace(/[^\d.]/g,'')"
```

>小数点后至多两位
```shell 
var regs = /^(-)?(0|[1-9]\d*)\.\d{1,2}$/;
if (!regs.test(temp)){
    console.log('请输入正确值！')
    return false
}
```

>

>验证数量
```shell 
onkeyup="this.value=this.value.replace(/\D/g,'')" 
onafterpaste="this.value=this.value.replace(/\D/g,'')"
```

>验证金额非负数
```shell 
var reg = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
reg.test(324)  返回true
```


>验证手机号

```shell 
var _reg = /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;
var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
var tt=/^[\S]{4,11}$/;//验证11位
let myreg = /^\d{11}$/;//只要验证11位
var phone=178xxxxxxxx;
if (!_reg.test(phone)) {
    console.log('请输入正确手机号码！')
    return false
}

if(!/^1\d{10}$/.test(value)){
   console.log('请输入正确的手机号')
   return false
};
```



>验证邮箱
```shell 
var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;//一直用的这个
var reg = /^[a-zA-Z0-9]+([._-]*[a-zA-Z0-9]*)*@[a-zA-Z0-9]+.[a-zA-Z0-9{2,5}$]/;
var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
if (!reg.test(data.field.email)) {
    layer.msg('邮箱格式不正确',{icon:2,anim:6})
    console.log('邮箱格式不正确！')
    return false
}
```

