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
            },
            children: [
                {
                    path: '/sort',
                    redirect:'/sort/new'
                },
                {
                    path: 'new',
                    name: 'New',
                    component: () => import('../views/sort/sorts/new'),
                    meta: {
                        showFooter: true
                    }
                },
                {
                    path: 'phone',
                    name: 'Phone',
                    component: () => import('../views/sort/sorts/phone'),
                    meta: {
                        showFooter: true
                    }
                },
                {
                    path: 'computer',
                    name: 'Computer',
                    component: () => import('../views/sort/sorts/computer'),
                    meta: {
                        showFooter: true
                    }
                },
                {
                    path: 'erji',
                    name: 'Erji',
                    component: () => import('../views/sort/sorts/erji'),
                    meta: {
                        showFooter: true
                    }
                },
                {
                    path: 'jiadian',
                    name: 'Jiadian',
                    component: () => import('../views/sort/sorts/jiadian'),
                    meta: {
                        showFooter: true
                    }
                },
                {
                    path: 'power',
                    name: 'Power',
                    component: () => import('../views/sort/sorts/power'),
                    meta: {
                        showFooter: true
                    }
                },
                {
                    path: 'phone',
                    name: 'Phone',
                    component: () => import('../views/sort/sorts/phone'),
                    meta: {
                        showFooter: true
                    }
                },
                {
                    path: 'route',
                    name: 'Route',
                    component: () => import('../views/sort/sorts/route'),
                    meta: {
                        showFooter: true
                    }
                },
                {
                    path: 'tv',
                    name: 'Tv',
                    component: () => import('../views/sort/sorts/tv'),
                    meta: {
                        showFooter: true
                    }
                },
                {
                    path: 'yinxiang',
                    name: 'Yinxiang',
                    component: () => import('../views/sort/sorts/yinxiang'),
                    meta: {
                        showFooter: true
                    }
                },
                {
                    path: 'zhineng',
                    name: 'Zhineng',
                    component: () => import('../views/sort/sorts/zhineng'),
                    meta: {
                        showFooter: true
                    }
                }
            ]
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

        }, {
            path: '/detail',
            name: 'Name',
            component:()=>import('../views/detail/detail')
        },
        {
            path: '/login',
            name: 'Login',
            component:()=>import('../views/login/login')
        },
        {
            path: '/register',
            name: 'Register',
            component:()=>import('../views/register/register')
        }

    ],
    linkActiveClass:'active'
});

export default router
