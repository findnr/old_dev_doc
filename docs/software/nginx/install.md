<!--
 * @Author: 程英明
 * @Date: 2022-07-05 21:05:37
 * @LastEditTime: 2022-07-25 15:05:51
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\software\nginx\install.md
 * QQ:504875043@qq.com
-->
### 安装
```shell
vim /etc/yum.repos.d/nginx.repo

[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/$basearch/
gpgcheck=0
enabled=1

yum clear all
yum makecache

yum install nginx
```