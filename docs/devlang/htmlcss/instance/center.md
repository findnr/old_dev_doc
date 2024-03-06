<!--
 * @Author: 程英明
 * @Date: 2022-07-24 14:14:57
 * @LastEditTime: 2022-07-24 16:28:33
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\devlang\htmlcss\instance\center.md
 * QQ:504875043@qq.com
-->
### 总结DIV框 html/CSS垂直水平居中的办法 
- 借鉴此文：https://www.toutiao.com/w/1738839183132676/?log_from=6e40edba8dc96_1658642352662
- flex grid区别：https://juejin.cn/post/6940627375537258527

##### 第一种：定位+cala（固定宽高）
```html
<div class="box">
    <div class="content"></div>
</div>
```
```css
.box{
    width:200px;
    height:200px;
    border:1px solid black;
    position:relative;
}
.content{
    width:100px;
    height:100px;
    background:red;
    position:absoulute;
    top:calc(50%-50px);
    left:calc(50%=50px);
}
```
##### 第二种：定位+margin:auto(不定宽高)
```css
.box{
    width:200px;
    height:200px;
    border:1px solid black;
    position:relative;
}
.content{
    width:100px;
    height:100px;
    background:red;
    position:absoulute;
    margin:auto;
    left:0;
    right:0;
    top:0;
    bottom:0;
}
```
##### 第三种：transfrom(不定宽高)
```css
.box{
    width:200px;
    height:200px;
    border:1px solid black;
    position:relative;
}
.content{
    width:100px;
    height:100px;
    background:red;
    position:absoulute;
    left:50%;
    top:50%;
    transfrom:translate(-50%,-50%);
}
```
##### 第四种，使用flex
```css
.box{
    border:1px solid black;
    width: 200px;
    height: 200px;
    display:flex;
}
.content{
    width: 100px;
    height: 100px;
    background:red;
    margin:auto;
}
```
### 总结框内的文本居中
- 第一种，（单行文本）
```html
<div class='box'></div>
```
```css
.box{
    height:20px;
    line-height:20px;
}
```
- 第二种，（多行文本）
```html
<div class="box">
    <div class="content"></div>
</div>
```
```css
.box{
    display:table;
}
.content{
    display: table-cell;
    vertical-align:middle;
    text-align:center;
}
```

