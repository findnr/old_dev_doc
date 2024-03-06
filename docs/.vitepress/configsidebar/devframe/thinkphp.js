/*
 * @Author: 程英明
 * @Date: 2022-03-10 15:06:00
 * @LastEditTime: 2022-07-30 16:01:25
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\.vitepress\configsidebar\devframe\thinkphp.js
 * QQ:504875043@qq.com
 */
export default {
    "/devframe/thinkphp/": [{
        text: 'th-v6',
        link: 'indexv6',
        items: [
            { text: '官网与手册地址', link: 'info' },
            { text: '开发相关信息', link: 'dev' },
            { text: '使用多应用的相关问题', link: 'moreapp' },
        ]
    }, {
        text: 'thinkphp6源码学习',
        link: 'thinkphp6source',
        items: [
            { text: '初始化文件加载情况', link: 'init' },
            { text: '入口文件index.php分析', link: 'frist1' },
            { text: 'http实例详细', link: 'http' },
        ]
    }, {
        text: 'th-v5',
        link: 'indexv5',
        items: [
            { text: 'thinkphp_info', link: 'thinkphp6' },
        ]
    }, {
        text: 'th-v3',
        link: 'indexv3',
        items: [
            { text: 'thinkphp_info', link: 'thinkphp6' },
        ]
    }
    ]
}
