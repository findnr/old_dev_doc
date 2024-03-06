<!--
 * @Author: 程英明
 * @Date: 2022-07-30 12:36:58
 * @LastEditTime: 2022-12-30 09:13:45
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\devlang\php\keyword.md
 * QQ:504875043@qq.com
-->
### implements
```php
//implements是对接口的继承
class Test implements InterfaceTest{}

```
### Closure $next
```php
//这是作为参数传入
function test(Closure $next)
{
    $next(123);
    var_dump($next);
}
test(function ($a) {
    echo $a;
});
//这是变量的方法
$closure = function($name){
  　 return sprintf("Hello %s", $name);
}
echo $closure("jerry");// Hello jerry
// 检测$closure变量是否是一个闭包
var_dump($closure instanceof Closure);//true
```