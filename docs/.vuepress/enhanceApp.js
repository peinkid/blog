import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import VueParticles from "vue-particles";
import VueLazyLoad from "vue-lazyload";
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Vue.use(MintUI, {
    lazyload: {
      loading:
        "https://cdn.jsdelivr.net/gh/peinkid/live2d@1.1/static/img/loading.gif"
    }
  });
  Vue.use(VueParticles);
  Vue.prototype.$sys = window.navigator.userAgent.indexOf("Mac") === -1;
};
