<!-- 组件说明 -->
<template>
  <div class="login">
    <van-nav-bar
      title="注册"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell-group>
      <van-field
        v-model="username"
        required
        error
        label="用户名"
        left-icon="user-circle-o"
        right-icon="warning-o"
        placeholder="请输入用户名"
      />
      <van-field
        v-model="password"
        required
        clearable
        label="密码"
        left-icon="eye-o"
        placeholder="请输入密码"
      />
    </van-cell-group>
    <div style="margin:16px">
      <van-button round type="info" size="large" @click="doRegister"
        >注册</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    onClickLeft() {
      history.go(-1);
    },
    doRegister(){
      let username = this.username
      let password = this.password
        this.$http.get('/reg.php',{
          params:{
            username,
            password
          }
        }).then(res=>{
          console.log(res)
        })
    }
  },
  created() {},
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang="scss" scoped></style>
