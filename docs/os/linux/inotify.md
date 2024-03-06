<!--
 * @Author: 程英明
 * @Date: 2022-07-18 15:24:07
 * @LastEditTime: 2022-07-18 15:24:14
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\os\linux\inotify.md
 * QQ:504875043@qq.com
-->
##### inotify工具安装
```sh
yum install inotify-tools -y
```
##### 查看inotify的配置参数
```sh
sysctl -a |grep inotify
#队列中最大的事件数，变化频繁的目录下事件会很多，事件先进入队列，当队列满时，会将事件丢弃，同时发出IN_Q_OVERFLOW事件
fs.inotify.max_queued_events = 16384
#每个用户能启动的inotify最大实例数
fs.inotify.max_user_instances = 128
#每个实例最大的监控数（inode数量）
fs.inotify.max_user_watches = 8192
```
##### 配制文件修改
```sh
vi /etc/sysctl.conf
fs.inotify.max_queued_events = 16384
fs.inotify.max_user_instances = 128
fs.inotify.max_user_watches = 8192
#动态加载
/sbin/sysctl -p
```
##### inotify-tools的使用
inotifywait
```
https://blog.csdn.net/bytxl/article/details/14169289?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1
```