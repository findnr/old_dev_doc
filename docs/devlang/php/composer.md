<!--
 * @Author: 程英明
 * @Date: 2022-04-07 08:31:50
 * @LastEditTime: 2022-07-30 09:22:36
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\devlang\php\composer.md
 * QQ:504875043@qq.com
-->
### composer相关的学习链接地址
- https://github.com/composer/composer （github地址）
- https://getcomposer.org （英文网）
- https://www.phpcomposer.com （中文网）
### 配制参数页面
- https://getcomposer.org/doc/04-schema.md （英文网）
- https://docs.phpcomposer.com/04-schema.html （中文网）
### 配制文件的说明（composer.json）
```json
{
    //自动引入
    "autoload": {
        //psr-4规范自动引入
        "psr-4": {
            "WeixinPhpServerApi\\":"src/"
        },
        //文件引入，此选项加入后会在autoload_static.php中引入文件
        "files":[
            "test/ttt.php"
        ]
        
    },
}
```
### 包开发流程
- 第一步：项目初始化
```sh
composer init
```
- 第二步：编写配制文件(composer.json)
```json
{
    "name": "findnr/weixin-php-server-api",
    "description": "this is weixin server api group.",
    "license": "MIT",
    "autoload": {
        "psr-4": {
            "WeixinPhpServerApi\\":"src/"
        }
    },
    "authors": [
        {
            "name": "chengyingming Smith",
            "email": "504875043@qq.com"
        }
    ],
    "require": {}
}
```
### 文件结构说明
#### 根据配制文件
```json
{
"autoload": {
        "psr-4": {
            "WeixinPhpServerApi\\":"src/"
        }
    },
}
```
- 注意：composer.json文件中的配制片断，在项目创建一个src目录
- src目录写代码
- 例如
- src\Api.php
```php
//这个是php文件
<?php
namespace WeixinPhpServerApi;

class Api{
    public function test(){
	    return "this is api test";
	}
}
```
- 再写一个测试php:
- 创建一个test文件夹
- 创建一个test.php文件
- 使用：composer install 命令安装，会自动生成一个vendor目录
- test\test.php
```php
//测试代码
<?php
require_once "../vendor/autoload.php";

use WeixinPhpServerApi\Api;

$ttt = new Api();
$test = $ttt->test();
echo $test;
```
- 执行php test/test.php
- 命令终端会输出：this is api test

### 配制与git实时PUSH更新
- 注册一个https://packagist.org帐号
- 点击Submit
- 添加git地址
- 点击项目
- 点击设置
- 这是在Webhooks选项中配制