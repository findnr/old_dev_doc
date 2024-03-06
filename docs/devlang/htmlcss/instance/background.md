<!--
 * @Author: 程英明
 * @Date: 2022-07-25 14:53:51
 * @LastEditTime: 2022-07-25 14:54:11
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\devlang\htmlcss\instance\background.md
 * QQ:504875043@qq.com
-->
### 网站变灰
```css
html {
    overflow-y:scroll;
    filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
    -webkit-filter: grayscale(100%);
}
```