import Vue from 'vue'
import App from './App.vue'

import '@/assets/scss/app.scss'

import Icon from '@/components/common/Icon';

import swiper from '@/plugins/swiper'

Vue.config.productionTip = false

Vue.component('Icon', Icon);

Vue.use(swiper);

new Vue({
  render: h => h(App),
}).$mount('#app')
