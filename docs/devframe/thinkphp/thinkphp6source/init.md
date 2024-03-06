<!--
 * @Author: 程英明
 * @Date: 2022-04-06 11:35:52
 * @LastEditTime: 2022-04-07 10:04:10
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\devframe\thinkphp\thinkphp6source\init.md
 * QQ:504875043@qq.com
-->
### thinkphp初始化线路
```php
<?php
// [ 应用入口文件 ]

namespace think;

require __DIR__ . '/../vendor/autoload.php';

// 执行HTTP应用并响应
$http = (new App())->http;

$response = $http->run();

$response->send();

$http->end($response);
```
### 第一步
```php
//在入口文件中查看文件加载情况
require __DIR__ . '/../vendor/autoload.php';
dump(get_included_files());//获取取加载的文件信息
//$array=[
//  0 => "F:\thinkphpsource\public\router.php",
//  1 => "F:\thinkphpsource\public\index.php",
//  2 => "F:\thinkphpsource\vendor\autoload.php",
//  3 => "F:\thinkphpsource\vendor\composer\autoload_real.php",
//  4 => "F:\thinkphpsource\vendor\composer\platform_check.php",
 // 5 => "F:\thinkphpsource\vendor\composer\ClassLoader.php",
 // 6 => "F:\thinkphpsource\vendor\composer\autoload_static.php",
//  7 => "F:\thinkphpsource\vendor\topthink\think-helper\src\helper.php",
 // 8 => "F:\thinkphpsource\vendor\topthink\think-orm\stubs\load_stubs.php",
 // 9 => "F:\thinkphpsource\vendor\topthink\framework\src\think\Exception.php",
 // 10 => "F:\thinkphpsource\vendor\topthink\framework\src\think\Facade.php",
 // 11 => "F:\thinkphpsource\vendor\symfony\polyfill-mbstring\bootstrap.php",
//  12 => "F:\thinkphpsource\vendor\symfony\polyfill-php72\bootstrap.php",
//  13 => "F:\thinkphpsource\vendor\symfony\polyfill-php80\bootstrap.php",
//  14 => "F:\thinkphpsource\vendor\symfony\var-dumper\Resources\functions\dump.php",
//]
```
### 第二步
```php
require __DIR__ . '/../vendor/autoload.php';
new App();
dump(get_included_files());
//此实例化增加了车个文件
//$array =[
//  15 => "F:\thinkphpsource\vendor\topthink\framework\src\think\App.php",
//  16 => "F:\thinkphpsource\vendor\topthink\framework\src\think\Container.php",
//  17 => "F:\thinkphpsource\vendor\psr\container\src\ContainerInterface.php",
//  18 => "F:\thinkphpsource\app\provider.php",
//]
```
new App();实例化增加的文件看，使用了topthink\framework\src\think\App.php类，然而App类是继承Container.php，Container.php使用了prs里面的ContainerInterface.php这个接口，查看App.php类的信息
```php
 public function __construct(string $rootPath = '')
    {
        $this->thinkPath   = dirname(__DIR__) . DIRECTORY_SEPARATOR;
        $this->rootPath    = $rootPath ? rtrim($rootPath, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR : $this->getDefaultRootPath();
        $this->appPath     = $this->rootPath . 'app' . DIRECTORY_SEPARATOR;
        $this->runtimePath = $this->rootPath . 'runtime' . DIRECTORY_SEPARATOR;
        //此函数加载app\provider.php文件
        if (is_file($this->appPath . 'provider.php')) {
            $this->bind(include $this->appPath . 'provider.php');
        }

        static::setInstance($this);

        $this->instance('app', $this);
        $this->instance('think\Container', $this);
    }
```
### 第三步
```php
require __DIR__ . '/../vendor/autoload.php';


// 执行HTTP应用并响应
$http = (new App())->http;

$response = $http->run();
dump(get_included_files());

//$array=[
//  21 => "F:\thinkphpsource\vendor\topthink\framework\src\think\Env.php"
//  22 => "F:\thinkphpsource\app\common.php"
//  23 => "F:\thinkphpsource\vendor\topthink\framework\src\helper.php"
//  24 => "F:\thinkphpsource\vendor\topthink\framework\src\think\Config.php"
//  25 => "F:\thinkphpsource\config\app.php"
//  26 => "F:\thinkphpsource\vendor\topthink\framework\src\think\facade\Env.php"
//  27 => "F:\thinkphpsource\config\cache.php"
//  28 => "F:\thinkphpsource\config\console.php"
//  29 => "F:\thinkphpsource\config\cookie.php"
//  30 => "F:\thinkphpsource\config\database.php"
//  31 => "F:\thinkphpsource\config\filesystem.php"
//  32 => "F:\thinkphpsource\config\lang.php"
//  33 => "F:\thinkphpsource\config\log.php"
//  34 => "F:\thinkphpsource\config\middleware.php"
//  35 => "F:\thinkphpsource\config\route.php"
//  36 => "F:\thinkphpsource\config\session.php"
//  37 => "F:\thinkphpsource\config\trace.php"
//  38 => "F:\thinkphpsource\config\view.php"
//  39 => "F:\thinkphpsource\app\event.php"
//  40 => "F:\thinkphpsource\vendor\topthink\framework\src\think\Event.php"
//  41 => "F:\thinkphpsource\app\service.php"
//  42 => "F:\thinkphpsource\app\AppService.php"
//  43 => "F:\thinkphpsource\vendor\topthink\framework\src\think\Service.php"
//  44 => "F:\thinkphpsource\vendor\topthink\framework\src\think\Lang.php"
//  45 => "F:\thinkphpsource\vendor\topthink\framework\src\lang\zh-cn.php"
//  46 => "F:\thinkphpsource\vendor\topthink\framework\src\think\initializer\Error.php"
//  47 => "F:\thinkphpsource\vendor\topthink\framework\src\think\initializer\RegisterService.php"
//  48 => "F:\thinkphpsource\vendor\services.php"
//  49 => "F:\thinkphpsource\vendor\topthink\framework\src\think\service\PaginatorService.php"
//  50 => "F:\thinkphpsource\vendor\topthink\framework\src\think\service\ValidateService.php"
//  51 => "F:\thinkphpsource\vendor\topthink\framework\src\think\service\ModelService.php"
//  52 => "F:\thinkphpsource\vendor\topthink\think-trace\src\Service.php"
//  53 => "F:\thinkphpsource\vendor\topthink\framework\src\think\Middleware.php"
//  54 => "F:\thinkphpsource\vendor\topthink\framework\src\think\initializer\BootService.php"
//  55 => "F:\thinkphpsource\vendor\topthink\think-orm\src\Paginator.php"
//  56 => "F:\thinkphpsource\vendor\topthink\framework\src\think\Validate.php"
//  57 => "F:\thinkphpsource\vendor\topthink\think-orm\src\Model.php"
//  58 => "F:\thinkphpsource\vendor\topthink\think-helper\src\contract\Arrayable.php"
//  59 => "F:\thinkphpsource\vendor\topthink\think-helper\src\contract\Jsonable.php"
//  60 => "F:\thinkphpsource\vendor\topthink\think-orm\src\model\concern\Attribute.php"
//  61 => "F:\thinkphpsource\vendor\topthink\think-orm\src\model\concern\RelationShip.php"
//  62 => "F:\thinkphpsource\vendor\topthink\think-orm\src\model\concern\ModelEvent.php"
//  63 => "F:\thinkphpsource\vendor\topthink\think-orm\src\model\concern\TimeStamp.php"
//  64 => "F:\thinkphpsource\vendor\topthink\think-orm\src\model\concern\Conversion.php"
//  65 => "F:\thinkphpsource\vendor\topthink\framework\src\think\Db.php"
//  66 => "F:\thinkphpsource\vendor\topthink\think-orm\src\DbManager.php"
//  67 => "F:\thinkphpsource\vendor\topthink\framework\src\think\Log.php"
//  68 => "F:\thinkphpsource\vendor\topthink\framework\src\think\Manager.php"
//  69 => "F:\thinkphpsource\vendor\psr\log\Psr\Log\LoggerInterface.php"
//  70 => "F:\thinkphpsource\vendor\topthink\framework\src\think\Cache.php"
//  71 => "F:\thinkphpsource\vendor\psr\simple-cache\src\CacheInterface.php"
//  72 => "F:\thinkphpsource\vendor\topthink\think-helper\src\helper\Arr.php"
//  73 => "F:\thinkphpsource\vendor\topthink\framework\src\think\cache\driver\File.php"
//  74 => "F:\thinkphpsource\vendor\topthink\framework\src\think\cache\Driver.php"
//  75 => "F:\thinkphpsource\vendor\topthink\framework\src\think\contract\CacheHandlerInterface.php"
//  76 => "F:\thinkphpsource\app\Request.php"
//  77 => "F:\thinkphpsource\vendor\topthink\framework\src\think\Request.php"
//  78 => "F:\thinkphpsource\app\middleware.php"
//  79 => "F:\thinkphpsource\vendor\topthink\framework\src\think\Pipeline.php"
//  80 => "F:\thinkphpsource\vendor\topthink\think-trace\src\TraceDebug.php"
//  81 => "F:\thinkphpsource\vendor\topthink\framework\src\think\Route.php"
//  82 => "F:\thinkphpsource\vendor\topthink\framework\src\think\route\RuleName.php"
//  83 => "F:\thinkphpsource\vendor\topthink\framework\src\think\route\Domain.php"
//  84 => "F:\thinkphpsource\vendor\topthink\framework\src\think\route\RuleGroup.php"
//  85 => "F:\thinkphpsource\vendor\topthink\framework\src\think\route\Rule.php"
//  86 => "F:\thinkphpsource\route\app.php"
//  87 => "F:\thinkphpsource\vendor\topthink\framework\src\think\facade\Route.php"
//  88 => "F:\thinkphpsource\vendor\topthink\framework\src\think\route\RuleItem.php"
//  89 => "F:\thinkphpsource\vendor\topthink\framework\src\think\route\dispatch\Url.php"
//  90 => "F:\thinkphpsource\vendor\topthink\framework\src\think\route\dispatch\Controller.php"
//  91 => "F:\thinkphpsource\vendor\topthink\framework\src\think\route\Dispatch.php"
//  92 => "F:\thinkphpsource\app\controller\Index.php"
//  93 => "F:\thinkphpsource\app\BaseController.php"
//  94 => "F:\thinkphpsource\vendor\topthink\framework\src\think\facade\App.php"
//  95 => "F:\thinkphpsource\vendor\topthink\framework\src\think\Response.php"
//  96 => "F:\thinkphpsource\vendor\topthink\framework\src\think\response\Html.php"
//  97 => "F:\thinkphpsource\vendor\topthink\framework\src\think\Cookie.php"
//  98 => "F:\thinkphpsource\vendor\topthink\think-trace\src\Html.php"
//  99 => "F:\thinkphpsource\vendor\topthink\framework\src\think\log\driver\File.php"
//  100 => "F:\thinkphpsource\vendor\topthink\framework\src\think\contract\LogHandlerInterface.php"
//  101 => "F:\thinkphpsource\vendor\topthink\framework\src\think\log\Channel.php"
//  102 => "F:\thinkphpsource\vendor\topthink\think-trace\src\tpl\page_trace.tpl"
//]
```
可以根据文件的加载情况大致熟悉一下流程
