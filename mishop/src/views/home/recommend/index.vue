<!-- 组件说明 -->
<template>
  <div class="recommend">
    <div class="swipeBox">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item
          ><img src="http://qiniu.verydog.cn//show.liluo.cc/02.jpg"
        /></van-swipe-item>
        <van-swipe-item
          ><img src="http://qiniu.verydog.cn//show.liluo.cc/01.png"
        /></van-swipe-item>
        <van-swipe-item
          ><img src="http://qiniu.verydog.cn//show.liluo.cc/02.jpg"
        /></van-swipe-item>
        <van-swipe-item
          ><img src="http://qiniu.verydog.cn//show.liluo.cc/01.png"
        /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="tabBox">
      <img
        src="http://qiniu.verydog.cn//show.liluo.cc/2018011022292984819.png"
      />
      <img
        src="http://qiniu.verydog.cn//show.liluo.cc/2018011022292372054.png"
        alt=""
      />
      <img
        src="http://qiniu.verydog.cn//show.liluo.cc/2018011022291629252.png"
        alt=""
      />
      <img
        src="http://qiniu.verydog.cn//show.liluo.cc/2018011022290460400.png"
        alt=""
      />
    </div>
    <div class="computer">
      <img
        src="http://qiniu.verydog.cn//show.liluo.cc/2018011115034174111.png"
        alt=""
      />
    </div>
    <div class="proList">
      <div class="products" @click="godetail">
        <img src="../../../assets/img/1.jpg" />
        <h3>13.3笔记本 i5独显</h3>
        <p>指纹解锁 全金属机身</p>
        <p class="price">￥<span>5199</span></p>
      </div>
      <div class="products">
        <img src="../../../assets/img/1.jpg" />
        <h3>13.3笔记本 i5独显</h3>
        <p>指纹解锁 全金属机身</p>
        <p class="price">￥<span>5199</span></p>
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
  methods: {
    godetail() {
      this.$router.push("/detail");
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

<style lang="scss" scoped>
.recommend {
  background: #f5f5f5;
  margin-bottom: 1.1rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  img {
    width: 100%;
  }
}
.tabBox {
  display: flex;
  width: 100%;
  img {
    width: 25%;
  }
}
.proList {
  display: flex;
  z-index: -10;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #fff;
  .products {
    width: 3.7rem;
    height: 4.7rem;
    img {
      width: 100%;
      height: 3.5rem;
    }
    p {
      color: #666;
      margin-top: 0.1rem;
    }
    .price {
      color: coral;
      margin-top: 0.1rem;
    }
  }
}
.computer {
  margin: 0.1rem 0;
  img {
    width: 100%;
  }
}
</style>
