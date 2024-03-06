<!--
 * @Author: 程英明
 * @Date: 2022-04-07 14:27:24
 * @LastEditTime: 2022-07-30 15:30:27
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\devlang\php\files.md
 * QQ:504875043@qq.com
-->
### 操作文件的相关函数 https://www.php.net/manual/zh/ref.filesystem.php
```php
//获取到所有的php文件
$files=glob("*.php");
//取出文件名
pathinfo($file, PATHINFO_FILENAME);
//取出文件的后缀
pathinfo($file, PATHINFO_EXTENSION);
```