<template>
  <div class="home-list-text-section">
    <div class="container home-list-text-section__container">
      <div class="home-list-text-section__image">
        <img src="" alt="" class="home-list-text-section__pic">
      </div>
      <div class="home-list-text-section__content">
        <div class="home-list-text-section__title">
          <h2 class="title title--md">
            We connect our customers with the best, and help them keep up-and stay open.
          </h2>
        </div>

        <IconList />
      </div>
    </div>
  </div>
</template>

<script>
import IconList from "@/components/ui/IconList/IconList.vue";

export default {
  name: "HomeListTextSection",
  components: {
    IconList,
  }
}
</script>

<style scoped lang="scss" src="./home-list-text-section.scss"></style>