---
title: "动态给Js增加版本号"
date: 2021-12-23T10:50:40+08:00
draft: false
tags: [""]
isCJKLanguage: true
categories: ["JS"]
---
## 动态给js增加版本号 

>否则上传导致页面缓存问题，看不到最新效果

```shell script
<script>
    var scripts = document.getElementsByTagName("script");
    for(var i = 0;i < scripts.length;i ++){
        if(scripts[i].src){
            scripts[i].src = scripts[i].src+"?t="+new Date().getTime();
        }
    }
</script>
```
