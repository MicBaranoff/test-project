import Swiper from 'swiper';
import { Navigation, EffectFade, Pagination, Mousewheel, Autoplay } from 'swiper/modules';
Swiper.use([Navigation, EffectFade, Pagination, Mousewheel, Autoplay]);
import 'swiper/swiper-bundle.css';

const swiper = {
    install(Vue) {
        Vue.prototype.$swiper = Swiper;
    }
}

export default swiper;


