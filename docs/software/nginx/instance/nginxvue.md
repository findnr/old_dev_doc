<!--
 * @Author: 程英明
 * @Date: 2022-07-25 15:21:00
 * @LastEditTime: 2022-07-25 15:21:18
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\software\nginx\instance\nginxvue.md
 * QQ:504875043@qq.com
-->
配制文件vue.test.conf文件
```ini
server{
	list 80;
	server_name vue.test.com;
	
	location /{
		try_files $uri/ index.html;
		root /home/test
	}
	location /dist{
		try_files $uri $uri/ /dist/index.html
		alias /home/test/dist/
	}
	location /vue{
		try_files $uri $uri/ /vue/index.hmtl
		alias /home/xh/vue/
	}
}
```