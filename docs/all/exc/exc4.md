---
title: 习题四
---

本次题目较长，就不以选择题的形式呈现啦~
习题四是关于<span class="pein">this</span>的考查，题目在上，答案在下，做好再对答案哦~

### 题目一

```javascript
// 本题全局对象默认为window
var name = "window";

var person1 = {
  name: "person1",
  show1: function() {
    console.log(this.name);
  },
  show2: () => console.log(this.name),
  show3: function() {
    return function() {
      console.log(this.name);
    };
  },
  show4: function() {
    return () => console.log(this.name);
  }
};
var person2 = {
  name: "person2"
};

person1.show1();
person1.show1.call(person2);

person1.show2();
person1.show2.call(person2);

person1.show3()();
person1.show3().call(person2);
person1.show3.call(person2)();

person1.show4()();
person1.show4().call(person2);
person1.show4.call(person2)();
```

### 题目一解析

```javascript
person1.show1(); // person1，隐式绑定，this指向调用者 person1
person1.show1.call(person2); // person2，显式绑定，this指向 person2

person1.show2(); // window，箭头函数绑定，this指向外层作用域，即全局作用域
person1.show2.call(person2); // window，箭头函数绑定，this指向外层作用域，即全局作用域

person1.show3()(); // window，默认绑定，这是一个高阶函数，调用者是window
// 类似于`var func = person1.show3()` 执行`func()`
person1.show3().call(person2); // person2，显式绑定，this指向 person2
person1.show3.call(person2)(); // window，默认绑定，调用者是window

person1.show4()(); // person1，箭头函数绑定，this指向外层作用域，即person1函数作用域
person1.show4().call(person2); // person1，箭头函数绑定，
// this指向外层作用域，即person1函数作用域
person1.show4.call(person2)(); // person2
/* 
1、首先是var func1 = person1.show4.call(person2)，这是显式绑定，调用者是person2，show4函数指向的是person2。
2、然后是func1()，箭头函数绑定，this指向外层作用域，即person2函数作用域
首先要说明的是，箭头函数绑定中，this指向外层作用域，并不一定是第一层，也不一定是第二层。
因为没有自身的this，所以只能根据作用域链往上层查找，直到找到一个绑定了this的函数作用域，并指向调用该普通函数的对象。
*/
```

### 题目二

```javascript
// 本题全局对象默认为window
var name = "window";

function Person(name) {
  this.name = name;
  this.show1 = function() {
    console.log(this.name);
  };
  this.show2 = () => console.log(this.name);
  this.show3 = function() {
    return function() {
      console.log(this.name);
    };
  };
  this.show4 = function() {
    return () => console.log(this.name);
  };
}

var personA = new Person("personA");
var personB = new Person("personB");

personA.show1();
personA.show1.call(personB);

personA.show2();
personA.show2.call(personB);

personA.show3()();
personA.show3().call(personB);
personA.show3.call(personB)();

personA.show4()();
personA.show4().call(personB);
personA.show4.call(personB)();
```

### 题目二解析

```javascript
personA.show1(); // personA，隐式绑定，调用者是 personA
personA.show1.call(personB); // personB，显式绑定，调用者是 personB

personA.show2(); // personA，首先personA是new绑定，产生了新的构造函数作用域，
// 然后是箭头函数绑定，this指向外层作用域，即personA函数作用域
personA.show2.call(personB); // personA，同上

personA.show3()(); // window，默认绑定，调用者是window
personA.show3().call(personB); // personB，显式绑定，调用者是personB
personA.show3.call(personB)(); // window，默认绑定，调用者是window

personA.show4()(); // personA，箭头函数绑定，this指向外层作用域，即personA函数作用域
personA.show4().call(personB); // personA，箭头函数绑定，call并没有改变外层作用域，
// this指向外层作用域，即personA函数作用域
personA.show4.call(personB)(); // personB，解析同题目1，最后是箭头函数绑定，
// this指向外层作用域，即改变后的person2函数作用域
```
