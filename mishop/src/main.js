import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import router from './router'

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

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
