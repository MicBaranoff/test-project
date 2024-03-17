<template>
  <div class="testimonials-section">
    <div class="container testimonials-section__container">
      <div class="testimonials-section__head">
        <div class="testimonials-section__title">
          <h2 class="title title--lg testimonials-section__font testimonials-section__font--title">
            An enterprise template to ramp up your company website
          </h2>
        </div>

        <div class="testimonials-section__nav">
          <RoundIcoButton
              @onClick="goPrev"
              icon="icons/nav/arrow-left"
              color="white"
              class="testimonials-section__nav-prev" />
          <RoundIcoButton
              @onClick="goNext"
              icon="icons/nav/arrow-right"
              color="white"
              class="testimonials-section__nav-next" />
        </div>
      </div>

      <Slider
          ref="slider"
          :items="testimonialsConfig"
          has-pagination
          :slider-config="{
            loop: true,
            speed: 1000,
            slidesPerView: 3,
            navigation: false,
            pagination: false,
            breakpoints: {
              700: {
                spaceBetween: 15,
              }
            }
          }"
      >
        <template #slide="{ itemData } = {}">
          <TestimonialCard
            :title="itemData.name"
            :text="itemData.desc"
            :image="itemData.img"
            :message="itemData.message"
          />
        </template>
      </Slider>
    </div>
  </div>
</template>

<script>
import RoundIcoButton from "@/components/ui/RoundIcoButton/RoundIcoButton.vue";
import Slider from "@/components/common/Slider/Slider.vue";
import TestimonialCard from "@/components/cards/TestimonialCard/TestimonialCard.vue";

import testimonialsConfig from "@/configs/testimonialsConfig";

export default {
  name: "TestimonialsSection",

  components: {
    RoundIcoButton,
    Slider,
    TestimonialCard,
  },

  data() {
    return {
      testimonialsConfig,
    }
  },

  methods: {
    goNext() {
      this.$refs.slider.slideNext()
    },
    goPrev() {
      this.$refs.slider.slidePrev()
    },
  }

}
</script>

<style scoped lang="scss" src="./testimonials-section.scss"></style>