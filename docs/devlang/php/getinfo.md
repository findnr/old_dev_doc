<!--
 * @Author: 程英明
 * @Date: 2022-03-16 09:23:27
 * @LastEditTime: 2022-04-08 10:46:51
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\devlang\php\getinfo.md
 * QQ:504875043@qq.com
-->
###
### 获取类的相关信息：https://www.php.net/manual/zh/book.classobj.php

```php
//获取类的所有函数
var_dump(get_class_methods(Class::class))
//获取类的所有变量
var_dump(get_object_vars(Class::class))
//获取类的所有函数
var_dump(get_class_methods(Class::class))
```
### 相关函数的信息：https://www.php.net/manual/zh/book.funchand.php
```php
//获取全局函数
var_dump(get_defined_functions())
```
### 返加加载文件的信息:https://www.php.net/manual/zh/function.get-included-files.php
```php
//返回数组
var_dump(get_included_files());
```


