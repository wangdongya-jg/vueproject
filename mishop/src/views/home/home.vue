<!-- 组件说明 -->
<template>
  <div class="home">
    <div class="header">
        <h1 class="logo"><img src="../../assets/img/logo.png"></h1>
        <div class="searchBox">
            <span><van-icon class="icon" name="search" size="20" color="#666"/></span>
            <input type="text" placeholder="搜索商品名称">
        </div>
        <div class="mine">
            <van-icon name="user-circle-o" size="28" color="#666"/>
        </div>
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
.header {
  height: 1rem;
  width: 100%;
  background: #f2f2f2;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  padding:0 0.4rem;
 
}
.logo{
  width: 0.6rem;
  img{
      width: 100%;
  }
}
.searchBox{
      width: 4.6rem;
      height: 0.6rem;
      background: #fff;
      font-size: 0.2rem;
      border:1px solid #efefef;
      border-radius: 0.1rem;
      margin-left:0.5rem;
      position: relative;
      input{
          height: 90%;
          width: 3.8rem;
          margin-left:0.7rem;
          margin-top: 0.05rem;
      }
      input::-webkit-input-placeholder{
          font-size: 0.3rem;  
      }
      .icon{
          font-size: 0.16rem;
          margin-left:0.2rem;
          position: absolute;
          top:0.1rem;
      }
  }
  .mine{
      margin-left: 0.5rem;
  }
</style>
