/*
 * @Author: 程英明
 * @Date: 2022-03-10 14:45:09
 * @LastEditTime: 2022-08-19 09:18:41
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\.vitepress\configsidebar\devlang\php.js
 * QQ:504875043@qq.com
 */
export default {
    "/devlang/php/": [{
        text: 'php学习笔记',
        link: 'index',
        items: [
            { text: '不知道的内容', link: 'no' },
            { text: '配制文件', link: 'config' },
            { text: '安装流程', link: 'install' },
            { text: '对象函数', link: 'getinfo' },
            { text: '数组操作', link: 'getarray' },
            { text: '字符串操作', link: 'getstring' },
            { text: '操作文件相关', link: 'files' },
            { text: '对关键词的理解', link: 'keyword' },
            { text: 'composer学习内容', link: 'composer' },
        ]
    }, {
        text: '源码学习记录',
        link: 'source',
        items: [
            { text: '相关参考', link: 'info' },
            { text: '生命周期说明', link: 'lifecycle' }
        ]
    }]
}