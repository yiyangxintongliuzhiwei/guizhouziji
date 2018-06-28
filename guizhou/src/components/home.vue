<template>
  <div>
  <heads></heads>
   <div class="box">
     <ul id='imgdata' :class="{'active1':isactive1}">
       <li class='imgdata1'></li>
       <li class='imgdata2'></li>
     </ul>
     <button class="pre" @click="pre">＜</button>
     <button class="next" @click="next">＞</button>
   </div>
  </div>
</template>
<script>
import heads from  "./heads.vue"
import './home.scss';
export default {
  data(){
    return{  
             isactive1:false,
             isactive2:false,                       
    }
  },
  components:{
    heads
  },
  methods:{
    pre:function() {
       this.isactive1 = true;
    },
    next:function(){
      this.isactive1 = false;
    }
  }
}
</script>
