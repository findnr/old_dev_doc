<!--
 * @Author: 程英明
 * @Date: 2022-03-14 14:01:27
 * @LastEditTime: 2022-03-14 15:10:39
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\os\openwrt\compile.md
 * QQ:504875043@qq.com
-->
### openwrt 系统编译

配制文件(feeds.conf.default)

```shell
# 增加helloworld,passwall
src-git helloworld https://github.com/fw876/helloworld
src-git passwall https://github.com/xiaorouji/openwrt-passwall
# 增加small8整合的最新包
src-git small8 https://github.com/kenzok8/small-package
# 增加small8整合的常用包
src-git kenzo https://github.com/kenzok8/openwrt-packages
```