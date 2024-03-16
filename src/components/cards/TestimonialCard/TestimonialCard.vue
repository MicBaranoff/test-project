<template>
  <div class="testimonial-card">
    <div class="testimonial-card__message">
      <p class="text text--extra-lg">{{text}}</p>
    </div>

    <div class="testimonial-card__author">
      <div class="testimonial-card__img">
        <img class="testimonial-card__pic" src="" alt="">
      </div>
      <div>
        <div class="testimonial-card__author-name">
          <span class="text text--md testimonial-card__font testimonial-card__font--author">
            Albus Dumbledore
          </span>
        </div>
        <span class="text text--sm testimonial-card__font testimonial-card__font--desc">
            Manager @ Slytherin
        </span>
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
    image: {
      type: String,
      default: ''
    },
  }
}
</script>


<style scoped lang="scss" src="./testimonial-card.scss"></style>