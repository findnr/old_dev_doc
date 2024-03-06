/*
 * @Author: 程英明
 * @Date: 2022-07-05 21:02:39
 * @LastEditTime: 2022-07-25 15:21:54
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\.vitepress\configsidebar\software\nginx.js
 * QQ:504875043@qq.com
 */
export default {
    "/software/nginx/": [{
        text: 'nginx配制实例',
        link: 'instance',
        items: [
            { text: '反向代理配制', link: 'upsetream' },
            { text: '负载均衡', link: 'balance' },
            { text: 'nginx与vue去#', link: 'nginxvue' },
        ]
    }, {
        text: 'nginx相关信息',
        link: 'index',
        items: [
            { text: '安装', link: 'install' },
            { text: '普通配制', link: 'normal' },
        ]
    }]
}