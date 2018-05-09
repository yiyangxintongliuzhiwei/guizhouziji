// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Swiper from './components/common/Swiper.vue';
import SwiperSlider from './components/common/SwiperSlide.vue';
Vue.component('swiper', Swiper); // 轮播组件
Vue.component('swiper-slide', SwiperSlider); // 轮播组件
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
