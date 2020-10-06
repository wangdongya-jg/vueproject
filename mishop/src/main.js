import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import router from './router'
import request from './utils/request'

// 轮播图
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);

// 图标
import { Icon } from 'vant';
Vue.use(Icon);

// 遮罩层
import { Overlay } from 'vant';
Vue.use(Overlay);

// 返回
import { NavBar } from 'vant';
Vue.use(NavBar);

import { Stepper } from 'vant';
Vue.use(Stepper);

Vue.use(Vant)

//cell单元格
import { Cell, CellGroup } from 'vant';
Vue.use(Cell);
Vue.use(CellGroup);

//引入表单
import { Form } from 'vant';
Vue.use(Form);

//引入GOODSAction商品导航
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);


Vue.prototype.$http = request
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
