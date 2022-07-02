---
title: HTML+CSS零碎知识点
---

### BFC

BFC 就是块级元素格式化上下文，相当于一个容器，里面的布局不会影响外面的元素

#### 触发 BFC

1. 根元素（html）
2. 浮动元素,float 值不为 none
3. 绝对定位元素,position 为 absoluet 或 fixed
4. overflow 值不为 visible 的块元素
5. display 值为 table 相关的属性，以及 flex,grid,inline-block 等

#### BFC 应用

1. 解决外边距塌陷

```html
<!-- 正常情况 -->
<style>
  .box {
    height: 100px;
    width: 100px;
    margin: 50px;
    background: #000;
  }
</style>
<div class="box"></div>
<div class="box"></div>

<!-- BFC -->
<style>
  .container {
    overflow: hidden;
  }
  .box {
    height: 100px;
    width: 100px;
    margin: 50px;
    background: #000;
  }
</style>
<div class="container">
  <div class="box"></div>
</div>
<div class="container">
  <div class="box"></div>
</div>
```

2. 清除浮动

```html
<style>
  .container {
    border: 1px solid red;
    /* BFC清除浮动，防止塌陷 */
    overflow: hidden;
  }
  .box {
    height: 100px;
    width: 100px;
    background: #000;
    float: left;
  }
</style>
<div class="container">
  <div class="box"></div>
</div>
```

3. 阻止元素被浮动元素覆盖

```html
<style>
  .box1 {
    height: 100px;
    width: 100px;
    background: red;
    float: left;
  }
  .box2 {
    height: 200px;
    width: 200px;
    background: #000;
    /* BFC 阻止box2被box1覆盖 */
    overflow: hidden;
  }
</style>
<div class="box1"></div>
<div class="box2"></div>
```

### meta 标签实现页面自动刷新或跳转

```html
<!-- 5秒后自动刷新页面 -->
<meta http-equiv="Refresh" content="5" />
<!-- 5秒后跳转到新页面 -->
<meta http-equiv="Refresh" content="5;URL=newPage.html" />
```

### link 标签 rel 属性

dns-prefetch:浏览器会对 href 中的域名进行 DNS 解析并缓存，当再次请求该域名资源时，能省去查询 IP 的过程，从而减少时间消耗  
prefetch/preload:都是预先下载并缓存资源，不同的是 prefetch 可能会在浏览器忙时被忽略，而 preload 则一定会预先下载  
preconnect:正式发送 http 请求前预先执行 DNS 解析、TCP 握手、TLS 协商。通过消除往返延迟来节省时间  
prerender:浏览器不仅会加载资源，还会解析执行页面，并进行预渲染

### script 标签属性

由于浏览器底层运行机制，渲染引擎在解析 HTML 时遇到 script 标签引用文件会暂停解析，同时通过网络线程加载文件，文件加载后切换至 js 引擎执行相应代码，代码执行完成后再切换回渲染引擎继续渲染页面。  
可是首次渲染可能并不依赖这些 js 文件，这就延长了页面渲染的时间，可以通过以下属性优化：

async:立即请求文件，但不阻塞渲染引擎，而是文件加载完毕后再阻塞渲染引擎并执行 js  
defer:立即请求文件，但不阻塞渲染引擎，等解析完 HTML 再执行 js  
type="module":让浏览器按照 ES6 标准将文件当模板解析，默认阻塞效果和 defer 一样，也可以配合 async 在请求完成后立即执行

### href 和 src 区别

href 是引用，src 是引用

#### href

1. 通过 link 用 href 引入的 CSS 在 head 中会阻塞页面的渲染，CSS 加载完成才会进行渲染，所以渲染出来就是带样式的
2. 会阻塞 js 的执行，因为 js 执行可能会操作 DOM，所以 CSS 加载完之前执行 js 是可能会有问题的
3. 不会阻塞 js(外部脚本)的加载，因为 webkit 有一个 HTMLPreloadScanner 类也就是一个预先扫描器，可以预先扫描后面的词法，后面代码中所需要的资源都会通过预资源加载器来发送一个请求，请求相关的后续需要的资源，所以不会阻止加载，但会阻止执行

#### src

1. 通过 script 用 src 直接引入 js 会阻塞页面的渲染(没有 defer 和 async 的情况下)，因为 js 很可能操作 DOM 修改文档结构
2. 阻止页面渲染但是 js 不阻塞后续资源的加载，因为 webkit 增加了预先扫描器和预资源加载器，在执行 js 代码的时候会暂停当前 js 代码的执行，然后使用预先扫描器去扫描后面的代码，如果后面有引用到其他资源的时候就使用预资源加载器去发送请求并发地请求后续的资源，所以表面上看 js 阻止了页面渲染就应该阻止了脚本加载，但是实际上，我们不可能因为一个 js 的执行就影响后续 N 个 js 的加载这本身就是不合理的，所以 webkit 就进行了一个处理，通过预加载的方式去对后续资源做预先加载
3. js 顺序执行，多个脚本会阻塞后续 js 逻辑的执行
