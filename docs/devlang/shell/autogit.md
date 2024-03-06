<!--
 * @Author: 程英明
 * @Date: 2022-03-14 15:36:27
 * @LastEditTime: 2022-03-20 14:03:38
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \doc-man\docs\devlang\shell\often.md
 * QQ:504875043@qq.com
-->

### shell 常用代码片段
- 自动提交代码（不用输入密码）
```shell
#!/bin/shell
time=$(date "+%Y-%m-%d %H:%M:%S")
git add .
git commit -m "$* $time"
git push
```
- 自动提交代码（输入密码）
```shell
#!/bin/shell
time=$(date "+%Y-%m-%d %H:%M:%S")
git add .
git commit -m "$* $time"
expect -c "
    spawn git push
    expect {
        \"Username\" { send \"$git\r\";}
    }
    expect {
        \"Password\" { send \"$gpwd\r\";}
    }
expect eof"
```
- 自动拉取代码
```shell
#!/bin/bash
root=`cat ../apiautogit/root`
rpwd=`cat ../apiautogit/rpwd`
git=`cat ../apiautogit/git`
gpwd=`cat ../apiautogit/gpwd`
ssh=`cat ../apiautogit/ssh`
dir=`pwd`
function nop(){
    expect -c "
        spawn $ssh
        expect {
            \"yes\" { send \"yes\r\";}
        }
        expect {
            \"password\" { send \"$rpwd\r\";}
        }
        expect {
            \"]#\" { send \"cd $dir\r\";}
        }
        expect {
            \"]#\" { send \"git reset --hard\r\";}
        }
        expect {
            \"]#\" { send \"git pull\r\";}
        }
        expect {
            \"Username\" { send \"$git\r\";}
        }
        expect {
            \"Password\" { send \"$gpwd\r\";}
        }
        expect {
            \"]#\" { send \"exit\r\";}
        }
    expect eof"
}
function yesp(){
    expect -c "
        spawn $ssh
        expect {
            \"yes\" { send \"yes\r\";}
        }
        expect {
            \"password\" { send \"$rpwd\r\";}
        }
        expect {
            \"]#\" { send \"cd $dir\r\";}
        }
        expect {
            \"]#\" { send \"git reset --hard\r\";}
        }
        expect {
            \"]#\" { send \"rm -rf composer.lock\r\";}
        }
        expect {
            \"]#\" { send \"git pull\r\";}
        }
        expect {
            \"Username\" { send \"$git\r\";}
        }
        expect {
            \"Password\" { send \"$gpwd\r\";}
        }
        expect {
            \"]#\" { send \"composer update\r\";}
        }
        expect {
            \"yes\" { send \"yes\r\";}
        }
        expect {
            \"]#\" { send \"exit\r\";}
        }
    expect eof"
}
if [ $1 ]
then
    yesp
else
    nop
fi
```