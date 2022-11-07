---
title: "Vue项目兼容ie浏览器调整"
date: 2022-10-26T11:03:43+08:00
draft: false
tags: ["IE"]
isCJKLanguage: true
categories: ["IE","Vue"]
---

## ie浏览器下可能遇到的问题
>vue只兼容IE8以上的版本
>IE不兼容 axios的promiss对象;
>IE不兼容es6语法；
>IE上css部分样式不支持 错乱问题
>插件版本太高不支持


## 解决办法
>安装插件 
* 安装 babel-polyfill
```shell script
 npm install --save-dev babel-polyfill 或
 npm install  babel-polyfill
 ```
* 在main.js 中首行引入,确保全面加载
```shell script
import "babel-polyfill";
```
* 配置文件 配置webpack.base.conf.js
```shell script
entry: {
    // app:'./src/main.js'
    app: ['babel-polyfill', './src/main.js']
},
```
![配置文件](/images/vue/iepz.jpg)


>项目中使用了ES6 promise对象 
* 安装es6-promise
```shell script
 npm install es6-promise 
 npm install --save-dev es6-promise
```
* 在main.js引入， 用于在node或浏览器中支持ES6 与CommonJS。
```shell script
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()
```
如果引入使用require('es6-promise').polyfill()则可能会遇到下方错误

>如果项目中require和import混用的原因，在做了IE兼容之后打包会出现问题，会报以下错误：
```shell script
Cannot assign to read only property 'exports' of object '#<Object>'
```
* 需要安装babel-plugin-transform-es2015-modules-commonjs插件来解决报错
```shell script
npm install --save-dev babel-plugin-transform-es2015-modules-commonjs
```
* 在.babelrc 中添加该插件
```shell script
"plugins": ["transform-es2015-modules-commonjs"]
```
* 相关配置vue.config.js文件如下修改 chainWebpack方法中添加
```shell script
config.entry.app = ["babel-polyfill", "./src/main.js"];
config.module.rule('compile')
      .test(/\.js$/)
      .include
      .add(resolve('src'))
      .add(resolve('test'))
      .add(resolve('node_modules/webpack-dev-server/client'))
      .add(resolve('node_modules'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .options({
        presets: [
          ['@babel/preset-env', {
            modules: false
          }]
        ]
  }); 
```
* babel.config.js中对应修改，添加sourceType和useBuiltIns：
```shell script
module.exports = {
  presets: [
    // '@vue/cli-plugin-babel/preset', //文件原始内容
    ['@vue/app', {
      useBuiltIns: 'entry',             //添加的内容
    }]
  ],
  sourceType: 'unambiguous'
}

```
* main.js 文件引入
```shell script
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
require('es6-promise').polyfill()
Es6Promise.polyfill()Plain Text
```



>


>例如 swiper版本太高不支持   可能需要降低版本
```shell script
npm install --save-dev swiper@3.4.2 
```
