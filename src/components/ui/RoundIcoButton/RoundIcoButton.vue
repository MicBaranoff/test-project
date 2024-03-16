<template>
  <button
      type="button"
      class="round-ico-button"
      @click="$emit('onClick')"
      :class="{
        [`round-ico-button--${size}`]: size,
        [`round-ico-button--${type}`]: type,
        [`round-ico-button--${type}--${color}`]: color,
      }"
  >
    <Icon class="round-ico-button__ico" :name="icon" />
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
    },
    icon: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang="scss" src="./round-ico-button.scss" scoped></style>