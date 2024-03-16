<template>
  <div class="testimonial-card">
    <div class="testimonial-card__message">
      <p class="text text--extra-lg">{{ message }}</p>
    </div>

    <div class="testimonial-card__author">
      <div class="testimonial-card__img">
        <img class="testimonial-card__pic" :src="image" alt="">
      </div>
      <div>
        <p class="text text--md testimonial-card__font testimonial-card__font--author">
          {{ title }}
        </p>
        <p class="text text--sm testimonial-card__font testimonial-card__font--desc">
            {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LinkCard",

  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
  }
}
</script>


<style scoped lang="scss" src="./testimonial-card.scss"></style>