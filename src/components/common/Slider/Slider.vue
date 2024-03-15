<template>
  <div class="slider swiper">
    <div
        ref="swiper"
        class="swiper-container slider__container"
        :class="{ [`slider__container--${containerClass}`]: containerClass }"
    >
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper slider__wrapper">
        <!-- Slides -->
        <div
            v-for="(item, index) in items"
            :key="`${index}`"
            class="swiper-slide slider__slide"
            :class="{
            'swiper-slide-active slider__slide--active': currentIndex === index,
          }"
        >
          <slot name="slide" :itemData="item" :index="index" :swiper="swiper" />
        </div>
      </div>

      <div v-if="hasPagination" class="swiper-pagination slider__pagination" />

      <slot
          v-if="hasNavigation"
          name="buttonPrev"
          :isBeginning="isBeginning"
          :clickHandler="slidePrev"
          iconClass="slider__icon slider__icon--prev"
      />
      <slot
          v-if="hasNavigation"
          name="buttonNext"
          :isEnd="isEnd"
          :clickHandler="slideNext"
          iconClass="slider__icon slider__icon--next"
      />

      <button
          v-if="hasNavigation && hasButtonPrev"
          type="button"
          class="swiper-button-prev slider__button slider__button--prev"
          :class="{
          'slider__button--disabled': isBeginning,
          [`${containerClass}__nav-btn`]: containerClass,
        }"
          @click="slidePrev"
      >
        <Icon
            class="slider__icon slider__icon--prev"
            :name="customArrow"
        ></Icon>
      </button>

      <button
          v-if="hasNavigation && hasButtonNext"
          type="button"
          class="swiper-button-next slider__button slider__button--next"
          :class="{
          'slider__button--disabled': isEnd,
          [`${containerClass}__nav-btn`]: containerClass,
        }"
          @click="slideNext"
      >
        <Icon
            class="slider__icon slider__icon--next"
            :name="customArrow"
        ></Icon>
      </button>
    </div>
  </div>
</template>

<script>
import { merge } from 'lodash';

export default {
  name: 'Slider',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    sliderConfig: {
      type: Object,
      default: () => ({}),
    },
    hasPagination: {
      type: Boolean,
      default: false,
    },
    containerClass: {
      type: String,
      default: undefined,
    },
    customArrow: {
      type: String,
      default: 'arrow',
    },
  },
  data() {
    return {
      swiper: null,
      currentIndex: 0,
      isEnd: false,
      isBeginning: true,
    };
  },
  computed: {
    sliderOptions() {
      const defaultConfig = {
        slidesPerView: 'auto',
        speed: 1000,
        // arrows: true,
        grabCursor: true,
        spaceBetween: 34,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        },
        on: {
          realIndexChange: (slide) => {
            this.currentIndex = slide.activeIndex;

            this.isEnd = slide.isEnd;
            this.isBeginning = slide.isBeginning;

            this.$emit('change', {
              index: this.currentIndex || 0,
              isBeginning: this.isBeginning,
              isEnd: this.isEnd,
            });
          },
        },
      };

      if (this.hasPagination) {
        defaultConfig.pagination = {
          el: '.slider__pagination',
          bulletActiveClass:
              'swiper-pagination-bullet-active slider__bullet--active',
          bulletClass: 'swiper-pagination-bullet slider__bullet',
          clickable: true,
        };
      }

      return merge(defaultConfig, this.sliderConfig);
    },
    hasNavigation() {
      return this.sliderOptions?.navigation && this.items.length > 1;
    },
    hasButtonPrev() {
      return !this.$scopedSlots?.buttonPrev;
    },
    hasButtonNext() {
      return !this.$scopedSlots?.buttonNext;
    },
  },
  mounted() {
    this.swiper = new this.$swiper(this.$refs.swiper, this.sliderOptions);
  },
  methods: {
    slidePrev() {
      this.swiper?.slidePrev();
    },

    slideNext() {
      this.swiper?.slideNext();
    },

    slideTo(index) {
      this.swiper?.slideTo(index);
    },
  },
};
</script>

<style scoped lang="scss" src="./slider.scss" />
