import Vue from 'vue'
import App from './App.vue'

import '@/assets/scss/app.scss'

import Icon from '@/components/common/Icon';

Vue.config.productionTip = false

Vue.component('Icon', Icon);

new Vue({
  render: h => h(App),
}).$mount('#app')
