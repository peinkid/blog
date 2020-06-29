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
