<template>
  <div class="default-layout">
    <Header class="default-layout__header" />
    <slot></slot>
  </div>
</template>

<script>
import Header from "@/components/layout/Header/Header.vue";
export default {
  name: "DefaultLayout",
  components: {
    Header,
  }
}
</script>

<style scoped lang="scss" src="./default-layout.scss"></style>