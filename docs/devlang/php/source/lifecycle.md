<!--
 * @Author: 程英明
 * @Date: 2022-08-19 09:18:00
 * @LastEditTime: 2022-08-29 09:59:15
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\devlang\php\source\lifecycle.md
 * QQ:504875043@qq.com
-->
### 生命周期说明
```c
/**生命同期 php-fpm
main()->php_module_startup()->php_request_startup()->php_execute_script()
                                      ^                     |
                                      |                     |
        php_module_shutdown()<-php_request_shutdown()<------|
*/
/**生命同期 php-cli
main()->php_module_startup()->php_request_startup()->php_execute_script()
                                                            |
                                                            |
        php_module_shutdown()<-php_request_shutdown()<------|
*/
```