---
title: "Select"
date: 2021-01-09T16:48:23+08:00
draft: false
tags: ["HTML","表单","select"]
isCJKLanguage: true
categories: ["HTML","表单"]
---


>获取select 选中的值
```shell 
$('#id option:selected').text();//文本值
$('#id option:selected').val();//value值
$("#id").get(0).selectedIndex;//索引值
$('#select_id option:first').val();//获取第一个option的值
$('#select_id option:last').val(); //获取最后一个option的值 
$('#select_id option:eq(1)').val(); //获取第二个option的值 
$('#select_id').val()//val()中写值//根据传值给select对应的option赋值

```
>满足条件的option 选中 回显
```shell 
$('#select_id').get(0).selectedIndex = 1; //设置Select索引值为1的项选中
$('#select_id').find("option[value='BMW']").attr("selected",true);//设置value为BMW的项选中 
$("#edit_technicalGrade option[value='"+svalue+"']").attr("selected","selected");  //select回显
```


## 获取相应的option的索引

>获取select最大索引值
```shell 
var maxIndex = $("#select_id:last").get(0).index;
```

>获取Select选中项的索引值
```shell 
var checkIndex = $("#select_id").get(0).selectedIndex;
```

>获取选中的select的索引
```shell 
var checkIndexs = $('option:selected','#select_id').index();
```

>获取选中的select的索引
```shell 
var checkIndexa =('#select_id option').index(('#select_id option').index(('#select_id option:selected'))
```

>获取选中的select的索引
```shell 
var checkIndex = $('#select_id').prop('selectedIndex'); 
```

## 判断是否选中
```shell 
//判断是否被选中
alert(document.getElementById("select_id").options[1].selected); //判断选中为true 没选中为false
alert($("#select_id").find("option[value='BMW']").is(":selected")); //选中为true 没选中为false
```

## 追加移除option

```shell 
$("#select_id").append("新增option"); //为Select追加一个Option(下拉项)
$("#select_id").prepend("请选择"); //为Select插入一个Option(第一个位置)
$("#select_id").get(0).remove(1); //删除Select中索引值为1的Option(第二个)
$("#select_id [value='BMW']").remove(); //删除Select中Value='3'的Option

```

