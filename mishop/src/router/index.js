import Vue from "vue";
import vueRouter from "vue-router";

Vue.use(vueRouter);

const router = new vueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: "/home",
            name: 'Home',
            component: () => import("../views/home/home"),
            meta: {
                showFooter: true
            },
            children: [
                {
                    path: '/',
                    redirect:'/home/recommend'
                },
                {
                    path: 'recommend',
                    name: 'Recommend',
                    component: () => import('../views/home/recommend/index'),
                    meta: {
                        showFooter: true
                    }
                }
            ]
        },
        {
            path: "/sort",
            name: 'Sort',
            component: () => import("../views/sort/sort"),
            meta: {
                showFooter: true
            }
        },
        {
            path: "/cart",
            name: 'Cart',
            component: () => import("../views/cart/cart"),
            meta: {
                showFooter: true
            }
        },
        {
            path: "/mine",
            name: 'Mine',
            component: () => import("../views/mine/mine"),
            meta: {
                showFooter: true
            }
        }

    ],
    linkActiveClass:'active'
});

export default router
