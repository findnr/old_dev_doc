<!--
 * @Author: 程英明
 * @Date: 2022-07-25 15:17:12
 * @LastEditTime: 2022-07-25 15:17:22
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\software\nginx\instance\upsetream.md
 * QQ:504875043@qq.com
-->
##### 配制说明
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