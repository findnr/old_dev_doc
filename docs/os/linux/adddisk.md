<!--
 * @Author: 程英明
 * @Date: 2022-07-19 16:15:01
 * @LastEditTime: 2022-07-19 16:38:40
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\os\linux\adddisk.md
 * QQ:504875043@qq.com
-->
### 为linux添加新硬盘
- 查看硬盘使用情况
```sh
df -h
```
- 对硬盘分区的处理
```sh
#1
fdisk -l
#2
fdisk /dev/sdb
#3(输入m字母按回车查看相关命令的作用)
m
#4创建一个新的分区（然后根据自己的情况分，如果是整个硬盘分一个就直接按回车，一直到分区完成）
n
#4打印出分区信息
p
```
- 格式化后挂载到对应的文件夹上
```sh
#格式化
mkfs.ext4 /dev/sdb1
#手工挂载
mount /dev/sdb1 /home/test
#开机自动挂载：修改/etc/fstab配置文件,末尾添加一行(中间是tab键)
/dev/sdb1   /home/test   ext4    defaults    0   0
```

