<template>
<div>
<el-container class="el-container">
  <el-header class="header">后台管理系统</el-header>
  <el-main class="main">
    <el-form ref="form" :model="form" class="form">
        <div class="top">
        <span>账号</span>
        <input type="text" v-model="name">
        </div>
        <div class="bottom">
        <span>密码</span>
        <input type="password" v-model="pass">
        </div>
    </el-form>
  </el-main>
  <el-footer class="footer">
    <div class="submit" @click="submit">确定</div>
  </el-footer>
</el-container>
</div>
</template>
<script>
import "./login.scss";
export default {
  data() {
    return {
      name: "",
      pass: ""
    };
  },
  methods: {
    submit: function() {
      if (this.name == "" || this.pass == '') {
        this.$alert('账号和密码不能为空',{
          confirmButtonText: '确定',
        });
      }
      this.$axios
        .post(
          "/api/guizhou/checklogin.php",
          this.$qs.stringify({
            name: this.name,
            pass: this.pass
          })
        )
        .then(res => {
          if (res.data == 1) {
            this.$router.push("/manager");
          } else {
            if (this.name != "" && this.pass != "") {
              this.$alert('账号或密码不正确', {
              confirmButtonText: '确定'
           });
            }   
          }
        });
    }
  }
};
</script>

