---
title: 习题二
question: 2
---

# 习题二

#### 1. 哪个方法会返回 'Hello world'

```javascript
const myMap = new Map();
const myFunc = () => "greeting";
myMap.set(myFunc, "Hello world");
//1
myMap.get("greeting");
//2
myMap.get(myFunc);
//3
myMap.get(() => "greeting");
```

<ClientOnly>
<Exc v-if="$sys" :sort="'first'" key="first"/>
<Exc2 v-else :sort="'first'" key="first"/>
</ClientOnly>

#### 2. 选择以下代码输出值

```javascript
const items = ["a", "b", "c"];
({ item: items[3] } = { item: "d" });
console.log(items);
```

<ClientOnly>
<Exc v-if="$sys" :sort="'second'" key="second"/>
<Exc2 v-else :sort="'second'" key="second"/>
</ClientOnly>

#### 3. 选择以下代码输出值

```javascript
const person = { name: "Lydia" };
function sayHi(age) {
  console.log(`${this.name} is ${age}`);
}
sayHi.call(person, 21);
sayHi.bind(person, 21);
```

<ClientOnly>
<Exc v-if="$sys" :sort="'third'" key="third"/>
<Exc2 v-else :sort="'third'" key="third"/>
</ClientOnly>
