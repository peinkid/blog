---
title: CDN知识点
---

### CDN 的基本概念

CDN(Content Delivery Network)就是内容分发网络，是构建在现有网络基础之上的智能虚拟网络。依靠部署在各个地方的边缘服务器，通过分布式存储、负载均衡、网络请求的重定向和内容管理等功能模块，以就近性和服务器负载的判断，确保内容以一种极为高效的方式为用户请求提供所需要的资源。

### CDN 的优缺点

#### 优点

#### 1. 加速访问提高用户体验

CDN 可以使用户就近获取所需资源，降低网络堵塞，提高用户访问响应速度和命中率

#### 2. 有利搜索排名和转化

网站打开速度是影响网站排名的一个重要指标，使用 CDN 网站打开速度变快有利于搜索引擎排名，减少跳出率，从而有利于网站的转化率和销售量等

#### 3. 减轻源站服务器压力

解决了网站的并发量过大造成服务器过载问题，由此减轻了源服务器的访问压力，节省了骨干网络带宽，可以接收更多流量，从而提升了网站的性能、可扩展性以及安全性

#### 4. 解决宕机问题

当某个 CDN 服务器发生意外挂了(过载,攻击等)，不会影响全部，系统会调用临近的健康的 CDN 服务器节点继续服务，从而具有更高的稳定性

#### 5. 保障网站安全

相当于为网站添加了一把防护伞，能有效应对绝大部分网络攻击(DDOS 等)，网站被攻击也只会打到 CDN 节点为上，不会影响源站服务器；在内容安全上也可以解决盗版网站通过盗链之类的方法窃取内容

#### 6. 节约成本

使用 VPS 或购买服务器来托管网站都是有带宽限制的，而使用 CDN 不用考虑购买服务器和后续的托管运维，服务器之间镜像同步，也不用为了管理维护技术人员而劳心劳力，降低了网站建设和维护成本，节省了人力、精力和财力

#### 缺点

由于 CDN 采用各节点缓存的机制，如网站的静态网页和图片修改后，CDN 缓存没有及时做相应更新，则看到的还是旧的网页。即使用户在浏览器使用 Ctrl+F5 的方式使浏览器端的缓存失效，也会因为 CDN 边缘节点没有同步最新数据而导致用户访问看到的还是旧见网页。一般都是自己登录服务器管理后台去刷新 CDN 或者让运维刷新

### CDN 的工作流程与访问原理

当给一个域名开通了 CDN，要先给这个域名的 DNS 解析设置的后台添加一条 CDN 专用的解析记录，这条解析记录会让域名被解析之后指向一个 CDN 网络专用的处理 DNS 请求的服务器。并在 CDN 后台设置域名对应的原始 web 服务器(源站)的 IP 地址

1. 输入 URL 回车后 会先经过本地 DNS 解析，DNS 系统会将域名的解析权给 CDN 处理 DNS 请求的服务器
2. 这台 CDN 服务器会返回 CDN 负载均衡服务器的 IP 地址
3. 浏览器访问这台负载均衡服务器，该服务器会根据浏览器的网络地址在 CDN 网络中找一台在各种条件下都比较适合提供服务的 CDN 服务器，把 IP 地址返回给浏览器
4. 浏览器收到后去访问这台 CDN 服务器，向它请求网站中的文件资源
5. 如果这台服务器上没有相关(没有缓存)的网站文件，就去 CDN 网络中的上层缓存服务器中拉取，如果上层还是没有就继续向上找，如果一直都找不到，最后就会去源站上拉取网站文件，就是 回源
6. 然后在每一层刚才查不到的 CDN 服务器上做个缓存
7. 最后这台指定为你提供服务的 CDN 服务器再发送网站文件给浏览器，打开网站

#### 缓存作用

1. 如果有其他设备也通过它来获取这个网站的资源文件，就可以在有缓存的 CDN 服务器上直接返回相应的文件数据了，并不需要每次都去源站上拉取，这就是 CDN 分发网络的基本工作机制。
2. 用户访问首先是来自客户端或者浏览器，这里也会有一层缓存(强缓存)。浏览器的缓存都遵循标准的 http 协议，指定该 header 后，到了时间就会失效。所以我们可以在源站回源给 CDN 时，添加如 Cache-Control:max-age=60 协议头，CDN 会原封不动的透给浏览器，这样浏览器就可以实现 1 分钟内缓存失效，重新到 CDN 拉新的资源。

### CDN 应用场景

1. 网站站点/应用加速

站点或者应用中大量静态资源的加速分发，建议将站点内容进行动静分离，动态文件可以结合云服务器 ECS，静态资源如各类型图片、HTML、CSS、JS 文件等，建议结合对象存储 OSS 存储海量静态资源，可以有效加速内容加载速度，轻松搞定网站图片、短视频等内容分发

2. 视音频点播/大文件下载分发加速

支持各类文件的下载、分发，支持在线点播加速业务，如 MP4、flv 视频文件，主要的业务场景是视音频点播、大文件下载（如安装包下载）等，建议搭配对象存储 OSS 使用，可提升回源速度，节约近 2/3 回源带宽成本

3. 视频直播加速

视频流媒体直播服务，支持媒资存储、切片转码、访问鉴权、内容分发加速一体化解决方案。结合弹性伸缩服务，及时调整服务器带宽，应对突发访问流量；结合媒体转码服务，享受高速稳定的并行转码，且任务规模无缝扩展

4. 移动应用加速

移动 APP 更新文件（apk 文件）分发，移动 APP 内图片、页面、短视频、UGC 等内容的优化加速分发。提供 httpDNS 服务，避免 DNS 劫持并获得实时精确的 DNS 解析结果，有效缩短用户访问时间，提升用户体验

### CDN 加速是对网站所在服务器加速，还是对其域名加速

CDN 是只对网站的某一个具体的域名加速。如果同一个网站有多个域名，则访客访问加入 CDN 的域名获得加速效果，访问未加入 CDN 的域名，或者直接访问 IP 地址，则无法获得 CDN 效果

### 能不能让 CDN 不缓存某些即时性要求很高的网页和图片

只需要使用动态页面，asp，php，jsp 等动态技术做成的页面不被 CDN 缓存，无需每次都要刷新。或者采用一个网站两个域名，一个启用 CDN，另外一个域名不用 CDN，对即时性要求高的页面和图片放在不用 CDN 的域名下

### CDN 和镜像站点比较有何优势

CDN 对网站的访客完全透明，不需要访客手动选择要访问的镜像站点，保证了网站对访客的友好性。CDN 对每个节点都有可用性检查，不合格的节点会第一时间剔出，从而保证了极高的可用率，而镜像站点无法实现这一点。CDN 部署简单，对原站基本不做任何改动即可生效

### CDN 和双线机房相比有何优势

常见的双线机房只能解决网通和电信互相访问慢的问题，其它 ISP（譬如教育网，移动网，铁通）互通的问题还是没得到解决。而 CDN 是访问者就近取数据，而 CDN 的节点遍布各 ISP，从而保证了网站到任意 ISP 的访问速度。另外 CDN 因为其流量分流到各节点的原理，天然获得抵抗网络攻击的能力

 <comment-comment/>