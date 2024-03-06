<!--
 * @Author: 程英明
 * @Date: 2022-07-05 21:05:59
 * @LastEditTime: 2022-07-25 15:12:10
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\software\nginx\normal.md
 * QQ:504875043@qq.com
-->
##### yum 安装配制文件地址（/etc/nginx/nginx.conf）
```ini
server{
        listen 80;
        server_name findnr.com www.findnr.com ~^(?<subdomain>.+)\.findnr\.com$;
        location / {
                proxy_set_header X-Real-Ip $remote_addr;
                proxy_set_header X-Frowarded-For $proxy_add_x_forwarded_for;
                proxy_set_header Host $http_host;
                proxy_set_header X-Nginx-Proxy true;
                proxy_set_header Connection "";
                proxy_pass      http://127.0.0.1:18080;
        }
}
```
##### location模块配置在路由访问信息配置中关联到反向代理、负载均衡等等各项功能。
##### 语法规则：
|语法|说明|
| ------------ | ------------ |
|=|开头表示精确匹配|
|^~|开头表示:url以某个常规字符串开头，用来匹配URL路径|
|~|开头表示：区分大小写|
|~\*|开头表示：不区分大小写|
|/|通用匹配，任何请求都能匹配到|

##### 优先级
- 多个location优先级：首先匹配 =，其次匹配^~, 其次是按文件中顺序的正则匹配，最后是交给 / 通用匹配。当有匹配成功时候，停止匹配，按当前匹配规则处理请求。
```ini
location / {
　　root /nginx/www;
　  index index.php index.html index.htm;
}
location ^~ /test {
proxy_pass http://backend;
proxy_redirect off;
proxy_set_header Host $host;
}
```
- location /：表示匹配访问根目录。
- root：用于指定访问根目录时，访问虚拟主机的web目录。
- index：在不指定访问具体资源时，默认展示的资源文件列表。