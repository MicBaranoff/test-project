<template>
  <button
      type="button"
      class="button"
      @click="$emit('onClick')"
      :class="{
        [`button--${size}`]: size,
        [`button--${type}`]: type,
        [`button--${type}--${color}`]: color,
      }"
      >
    <span class="button__font button__font--text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "Button",

  props: {
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return ['sm', 'md', 'lg'].includes(value)
      }
    },
    type: {
      type: String,
      default: 'filled',
      validator(value) {
        return ['bordered', 'filled'].includes(value)
      }
    },
    color: {
      type: String,
      default: 'blue',
      validator(value) {
        return ['blue', 'green', 'white'].includes(value)
      }
    }
  }
}
</script>

<style lang="scss" src="./button.scss" scoped></style>