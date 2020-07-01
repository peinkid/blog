---
title: Vue hookEvent
---

# Vue 中监听组件生命周期

### 1.内部监听生命周期函数

在 <span class="pein">_Vue_</span> 组件中，可以用 <span class="pein">$on</span> ,<span class="pein">$once</span> 去监听所有的生命周期钩子函数，如监听组件的 <span class="pein">beforeDestroy</span> 钩子函数可以写成：

```js
export default {
  mounted() {
    // TODO
    this.$once("hook:beforeDestroy", () => {
      //TODO
    });
  }
};
```

### 2.外部监听生命周期函数

通过 <span class="pein">@hook:updated</span> 监听组件的 updated 生命钩子函数  
组件的所有生命周期钩子都可以通过 <span class="pein">@hook:hookName</span> 来监听触发

```html
<template>
  <custom-select @hook:updated="handleFunc" />
</template>
<script>
  import CustomSelect from "@/components/CustomSelect";
  export default {
    components: {
      CustomSelect
    },
    methods: {
      handleFunc() {
        //TODO
      }
    }
  };
</script>
```
