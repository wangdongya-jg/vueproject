<!-- 组件说明 -->
<template>
  <div class="login">
    <van-nav-bar
      title="登录"
      left-text="返回"
      right-text="注册"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
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
      <van-button round type="info" size="large" @click="doLogin"
        >登录</van-button
      >
    </div>
    <div style="margin-left:130px;" @click="onClickRight">
      <p style="color:#888">没有账号？立即注册</p>
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
    onClickRight() {
      this.$router.push({
          path:'/register'
      });
    },
    doLogin() {
      console.log(this.username, this.password);
    },
    goback() {
      this.showLogin = true;
      this.showRegister = false;
    },
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
