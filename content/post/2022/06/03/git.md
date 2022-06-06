---
title: "Git 撤回commit以及回退版本"
date: 2022-06-03T10:57:24+08:00
draft: true
tags: ["Git"]
isCJKLanguage: true
categories: ["Git"]
---

## 查看提交记录

```shell
$ git log
commit 3cb10f20846181a579b2d75e6aaa7afbd9416a4b (HEAD -> stable, origin/stable)
Author: Username <xxx@outlook.com>
Date:   Thu May 6 14:01:18 2021 +0800

    提交备注1
commit 4709d2919a9ba1b6cc76b25512c4539c9119fe21
Author: Username <xxx@outlook.com>
Date:   Thu May 6 16:22:08 2021 +0800

    提交备注2
commit 30b174cef05c0142dfc5cad31bc22091c4862a8f
Author: Username <xxx@outlook.com>
Date:   Thu May 6 10:50:19 2021 +0800

    提交备注3
```
> commit 后面就是提交记录的id

# 在还没有push代码时，只是commit了，想撤销commit

## 选择撤销版本
* HEAD^或HEAD~1 表示上一个commit，或HEAD~1。

* 两次commit 都想撤销时使用HEAD~2

* 想要撤销到某一版本时 把HEAD~换成提交记录的id

## 不改动本地项目代码，只撤销commit
```shell
git reset --soft HEAD^
```

## 删除本地改动，撤销commit并撤销add 
```shell
git reset --hard HEAD^
```
>到这一步 已经撤销了对应的commit  重新提交即可


  
# 已经push的项目，想要回退到“提交备注2” 

## 回滚

```shell
git reset --soft 4709d2919a9ba1b6cc76b25512c4539c9119fe21
```

## 查看提交记录

```shell
$ git log

commit 4709d2919a9ba1b6cc76b25512c4539c9119fe21
Author: Username <xxx@outlook.com>
Date:   Thu May 6 16:22:08 2021 +0800

    提交备注2
commit 30b174cef05c0142dfc5cad31bc22091c4862a8f
Author: Username <xxx@outlook.com>
Date:   Thu May 6 10:50:19 2021 +0800

    提交备注3
```

> 最上面的 "提交备注1" 3cb10f20846181a579b2d75e6aaa7afbd9416a4b 已经看不到了，这表示撤销成功了。
## 本地的代码强制推到远程

```shell
git push origin test --force  #test是分支名字
```

> 结束