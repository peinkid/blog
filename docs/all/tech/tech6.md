---
title: Vue.observable & watch
---

# Vue.observable

在前端项目中，有许多数据需要在各个组件之间进行传递共享，这时候就需要有一个状态管理工具，一般情况下，我们都会使用 <span class="pein">Vuex</span> ，但对于小型项目来说，就像 <span class="pein">Vuex</span> 官网所说：“如果您不打算开发大型单页应用，使用 <span class="pein">Vuex</span> 可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 <span class="pein">Vuex</span>”。这时候我们就可以使用 <span class="pein">Vue2.6</span> 提供的新 <span class="pein">API</span> <span class="pein">Vue.observable</span> 手动打造一个 <span class="pein">Vuex</span>
### 提供一个简单的demo
```js
/* 在src下创建 observableStore 目录，在内部新建一个 index.js */
// Vue.observable demo
// 通过Vue.observable创建一个可响应的对象
import Vue from 'vue'
export const observableStore = Vue.observable({
  userInfo: {},
  roleIds: []
})

// 定义 mutations, 修改属性
export const observableMutations = {
  setUserInfo(userInfo) {
    observableStore.userInfo = userInfo
  },
  setRoleIds(roleIds) {
    observableStore.roleIds = roleIds
  }
}
```
### 在组件中使用
```html
<template>
  <div>
    <!-- observableStore Demo -->
    {{ userInfo.name }}
  </div>
</template>
<script>
import { observableStore, observableMutations } from '@/observableStore/index'
export default {
  data() {
    return {
      searchValue: ''
    }
  },
  computed: {
    userInfo() {
      return observableStore.userInfo
    }
  },
  created() {
    observableMutations.setUserInfo({
      name: 'peinkid'
    })
  }
}
</script>
```

# Vue watch
在开发<span class="pein">Vue</span>项目时，我们会经常性的使用到<span class="pein">watch</span>去监听数据的变化，然后在变化之后做一系列操作。
### 基础用法
```html
<template>
  <div>
      <input v-model="searchValue" />
      <input v-model="searchValue2" />
      <input v-model="formData.name" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchValue: '',
      searchValue2: '',
      formData: {
        name: '',
      }
    }
  },
  watch: {
    // 在值发生变化之后，调用方法
    searchValue(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.loadData()
      }
    },
    searchValue2: {
    // 通过handler来监听属性变化, 初次调用 newValue为""空字符串， oldValue为 undefined
      handler(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.loadData()
        }
      },
      // 配置立即执行属性
      immediate: true
    },
    //深度监听
    formData: {
      // 需要注意，因为对象引用的原因， newValue和oldValue的值一直相等
      handler(newValue, oldValue) {
          //TODO
      },
      // 通过指定deep属性为true, watch会监听对象里面每一个值的变化
      deep: true
    }
  },
  methods: {
    loadData() {
      //TODO
    }
  }
}
</script>
```
### 使用$watch随时监听，随时取消
```js
export default {
  data() {
    return {
      formData: {
        name: ''
      }
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    // 模拟异步请求数据
    loadData() {
      setTimeout(() => {
        // 先赋值
        this.formData = {
          name: 'peinkid'
        }
        // 等数据回显，监听数据是否发生变化
        const unwatch = this.$watch(
          'formData',
          () => {
            console.log('数据发生了变化')
          },
          {
            deep: true
          }
        )
        /* 取消watch */
        // unwatch()
      }, 1000)
    }
  }
}
```
我们可以在需要的时候通过<span class="pein">this.$watch</span>来监听数据变化。那么如何取消监听呢，上例中<span class="pein">this.$watch</span>返回了一个值<span class="pein">unwatch</span>,是一个函数，在需要取消的时候，执行<span class="pein">unwatch()</span>即可取消



