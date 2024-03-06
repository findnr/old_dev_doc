<!--
 * @Author: 程英明
 * @Date: 2022-07-18 15:12:16
 * @LastEditTime: 2022-07-18 15:13:25
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\os\linux\autotime.md
 * QQ:504875043@qq.com
-->
##### 详细说明信息
```sh
# For details see man 4 crontabs
# Example of job definition:
# .---------------- minute (0 - 59)
# | .------------- hour (0 - 23)
# | | .---------- day of month (1 - 31)
# | | | .------- month (1 - 12) OR jan,feb,mar,apr ...
# | | | | .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# | | | | |
# * * * * * user-name command to be executed
定时任务的每段为：分，时，日，月，周，用户，命令
第1列表示分钟1～59 每分钟用*或者 */1表示
第2列表示小时1～23（0表示0点）
第3列表示日期1～31
第4列表示月份1～12
第5列标识号星期0～6（0表示星期天）
第6列要运行的命令
*：表示任意时间都，实际上就是“每”的意思。可以代表00-23小时或者00-12每月或者00-59分
-：表示区间，是一个范围，00 17-19 * * * cmd，就是每天17,18,19点的整点执行命令
,：是分割时段，30 3,19,21 * * * cmd，就是每天凌晨3和晚上19,21点的半点时刻执行命令
/n：表示分割，可以看成除法，*/5 * * * * cmd，每隔五分钟执行一次
```
##### 参考说明
```sh
crontab -l -u root      #查看root用户
0 */1 * * * command
crontab -e  #编辑定时任务，在编写时会检查语法，而echo，或者vi编辑配置时不会检查(visudo也会检查语法)
crontab文件的一些例子：
#每晚的21:30重启lighttpd。
30 21 * * * /usr/local/etc/rc.d/lighttpd restart
#每月1、10、22日的4 : 45重启lighttpd。
45 4 1,10,22 * * /usr/local/etc/rc.d/lighttpd restart
#每周六、周日的1 : 10重启lighttpd
10 1 * * 6,0 /usr/local/etc/rc.d/lighttpd restart
#每天18 : 00至23 : 00之间每隔30分钟重启lighttpd。最后一次的任务执行时间为23:30
0,30 18-23 * * * /usr/local/etc/rc.d/lighttpd restart
#每星期六的11 : 00 pm重启lighttpd
0 23 * * 6 /usr/local/etc/rc.d/lighttpd restart
#每分钟就执行一次
* */1 * * * /usr/local/etc/rc.d/lighttpd restart
#每月的4号与每周一到周三的11点重启apache（周和日尽量不要同时使用）
0 11 4 * mon-wed /usr/local/etc/rc.d/lighttpd restart
#一月一号的4点重启lighttpd
9）0 4 1 jan * /usr/local/etc/rc.d/lighttpd restart
```
##### 重新启动
```shell
systemctl restart crond.service
```