<template>
  <div
    :class="mini?(isChangeStyle?'audioMain2':'audioMain'):'audioMain3'"
    @mouseover="recoverStyle"
    @mouseout="recoverTime"
  >
    <a
      class="audioA audioBtn btn-5"
      @click.prevent="handleAudio"
    >{{mini?'我要听歌':'先藏起来'}}</a>
    <aplayer
      :audio="audio"
      :mini="mini"
      order="random"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import APlayer from '@moefe/vue-aplayer'
Vue.use(APlayer)
export default {
  name: 'Audio',
  data() {
    return {
      time: undefined,
      mini: true,
      isChangeStyle: false,
      audio: [
        {
          name: 'sonder---司南~:2020-01-01',
          artist: '司南',
          url:
            'https://cdn.jsdelivr.net/gh/peinkid/blog@2.6/docs/.vuepress/public/mp3/sonder.mp3',
          cover: 'https://cdn.jsdelivr.net/gh/peinkid/blog@2.6/docs/.vuepress/public/audioimg/audio1.jpg' // prettier-ignore
        },
        {
          name: '应怀酒---司南~:2020-02-02',
          artist: '司南',
          url:
            'https://cdn.jsdelivr.net/gh/peinkid/blog@2.6/docs/.vuepress/public/mp3/yinghuaijiu.mp3',
          cover: 'https://cdn.jsdelivr.net/gh/peinkid/blog@2.6/docs/.vuepress/public/audioimg/audio2.jpg' // prettier-ignore
        },
        {
          name: '坠落星空---小星星Aurora:2020-05-02',
          artist: '小星星',
          url:
            'https://cdn.jsdelivr.net/gh/peinkid/blog@2.6/docs/.vuepress/public/mp3/zhuiluoxingkong.mp3',
          cover: 'https://cdn.jsdelivr.net/gh/peinkid/blog@2.6/docs/.vuepress/public/audioimg/audio3.jpg' // prettier-ignore
        },
        {
          name: '我承认---阿悄（肖莎）:2020-05-02',
          artist: '阿悄',
          url:
            'https://cdn.jsdelivr.net/gh/peinkid/blog@2.6/docs/.vuepress/public/mp3/wochengren.mp3',
          cover: 'https://cdn.jsdelivr.net/gh/peinkid/blog@2.6/docs/.vuepress/public/audioimg/audio4.jpg' // prettier-ignore
        },
        {
          name: '打上花火---Akie 秋绘',
          artist: 'Akie 秋绘',
          url:
            'https://cdn.jsdelivr.net/gh/peinkid/blog@2.6/docs/.vuepress/public/mp3/dashanghuahuo.mp3',
          cover: 'https://cdn.jsdelivr.net/gh/peinkid/blog@2.6/docs/.vuepress/public/audioimg/audio1.jpg' // prettier-ignore
        },
        {
          name: '光---當山みれい',
          artist: '當山みれい',
          url:
            'https://cdn.jsdelivr.net/gh/peinkid/blog@2.6/docs/.vuepress/public/mp3/guang.mp3',
          cover: 'https://cdn.jsdelivr.net/gh/peinkid/blog@2.6/docs/.vuepress/public/audioimg/audio2.jpg' // prettier-ignore
        },
        {
          name: '願い～あの頃のキミへ',
          artist: '當山みれい',
          url:
            'https://cdn.jsdelivr.net/gh/peinkid/blog@2.6/docs/.vuepress/public/mp3/qiyuan.mp3',
          cover: 'https://cdn.jsdelivr.net/gh/peinkid/blog@2.6/docs/.vuepress/public/audioimg/audio3.jpg' // prettier-ignore
        }
      ]
    }
  },
  methods: {
    handleAudio() {
      this.mini = !this.mini
    },
    changeOpacity() {
      this.time = setInterval(() => {
        if (this.mini) {
          this.isChangeStyle = true
        } else {
          this.isChangeStyle = false
        }
      }, 3000)
    },
    recoverStyle() {
      this.isChangeStyle = false
      clearInterval(this.time)
      this.time = undefined
    },
    recoverTime() {
      if (!!this.time) return
      this.changeOpacity()
    }
  },
  mounted() {
    this.changeOpacity()
    let firstTime, lastTime
    window.onunload = () => {
      lastTime = new Date().getTime() - firstTime
      if (lastTime <= 5) this.mini = true
    }
    window.onbeforeunload = () => {
      this.mini = true
      clearInterval(this.time)
      firstTime = new Date().getTime()
    }
  },
  beforeDestroy() {
    clearInterval(this.time)
  }
}
</script>
<style>
.audioMain {
  position: fixed;
  top: 50%;
  left: 100%;
  transform: translate(-100%, -50%);
  z-index: 100;
  transition: all 1s ease;
}
.audioMain2 {
  position: fixed;
  top: 50%;
  left: 100%;
  transform: translate(-30%, -50%);
  z-index: 100;
  opacity: 0.2;
  transition: all 1s ease;
}
.audioMain3 {
  position: fixed;
  top: 50%;
  left: 100%;
  transform: translate(-100%, -50%);
  z-index: 100;
  transition: all 1s ease;
  width: 400px;
}

.audio {
  width: 66px;
  height: 66px;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.audioA {
  border-radius: 8px;
  margin-left: 4px;
  background: linear-gradient(to right, #88c1ea, #e84118);
  border-bottom: 1px solid;
  color: #fff;
  line-height: 1.4;
  padding: 0.25em;
}
.audioA:hover {
  text-decoration: none;
  color: #f5f6fa;
}

.audioBtn {
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  line-height: 45px;
  max-width: 160px;
  position: relative;
  width: 100%;
}

.btn-5 {
  border: 0 solid;
  outline: 0 solid;
  outline-offset: 0px;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline-color: rgba(255, 255, 255, 0.5);
  text-shadow: none;
  transition: all 0.3s ease;
}

.btn-5:hover {
  border: 1px solid;
  outline: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 255, 255, 0.2);
  outline-color: #88c1ea;
  outline-offset: 4px;
  text-shadow: 1px 1px 2px #427388;
}
</style>