<!--
 * @Author: 程英明
 * @Date: 2022-03-24 09:54:46
 * @LastEditTime: 2022-07-18 15:19:10
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\software\vim\info.md
 * QQ:504875043@qq.com
-->
### vim相关信息
##### 批量注释与批量取消注释
```shell
//批量插入
:1,23s/^/#/g
//批量删除
:1,23s/^#//g
//批量删除回车
:%s/\n//g
```