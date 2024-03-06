<!--
 * @Author: 程英明
 * @Date: 2022-10-20 16:47:02
 * @LastEditTime: 2022-10-21 15:42:36
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\software\ffmpeg\and.md
 * QQ:504875043@qq.com
-->
### 视频与音频合并
```sh
ffmpeg -i 1.mp4 -i 2.mp4 -c:v copy -c:a aac -strict experimental output.mp4
```
### 油猴插件视频下载 
- [地址]https://greasyfork.org/zh-CN/scripts/445751-unlimited-downloader
```js
//播放完整后下载
window.downloadall = 1
//设置视频的播放速度
document.querySelector('video').playbackRate = 16
```
