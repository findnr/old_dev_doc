/*
 * @Author: 程英明
 * @Date: 2022-03-10 11:28:16
 * @LastEditTime: 2023-01-10 17:02:46
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\.vitepress\configsidebar\index.js
 * QQ:504875043@qq.com
 */
import devlang from "./devlang"
import devframe from "./devframe"
import software from "./software"
import os from "./os"
import git from "./git"
import other from "./other"
import database from "./database"
const info = [...devlang, ...devframe, ...software, ...os, ...git, ...other, ...database]
const sidebar = {}
for (const k in info) {
  for (const ks in info[k]) {
    sidebar[ks] = info[k][ks]
  }
}
sidebar["/"] = []
const pathJoin = (data) => {
  let _sidebar = {};
  // 路径处理
  for (let k in data) {
    data[k].forEach((e) => {
      e.link = k + e.link;
      if (e.items) {
        let _chpath = e.link.replace(/\/index$/gi, '');
        e.items.forEach((item) => {
          // 补充路径
          item.link = _chpath + '/' + item.link;
        });
      }
    });

    _sidebar[k] = data[k];
  }

  return _sidebar;
};
const sidebars = pathJoin(sidebar);

export default function setSidebar() {
  // return sidebar
  return sidebar
}
