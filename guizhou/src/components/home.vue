<template>
  <div>
  <heads></heads>
  <swiper :options="swiperOption" class="swiper-container">
      <swiper-slide  class="swiper-container-slide">
        <div class="swiper-slide1">1</div>
      </swiper-slide>

      <swiper-slide  class="swiper-container-slide">
        <div class="swiper-slide2">2</div>
      </swiper-slide>

      <swiper-slide  class="swiper-container-slide">
        <div class="swiper-slide3">3</div>
      </swiper-slide>
  </swiper>
  </div>
</template>
<script>
import heads from  "./heads.vue"
import './home.scss';

export default {
  data(){
    return{
             swiperOption: {
                               autoplay: 15000,
                               setWrapperSize: true,
                               autoplayDisableOnInteraction: false,
                               observeParents: true,
                               direction: 'horizontal',
                              //  pagination: '.a1-v31-swiper-roam',
                               paginationClickable: true
                            },                           
    }
  },
  components:{
    heads
  }
  
}
</script>
