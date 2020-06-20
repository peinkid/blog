<template>
  <div class="h">
    <div class="b">
      <main class="main">
        <section
          class="list-item"
          v-for="item in img"
        >
          <div class="item-image">
            <img :src="item.url" />
          </div>
          <div class="item-text">
            <div class="text-title">{{item.title}}</div>
            <div class="text-desc">{{item.desc}}</div>
          </div>
        </section>
      </main>
    </div>
    <a
      style="float:right;font-weight:700"
      href="/"
    >回到首页</a>
  </div>
</template>

<script>
export default {
  name: 'Pic',
  data() {
    return {
      img: [
        {
          title: '『四月是你的谎言』',
          desc: '我在盛开的樱花下遇见你，从此命运不再属于自己',
          url:
            'https://cdn.jsdelivr.net/gh/peinkid/blog@2.0/docs/.vuepress/public/pic/1.jpg'
        },
        {
          title: '『LOVE』',
          desc: '对不起，是我没有勇气',
          url:
            'https://cdn.jsdelivr.net/gh/peinkid/blog@2.0/docs/.vuepress/public/pic/2.png'
        },
        {
          title: '『WJY』',
          desc: '好久不见，你还好吗',
          url:
            'https://cdn.jsdelivr.net/gh/peinkid/blog@2.0/docs/.vuepress/public/pic/3.jpg'
        }
      ]
    }
  },
  components: {},
  methods: {}
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
.list-item:hover {
  background-color: rgba(0, 0, 0, 0.1);
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

.item-image::before {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.item-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-sizing: border-box;
}

.item-text {
  color: #ffffff;
  text-align: center;
  box-sizing: border-box;
}

.text-title {
  font-size: 2.5rem;
  font-weight: bolder;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.text-desc {
  font-size: 1.5rem;
  box-sizing: border-box;
}
</style>