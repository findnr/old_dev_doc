<!--
 * @Author: 程英明
 * @Date: 2022-10-21 14:43:32
 * @LastEditTime: 2022-10-21 15:35:23
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\devlang\shell\file.md
 * QQ:504875043@qq.com
-->
### 文件内容替换相关操作
- 比如要将 /home/www/src 目录下的所有文件中的 192.168.0.3 替换成192.168.0.5 执行以下命令即可
```sh
​​​​​​​sed -i "s/192.168.0.3/192.168.0.5/g" `grep "192.168.0.3" -rl /home/www/src`
```
- 上面是递归查找目录中所有的HTML文件 把包含符合关键字的文件用sed去做替换
```sh
sed -i 's/原字符串/替换后字符串/g' `grep '搜索关键字' -rl /data/目标目录/ --include "*.html"`
```
- 多个替换用;分割 例如 
```sh
sed -i 's/原字符串1/替换后字符串1/g;s/原字符串2/替换后字符串2/g'
```