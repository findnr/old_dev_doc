/*
 * @Author: 程英明
 * @Date: 2022-03-21 15:48:31
 * @LastEditTime: 2022-06-25 14:34:20
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\.vitepress\configsidebar\devframe\vue3.js
 * QQ:504875043@qq.com
 */
export default {
    "/devframe/vue3/": [{
        text: 'vue3框架',
        link: 'index',
        items: [
            { text: '开发中用到的相关插件', link: 'pinfo' },
            { text: '开发中用到的框架', link: 'finfo' },
            { text: '项目创建', link: 'create' },
            { text: '父子组件相互调用', link: 'mutual' },
            { text: '常用的接口函数', link: 'apifunc' },
        ]
    }, {
        text: 'vue3源码学习',
        link: 'source',
        items: [
            { text: '初始化文件加载情况', link: 'init' },
        ]
    }
    ]
}