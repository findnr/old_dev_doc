<!--
 * @Author: 程英明
 * @Date: 2022-07-18 15:22:45
 * @LastEditTime: 2022-07-18 15:22:57
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\os\linux\backgrounder.md
 * QQ:504875043@qq.com
-->
#### screen
```sh
#安装screen后台程序运行管理软件
yum install screen
#通过screen运行程序
screen npm run serve
#执行的窗口进入后台模式
ctrl a + d
#查看运行的软件
screen ls
#调出运行的程序
screen -r 12321 #(进程号)可通过screen ls 命令查看
```