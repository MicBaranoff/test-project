<template>
  <header class="header">
    <div class="container header__container">
      <a class="header__logo" href="/">
        <Icon name="logo" class="header__logo-pic"/>
      </a>
      <div class="header__wrapper">
        <NavBar />
        <Button size="sm" color="white">Log In</Button>
      </div>

      <transition name="fade">
        <MobileMenu
            @onClose="showMobileMenu = false"
            v-if="showMobileMenu" />
      </transition>

      <button
          @click="showMobileMenu = true"
          class="header__burger"
          type="button">
        <Icon name="icons/burger" />
      </button>
    </div>
  </header>
</template>

<script>
import NavBar from "@/components/ui/NavBar/NavBar.vue";
import Button from "@/components/ui/Button/Button.vue";
import MobileMenu from "@/components/blocks/MobileMenu/MobileMenu.vue";

export default {
  name: "Header",
  components: {
    NavBar,
    Button,
    MobileMenu,
  },
  data() {
    return {
      showMobileMenu: false,
    }
  }
}
</script>

<style scoped lang="scss" src="./header.scss"></style>