<template>
  <ul class="icon-list">
    <li v-for="(item, index) in data"
        class="icon-list__item"
        :key="Math.random() + index + 'list'"
    >
      <p class="text text--lg icon-list__font icon-list__font--text">{{ item }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "IconList",
  props: {
    data: {
      type: Array,
      default: () => [''],
    }
  }
}
</script>


<style scoped lang="scss" src="./icon-list.scss"></style>