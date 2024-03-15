<template>
  <button @click="$emit('onClick')" type="button" class="button">
    <span class="button__font button__font--text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "Button",
}
</script>

<style lang="scss" src="./button.scss" scoped></style>