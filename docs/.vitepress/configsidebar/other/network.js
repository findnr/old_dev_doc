/*
 * @Author: 程英明
 * @Date: 2022-08-29 16:45:40
 * @LastEditTime: 2022-11-03 16:12:51
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\.vitepress\configsidebar\other\network.js
 * QQ:504875043@qq.com
 */
export default {
    "/other/network/": [{
        text: '华为设备相关',
        link: 'huawei',
        items: [
            { text: '常用命令集合', link: 'index' },
            { text: '生命周期说明', link: 'lifecycle' }
        ]
    }, {
        text: 'TpLink相关',
        link: 'tplink',
        items: [
            { text: '相关参考', link: 'info' },
            { text: '生命周期说明', link: 'lifecycle' }
        ]
    }, {
        text: 'H3C相关',
        link: 'h3c',
        items: [
            { text: '相关参考', link: 'info' },
            { text: '生命周期说明', link: 'lifecycle' }
        ]
    }, {
        text: '网络规化设计师',
        link: 'hight',
        items: [
            { text: 'HDLC', link: 'hdlc' },
            { text: '交换机参数', link: 'switch' },
            { text: '局域网技术', link: 'localnetwork' }
        ]
    }, {
        text: '网络工程师',
        link: 'middify',
        items: [
            { text: '相关参考', link: 'info' },
            { text: '生命周期说明', link: 'lifecycle' }
        ]
    }]
}