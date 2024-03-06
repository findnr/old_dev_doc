<!--
 * @Author: 程英明
 * @Date: 2022-07-30 16:01:38
 * @LastEditTime: 2022-07-31 20:35:33
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\devframe\thinkphp\thinkphp6source\http.md
 * QQ:504875043@qq.com
-->
### 详细说明
```php
//第一步：实例App.php App.php又是继承 Container.php得到，最终行到一个App对象
namespace think;
require __DIR__ . '/../vendor/autoload.php';
(new App())
//第二步：(new App())->http 通过__get()来动态加载Http.php类型
$http = (new App())->http;
//第三步：(new App())->http->run() 通过run()方法运行整个http处理过程，最终返加一个$response对象
$response = $http->run();
//第四步：$response返回到浏览器
$response->send();
//第五步：处理日志的写入
$http->end($response);
```
- 第一步分析：命名空间为think，使用composer规则加载一个公共文件，这样只要使用composer安装的库都能自动引入，由于thinkphp的核心库使用的是think命名空间，这样就可以使用thinkphp核心库的类了，这样就执行了App实例（new App()）,这里面实例可以通过get_include_files()方法查看加载的文件情况。要对composer做一些基本的了解：https://learnku.com/docs/composer/2018
```json
 {
    "autoload": {
        //自动加载引入的文件目录
        "psr-4": {
            "think\\": "src"
        },
        //加载引入文件，会放到autoload_static.php文件中，会提前加载在(new App())实例前
        "files": [
            "src/helper.php"
        ]
    },
 }
```
new App(),这样其实就是实例一个App类，执行了App中的__construct()方法
```php
 public function __construct(string $rootPath = '')
{
        $this->thinkPath   = realpath(dirname(__DIR__)) . DIRECTORY_SEPARATOR;
        $this->rootPath    = $rootPath ? rtrim($rootPath, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR : $this->getDefaultRootPath();
        $this->appPath     = $this->rootPath . 'app' . DIRECTORY_SEPARATOR;
        $this->runtimePath = $this->rootPath . 'runtime' . DIRECTORY_SEPARATOR;

        if (is_file($this->appPath . 'provider.php')) {
            $this->bind(include $this->appPath . 'provider.php');
        }

        static::setInstance($this);

        $this->instance('app', $this);
        $this->instance('think\Container', $this);
}
```
- 第二步分析：获取到一个http实例，其实是用到了App.php是继承Container.php，Container.php文件中有一个魔术方法__get(),这个方法是PHP中一个多态的实现方式，这样可以使用框架内的类型动态加载到框架中，
```php
//这里是调用了get方法
 public function __get($name)
{
    return $this->get($name);
}
//get方法中返回了一个make方法
public function get($abstract)
{
    if ($this->has($abstract)) {
        return $this->make($abstract);
    }

    throw new ClassNotFoundException('class not exists: ' . $abstract, $abstract);
}
//make方法是返回了一个Http.php实例
public function make(string $abstract, array $vars = [], bool $newInstance = false)
{
    $abstract = $this->getAlias($abstract);

    if (isset($this->instances[$abstract]) && !$newInstance) {
        return $this->instances[$abstract];
    }

    if (isset($this->bind[$abstract]) && $this->bind[$abstract] instanceof Closure) {
        $object = $this->invokeFunction($this->bind[$abstract], $vars);
    } else {
        $object = $this->invokeClass($abstract, $vars);
    }

    if (!$newInstance) {
        $this->instances[$abstract] = $object;
    }

    return $object;
}
```
- 第三步分析：得到Http.php类后可以使用类中的run()方法运行整个http的处理，处理完成后交到下一步去返回内容
```php
public function run(Request $request = null): Response
{
    //初始化
    $this->initialize();

    //自动创建request对象
    $request = $request ?? $this->app->make('request', [], true);
    $this->app->instance('request', $request);

    try {
        $response = $this->runWithRequest($request);
    } catch (Throwable $e) {
        $this->reportException($e);

        $response = $this->renderException($request, $e);
    }

    return $response;
}
```
此过程是整个最核心部分，路由处理，中间处理，参数处理，事件处理等等都这里面，这个只有慢慢的去看了
- 第四步分析：就是执行了Http.php类中的方法send()，这一步就是把处理后的内容返回到客户端
```php
//send()方法最终执行senData()方法
public function send(): void
{
        // 处理输出数据
    $data = $this->getContent();

    if (!headers_sent()) {
        if (!empty($this->header)) {
                // 发送状态码
            http_response_code($this->code);
                // 发送头部信息
            foreach ($this->header as $name => $val) {
                header($name . (!is_null($val) ? ':' . $val : ''));
            }
        }

        if ($this->cookie) {
            $this->cookie->save();
        }
    }

    $this->sendData($data);

    if (function_exists('fastcgi_finish_request')) {
            // 提高页面响应
        fastcgi_finish_request();
    }
}
//sendData()就是返回数据
protected function sendData(string $data): void
 {
    echo $data;
}
```
第五步分析：end()方法的功能就是写日志
```php
public function end(Response $response): void
{
    $this->app->event->trigger(HttpEnd::class, $response);

    //执行中间件
    $this->app->middleware->end($response);

    // 写入日志
    $this->app->log->save();
}
```