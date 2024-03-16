<template>
  <div class="text-icon-box">
    <Icon class="text-icon-box__ico" :name="icon"/>
    <span class="text text--md text-icon-box__font text-icon-box__font--text">
      {{text}}
    </span>
  </div>
</template>

<script>
export default {
  name: "TextIconBox",
  props: {
    text: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    }
  }
}
</script>


<style scoped lang="scss" src="./text-icon-box.scss"></style>