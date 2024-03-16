<template>
  <div class="default-layout">
    <Header class="default-layout__header" />
    <slot></slot>
    <Footer class="default-layout__footer"></Footer>
  </div>
</template>

<script>
import Header from "@/components/layout/Header/Header.vue";
import Footer from "@/components/layout/Footer/Footer.vue";
export default {
  name: "DefaultLayout",
  components: {
    Header,
    Footer,
  }
}
</script>

<style scoped lang="scss" src="./default-layout.scss"></style>