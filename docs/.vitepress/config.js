/*
 * @Author: 程英明
 * @Date: 2022-03-09 16:56:36
 * @LastEditTime: 2024-03-06 09:05:46
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Description: 
 * @FilePath: \doc-man\docs\.vitepress\config.js
 * QQ:504875043@qq.com
 */
import setNav from "./confignav"
import setSidebar from "./configsidebar"

module.exports = {
    title: "学习笔记",
    base: '/',
    themeConfig: {
        nav: setNav(),
        sidebar: setSidebar(),
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
        },
        lastUpdatedText: '最后更新时间',
        editLink: {
            pattern: 'https://gitee.com/jike/doc-man/tree/master/docs/:path',
            text: '编辑这个页面'
        },
        outline: 'deep',
        outlineTitle: '这是浏览目录',
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
    },

    algolia: {
        appId: '60VFFXCJOP',
        apiKey: '261f00d5ab7223df11a85d0f7fb7906d',
        indexName: 'vitepress',
    },
    appearance: true,
    lang: 'zh-CN',
    lastUpdated: true
}