import Vue from 'vue'
import App from './App.vue'

import 'aos/dist/aos.css'
import '@/assets/scss/app.scss'

import AOS from 'aos'

import Icon from '@/components/common/Icon';

import swiper from '@/plugins/swiper'
import veeValidate from "@/plugins/vee-validate";

Vue.config.productionTip = false


Vue.component('Icon', Icon);

Vue.use(swiper);
Vue.use(veeValidate);

new Vue({
  render: h => h(App),
  mounted() {
    AOS.init({
      offset: 220,
    })
  }
}).$mount('#app')
