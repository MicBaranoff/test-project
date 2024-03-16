<template>
  <div class="blog-card">
    <div>
      <div class="blog-card__image">
        <img class="blog-card__pic" :src="image" alt="">
      </div>
      <div class="blog-card__info">
        <span class="text text--md blog-card__font blog-card__font--category">{{ category }}</span>
        <span class="text text--md blog-card__font blog-card__font--date">{{ date }}</span>
      </div>
      <div class="blog-card__message">
        <p class="text text--lg">{{ message }}</p>
      </div>
    </div>

    <div class="blog-card__author">
      <div class="blog-card__author-img">
        <img class="blog-card__author-pic" :src="avatar" alt="">
      </div>
      <p class="text text--md">
        {{ name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LinkCard",

  props: {
    name: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    category: {
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
    avatar: {
      type: String,
      default: ''
    },
  }
}
</script>


<style scoped lang="scss" src="./blog-card.scss"></style>