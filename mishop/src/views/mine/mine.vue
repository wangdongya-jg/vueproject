<!-- 组件说明 -->
<template>
  <div class="mine">
    <div>
      <div class="loginBox">
        <div class="userImg">
          <img src="../../assets/img/1.jpg" />
        </div>
        <div class="login">
          <p class="userLogin">{{ username }}</p>
        </div>
      </div>
      <div class="dingdan">
        <van-cell-group>
          <van-cell title="我的订单" is-link />
        </van-cell-group>
      </div>
      <div class="tabBox">
        <div class="tabItem">
          <van-icon name="bill-o" size="28" color="#999" />
          <p>待付款</p>
        </div>
        <div class="tabItem">
          <van-icon name="bag-o" size="28" color="#999" />
          <p>待收货</p>
        </div>
        <div class="tabItem">
          <van-icon name="setting-o" size="28" color="#999" />
          <p>退换维修</p>
        </div>
      </div>
      <div class="dingdan2">
        <van-cell-group>
          <van-cell title="会员福利" is-link icon="star-o" />
          <van-cell title="我的优惠" is-link icon="coupon-o" />
        </van-cell-group>
      </div>

      <div class="dingdan2">
        <van-cell-group>
          <van-cell title="服务中心" is-link icon="service-o" />
          <van-cell title="小米之家" is-link icon="wap-home-o" />
        </van-cell-group>
      </div>

      <div class="dingdan2">
        <van-cell-group>
          <van-cell title="设置" is-link icon="setting-o" />
          <van-cell title="退出登录" is-link icon="replay" @click="logout" />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
import { getToken, removeToken } from "../../utils/auth";
export default {
  components: {},
  data() {
    return {
      username: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    logout() {
      removeToken();
      this.$router.push('/login')
    },
  },
  created() {},
  mounted() {
    if (getToken()) {
      this.username = getToken();
    } else {
      alert("您还未登录，请先登录");
      this.$router.push("/login");
    }
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang="scss" scoped>
.mine {
  widows: 100%;
  height: 100%;
  background: #f5f5f5;
}
.loginBox {
  width: 100%;
  height: 1.5rem;
  background: url(../../assets/img/bg.63c8e19.png);
  background-size: 100%;
  background-color: coral;
  display: flex;
  align-items: center;
  .userImg {
    width: 1.1rem;
    height: 1.1rem;
    background: lavender;
    border-radius: 50%;
    margin-left: 0.5rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .login {
    display: flex;
    color: #fff;
    p {
      margin-left: 0.2rem;
    }
  }
}
.tabBox {
  display: flex;
  background: #fff;
  border-top: 1px solid #dedeee;
  height: 1.7rem;
  width: 100%;
  .tabItem {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      margin-top: 0.1rem;
    }
  }
}
.dingdan2 {
  margin-top: 0.2rem;
  .van-icon {
    color: coral;
    font-size: 20px;
    margin-right: 0.1rem;
  }
}
</style>
