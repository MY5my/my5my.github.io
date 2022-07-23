---
title: "Layui开始时间结束时间判断（旧版本layui.js）"
date: 2021-03-22T13:39:50+08:00
draft: false
tags: ["时间"]
isCJKLanguage: true
categories: ["layui"]
---

## html
```shell script
<div class="layui-inline">
    <label class="layui-form-label">起止时间</label>
    <div class="layui-input-inline">
        <input type="text" class="layui-input datewidth" placeholder="请选择开始时间" id="startDate" >
    </div>
    <div class="layui-input-inline" style="width: 5px;margin-left: -20px;margin-top: 5px">-</div>
    <div class="layui-input-inline">
        <input type="text" class="layui-input datewidth" placeholder="请选择结束时间" id="endDate" >
    </div>
</div>
```

## js
```shell script
<script>
    layui.use(['table', 'form', 'jquery', 'laydate','layer'], function () {
        var table = layui.table,form = layui.form,layer = layui.layer, $ = layui.jquery,laydate = layui.laydate;
           laydate.render({
              elem: '#startDate',
              format: 'yyyy-MM-dd',
              done: function (value, date, endDate) {
                  var startDate = new Date(value).getTime();
                  var endTime = new Date($('#endDate').val()).getTime();
                  if (endTime < startDate) {
                      layer.tips('开始时间不能大于结束时间', '#startDate');
                      $('#startDate').val('');
                  }
              }
           })
            laydate.render({ //结束时间
                elem: '#endDate',
                format: 'yyyy-MM-dd',
                done: function (value, date, endDate) {
                    var startDate = new Date($('#startDate').val()).getTime();
                    var endTime = new Date(value).getTime();
                    if (endTime < startDate) {
                        layer.tips('开始时间不能大于结束时间', '#endDate');
                        $('#endDate').val('');
                    }
                }
            })
    })
</script>

```
## other
```shell script
var startDate=laydate.render({
    elem: '#startDate'
    ,theme: '#1A407D',
    done:function(value,date){
        if(value!=""){
            date.month=date.month-1;
            endDate.config.min=date;
        }else{
            endDate.config.min=startDate.config.min;
        }
    }
});
var endDate=laydate.render({
    elem: '#endDate'
    ,theme: '#1A407D',
    done:function(value,date){
        if(value!=""){
            date.month=date.month-1;
            startDate.config.max=date;
        }else{
            startDate.config.max=endDate.config.max;
        }
    }
});
```