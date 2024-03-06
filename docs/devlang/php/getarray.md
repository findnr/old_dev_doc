<!--
 * @Author: 程英明
 * @Date: 2022-03-16 09:51:51
 * @LastEditTime: 2022-03-28 16:59:41
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\devlang\php\getarray.md
 * QQ:504875043@qq.com
-->
###
### 数组相关操作：https://www.php.net/manual/zh/book.array.php
::: tip array_column($array,$string)返加数组中指定列的数量（返回一维数组）
```php
$array=[['test'=>1],['test'=>2],['test'=>3],['test'=>4]];
$new_array=array_column($array,'test');// $new_array=[1,2,3,4]
var_dump($new_array);
```
:::
::: tip array_flip($array)交换数组中的键与值
```php
$array=['a','b','c'];
$new_array=array_flip($array);//$new_array=['a'=>0,'b'=>1,'c'=>2]
var_dump($new_array);
``` 
:::
::: tip array_walk();array_walk_recursive();array_map();数组中的元素做处理
- https://www.php.net/manual/zh/function.array-walk.php
- https://www.php.net/manual/zh/function.array-walk-recursive.php
- https://www.php.net/manual/zh/function.array-map.php
:::
::: tip array_filter();数组过滤
- https://www.php.net/manual/zh/function.array-filter.php
:::