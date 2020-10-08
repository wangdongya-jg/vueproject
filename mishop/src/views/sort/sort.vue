<!-- 组件说明 -->
<template>
  <div class="sort">
    <div class="header">
      <span><van-icon name="arrow-left" size="20"/></span>
      <span>分类</span>
      <span><van-icon name="search" size="20" /> </span>
    </div>
    <div class="sorts">
      <ul>
        <router-link tag="li" to="/sort/new">新品</router-link>
        <router-link tag="li" to="/sort/phone">手机</router-link>
        <router-link tag="li" to="/sort/tv">电视</router-link>
        <router-link tag="li" to="/sort/computer">电脑</router-link>
        <router-link tag="li" to="/sort/jiadian">家电</router-link>
        <router-link tag="li" to="/sort/route">路由</router-link>
        <router-link tag="li" to="/sort/zhineng">智能</router-link>
        <router-link tag="li" to="/sort/power">电源</router-link>
        <router-link tag="li" to="/sort/erji">耳机</router-link>
        <router-link tag="li" to="/sort/yinxiang">音响</router-link>
        <router-link tag="li" to="/sort/lipin">礼品</router-link>
      </ul>
      <router-view></router-view>
    </div>
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
.sort {
  margin-top: 1.2rem;
  margin-bottom: 1.1rem;
}
.header {
  position: fixed;
  top: 0;
  height: 1.2rem;
  background: #f2f2f2;
  display: flex;
  padding: 0 0.4rem;
  box-sizing: border-box;
  width: 100%;
  justify-content: space-between;
  line-height: 1.2rem;
  font-size: 0.32rem;
  color: #666;
  z-index: 10;
}
.sorts {
  display: flex;
  ul {
    width: 1.5rem;
    background: #f8f8f8;
    overflow-y: auto;
  }
  li {
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    font-size: 0.3rem;
    &.active {
      color: coral;
      font-size: 0.32rem;
    }
  }
}
</style>
