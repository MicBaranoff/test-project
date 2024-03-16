<template>
  <div class="tab">
    <div @click="isActive = !isActive" class="tab__title">
      <span class="text text--lg">
        {{title}}
      </span>

      <div
          :class="{'tab__status--active': isActive}"
          class="tab__status">
        <Icon class="tab__status-ico" name="icons/chevron-down" />
      </div>
    </div>

    <transition name="slide">
      <div v-show="isActive" class="tab__text">
        <span class="text text--md">
          {{text}}
        </span>
        <br><br>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  name: "Tab",
  data() {
    return {
      isActive: false,
    }
  },

  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
  },
}
</script>



<style scoped lang="scss" src="./tab.scss"></style>