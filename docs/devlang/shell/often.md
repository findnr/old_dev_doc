<!--
 * @Author: 程英明
 * @Date: 2022-07-18 15:10:21
 * @LastEditTime: 2022-07-18 15:10:36
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\devlang\shell\often.md
 * QQ:504875043@qq.com
-->
### 常用的一些命令
- 变量当作变量名使用
```sh
name='content'
content=$(ls -l)
test=`eval echo '$'"$name"`
echo test #就是执行ls -l的内容
```
- 文件夹相关
```sh
#获取所有的文件夹
ls -l | awk '/^d/ {print $NF}'
#判断文件夹是否存在
if [ ! -d $dirPath ]; then
    mkdir $dirPath
fi
```
- 文件相关
```sh
#获取所有的文件
ls -l | awk '/^-/ {print $NF}'
#判断文件是否存在
if [ ! -f $filePath ]; then
    echo "" > test.txt
fi
```
- 循环
```sh
for dir in $dirs;do
    echo $dir
done
```