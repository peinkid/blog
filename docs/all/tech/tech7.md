---
title: prototype & proto & constructor
---

### 理解 prototype & proto & constructor

![prototype & proto & constructor](https://cdn.jsdelivr.net/gh/peinkid/blog@2.6/docs/.vuepress/public/techpic/prototype.jpg)

```javascript
//构造函数与实例对象
function Foo() {} //构造函数
var f1 = new Foo(); //实例对象
var f2 = new Foo();
console.log(f1 === f2); //false

/*原型对象与prototype
构造函数有prototype属性，指向 「实例对象」 的 「原型对象」
*/
Foo.prototype.a = 1;
console.log(f1.a); //1
console.log(f2.a); //1

//constructor:「原型对象」 有一个constructor属性，指向该 「原型对象」 对应的构造函数
console.log(Foo.prototype.constructor === Foo); //true

//「实例对象」 可以继承 「原型对象」 的属性，所以也有constructor属性，指向该 「原型对象」 对应的构造函数
console.log(f1.constructor === Foo); //true
console.log(f1.hasOwnProperty("constructor")); //false

//proto:「实例对象」 有一个proto属性，指向该 「实例对象」 对应的 「原型对象」
console.log(f1.__proto__ === Foo.prototype); //true

/*
任何对象都可以看做是通过Object()构造函数的new操作实例化的对象
Foo.prototype作为 「实例对象」 ，它的构造函数是 Object(), 「原型对象」 是Object.prototype
*/
console.log(Foo.prototype.__proto__ === Object.prototype); //true

//Foo.prototype本身具有constructor属性，所以会覆盖继承自 「原型对象」 Object.prototype的constructor属性
console.log(Object.prototype.constructor === Object); //true
console.log(Foo.prototype.hasOwnProperty("constructor")); //true

//Object.prototype作为 「实例对象」,其 「原型对象」 结果为null
console.log(typeof null); //object

//函数也是对象，任何函数可视为通过Function()构造函数的new操作实例化的结果
//函数Foo作为 「实例对象」 ，其构造函数是Function(), 「原型对象」 是 Function.prototype
console.log(Foo.__proto__ === Function.prototype); //true
console.log(Object.__proto__ === Function.prototype); //true
console.log(Function.prototype.constructor === Function); //true
console.log(Foo.constructor === Function); //true
console.log(Foo.hasOwnProperty("constructor")); //false
console.log(Object.constructor === Function); //true
console.log(Object.hasOwnProperty("constructor")); //false

//Function可视为调用自身的new操作的实例化结果，所以Function作为 「实例对象」 ，其构造函数是Function，「原型对象」 是Function.prototype
console.log(Function.__proto__ === Function.prototype); //true
console.log(Function.prototype.constructor === Function); //true
console.log(Function.prototype.__proto__ === Object.prototype); //true

/* 
总结：
1.函数（Function也是函数）是new Function的结果，所以函数可以作为 「实例对象」 ，其构造函数是Function()，「原型对象」 是Function.prototype
2.对象（函数也是对象）是new Object的结果，所以对象可以作为「实例对象」，其构造函数是Object(),「原型对象」 是Object.prototype
3.Object.prototype的原型对象是null
*/
```

 <comment-comment/>
