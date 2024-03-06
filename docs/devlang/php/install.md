<!--
 * @Author: 程英明
 * @Date: 2022-07-05 20:21:11
 * @LastEditTime: 2022-07-05 20:57:41
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\devlang\php\install.md
 * QQ:504875043@qq.com
--> 
### 使用yum或dnf
- remi 源安装（优点是集成不同版本，安装方便，理样及时）https://rpms.remirepo.net
- 不同发行版的安装说明：https://blog.remirepo.net/pages/Config-en
- 版本清除
```sh
yum-config-manager --disable remi-php*
```
- 版本切换
```sh
yum-config-manager --enable remi-php73
```
- 安装常用的php扩展（使用yum）
```sh
yum install php php-mcrypt php-devel php-cli php-gd php-pear php-curl php-fpm php-mysql php-ldap php-zip php-fileinfo php-swoole php-redis php-pdo php-mysqlnd php-bcmath php-json php-mbstring php-mcrypt php-opcache php-pecl-crypto php-pecl-mcrypt php-pecl-geoip php-snmp php-soap php-xml php-devel php-tidy
```
### 源码安装
- 安装前先使用yum安装相关依赖
```sh
yum install libxml2 libxml2-devel openssl openssl-devel curl curl-devel libjpeg libjpeg-devel libpng libpng-devel freetype freetype-devel pcre pcre-devel libxslt libxslt-devel bzip2 bzip2-devel sqlite-devel sqlite gmp-devel net-snmp-devel re2c bison autoconf make libtool ccache libxml2-devel sqlite-devel
```
- oniguruma安装
```sh
./autogen.sh
./configure --prefix=/usr --libdir=/lib64
make && make install
```
- libzip1.2安装
```sh
./configure --prefix=/usr --libdir=/usr/lib64
make && make install
```
- php生成configure文件
```sh
./buildconf
```
- php源码安装命令
```sh
./configure --prefix=/usr/local/php --with-apxs2=/usr/bin/apxs --with-config-file-path=/usr/local/php/etc --enable-fpm --with-fpm-user=nginx --with-fpm-group=nginx --enable-mysqlnd --with-mysqli --with-pdo-mysql --enable-opcache --with-pcre-jit --enable-gd --with-jpeg --with-freetype --with-gettext --with-curl --with-openssl --enable-sockets --enable-mbstring --enable-xml --with-zip --with-zlib --with-snmp --with-mhash --enable-ftp --enable-bcmath --enable-soap --enable-shmop --enable-sysvsem --enable-pcntl --with-gmp
```
```sh
make && make install
```
- 配制环境变量
```sh
vim /etc/profile
PATH="$PATH:/usr/local/php/bin:/usr/local/php/sbin"
export PATH
```
```shell
source /etc/profile
cp php.ini-development ../../php/etc/php.ini
```
