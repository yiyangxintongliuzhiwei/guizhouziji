<template>
  <div>
      <div class="head">
          <div class="logo"></div>
          <ul class="listdata">
              <li class="list" v-for="(items,index) in listdata" :key="items" @click="changealive(index)" :class="{'active':isactive == index}">{{items}}</li>
          </ul>
      </div>
  </div>
</template>
<script>
 import './heads.scss';
export default {
  data(){
      return {
          listdata:["首页","公司简介","服务项目","维修案例","优惠活动","招聘信息","联系我们"],
          router:["/","/instruce","/work","/example","/play","/message","/contact"],
          isactive:-1,
      }
  },
  methods:{ 
        changealive:function(index){
            this.isactive = index;
            this.$router.push(this.router[index])       
         },
  }
}
</script>
