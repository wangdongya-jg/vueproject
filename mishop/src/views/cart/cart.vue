<!-- 组件说明 -->
<template>
    <div class='cart'>
        <div class="header">
            <span><van-icon name="arrow-left" size="20"/></span>
            <span>购物车</span>
            <span><van-icon name="search" size="20"/>
            </span>
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
.header{
    position: fixed;
    top:0;
    height: 1.2rem;
    background: #f2f2f2;
    display: flex;
    padding:0 0.4rem;
    box-sizing: border-box;
    width: 100%;
    justify-content: space-between;
    line-height: 1.2rem;
    font-size: 0.32rem;
    color: #666;
    
}
</style>