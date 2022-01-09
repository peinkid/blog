---
title: JS遍历对象
---

# for in

主要用于遍历对象的可枚举属性，包括自有属性、继承自原型的属性

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
for (let i in obj) {
  console.log(i);
}
/*  输出
    name
    age
    myproto1
    myproto2
*/
```

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

 
 <comment-comment/> 
 