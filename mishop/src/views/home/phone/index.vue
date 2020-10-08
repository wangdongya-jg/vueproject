<!-- 组件说明 -->
<template>
    <div class='recommend'>
        <div class="swipeBox">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="http://qiniu.verydog.cn//show.liluo.cc/1888a9f0a6ae807113cb428b9e01f5fe.jpg"></van-swipe-item>
        <van-swipe-item><img src="http://qiniu.verydog.cn//show.liluo.cc/01.png"></van-swipe-item>
      </van-swipe>
    </div>
    <div class="proList">
      <div class="products">
                <img src="../../../assets/img/1.jpg">
                <h3>13.3笔记本 i5独显</h3>
                <p>指纹解锁 全金属机身</p>
                <p class="price">￥<span>5199</span></p>
            </div>
             <div class="products">
                <img src="../../../assets/img/1.jpg">
                <h3>13.3笔记本 i5独显</h3>
                <p>指纹解锁 全金属机身</p>
                <p class="price">￥<span>5199</span></p>
            </div>
    </div>
    </div>
</template>

<script>
    export default {
        components: {

        },
        data () {
            return {

            };
        },
        computed: {

        },
        watch: {

        },
        methods: {

        },
        created() {

},
        mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
    }
</script>

<style lang='scss' scoped>
.recommend{
  background: #f5f5f5;
  margin-bottom: 1.1rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  img{
    width: 100%;
  }
}
.proList{
  margin-top:0.2rem;
    display: flex;
    z-index: -10;
    justify-content: space-between;
    flex-wrap: wrap;
    background: #fff;
    .products{
        width: 3.7rem;
        height: 4.7rem;
        img{
            width: 100%;
            height: 3.5rem;
        }
        p{
            color: #666;
            margin-top:0.1rem;
        }
        .price{
            color: coral;
            margin-top:0.1rem;
        }
    }
}

</style>