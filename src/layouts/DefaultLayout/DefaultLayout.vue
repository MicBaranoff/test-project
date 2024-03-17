<template>
  <div class="default-layout">
    <Header class="default-layout__header" />
    <slot></slot>
    <Footer class="default-layout__footer"></Footer>

    <transition name="fade">
      <GlobalLoader v-if="$loader.inProgress"/>
    </transition>
  </div>
</template>

<script>
import Header from "@/components/layout/Header/Header.vue";
import Footer from "@/components/layout/Footer/Footer.vue";
import GlobalLoader from "@/components/common/GlobalLoader/GlobalLoader.vue";
export default {
  name: "DefaultLayout",
  components: {
    GlobalLoader,
    Header,
    Footer,
  }
}
</script>

<style scoped lang="scss" src="./default-layout.scss"></style>