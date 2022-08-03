---
title: "Vue Cli create搭建"
date: 2020-11-23T13:36:03+08:00
draft: false
tags: ["vuecli(c)"]
isCJKLanguage: true
categories: ["Vue"]
---
## vue create：vue -cli3.x 版本的初始方式 ，启动方式默认为 npm run serve

>在终端输入以下命令 回车后自定义配置的话选择Manually select features: 自定义配置
![第一步](/images/vue/1.jpg)

>回车后根据自己的需求添加配置项（上下是切换配置项，通过空格键选中配置项） 回车
![选择配置](/images/vue/2.jpg)

>选择版本 2.x or 3.x 回车
![选择版本](/images/vue/3.jpg)

>选择是否使用路由 history router，其实直白来说就是是否路径带 # 号，建议选择 N，否则服务器还要进行配置 回车
```shell script
Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n)
```

>css 的预处理器我选择的是 Sass/SCSS(with dart-sass) 。node-sass是自动编译实时的，dart-sass需要保存后才会生效 回车
![选择配置](/images/vue/4.jpg)

>选择ESLint的代码规范，此处我使用 Standard代码规范 回车
![选择配置](/images/vue/5.jpg)

>选择什么时候进行代码校验，Lint on save 保存就检查，Lint and fix on commit   fix 或者 commit 的时候检查，建议第一个 回车
![选择配置](/images/vue/6.jpg)

>选择 Babel、PostCSS、ESLint配置文件存放位置，此处选择单独保存在各自的配置文件中 回车
>In dedicated config files 存放到独立文件中，In package.json 存放到 package.json 中
![选择配置](/images/vue/7.jpg)

>最后就是是否保存本次的配置了，N 不记录，如果选择 Y 需要输入保存名字 回车
```shell script
Save this as a preset for future projects? (y/N) n
```

>等待创建项目
![等待创建](/images/vue/8.jpg)

>出现如图红框所示的提示，就搭建成功
![成功](/images/vue/9.jpg)

>进入项目目录，直接输入 npm run serve 就可以了
![运行项目](/images/vue/10.jpg)
![运行项目](/images/vue/11.jpg)
