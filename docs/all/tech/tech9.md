---
title: 最长递增子序列
---

### 最长递增子序列

```js
// 最长递增子序列
function getRequence(arr) {
  const length = arr.length;
  // 描述最长递增子序列的数组，存放索引，元素递增
  const result = [0];
  // result最后一个元素的值
  let resultLast;
  //  result头部,尾部,中间
  let start;
  let end;
  let middle;
  // 往result中添加或替换值时，在p新增当前项对应的前一项的索引
  let p = [];
  for (let i = 0; i < length; i++) {
    // 数组当前遍历值
    const arrI = arr[i];
    // 模拟Vue3 Diff，0表示该节点不在旧节点中，直接新增
    if (arrI !== 0) {
      // result最后一个元素的值
      resultLast = result[result.length - 1];
      // 如果当前值大于result数组的最后一项的值，就插入索引，保持递增
      if (arrI > arr[resultLast]) {
        result.push(i);
        // 用数组p保存当前result的前一项索引,由于上一步已经push，所以此时的前一项即为resultLast
        p[i] = resultLast;
      }
      start = 0;
      end = result.length - 1;
      // 目的:用二分法从result中找到大于当前值arrI的
      while (start < end) {
        // 向下取整
        middle = ((start + end) / 2) | 0;
        // 小于则继续找，由于递增，所以寻找区间为∈【middle+1,end】
        if (arr[result[middle]] < arrI) {
          start = middle + 1;
        } else {
          // 寻找区间为∈【start,middle】
          end = middle;
        }
      }
      // while结束后，二分法找到的某一项大于当前值，此时start和end指向同一个元素索引
      if (arr[result[end]] > arrI) {
        // 用当前元素索引替换二分法找到的那一项
        result[end] = i;
        p[i] = result[end - 1];
      }
    }
  }
  // 回溯过程，需要连续，防止后面的值替换掉前面的值
  // 总长度
  let resultLength = result.length;
  // 最后一项
  let prev = result[resultLength - 1];
  while (resultLength-- > 0) {
    result[resultLength] = prev;
    prev = p[prev];
  }
  return result;
}
```

 <comment-comment/>
