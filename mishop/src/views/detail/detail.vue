<!-- 组件说明 -->
<template>
  <div class="detail">
    <div>
      <van-nav-bar
        title="详情"
        left-text="返回"
        :placeholder="true"
        :fixed="true"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="swipeBox">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <div class="detailCon">
        <h3 class="title">小米电视4A</h3>
        <p class="desc">商品描述商品描述商品描述</p>
        <p class="price"><span>￥</span>2399</p>
    </div>
    <div class="guige">
      <p>已选</p>
      <span>请选择商品规格</span>
      <van-icon name="arrow" size="20" color="#888" />
    </div>
    <div class="area">
      <p>送至</p>
      <span>请选择配送地区</span>
      <van-icon name="arrow" />
    </div>
    <div class="peijian">
      <p>配件</p>
      <van-icon name="arrow" />
    </div>
    <div>
      <van-goods-action>
        <van-goods-action-icon icon="wap-home-o" text="首页" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <!-- <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" /> -->
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
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
    onClickLeft() {
      history.go(-1);
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
.detail{
    widows: 100%;
    background: #f5f5f5;
    margin-bottom:1.2rem;
}
.my-swipe .van-swipe-item {
  height: 8rem;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.detailCon{
  background: #fff;
  padding:0.25rem;
  .title{
    font-size: 0.45rem;
  }
  .desc{
    font-size: 0.3rem;
    color: #666;
    margin-top:0.15rem;
  }
  .price{
    font-size: 0.4rem;
    color: coral;
    margin-top:0.15rem;
  }
}
.guige{
  background: #fff;
  margin-top: 0.2rem;
  height: 1rem;
  line-height: 1rem;
  padding:0 0.3rem;
  p{
    color: #888;
    float: left;
  }
  span{
    font-size: 0.3rem;
    margin-left: 0.2rem;
  }
  .van-icon{
    float: right;
    margin-top:0.28rem;
  }
}
.area{
  @extend .guige;
  margin-top:0;
  border-top:1px solid #cecece;
}
.peijian{
  @extend .guige;
  border-bottom:1px solid #cecece;
}

</style>
