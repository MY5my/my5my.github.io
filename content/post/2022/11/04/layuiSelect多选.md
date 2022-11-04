---
title: "LayuiSelect多选"
date: 2022-11-04T16:42:32+08:00
draft: false
tags: ["select"]
isCJKLanguage: true
categories: ["layui"]
---


## layui实现下拉多选功能步骤
> [xm-select使用手册](https://maplemei.gitee.io/xm-select/#/component/install) 
1. [下载 xm-select](https://gitee.com/maplemei/xm-select) 
2. 引入 xm-select.js
3. html中写一个`<div id="demo1"></div>`
4. js渲染
```shell script
	var demo1 = xmSelect.render({
		el: '#demo1',
		language: 'zn',//国际化
		initValue: [4],//初始化默认勾选
        filterable: true,//是否带搜索
        tips: '请选择基础科室?',//默认提示
        toolbar: {//工具条功能   全选  清空  反选
            show: true,
            list: [ 'ALL', 'CLEAR', 'REVERSE' ]
        },
        data: [
            {name: '水果', value: 1, selected: true, disabled: true},//selected默认选中,disabled禁止选中
            {name: '蔬菜', value: 2, selected: true},
            {name: '桌子', value: 3, disabled: true},
            {name: '111', value: 11,},
            {name: '222', value: 22, },
            {name: '333', value: 33, },
            {name: '北京', value: 4},
        ],
        on: function(data){//点击checkbox操作
            //arr:  当前多选已选中的数据
            var arr = data.arr;
            //change, 此次选择变化的数据,数组
            var change = data.change;
            //isAdd, 此次操作是新增还是删除
            var isAdd = data.isAdd;
            console.log(arr,'---arr')

            //可以return一个数组, 代表想选中的数据
            //return []
        },
	})
```

> 取值

Html中
```shell script
    <button class="btn" id="name">获取name数组</button>
    <button class="btn" id="nameStr">获取name字符串</button>
    <button class="btn" id="value">获取value数组</button>
    <button class="btn" id="valueStr">获取value字符串</button>
```
Js中
```shell script
var types = ['name', 'nameStr', 'value', 'valueStr'];
    types.forEach(function(type){
        document.getElementById(type).onclick = function(){
            //获取当前多选选中的值
            var selectArr = demo1.getValue(type);//demo1为顶部渲染的全局变量
            console.log(selectArr,'----selectArr')
            // document.getElementById('demo2-value').innerHTML = `\ndemo2.getValue('${type}')\n\n` + JSON.stringify(selectArr, null, 2);
        }
});
```

