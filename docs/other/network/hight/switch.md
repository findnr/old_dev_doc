<!--
 * @Author: 程英明
 * @Date: 2022-08-30 07:30:08
<<<<<<< HEAD
 * @LastEditTime: 2022-08-30 14:46:29
=======
 * @LastEditTime: 2022-08-31 06:56:06
>>>>>>> a81a5ab5b7c6806e57584e49700ad66780ab5262
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \doc-man\docs\other\network\hight\switch.md
 * QQ:504875043@qq.com
-->
### 交换机的背板带宽，交换容量，包转发率量详解
### 知识储备
- （一）K、M、G 
- bps（kbit/s）就是bitspersecond，涉及的是传输速率，k表示1000，M表示1000000，G表示1000000000，如1kbps=1000bps正确。在实际应用中，常用的数据传输速率的单位有：kbit/s，Mbit/s，Gbit/s。其中：kbit/s=10^3bit/s，1Mbit/s=10^6bit/s，1Gbit/s=10^9bit/s
- 而涉及存储量（文件大小）以8bit字节计时才用k表示1024，M表示1024x1024，G表示1024x1024x1024。
### 线性无阻塞传输
- 对于万兆以太网，一个线速端口的包转发率为14.88Mpps。 
- 对于千兆以太网，一个线速端口的包转发率为1.488Mpps。 
- 对于快速以太网，一个线速端口的包转发率为0.1488Mpps。 
### 包转发率
- 对于1个全双工10Gbps接口达到线速时要求：转发能力＝10000Mbps/((64+20)*8bit)＝14.88Mpps
- 对于1个全双工1000Mbps接口达到线速时要求：转发能力＝1000Mbps/((64+20)*8bit)＝1.488Mpps
- 对于1个全双工100Mbps接口达到线速时要求：转发能力＝100Mbps/((64+20)*8bit)＝0.149Mpps
- 单位：Mpps （兆个包每秒）
### 接口：24个10/100/1000Base-TX以太网端口， (就是24个1000M）
#### 背板带宽计算
- 计算：24 * 1000x 2(Mbit/s) /1000(Mbit/s)= 48 (Gbit/s)
#### 包转发率计算
- 计算：1.488Mpps*24 =35.712Mpps
#### 交换机容量计算
- 计算：交换机端口数量*相应端口速率*2(全双工)
<<<<<<< HEAD
-  24 * 1000Mbps * 2=48Gbps
=======
- 24 * 1000Mbps * 2=48000Mbps=48Gbps
>>>>>>> a81a5ab5b7c6806e57584e49700ad66780ab5262

https://www.cnblogs.com/liushui-sky/p/14303485.html