# BASIC
记录一些常用的git操作

git pull 拉取代码  git push 推送代码

git push origin --delete develop 删除名为develop的远程分支

git reset --hard 版本号 回滚到制定版本号的版本

git checkout -b test 增加 本地分支

git push origin dev:test 推送本地test分支到远程新增dev分支

git branch -a 查看全部分支

git branch -vv 查看本地分支的映射关系

git branch --unset-upstream 取消当前分支与远程分支的映射关系

git branch -u origin/dev 建立当前分支与远程分支dev的映射关系

git checkout -b 本地分支X origin/远程分支X 拉去远程分支到本地创建本地分支