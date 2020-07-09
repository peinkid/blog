<template>
  <div class="h">
    <div class="b">
      <main class="main">
        <section
          class="list-item"
          v-for="item in img"
        >
          <div class="item-image">
            <img
              v-lazy="item.url"
              @load="handleLoad($event,item)"
            />
          </div>
          <div
            class="item-text"
            v-if="$sys?item.show:true"
          >
            <div class="text-title">{{item.title}}</div>
            <div class="text-desc">{{item.desc}}</div>
          </div>
        </section>
      </main>
    </div>
    <a
      style="position:fixed;font-weight:700;z-index:10;bottom:0;right:10px"
      href="/"
    >首页→</a>
  </div>
</template>

<script>
export default {
  name: 'Pic',
  data() {
    return {
      img: [
        {
          title: '『那个六月，万般留恋』',
          desc: '我在盛开的樱花下遇见你，从此命运不再属于自己',
          show: false,
          url:
            'https://cdn.jsdelivr.net/gh/peinkid/blog@2.0/docs/.vuepress/public/pic/1.jpg'
        },
        {
          title: '『LOVE & 错误的抉择』',
          desc: '对不起，是我没有勇气，要是勇敢踏出一步就好了',
          show: false,
          url:
            'https://cdn.jsdelivr.net/gh/peinkid/blog@2.0/docs/.vuepress/public/pic/2.png'
        },
        {
          title: '『Dear WJY』',
          desc: '好久不见，你还好吗？',
          show: false,
          url:
            'https://cdn.jsdelivr.net/gh/peinkid/blog@2.0/docs/.vuepress/public/pic/3.jpg'
        },
        {
          title: '『无声之曲』',
          desc: '没有送出的音乐，永远只能在心中响起',
          show: false,
          url:
            'https://cdn.jsdelivr.net/gh/peinkid/blog@2.1/docs/.vuepress/public/pic/4.jpg'
        },
        {
          title: '『跳动的头像』',
          desc: '今天你找我聊天了，好开心~老朋友，そうですか',
          show: false,
          url:
            'https://cdn.jsdelivr.net/gh/peinkid/blog@2.4/docs/.vuepress/public/pic/5.jpg'
        }
      ]
    }
  },
  components: {},
  methods: {
    handleLoad(e, item) {
      if (
        e.path
          .find(item => item.localName === 'img')
          .currentSrc.includes('3.gif')
      ) {
        item.show = false
      } else {
        item.show = true
      }
    }
  }
}
</script>
<style scoped>
.h,
.b {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.h {
  overflow: hidden;
}

.b {
  width: 100vw;
  height: 100vh;
  perspective: 100px;
  transform-style: preserve-3d;
  overflow-y: auto;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.list-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  /* background-color: rgba(0, 0, 0, 0.2); */
}
@media screen and (max-width: 450px) {
  .list-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15rem;
    overflow: hidden;
    box-sizing: border-box;
    /* background-color: rgba(0, 0, 0, 0.2); */
  }
}
.list-item:hover {
  background: linear-gradient(
    to left,
    rgba(0, 168, 255, 0.1),
    rgba(0, 0, 0, 0.5),
    rgba(176, 14, 37, 0.2)
  );
  /* background-color: rgba(0, 0, 0, 0.2); */
  /* background-color: transparent; */
}

.item-image {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  transform: translateZ(-75px) scale(1.6);
  box-sizing: border-box;
}
@media screen and (max-width: 450px) {
  .item-image {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    transform: translateZ(-50px);
    box-sizing: border-box;
  }
}
.item-image::before {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.4); */
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.item-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-sizing: border-box;
  border-radius: 10px;
}

.item-text {
  color: #ffffff;
  text-align: center;
  box-sizing: border-box;
  text-shadow: 5px 5px 5px #000;
}

.text-title {
  font-size: 2rem;
  font-weight: bolder;
  margin-bottom: 20px;
  box-sizing: border-box;
}
@media screen and (max-width: 450px) {
  .text-title {
    font-size: 1.5rem;
    font-weight: bolder;
    margin-bottom: 10px;
    box-sizing: border-box;
  }
}
.text-desc {
  font-size: 1.3rem;
  box-sizing: border-box;
}
@media screen and (max-width: 450px) {
  .text-desc {
    font-size: 1rem;
    box-sizing: border-box;
  }
}
img[lazy='loading'] {
  width: 25%;
  height: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>