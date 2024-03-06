<!--
 * @Author: 程英明
 * @Date: 2022-07-18 15:26:33
 * @LastEditTime: 2022-07-18 15:27:53
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\software\ffmpeg\install.md
 * QQ:504875043@qq.com
-->
##### centos7 源码安装 FFmpeg


//进入目录
```sh
cd /usr/local
```
//下载FFmpeg
```sh
git clone https://github.com/FFmpeg/FFmpeg
```
//进入下载目录
```sh
cd FFmpeg
```
//配制项
```sh
./configure --enable-shared --enable-swscale --enable-gpl --enable-nonfree --enable-pic --prefix=/usr/local/ffmpeg --enable-version3 --enable-postproc --enable-pthreads
```
如果报以下错误：
nasm/yasm not found or too old. Use --disable-x86asm for a crippled build.
解决：这个是yasm汇编编译器没有安装,可执行yum安装：
```sh
yum install yasm
```

//执行编译
```sh
make 或 make -j 4(cpu数量)
```
//执行安装
```sh
make install
```
//配制环境变量
```sh
vim /etc/profile
```
//添加到文件最后
```sh
export PATH=$PATH:/usr/local/ffmpeg/bin
```
//执行重新加载环境变量
```sh
source /etc/profile
```
#检测是否安装成功,执行：ffmpeg -version
#如果报错：
#ffmpeg: error while loading shared libraries: libavdevice.so.58: cannot open shared object file: No such file or directory
#原因是libavdevice.so模块找不到
#解决：
```sh
vim /etc/ld.so.conf
```
在文件最后写入：/usr/local/ffmpeg/lib
保存退出，执行重新加载命令
```sh
ldconfig
```
到这里应该已经安装成功！！！！！