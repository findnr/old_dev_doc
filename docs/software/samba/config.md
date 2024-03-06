<!--
 * @Author: 程英明
 * @Date: 2022-07-09 16:25:18
 * @LastEditTime: 2022-07-25 10:07:15
 * @LastEditors: 程英明
 * @Description:
 * @FilePath: \doc-man\docs\software\samba\config.md
 * QQ:504875043@qq.com
-->
##### 配制文件说明
```ini
[share]
comment = share folder
browseable = yes
path = /home/cym/Desktop/moredisk
create mask = 0755
directory mask = 0755
valid users = cym
force user = cym
force group = cym
public = yes
available = yes
writable = yes
```
##### 创建用户名和密码
```sh
#创建系统用户
useradd test
#创建smb的用户的密码
smbpasswd -a test 
```
##### 重启服务
```sh
systemctl restart smbd
```
