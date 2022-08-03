---
title: "Vue在ie11下空白"
date: 2020-12-04T10:09:18+08:00
draft: false
tags: ["vue"]
isCJKLanguage: true
categories: ["Vue"]
---


## 安装命令
```shell script
  npm install --save-dev babel-polyfill
```
## 在mian.js中引入
```shell script
  import 'babel-polyfill';
```

## 在build文件夹中webpack.base.conf.js 替换内容
 ```shell script
    entry: {
      app: ‘./src/main.js’
    },
 ```   
   替换为
```shell script
   entry: {
      app: ['babel-polyfill', './src/main.js']
   },
```  
即可
