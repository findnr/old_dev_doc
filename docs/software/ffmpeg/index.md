<!--
 * @Author: 程英明
 * @Date: 2022-07-04 21:17:23
 * @LastEditTime: 2022-10-21 16:22:16
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\software\ffmpeg\index.md
 * QQ:504875043@qq.com
-->
#### 常用命令集合
```sh
#视频文件中的音频数据提取出来
ffmpeg -i test.mp4 -f mp3 -vn test.mp3
#按时间截取。
ffmpeg -ss 00:00:00 -i input.mp4 -t 00:00:05 -c:v copy -c:a copy output.mp4
#去除水印
ffmpeg -i 1.mp4 -vf "delogo=x=50:y=640:w=180:h=60:show=0" -c:a copy 2.mp4
#添加水印
https://cloud.tencent.com/developer/article/1774971
```
