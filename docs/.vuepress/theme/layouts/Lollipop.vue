<template>
  <div class="theme-container lollipop">
    <div id="bac"></div>
    <div
      id="yinyan"
      v-if="showBtn"
    >
      <div id="chunfeng">莫扎特曾经说过，大胆地踏上旅途吧<br />我不知道路途的前方究竟有什么<br />但是，我们还是迈出了步伐<br />演奏属于彼此的乐章</div>
      <mt-button
        class="mybtn"
        type="primary"
        @click="funclick"
      >开始试音~</mt-button>
    </div>
    <div id="boxup">一支棒棒糖</div>
    <div id="box">
      <div id="boxl">S Y</div>
      <div id="boxr">
        听到了吗?你是不是怀着紧张的心情触碰了琴键?这一声音调,或许是我初见你时的心声吧,先是紧张，再是欣喜。<br /><br />我不由自主想起了一句台词：<br />"我是否住进你的心房了呢"<br />"是啊，连鞋都没脱就住进来了呢"<br /><br />Emm...<br />能请你用我给你的乐谱演奏一曲吗?
      </div>
    </div>
    <div
      id="box1"
      v-html="myheart"
    ></div>
  </div>
</template>
<script>
let a = [
  {
    name: 'A',
    yin: 8,
    str:
      '<br>我试图用那些漂亮的句子来形容你。但是不行<br><br>我字字推敲写出长长一段话，你眉眼一弯熠熠生辉，就让我觉得还是不行<br><br>这些文字写不出你眼里的星辰，写不出你唇角的春风<br></br>无论哪个词，都及不上你半分的惊艳。'
  },
  {
    name: 'B',
    yin: 22,
    str:
      '<br><br>我的心是亿万光年恒星爆炸后的残骸，荒烟蔓草，满目疮痍。<br><br>你来到这里，携着万千欢喜，覆在贫瘠之地上。枯木逄春，<br></>从此我的世界里只有为你而绽的名为爱的绝色。'
  },
  {
    name: 'C',
    yin: 1,
    str:
      '<br><br><br><br>我总是想些无关紧要的事<br><br>比如宇宙的目的，熬夜与猝死的关系<br><br>你是否曾爱我'
  },
  {
    name: 'D',
    yin: 4,
    str:
      '<br><br><br><br>我想再和你谈谈<br><br>那只在你七月的暴雨中<br><br>刚刚落下的鸟'
  },
  {
    name: 'E',
    yin: 3,
    str:
      '<br><br><br>嘿嘿Lollipop，淑燕~很高兴你能踏上这段音乐路程，成功完成演奏了吗'
  },
  {
    name: 'F',
    yin: 6,
    str: '<br><br><br>我爱你<br><br>剩余一行<br><br>笔给你'
  },
  {
    name: 'G',
    yin: 9,
    str:
      '<br><br>我喜欢你，不分日夜，我喜欢你，无关其他，喜欢便是喜欢，多一点不行，少一点也不可以。<br><br>还有....,其他的键<br><br>那些都是关于你的声音。以及，找一下声音里关于你的线索。'
  },
  {
    name: 'H',
    yin: 3,
    str:
      '<br><br>你的双眸有遥远的冬雪，你的微笑有绚烂的夏阳，<br></br>你一转身便有花为你开，你一低头便有星辰黯然，<br></br>你在我心里，我便拥有全世界。'
  },
  {
    name: 'I',
    yin: 12,
    str:
      '<br><br>我见过沧海的云，巫峡的雨。 <br>我见过一月的雪覆于白山，又渐变于葱茏。 <br>我在峨眉的林里云兴霞蔚， 一径之后，雾水成露，沾于衣襟。<br>我听过柔橹漂浮，声声入水，又归于沉寂。 <br>我看到春风八里十里，衣袖带花。 无论何时忆起， 它们实在是人生可喜， <br><br>但都不如我此刻遇到的你。'
  },
  {
    name: 'J',
    yin: 10,
    str:
      '<br><br><br><br>花盛开就是一句，夜漫过就是一篇。<br><br>黄昏开始书写，黎明是无数的扉页。<br><br>全世界拼成首诗。我爱你当作最后一行。'
  },
  {
    name: 'K',
    yin: 11,
    str:
      '<br><br>对你的喜欢，大抵是燃烧的星星坠落在海底开成珊瑚，<br><br>又或是揉碎的白云环绕着山峦流成大河。<br><br>那种梦幻，不真切，却令人迷醉的心动，<br></br>就像晚风拥抱月亮，海浪亲吻礁石。'
  },
  {
    name: 'L',
    yin: 3,
    str:
      '你的微信名是『一支棒棒糖』<br><br>我最开始只知道你将你的姓氏藏于其中<br><br>棒棒糖很甜，见到你我才知道，你的笑容也藏在里面<br><br>最后你告诉我，你是希望自己越来越棒才起的这个名字<br><br>有种瞬间升华的感觉，或许这就是认识的过程，是啊，相信你会越来越棒'
  },
  {
    name: 'M',
    yin: 13,
    str:
      '<br><br>“在青山绿水之间，我想牵着你的手，<br></br>走过这座桥，桥上是绿叶红花，<br><br>桥下是流水人家，桥的那头是青丝，桥的这头是白发。”'
  },
  {
    name: 'N',
    yin: 5,
    str: '<br><br>月亮照回湖心<br><br>野鹤奔向闲云<br><br>我步入你'
  },
  {
    name: 'O',
    yin: 2,
    str:
      '你也喜欢动漫，喜欢的风格还挺类似<br><br>你也会追剧，不惜熬夜也要加入催更大队<br><br>你很多歌都听，最喜欢的歌手是Eason，还有哦，你还是KTV歌神吧，不知道我有没有机会听到<br><br>你喜欢打羽毛球，喜欢拼积木，你不是很能吃辣，偶尔也会玩游戏，还有...'
  },
  {
    name: 'P',
    yin: 16,
    str:
      '<br><br>草在结它的种子，<br><br>风在摇它的叶子，<br><br>我们站着不说话，就十分美好。'
  },
  {
    name: 'Q',
    yin: 17,
    str:
      '<br><br>我一生都是坚定不移的唯物主义者<br><br>唯有你<br><br>我希望有来生'
  },
  {
    name: 'R',
    yin: 18,
    str:
      '<br><br>星河璀璨，阳光干净，<br><br>在人间所有美好的存在里，<br><br>不论是活着或者死去，我总是最爱你。'
  },
  {
    name: 'S',
    yin: 2,
    str: `<br>若逢新雪初霁，满月当空<br>下面平铺着皓影，上面流转着亮银，<br><br>而你带笑地向我走来，<br><br>月色和雪色之间 ，是第三种绝色 ，<br><br>与我而言， 日月星辉之中，你是第四种难得。`
  },
  {
    name: 'T',
    yin: 20,
    str:
      '<br><br>我把我整个的灵魂都给你，<br><br>连同它的怪癖，耍小脾气，忽明忽暗，<br><br>一千八百种坏毛病， 它真讨厌。只有一点好， 爱你'
  },
  {
    name: 'U',
    yin: 8,
    str:
      '<br><br>写信真是一件温柔的事，细腻的小心思就藏在横竖撇捺之中，<br><br>像是一只害羞的小兽躲在情意绵绵的字里行间，被火漆封印起来，<br><br>等着解封的那一刻窜出来，跳进启信人眼底的柔波里。'
  },
  {
    name: 'V',
    yin: 5,
    str:
      '<br><br>音乐与文字能蕴含很多温柔细腻的情感，我可能不太善于表达，也很害怕冷场，所以之前能找到话题和你聊下去，真的很开心，怀着好心情聊天的时候时间也过得飞快<br><br>若你笑了，微风又轻拂一下，遥远的星星会闪烁一下，我也有心动，却不止一下'
  },
  {
    name: 'W',
    yin: 3,
    str:
      '><br><br>这个世纪疯狂,没人性,腐败。<br><br>您却一直清醒,温柔,<br><br>一尘不染。'
  },
  {
    name: 'X',
    yin: 2,
    str:
      '<br><br>纵然万劫不复，<br><br>纵然相思入骨，我也待你眉眼如初，<br><br>岁月如故。'
  },
  {
    name: 'Y',
    yin: 7,
    str:
      '<br><br>月遇从云，花遇和风，<br><br>今晚上的夜空很美，<br><br>我又想你。'
  },
  {
    name: 'Z',
    yin: 26,
    str:
      '<br><br><br><br>跟你在一起的时光都很耀眼，<br><br>因为天气好，因为天气不好，因为天气刚刚好，<br><br>每一天，都很美好。'
  }
]
let b = [
  'linear-gradient(25deg, #c3786f, #a99188, #84a7a1, #3bbcbb)',
  'linear-gradient(25deg, #cb5860, #b3876f, #90ad7f, #4acf8f)',
  'linear-gradient(25deg, #e473a3, #d294aa, #bbb0b1, #9ccab8)',
  'linear-gradient(25deg, #452089, #505ca1, #4b94b8, #24cdcf)',
  'linear-gradient(25deg, #fcb9b5, #fed0ad, #ffe7a5, #fffd9b)',
  'linear-gradient(25deg, #88a0ff, #b6bedd, #d6deb9, #eeff91)',
  'linear-gradient(25deg, #3e1c59, #53646f, #53ad83, #27fb95)',
  'linear-gradient(25deg, #590146, #634264, #647184, #56a1a5)',
  'linear-gradient(25deg, #694afc, #a26dfd, #d091fe, #f9b7fe)',
  'linear-gradient(25deg, #412285, #4c599c, #488eb3, #29c4c9)',
  'linear-gradient(25deg, #003876, #1f6889, #239b9a, #00d1ab)',
  'linear-gradient(25deg, #db6679, #b9907b, #8bb17e, #29ce80)',
  'linear-gradient(25deg, #060d37, #174161, #1d7a8d, #12b8bc)',
  'linear-gradient(25deg, #fcb9b5, #fed0ad, #ffe7a5, #fffd9b)',
  'linear-gradient(25deg, #0f4660, #6b486c, #ac3f78, #ec1384)',
  'linear-gradient(25deg, #094189, #7f566b, #bd6d49, #f78707)',
  'linear-gradient(43deg, #00a08c, #7db19d, #c1c0af, #ffcec1)',
  'linear-gradient(35deg, #526fbf, #8c98d0, #bfc3e0, #f0f0f0)',
  'linear-gradient(25deg, #d03e9b, #d2788a, #cfa676, #c6d05c)',
  'linear-gradient(25deg, #8fd647, #a0d187, #a8ccbf, #a8c7f7)',
  'linear-gradient(25deg, #e45579, #c59280, #96bf87, #19e88e)',
  'linear-gradient(25deg, #d575db, #b29db2, #83bb87, #00d456)',
  'linear-gradient(25deg, #d929f7, #e67cc5, #e5b38f, #d8e549)',
  'linear-gradient(25deg, #fd390b, #e1765b, #b19fa1, #1ec1e9)',
  'linear-gradient(25deg, #7b7bd4, #759cbc, #62bca2, #30db85)',
  'linear-gradient(25deg, #d6007b, #b8509e, #8a71c2, #0b8be8)'
]
let s = ''
let records = 0 //记录已经输入过
let clickb = false //判断播放按钮是否已经按过了，如果已经按过了才可以执行键盘事件
export default {
  name: 'love',
  data() {
    return {
      showBtn: true,
      myheart: ''
    }
  },
  mounted() {
    setTimeout(() => {
      document.title = '一支棒棒糖'
    }, 100)
    window.onkeyup = this.fl
  },
  beforeDestroy() {
    window.onkeyup = null
  },
  methods: {
    funclick() {
      let x = document.createElement('audio')
      x.setAttribute('src', '/video/55.mp3')
      x.setAttribute('autoplay', 'autoplay')
      let yinyan = document.getElementById('yinyan')
      yinyan.setAttribute('style', 'opacity:0')
      setTimeout(() => {
        this.showBtn = false
        // document.getElementById('fronclick').style.zIndex = -300
        document.getElementById('box').style.opacity = 1
      }, 800) //让播放按钮消失了
      //yinyan.style.opacity=0;
      clickb = true
    },
    fl(e) {
      if (clickb == true) {
        let key = e.key.toLocaleLowerCase()
        let index = key.charCodeAt() - 97
        if (index <= 25 && index >= 0 && key.length === 1) {
          let p = a[index]
          s = s + p.name
          let x = document.createElement('audio')
          x.setAttribute('src', `/video/${p.yin}.mp3`)
          x.setAttribute('autoplay', 'autoplay')
          let box = document.getElementById('box')
          let boxl = document.getElementById('boxl')
          let boxr = document.getElementById('boxr')
          let boxup = document.getElementById('boxup')
          let bac = document.getElementById('bac')
          bac.style.opacity = 0
          box.style.transition = '0.5s'
          box.style.opacity = 0
          boxup.style.opacity = 0
          setTimeout(function() {
            boxl.innerHTML = `${p.name}`
            boxr.innerHTML = `${p.str}`
            bac.style.background = `${b[index]}`
            box.style.opacity = 1
            boxup.style.opacity = 1
            bac.style.opacity = 1
          }, 500)
          let res = s.toLowerCase()
          if (res.indexOf('shuyanshuyanshuyanlove') != -1 && records == 0) {
            setTimeout(function() {
              records = 1
              bac.style.opacity = 0
              box.style.opacity = 0
              boxup.style.opacity = 0
              bac.style.opacity = 0
              let box1 = document.getElementById('box1')
              box1.style.zIndex = 7
              box1.style.opacity = 1
              let music = document.createElement('audio')
              x.setAttribute('src', `/video/snjxh.mp3`)
              x.setAttribute('autoplay', 'autoplay')
              x.setAttribute('loop', 'loop')
            }, 2000)
            setTimeout(this.typewrite, 3000) //进行打字
          }
        }
      }
    },
    typewrite() {
      const _this = this
      let str =
        '淑燕~恭喜你来到这里哈哈哈<今天工作辛苦了吧，晚上要早点休息，别经常熬夜了<说实话还挺尴尬的，但仔细想想，也不能一直止步不前<这也许并不能称得上浪漫吧，但我能肯定其中怀有真挚<Emm...希望你能开开心心，实现自己的小目标<最后，尽管是用文字表达，但还是挺难为情的⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄<我想说<我喜欢你~<' //利用<作为换行符 -作为空格haixiu
      let strp = ''
      let i = 0
      function print1() {
        if (str[i] == '<') {
          _this.myheart = strp + '<br><br>' + '|'
          strp += '<br><br>'
        } else if (str[i] == '-') {
          _this.myheart = strp + '&nbsp&nbsp&nbsp'
          strp += '&nbsp&nbsp&nbsp'
        } else {
          strp += str[i]
          _this.myheart = strp + '|'
        }
        i++
      }
      function print2() {
        setTimeout(() => {
          _this.myheart = strp + '&nbsp'
        }, 100)
        setTimeout(() => {
          _this.myheart = strp + '|'
        }, 630)
      }
      let printid = setInterval(() => {
        print1()
        if (i == str.length) clearInterval(printid)
      }, 150)
      setTimeout(() => {
        let id = setInterval(print2, 1060) //注意setInterval内部直接写函数的时候是直接写函数名不加括号的。
      }, (str.length - 1) * 90)
      //0.53秒闪一次
    }
  }
}
</script>
<style>
/*
设置body，在网页变换的时候实现背景不是纯白色，显得突兀
*/
.lollipop {
  position: absolute;
  z-index: -200;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to top left, #6e5961 38%, #5f8186 100%);
}
/*背景部分*/
#bac {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
    42deg,
    #df8c95,
    #bea6b0,
    #8ebecb,
    #15d3e7
  ); /*我觉得还行.jpg byaei*/
  transition: 0.5s;
}
/*引言部分*/
#yinyan {
  margin-top: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 1s;
  text-align: center;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
}
.mybtn {
  background-image: linear-gradient(108deg, #c51f7c, #aa5496, #8373b2, #328cce);
  border-radius: 20px;
  padding: 0 30px;
  font-size: 18px;
  font-family: inherit;
  margin-top: 50px;
  cursor: pointer;
}
/*记录一下 现在的z-index 最大6  最小 -100（body）  byaei*/
/*记录 点击完play 现在所有的的按钮都<-200  max 6*/
#box {
  opacity: 0;
  display: flex;
  position: absolute;
  width: 60vw;
  height: 70vh;
  top: 20vh;
  left: 25vw;
  /*background-color: blueviolet;*/
  transition: 2s;
}
#boxl {
  margin-right: 10px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25vw;
  height: 70vh;
  font-size: 7rem;
  color: #292722;
  transition: 0.5s;
  font-family: 'Courier New', Courier, monospace;
}
#boxr {
  font-size: 1.5rem;
  font-weight: 1000;
  color: #364547;
  width: 35vw;
  height: 70vh;
  line-height: 2.5rem;
  transition: 0.5s;
}

#boxup {
  position: absolute;
  top: 3vh;
  width: 100vw;
  text-align: center;
  z-index: 0;
  font-size: 1.8rem;
  font-weight: 1000;
  color: #364547;
  opacity: 0;
  transition: 0.5s;
}

#box1 {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -200;
  opacity: 0;
  color: #ffffff;
  text-shadow: 5px 5px 5px #000;
  padding: 8vh 5vw 5vh;
  width: 90vw;
  height: 87vh;
  text-align: center;
  background-image: url(https://cdn.jsdelivr.net/gh/peinkid/blog@2.6/docs/.vuepress/public/pic/4.jpg);
  overflow: hidden;
  background-size: cover;
  font-size: 1.5rem;
  transition: opacity 5s;
}

#liming {
  font-size: 50px;
}
#chunfeng {
  color: rgba(27, 23, 23, 0.9);
}
</style>