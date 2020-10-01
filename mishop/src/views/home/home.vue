<!-- 组件说明 -->
<template>
  <div class="home">
    <div class="header">
      <h1 class="logo"><img src="../../assets/img/logo.png" /></h1>
      <div class="searchBox">
        <span
          ><van-icon class="icon" name="search" size="20" color="#666"
        /></span>
        <input type="text" placeholder="搜索商品名称" />
      </div>
      <div class="mine">
        <van-icon name="user-circle-o" size="28" color="#666" />
      </div>
    </div>
    <ul class="navList">
      <li class="navItem"><router-link tag="i" to="/home/recommend">推荐</router-link></li>
      <li class="navItem"><i>手机</i></li>
      <li class="navItem"><i>智能</i></li>
      <li class="navItem"><i>电视</i></li>
      <li class="navItem"><i>电脑</i></li>
      <li class="navItem"><i>全面屏</i></li>
      <li class="navItem"><i>盒子</i></li>
      <li class="navItem"><i>生活周边</i></li>
      <li class="navItem"><i>艺术</i></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
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

<style lang="scss" scoped>
.home {
  margin-top: 1.8rem;
}
.header {
  height: 1rem;
  width: 100%;
  background: #f2f2f2;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0 0.4rem;
  border-bottom: 1px solid #dfdfdf;
}
.logo {
  width: 0.6rem;
  img {
    width: 100%;
  }
}
.searchBox {
  width: 4.6rem;
  height: 0.6rem;
  background: #fff;
  font-size: 0.2rem;
  border: 1px solid #efefef;
  border-radius: 0.1rem;
  margin-left: 0.5rem;
  position: relative;
  input {
    height: 90%;
    width: 3.8rem;
    margin-left: 0.7rem;
    margin-top: 0.05rem;
  }
  input::-webkit-input-placeholder {
    font-size: 0.3rem;
  }
  .icon {
    font-size: 0.16rem;
    margin-left: 0.2rem;
    position: absolute;
    top: 0.1rem;
  }
}
.mine {
  margin-left: 0.5rem;
}
.navList {
  overflow-x: auto;
  background: #f2f2f2;
  height: 0.8rem;
  font-size: 0.28rem;
  line-height: 0.8rem;
  border-bottom: 1px solid #efefef;
  position: fixed;
  top: 1.01rem;
  display: flex;
}
.navItem {
  float: left;
  margin: 0 0.2rem;
  color: #666;
  flex-shrink: 0;
  i {
    display: inline-block;
    height: 0.7rem;
    &.active {
      color: coral;
      border-bottom: 2px solid coral;
    }
  }
}

</style>
