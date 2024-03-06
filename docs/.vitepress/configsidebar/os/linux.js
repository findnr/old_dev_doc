/*
 * @Author: 程英明
 * @Date: 2022-03-14 13:42:01
 * @LastEditTime: 2022-07-19 16:14:50
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\.vitepress\configsidebar\os\linux.js
 * QQ:504875043@qq.com
 */
export default {
    "/os/linux/": [{
        text: 'linux说明',
        link: 'index',
        items: [
            { text: '文件详细信息', link: 'fileinfo' },
            { text: '文件增删改查', link: 'filerudp' },
            { text: '系统自动周期执行', link: 'autotime' },
            { text: 'systemctl脚本相关', link: 'systemctl' },
            { text: 'IP配制信息', link: 'ipconfig' },
            { text: '环境变量配制', link: 'homepath' },
            { text: '后台运行程序', link: 'backgrounder' },
            { text: 'inotify文件变化监测', link: 'inotify' },
            { text: '添加硬盘', link: 'adddisk' },
        ]
    }]
}