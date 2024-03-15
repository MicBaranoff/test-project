<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Button>Start now</Button>
  </div>
</template>

<script>
import Button from "@/components/ui/Button/Button.vue";

export default {
  name: 'App',
  components: {
    Button,
  }
}
</script>
