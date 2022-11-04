---
title: "Element Ui Tooltips"
date: 2022-11-01T13:53:26+08:00
draft: false
tags: ["element"]
isCJKLanguage: true
categories: ["Vue","element","tooltips"]
---

## 正常情况
```shell script
<el-tooltip class="item" effect="dark" content="提示文字" placement="top-start">
  <el-button>展示内容</el-button>
</el-tooltip>
```
## 注意点
>Tooltip 的出现位置：placement（top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end）
>主题：effect（dark/light）
>延迟多久消失 :hide-after="1000"

## 展示多行时
```shell script
  <el-tooltip effect="light" placement="bottom-start" popper-class="tipsCss">
    <div slot="content" style="width: 150px; min-height: 20px;color: #fff">
      指上提示的文字
    </div>
    <span>展示的文字</span>
  </el-tooltip>
```
>tipsCss为自定义样式 
```shell script
<style>
  /*修改tooltips 背景色*/
  .tipsCss.el-tooltip__popper {
    background: #61a3e0 !important;
    border-color: #61a3e0 !important;
  }
  /*修改方向箭头的样式*/
  .tipsCss.el-tooltip__popper[x-placement^="bottom-start"] .popper__arrow:after,
  .tipsCss.el-tooltip__popper[x-placement^="bottom-start"] .popper__arrow {
    border-bottom-color: #61a3e0 !important;
    /*opacity: 0.5;*//*透明度*/

  }
</style>
```
