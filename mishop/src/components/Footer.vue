<!-- 组件说明 -->
<template>
    <div class='footerCon'>
      <ul>
          <router-link class="footerItem " tag="li" to="/home" ><van-icon size="25" name="wap-home-o" /><i>首页</i></router-link>
          <router-link class="footerItem" tag="li" to="/sort" ><van-icon size="25" name="gem-o" /><i>分类</i></router-link>
          <router-link class="footerItem" tag="li" to="/cart" ><van-icon size="25" name="shopping-cart-o" /><i>购物车</i></router-link>
          <router-link class="footerItem" tag="li" to="/mine" ><van-icon size="25" name="user-circle-o" /><i>我的</i></router-link>
      </ul>
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
.footerCon{
    width: 100%;
    position: fixed;
    bottom: 0;
}
.footerItem{
    font-size: 0.2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #666;
}
.active{
    color: coral;
}
</style>