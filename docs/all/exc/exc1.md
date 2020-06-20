---
title: 习题一
question: 1
---

# 习题一

#### 1. 选择以下代码输出值

```javascript
const name = "Lydia";
age = 21;
console.log(delete name);
console.log(delete age);
```

<ClientOnly>
<Exc v-if="$sys" :sort="'first'" key="first"/>
<Exc2 v-else :sort="'first'" key="first"/>
</ClientOnly>

#### 2. 选择以下代码输出值

```javascript
const person={name:'Lydia};
Object.defineProperty(person,'age',{value:21})
console.log(person);
console.log(Object.keys(person));
```

<ClientOnly>
<Exc v-if="$sys" :sort="'second'" key="second"/>
<Exc2 v-else :sort="'second'" key="second"/>
</ClientOnly>
