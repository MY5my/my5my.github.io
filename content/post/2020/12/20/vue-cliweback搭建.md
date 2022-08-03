---
title: "Vue Cli webpack搭建"
date: 2020-12-20T09:40:08+08:00
draft: false
tags: ["vuecli(w)"]
isCJKLanguage: true
categories: ["Vue"]
---

## 前提：全局安装webpack 全局安装vue-cli
>安装webpack 我一般是用cnpm
```shell script
cnpm install webpack -g或者（cnpm install -g webpack）
```
安装完成之后输入 webpack -v  出现版本号，成功
![查看webpack 版本号](/images/vue/webpack1.jpg)

>安装vue-cli 我一般是用cnpm
```shell script
cnpm install vue-cli -g
```
安装完成之后输入 vue -V  V是大写  出现版本号，成功 
![查看vue 版本号](/images/vue/vue-V.jpg)


## vue init webpack : 
## vue -cli2.x 版本的初始化方式，启动方式默认为 npm run dev ，webpack 为官方推荐模板

>在终端输入如下命令（项目名称不能是中文也不能用大写字母）,命令执行之后，会在当前目录生成一个以该名称命名的项目文件夹。
![第一步](/images/vue/A.jpg)

>选择配置项 回车
![选择配置项](/images/vue/B.jpg)

>等待安装 出现如图所示，安装成功
![安装成功](/images/vue/C.jpg)

>进入项目目录 cd 项目名称
![进入项目](/images/vue/D.jpg)

>运行项目
![运行项目](/images/vue/E.jpg)
![运行项目](/images/vue/F.jpg)
>项目文件结构
![运行项目](/images/vue/vue2.0.jpg)
