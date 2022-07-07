---
title: 设置Chrome解决本地开发跨域
---

### 通过设置 chrome 浏览器解决跨域问题，在本地进行开发工作

### 如果 Chrome 版本在 49 之前，设置方法如下：

1、在<span class="pein">Chrome</span>的快捷图标上点击鼠标右键

2、选择属性

3、选择快捷方式标签

4、在目标里面，在原 <span class="pein">chrome</span> 路径的基础上加上 <span class="pein">--disable-web-security</span>

5、点击应用

6、点击确定关闭属性窗口

7、关闭所有已打开的<span class="pein">chrome</span>，重新启动

8、看到地址栏下面的小黄条你使用的是不受支持的命令标记 <span class="pein">--disable-web-security</span>，就成功了

注意： --前面有个空格

### 如果是 49 以上的版本：

步骤和上面的一样，只是第 4 步的参数稍微不一样。

<span class="pein">--disable-web-security --user-data-dir=C:\MyChromeDevUserData</span>

<span class="pein">C:\MyChromeDevUserData</span> 是你本地硬盘的一个目录，你自己最好新建一个，上面的目录路径换成你新建的目录就可以了。

 <comment-comment/>
