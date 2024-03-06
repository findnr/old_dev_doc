<!--
 * @Author: 程英明
 * @Date: 2022-07-18 15:05:40
 * @LastEditTime: 2022-07-18 15:09:01
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\devlang\shell\autoserver.md
 * QQ:504875043@qq.com
-->
### 服务器监测端口，自动启服务
- 思路：监测监听程序端口，如果有启用不用管，如果没有启用执行启动脚本，这种方式只能用于实时要求不高的情况使用
```sh
#!/bin/bash
time=$(date "+%Y-%m-%d %H:%M:%S")
prot81=$(netstat -an | grep 0.0.0.0:81 | awk '$4 == "0.0.0.0:81"' | wc -l)
if [ $prot81 -eq 0 ]
then
cd /home/public/py_web/
nohup /usr/local/bin/python3 http_server81.py 1>/dev/null 2>&1 &
echo "81 $time restart" >> /home/public/py_web/log
fi
```