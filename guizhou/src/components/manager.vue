<template>
    <div>
       输入一级list<input type="text" v-model="listname">
       <button @click="submit">提交</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            listname:'',
        }
    },
    methods:{
        submit:function(){
          this.$axios.post('/api/guizhou/listmanager.php',this.$qs.stringify({
              data:this.listname,
          })).then(
              (res)=>{
                  if(res.data == 'ok'){
                      alert('添加成功')
                  }else{
                      alert('添加失败')
                  }
              }
          ).catch(
              (err)=>{
                  console.log(err)
              }
          )
        }
    }
}
</script>
