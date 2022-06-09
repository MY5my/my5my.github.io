---
title: "radio操作"
date: 2021-01-09T13:20:12+08:00
draft: false
tags: ["HTML","表单","radio"]
isCJKLanguage: true
categories: ["HTML","表单"]
---



>获取选中的值
```shell 
$('input[name="testradio"]:checked').val();
$('input:radio:checked').val();
$('input[@name="testradio"][checked]');
$('input[name="testradio"]').filter(':checked');
$('#testradio input[name="t"]:checked ').val();
```

>选中值为2的radio
```shell 
$("input[name='radioName'][value=2]").attr("checked",true); //选中值为2的radio
```

>取具体某个radio的值，比如第二个radio的值
```shell
$('input[name="testradio"]:eq(1)').val()
```

>js取消radio的选中
```shell 
var checkedRadio=document.getElementsByName("PublicationType");
//radio的name为：PublicationType
$.each(checkedRadio, function(i,v){
    v.checked = false;
    v.removeAttribute("checked");
})
```

>遍历
```shell
$('input[name="testradio"]').each(function(){
    alert(this.value);
});
```


