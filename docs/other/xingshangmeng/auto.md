<!--
 * @Author: 程英明
 * @Date: 2022-08-20 17:58:18
 * @LastEditTime: 2022-08-20 17:58:44
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\other\xingshangmeng\auto.md
 * QQ:504875043@qq.com
-->
### 自动删除没有的烟
```js
(function(){
    let objtop=document.querySelectorAll(".xsm-utable-body");
    let obj=document.querySelectorAll(".xsm-utable-body .cgt-col-ord");
    let len=obj.length; 
    for (let index = 0; index < len; index++) {
        if(obj[index].innerText == 0) objtop[index].style.display='none'
    }
})()
```