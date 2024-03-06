<!--
 * @Author: 程英明
 * @Date: 2022-03-14 13:48:46
 * @LastEditTime: 2022-07-05 11:34:34
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\os\linux\fileinfo.md
 * QQ:504875043@qq.com
-->
### 文件
- 监测文件动态变化
```sh
tial -f text.txt
```
- 统计文件数量
```sh
ls -l | grep "^-" | wc -l
```
- 看文件数量（包括子目录）
```sh
ls -lR| grep "^-" | wc -l
```
- 查看文件大小（单位M）
```sh
ls -lh
```
### 文件夹
- 统计文件数量
```sh
ls -lR | grep "^d" | wc -l
```
- 查看文件夹大小（单位M）
```sh
du -h
```
