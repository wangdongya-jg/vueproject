<!-- 组件说明 -->
<template>
    <div class='recommend'>
        <div class="swipeBox">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="http://qiniu.verydog.cn//show.liluo.cc/2018011316542272196.png"></van-swipe-item>
        <van-swipe-item><img src="http://qiniu.verydog.cn//show.liluo.cc/2018011316542272196.png"></van-swipe-item>
      </van-swipe>
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

</style>