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

    </div>
  </header>
</template>

<script>
import NavBar from "@/components/ui/NavBar/NavBar.vue";
import Button from "@/components/ui/Button/Button.vue";

export default {
  name: "Header",
  components: {
    NavBar,
    Button,
  }
}
</script>

<style scoped lang="scss" src="./header.scss"></style>