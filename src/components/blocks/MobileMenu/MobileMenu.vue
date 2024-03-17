<template>
  <div class="mobile-menu">
    <div class="container mobile-menu__container">
      <div class="mobile-menu__head">
        <a class="mobile-menu__logo" href="/">
          <Icon name="logo" class="header__logo-pic"/>
        </a>

        <button
            @click="$emit('onClose')"
            class="mobile-menu__close"
            type="button">
          <Icon name="icons/close" />
        </button>
      </div>

      <NavBar />

      <Button size="sm" color="white">Log In</Button>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/ui/NavBar/NavBar.vue";
import Button from "@/components/ui/Button/Button.vue";
export default {
  name: "MobileMenu",

  components: {
    Button,
    NavBar,
  }
}
</script>

<style scoped lang="scss" src="./mobile-menu.scss"></style>