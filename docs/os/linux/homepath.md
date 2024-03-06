<!--
 * @Author: 程英明
 * @Date: 2022-07-18 15:20:28
 * @LastEditTime: 2022-07-18 15:20:31
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\os\linux\homepath.md
 * QQ:504875043@qq.com
-->
#### 临时生效，重启失效
```shell
export PATH=$PATH:/root/.config/composer/vendor/bin
```
#### 通过修改配置文件
```shell
//打开文件
vim /etc/profile
//在文件输入
PATH="$PATH:/root/.config/composer/vendor/bin"
export PATH
//保存文件
:wq
//使用文件生效
source /etc/profile

```