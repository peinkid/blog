---
title: js防抖与节流
---

### js 函数的防抖(debounce)与节流(throttle)

### 序言

我们在平时开发的时候，会有很多场景会频繁触发事件，比如说搜索框实时发请求，<span class="pein">onmousemove</span>, <span class="pein">resize</span>, <span class="pein">onscroll</span>等等，有些时候，我们并不能或者不想频繁触发事件，咋办呢？这时候就应该用到函数防抖和函数节流了！

### 函数防抖（debounce）

短时间内多次触发同一事件，只执行最后一次，或者只执行最开始的一次，中间的不执行。

```javascript
//防抖
function debounce(fn) {
  let time = null; //time:标记定时器返回值
  return function() {
    if (time) {
      clearTimeout(time); //当事件被触发的时候把前一个定时器清除掉
    }
    time = setTimeout(() => {
      fn.apply(this, arguments); //重新设置一个新的定时器
    }, 500);
  };
}
```

### 函数节流（throttle）

指连续触发事件但是在 n 秒中只执行一次函数。即 2n 秒内执行 2 次... 。节流如字面意思，会稀释函数的执行频率。

```javascript
// 节流
function throttling(fn){
     let flag = true;  //通过闭包，初始化标记可执行函数
     return function(){
         if(!flag){
             return  //如果标记不为true则return
         }
       flag = flase  //马上标记为false
       setTimeOut(()=>{  //定时器执行
           fn.apply(this，arrguments)
           flag = true  //执行完标记为true，表示可进行下一次的执行
       },500)
    }
}
```

 <comment-comment/>
