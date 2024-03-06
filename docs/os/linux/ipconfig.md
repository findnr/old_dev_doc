<!--
 * @Author: 程英明
 * @Date: 2022-07-18 15:17:52
 * @LastEditTime: 2022-07-18 15:18:00
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\os\linux\ipconfig.md
 * QQ:504875043@qq.com
-->
##### 配制静态IP
```sh
#查看网上名称
ip addr
#打开网卡配制文件，最后一个是网卡名
vim /etc/sysconfig/netword-scripts/ifcfg-eng0s3
#配制静态IP
```
```sh
# 使用静态IP地址，默认为dhcp
BOOTPROTO="static"
# 设置的静态IP地址
IPADDR="192.168.1.91"
# 子网掩码
NETMASK="255.255.255.0"
# 网关地址
GATEWAY="192.168.1.1"
# DNS服务器
DNS1="192.168.1.1"
# 备用DNS服务器
DNS2="223.5.5.5"
#设置网卡启动方式为 开机启动 并且可以通过系统服务管理器 systemctl 控制网卡
ONBOOT=yes
#设置默认路由的优先级(数字越小优先级越高)
IPV4_ROUTE_METRIC=99
```
##### 设置完后重启网卡
```sh
#centos8
nmcli c reload && nmcli c up eng0s3
#centos7
systemctl restart network
```
/usr/local/php/bin
/usr/local/redis/bin
