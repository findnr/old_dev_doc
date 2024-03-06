<!--
 * @Author: 程英明
 * @Date: 2022-07-05 11:23:58
 * @LastEditTime: 2022-07-05 13:18:34
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\os\linux\filerudp.md
 * QQ:504875043@qq.com
-->
### 本地复制操作
```sh
cp "source" "target"
```
- 参数(目录递归)
```sh
-r
```
### 远程操作
- 远程复制默认端口22（本地复制到服务器）
```sh
scp "source" "target_server"
```
- 远程复制默认端口22（服务器复制到本地）
```sh
scp "source_server" "target"
```
- 参数（端口号+目录递归）
```sh
-P 8888 -r
```