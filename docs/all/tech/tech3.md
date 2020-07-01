---
title: Vue实现按需加载
---

# Vue 实现按需加载的方式

### 1. vue 异步组件技术

- <span class="pein">vue-router</span>配置路由，使用 <span class="pein">vue</span> 的异步组件技术，可以实现按需加载。
  但是，这种情况下一个组件生成一个 <span class="pein">js</span> 文件。  
  举例如下：

```javascript
{
    path: '/promisedemo',
    name: 'PromiseDemo',
    component: resolve => require(['../components/PromiseDemo'], resolve)
},
{
    path: '/promisedemo2',
    name: 'PromiseDemo2',
    component: () => import('@/views/components/PromiseDemo2'),
}
```

### 2. webpack 提供的 require.ensure()

- <span class="pein">vue-router</span>配置路由，使用<span class="pein">webpack</span>的<span class="pein">require.ensure</span>技术，也可以实现按需加载。
  这种情况下，多个路由指定相同的<span class="pein">chunkName</span>，会合并打包成一个<span class="pein">js</span>文件  
  举例如下：

```javascript
{
    path: '/promisedemo',
    name: 'PromiseDemo',
    component: resolve => require.ensure([], () => resolve(require('../components/PromiseDemo')), 'demo')
},
{
    path: '/hello',
    name: 'Hello',
    component: resolve => require.ensure([], () => resolve(require('../components/Hello')), 'demo')
}
```
