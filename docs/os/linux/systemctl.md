<!--
 * @Author: 程英明
 * @Date: 2022-07-18 15:14:58
 * @LastEditTime: 2022-07-18 15:15:06
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\os\linux\systemctl.md
 * QQ:504875043@qq.com
-->
##### centos7脚本存放地址
> 开机不登陆帐号就要运行的建议放在系统 =>system

```sh
#存放地址,系统=>(system) | 用户=>(user)
/usr/lib/systemd/[system|user]
```
##### 服务说明
> 第一：每个服务文件以（.service）结尾
第二：文件内容分为三部分：
- [Unit]
- [Service]
- [Install]

```sh
#[Unit]部分主要是对这个服务的说明，内容包括Description、After
#Description =>描述信息
#After       =>用于描述服务类别
[Unit]
Description = test
After = this is test
```
```sh
#[Service]
#Type = forking #后台运行的形式
#PIDFile=/tmp/pid #存放PID的文件路径
#ExecStart #服务的具体运行命令
#ExecReload #重启命令
#execStop #停止命令
#PrivateTep=ture #给服务器分配独立的临时空间
#Restart=always #程序异常终止的时候，都会自动重启这个进程
#RestartSec=1 #重启的间隔是1秒
[Service]
Type=forking
PIDFile=/node.js/pid
ExecStart=/usr/local/bin/test start
ExecReload=/usr/local/bin/test restart
ExecStop=/usr/local/bin/test stop
PrivateTmp=true
```
```sh
#[Install]部分服务安装的相关设置，可设置为多用户
[Install]
WantedBy=multi-user.target
```
##### 服务说明
```sh
/usr/lib/systemd/system/test.service
chomd 754 /usr/lib/systemd/system/test.service
systemctl [start|restart|reload|enable|disable|statue] test.service
```