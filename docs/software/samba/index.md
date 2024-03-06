<!--
 * @Author: 程英明
 * @Date: 2022-07-09 16:20:01
 * @LastEditTime: 2022-07-09 22:14:02
 
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\software\samba\index.md
 * QQ:504875043@qq.com
-->
### window清除登录信息
- 在命令终端输入以下命令，删除完成后注销电脑或重启
```sh
control userpasswords2
```
- 检测配制文件是否正确
```sh
testparm
```
- 记得关掉selinux，否则windows无法访问