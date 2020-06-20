<template>
  <div>
    <div
      class="sel"
      v-for="item in content"
      :key="item.sel"
    >
      <div
        :class="btnClass(item.btn)"
        @click="handleSelect(item.btn)"
      >
        {{ item.btn }}
      </div>
      <div>{{ item.sel }}</div>
    </div>
    <div
      style="margin-top:20px"
      class="twobtn"
    >
      <mt-button
        :disabled="disabled"
        type="primary"
        size="small"
        @click="check"
      >提交答案</mt-button>
      <mt-button
        :disabled="!hasCheck"
        style="margin-left:30px"
        type="primary"
        size="small"
        @click="showTips = !showTips"
      >查看解析</mt-button>
    </div>
    <transition>
      <p
        v-if="showTips"
        v-html="tips"
      ></p>
    </transition>
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  props: ['sort'],
  name: 'Exc2',
  mounted() {
    import(`./excjs/${this.$frontmatter.question}.js`).then(module => {
      this.content = module.selectOption[this.sort]
      this.answer = module.selectOption.answer[this.sort]
      this.tips = module.selectOption.tips[this.sort].replace(
        /[^\<\u4e00-\u9fa5>][0-9a-zA-Z]+(?!\/>)/g,
        "<span style='color:#0097e6;font-style:italic;font-weight:550'>" +
          '$&' +
          '</span>'
      )
    })
  },
  data() {
    return {
      tips: '',
      showTips: false,
      hasCheck: false, //是否检查
      disabled: true, //按钮是否禁用
      curClick: '', //选择的答案
      content: [], //选项
      answer: '' //正确答案
    }
  },
  methods: {
    btnClass(btn) {
      //已检查
      if (this.hasCheck) {
        if (btn === this.answer) {
          return 'btn'
        }
        if (this.curClick !== this.answer && btn === this.curClick) {
          return 'btn3'
        }
        return 'btn2'
      } else {
        //未检查
        return this.curClick === btn ? 'btn' : 'btn2'
      }
    },
    check() {
      this.hasCheck = true
      this.disabled = true
      if (this.curClick === this.answer) {
        swal('回答正确', {
          buttons: false,
          timer: 1000
        })
      } else {
        swal('继续努力', {
          className: 'fail',
          buttons: false,
          timer: 1000
        })
      }
    },
    handleSelect(btn) {
      if (this.hasCheck) return
      this.curClick = btn
      this.disabled = false
    }
  }
}
</script>
<style scoped>
.sel {
  display: flex;
  margin-bottom: 16px;
  color: #192a56;
  font-family: Comic Sans MS, Helvetica Neue, Microsoft Yahei, -apple-system,
    sans-serif !important;
}
.btn {
  padding-top: 1px;
  font-weight: 500;
  color: #fff;
  background-color: #4cd137;
  margin-right: 16px;
  cursor: url('https://cdn.jsdelivr.net/gh/peinkid/blog@poniter/docs/.vuepress/public/pointer.cur'),
    auto !important;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #353b48;
  height: 20px;
  width: 20px;
}
.btn2 {
  padding-top: 1px;
  font-weight: 500;
  margin-right: 16px;
  cursor: url('https://cdn.jsdelivr.net/gh/peinkid/blog@poniter/docs/.vuepress/public/pointer.cur'),
    auto !important;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #353b48;
  height: 20px;
  width: 20px;
}
.btn3 {
  color: #fff;
  background-color: #ea2027;
  padding-top: 1px;
  font-weight: 500;
  margin-right: 16px;
  cursor: url('https://cdn.jsdelivr.net/gh/peinkid/blog@poniter/docs/.vuepress/public/pointer.cur'),
    auto !important;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #353b48;
  height: 20px;
  width: 20px;
}
.v-enter-active,
.v-leave-active {
  transition: all 1s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
