---
title: "Vue引入全局scss文件"
date: 2020-11-20T16:35:36+08:00
draft: false
tags: ["vue"]
isCJKLanguage: true
categories: ["Vue"]
---

## 安装命令如下
```shell script
npm install node-sass@4.14.1
npm install sass-loader@7.3.1 --save-dev
```

>--save 或者不写 会把信息记录到dependencies中
>dependencies 用户发布环境，是线上（生产环境下）所需要的依赖包，ependencies依赖的包不仅开发环境能使用，生产环境也能使用

> --save-dev 会把信息记录到 devDependencies  中
>  devDependencies 用于本地环境开发时候所需要的依赖包，发布到线上时是不需要其下的文件，只用于开发环境，不用于生产环境，因此不需要打包

![安装完成](/images/vue/node-sass_sass-loader.jpg)


### 更改build 下utils.js文件
![更改utils](/images/vue/scss0.jpg)
更改内容如下
```shell script
 scss: generateLoaders('sass').concat(
      {
        loader: 'sass-resources-loader',
        options: {
          //你自己的scss全局文件的路径
          resources: path.resolve(__dirname, '../src/assets/css/public.scss')
        }
      }
),
```
### 更改 build webpack.base.conf.js文件
![更改webpack](/images/vue/scss01.jpg)
更改内容如下
```shell script
 {
    test: /\.scss$/,
    loaders: ['style', 'css', 'sass']
  }
```


>html 文件下进行测试
![html](/images/vue/scss1.jpg)

## 注： lang="scss"一定要加上 <style lang="scss"></style> 

>public.scss 文件
![public.scss](/images/vue/scss02.jpg)
 
* @mixin 指令允许我们定义一个可以在整个样式表中重复使用的样式。
* @include 指令可以将混入（mixin）引入到文档中。

>其他scss文件想使用公共文件样式
![other](/images/vue/scss03.jpg)

![结束](/images/vue/scss04.jpg)
