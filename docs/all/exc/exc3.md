---
title: 习题三
question: 3
---

# 习题三

#### 1. 选择以下代码输出值

```javascript
//counter.js
let counter = 10;
export default counter;
```

```javascript
//index.js
import myCounter from "./counter";
myCounter += 1;
console.log(myCounter);
```

<ClientOnly>
<Exc v-if="$sys" :sort="'first'" key="first"/>
<Exc2 v-else :sort="'first'" key="first"/>
</ClientOnly>

#### 2. 选择以下代码输出值

```javascript
function getInfo(x, y, z) {
  console.log(x);
  console.log(y);
  console.log(z);
}
const person = "Lydia";
const age = 21;
getInfo`${person} is ${age} years old`;
```

<ClientOnly>
<Exc v-if="$sys" :sort="'second'" key="second"/>
<Exc2 v-else :sort="'second'" key="second"/>
</ClientOnly>

#### 3. 选择以下代码输出值

```javascript
var a = { n: 1 };
var b = a;
a.x = a = { n: 2 };
console.log(a.x);
console.log(b.x);
```

<ClientOnly>
<Exc v-if="$sys" :sort="'third'" key="third"/>
<Exc2 v-else :sort="'third'" key="third"/>
</ClientOnly>

 
 <comment-comment/> 
 