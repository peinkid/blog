---
title: JavaScript 执行机制
---

# javascript 事件循环

javascript 是一门单线程语言，在最新的 HTML5 中提出了 Web-Worker，但 javascript 是单线程这一核心仍未改变。  
然而实际上 js 是这样的：

```js
setTimeout(function() {
  console.log("定时器开始啦");
});

new Promise(function(resolve) {
  console.log("马上执行for循环啦");
  for (var i = 0; i < 10000; i++) {
    i == 99 && resolve();
  }
}).then(function() {
  console.log("执行then函数啦");
});

console.log("代码执行结束");
```

这时候我们需要知道<span class="pein">同步任务</span>和<span class="pein">异步任务</span>，当我们打开网站时，网页的渲染过程就是一大堆同步任务，比如页面骨架和页面元素的渲染。而像加载图片音乐之类占用资源大耗时久的任务，就是异步任务。用下面的导图来说明：

### 总结

<span class="pein">for in</span> 主要用于遍历对象的可枚举属性，包括自有属性、继承自原型的属性，示例中的属性 <span class="pein">action</span> 为不可枚举，所以没有输出。

# Object.keys

此方法返回一个数组，元素均为对象自有可枚举的属性

```js
var obj = { name: "peinkid", age: 18 };
// 增加不可枚举的属性 action
Object.defineProperty(obj, "action", { value: "test", enumerable: false });
// 通过原型链增加属性，为一个函数
Object.prototype.myproto1 = function() {
  console.log("my name is peinkid");
};
// 通过原型链增加属性，为一个number
Object.prototype.myproto2 = 2;
console.log(Object.keys(obj));
/*  输出
    ['name','age']
*/
```

### 总结

<span class="pein">Object.keys</span> 主要用于遍历对象自有的可枚举属性，不包括继承自原型的属性和不可枚举的属性。

# Object.getOwnPropertyNames

此方法用于返回对象的自有属性，包括可枚举和不可枚举的属性

```js
var obj = { name: "peinkid", age: 18 };
// 增加不可枚举的属性 action
Object.defineProperty(obj, "action", { value: "test", enumerable: false });
// 通过原型链增加属性，为一个函数
Object.prototype.myproto1 = function() {
  console.log("my name is peinkid");
};
// 通过原型链增加属性，为一个number
Object.prototype.myproto2 = 2;
console.log(Object.getOwnPropertyNames(obj));
/*  输出
    ['name','age','action']
*/
```

### 总结

<span class="pein">Object.getOwnPropertyNames</span> 主要用于返回对象自有属性，包括可枚举和不可枚举的属性，不包括继承自原型的属性。

最后，<span class="pein">Symbol</span> 作为属性名，遍历对象的时候，该属性不会出现在<span class="pein">for...in、for...of</span>循环中，也不会被<span class="pein">Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()</span>返回，可以使用<span class="pein">Object.getOwnPropertySymbols()</span>获取，或者使用<span class="pein">Reflect.ownKeys()</span>方法可以返回所有类型的键名，包括常规键名和 Symbol 键名，Emm...<span class="pein">Symbol</span>之后有空再做一下总结吧~
