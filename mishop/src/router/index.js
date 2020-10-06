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
                },
                {
                    path: 'phone',
                    name: 'Phone',
                    component: () => import('../views/home/phone/index'),
                    meta: {
                        showFooter: true
                    }
                },
                {
                    path: 'intell',
                    name: 'Intell',
                    component: () => import('../views/home/intell/index'),
                    meta: {
                        showFooter: true
                    }
                },
                {
                    path: 'computer',
                    name: 'Computer',
                    component: () => import('../views/home/computer/index'),
                    meta: {
                        showFooter: true
                    }
                },
                {
                    path: 'quan',
                    name: 'Quan',
                    component: () => import('../views/home/quan/index'),
                    meta: {
                        showFooter: true
                    }
                },
                {
                    path: 'tv',
                    name: 'Tv',
                    component: () => import('../views/home/tv/index'),
                    meta: {
                        showFooter: true
                    }
                },

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
            },

        }

    ],
    linkActiveClass:'active'
});

export default router
