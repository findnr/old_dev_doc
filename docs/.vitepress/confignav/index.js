/*
 * @Author: 程英明
 * @Date: 2022-03-10 11:25:09
 * @LastEditTime: 2022-03-24 15:31:06
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\.vitepress\confignav\index.js
 * QQ:504875043@qq.com
 */
import devlang from "./devlang"
import devframe from "./devframe"
import os from "./os"
import database from "./database"
import git from "./git"
import other from "./other"
import software from "./software"

export default function setNav() {
    return [devlang, devframe, os, database, git, software, other]
}