import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'

// 设置懒加载模块
Vue.use(VueLazyLoad, {
  // 引入要加载的图片
  loading: require('@/assets/images/h5.png'),
  error: require('@/assets/images/h5.png')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
