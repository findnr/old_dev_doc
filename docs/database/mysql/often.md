<!--
 * @Author: 程英明
 * @Date: 2022-10-21 15:37:57
 * @LastEditTime: 2022-10-21 15:39:51
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\database\mysql\often.md
 * QQ:504875043@qq.com
-->
### 总站使用
```sql
SELECT * FROM `cms_ztender_content` AS a LEFT JOIN `cms_ztender` as b ON a.zt_id = b.zt_id WHERE a.ztc_con like "%协力%"
```