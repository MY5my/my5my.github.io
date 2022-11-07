---
title: "Element Select全选"
date: 2022-11-01T14:40:48+08:00
draft: false
tags: [""]
isCJKLanguage: true
categories: ["Vue","element"]
---

>vue html代码
```shell script
//popper-class="ksSelect" 为自定义样式 
//popper-append-to-body="false" 是否将弹出框插入至 body 元素
//multiple 多选
<el-select v-model="selData" multiple placeholder="请选择" popper-class="ksSelect" :popper-append-to-body="false">
  <el-checkbox v-model="checkedFlag" @change='selectAll'>全选</el-checkbox>
    <el-option
      v-for="item in allData"
      :key="item.hospName"
      :label="item.hospName"
      :value="item.hospName">
    </el-option>
</el-select>
```
>vue js代码  先定义变量
```shell script
data(){
  return {
       selData: [],//选择的数据
       allData: [
          {id:1,hospName:'名称1',},
          {id:2,hospName:'名称2',},
          {id:3,hospName:'名称3',},
          {id:4,hospName:'名称4',},
       ],//所有数据
       checkedFlag: false,//是否全选
  } 
}

methods:{
 //全选/取消全选
  selectAll() {
    this.selData = [];
    if (this.checkedFlag) {
      this.allData.forEach((item) => {
        this.selData.push(item.hospName)
      });
    } else {
      this.selData = [];
    }
    // console.log(this.selData,'---选择的数据')
  },
}
```
