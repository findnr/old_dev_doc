<!--
 * @Author: 程英明
 * @Date: 2022-04-08 09:32:19
 * @LastEditTime: 2022-04-08 10:32:59
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\devframe\thinkphp\thinkphp6source\frist.md
 * QQ:504875043@qq.com
-->
### 第一条主线（入口文件加载的方法）
```php
<?php
namespace think;
require __DIR__ . '/../vendor/autoload.php';
$http = (new App())->http;
$response = $http->run();
$response->send();
$http->end($response);
```
##### 第一步
namespace think;命名空间是为了App.php在同一上命名空间下，这样方便使用new App()来实例。
##### 第二步
require __DIR__ . '/../vendor/autoload.php';通过composer自动加载把所有的think类加载出来，外层能使用new App()实例。
##### 第三步
$http = (new App())->http;通过App.php实例化获取到http类（Http::class）,其中的原理，App.php是继承Container.php，Container.php中有一个魔术方法__get(),该方法是获取属性时没有此属性就是执行此方法。
##### 第四步
$response = $http->run();此方法是调用Http.php中的run()方法，得到一个全框架的内容对象。
##### 第五步
$response->send();调用Response.php中的send()方法，处理返的数据。并返加信息
##### 第六步
$http->end($response);调用Http.php中的end()方法，结束后的一些处理。