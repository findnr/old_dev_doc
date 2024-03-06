<!--
 * @Author: 程英明
 * @Date: 2022-03-16 09:54:04
 * @LastEditTime: 2023-01-12 16:16:12
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\devlang\php\getstring.md
 * QQ:504875043@qq.com
-->
###
### 数组相关操作：https://www.php.net/manual/zh/book.strings.php
::: tip 字符串截取 substr() trim()->ltrim()->rtrim() str_replace()
```php
```
:::
::: tip 字符与数据相互转换
- https://www.php.net/manual/zh/function.explode.php （字符串转数组）
- https://www.php.net/manual/zh/function.implode.php （数组转字符串）
- https://www.php.net/manual/zh/function.join.php （数组转字符串别名）
```php
//export() //字符串转数组
$arr = explode(separator,string);
//import() => join() // 数组转字符串
$str = implode(separator,array);join(separator,array);
```
:::
::: tip 处理html php标签
- https://www.php.net/manual/zh/function.strip-tags.php (去除html+php 标签)
```php
strip_tags(string $str, string $allowable_tags = ?): string
```
- https://www.php.net/manual/zh/function.htmlspecialchars.php (将特殊字符转换为 HTML 实体)
- https://www.php.net/manual/zh/function.htmlspecialchars-decode.php (将特殊的 HTML 实体转换回普通字符)
```php
htmlspecialchars(html)
htmlspecialchars_decode(enhtml)
```
:::

::: tip 二进制 十进制 十六进制相互转按 打包
- https://www.php.net/manual/zh/function.bin2hex.php （二进制转十六进制）
```php
$s16=bin2hex(string);
```
- https://www.php.net/manual/zh/function.hex2bin.php (转换十六进制字符串为二进制字符串)
```php
```
- https://www.php.net/manual/zh/function.pack.php (将数据打包成二进制字符串)
- https://www.php.net/manual/zh/function.unpack.php (Unpack data from binary string)
:::