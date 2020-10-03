<!-- 组件说明 -->
<template>
    <div class='cart'>
        <div class="header">
            <span><van-icon name="arrow-left" size="20"/></span>
            <span>购物车</span>
            <span><van-icon name="search" size="20"/>
            </span>
        </div>
        <div class="cartBox">
            <div class="imgBox"><img src="../../assets/img/1.jpg"></div>
            <div class="titleBox">
                <h3>米家四位四控插线板</h3>
                <p>售价：<span>89</span>&nbsp;元</p>
                <div class="cartNum">
                    <van-stepper disable-input />
                    <van-icon name="delete" class="icon" size="22" color="#888"/>
                </div>
            </div>
        </div>
        <div class="cartBox">
            <div class="imgBox"><img src="../../assets/img/1.jpg"></div>
            <div class="titleBox">
                <h3>米家四位四控插线板</h3>
                <p>售价：<span>89</span>&nbsp;元</p>
                <div class="cartNum">
                    <span class="sub">-</span>
                    <span>1</span>
                    <span class="add">+</span>
                    <van-icon name="delete" class="icon" size="22" color="#888"/>
                </div>
            </div>
        </div>
        <div class="youlike">
            <img src="http://qiniu.verydog.cn//show.liluo.cc/e95ade2750a7fde92369b416c7d3176d.jpg">
        </div>
        <div class="proList">
            <div class="products">
                <img src="../../assets/img/1.jpg">
                <h3>13.3笔记本 i5独显</h3>
                <p>指纹解锁 全金属机身</p>
                <p class="price">￥<span>5199</span></p>
            </div>
             <div class="products">
                <img src="../../assets/img/1.jpg">
                <h3>13.3笔记本 i5独显</h3>
                <p>指纹解锁 全金属机身</p>
                <p class="price">￥<span>5199</span></p>
            </div>
             <div class="products">
                <img src="../../assets/img/1.jpg">
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
.cart{
    margin-top:1.2rem;
    margin-bottom: 1rem;
}
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
.cartBox{
    height: 2.3rem;
    widows: 100%;
    border: 1px solid #cecece;
    padding:0.3rem;
    margin-bottom: 0.4rem;
    .imgBox{
        width: 2.2rem;
        height: 2.2rem;   
        background: lavender;
        float: left;
        margin-bottom: 0.2rem;
        border: none;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .titleBox{
        margin-left:0.4rem;
        float: left;
        margin-top:0.2rem;
        
        h3{
            font-size: 0.34rem;
            color: #666;
            width: 4rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        p{
            font-size: 0.28rem;
            color: #666;
            margin-top:0.1rem;
        }
        .cartNum{
            display: flex;
            width: 3.5rem;
            margin-top:0.2rem;
            span{
                display:inline-block;
                width: 0.5rem;
                height: 0.5rem;
                border: 1px solid #efefef;
                font-size:0.4rem;
                text-align: center;
                color: #666;
            }
            .sub{
                background: #f7f5f5;
            }
            .add{
                background: #f7f5f5;
            }
            .icon{
                margin-left:1rem;
                margin-top:0.05rem;
            }
        }
    }
}
.youlike{
    width:100%;
    img{
        width: 100%;
    }
}
.proList{
    display: flex;
    z-index: -10;
    justify-content: space-between;
    flex-wrap: wrap;
    .products{
        width: 3.7rem;
        height: 4.7rem;
        img{
            width: 100%;
            height: 3.5rem;
        }
        p{
            color: #666;
        }
        .price{
            color: coral;
        }
    }
}
</style>