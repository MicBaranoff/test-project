<template>
  <div class="link-card">
    <div class="link-card__image">
      <img class="link-card__pic" :src="image" alt="">
    </div>
    <div class="link-card__info">
      <div class="link-card__title">
        <h4 class="text text--extra-lg">{{ title }}</h4>
      </div>
      <p class="text text--lg link-card__font link-card__font--text">{{text}}</p>
    </div>

    <button type="button" class="link-card__button">
      <span class="text text--lg link-card__font link-card__font--button">Explore page</span>
      <Icon class="link-card__button-ico" name="icons/nav/arrow-right"/>
    </button>
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


<style scoped lang="scss" src="./link-card.scss"></style>