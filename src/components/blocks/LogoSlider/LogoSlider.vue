<template>
  <div class="logo-slider">
    <Slider
        :items="logosConfig"
        has-pagination
        :slider-config="{
            loop: true,
            autoplay: {
              delay: 0,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            },
            speed: 4000,
            slidesPerView: 6,
            navigation: false,
            pagination: false,
          }"
        container-class="linear"
    >
      <template #slide="{ itemData } = {}">
        <div
            class="logo-slider__slide"
        >
          <img class="logo-slider__slide-pic" :src="itemData.path" alt="">
        </div>
      </template>
    </Slider>
  </div>
</template>

<script>
import Slider from "@/components/common/Slider/Slider.vue";

import logosConfig from "@/configs/logosConfig";

export default {
  name: "LogoSlider",

  data() {
    return {
      logosConfig,
    }
  },

  components: {
    Slider,
  }
}
</script>

<style scoped lang="scss" src="./logo-slider.scss"></style>