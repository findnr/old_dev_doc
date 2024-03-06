<!--
 * @Author: 程英明
 * @Date: 2022-07-05 08:48:59
 * @LastEditTime: 2022-07-05 09:17:11
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\software\ffmpeg\format.md
 * QQ:504875043@qq.com
-->
### 格式处理相关
### 改变分辨率
> - source 源文件
> - target 目标文件
> - vag是分辨率，也可以是1024*768 http://underpop.online.fr/f/ffmpeg/help/video-size.htm.gz
```sh
ffmpeg -i "source" -s [vga] "target"
```
