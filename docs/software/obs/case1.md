<!--
 * @Author: 程英明
 * @Date: 2022-03-24 16:36:12
 * @LastEditTime: 2022-03-24 16:57:12
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\software\obs\case1.md
 * QQ:504875043@qq.com
-->
### 使用obs+nginx+rtmp直播
::: tip 安装nginx
```shell
yum install nginx
```
:::
::: tip nginx-rtmp-module地址
```shell
https://github.com/arut/nginx-rtmp-module
```
:::
::: tip nginx配制
rtmp配制
```
rtmp  {
    server  {
        listen 1935;
        chunk_size 4096;
        application live  {
            live on;
            record off;
        }
        application live2  {
            live on;
            record off;
        }
        application vod  {
            play /var/flvs;
        }
        application vod_http  {
            play http://服务器的ip/vod;
        }
        application hls  {
            live on;
            hls on;
            hls_path /tmp/hls;
        }
    }
}
```
:::
https://blog.csdn.net/qzcsu/article/details/72782759
https://www.cxyzjd.com/article/qzcsu/72782759