<template>
  <div class="list-text-section">
    <div class="container list-text-section__container">
      <div
          data-aos="fade-up"
          data-aos-duration="700"
          class="list-text-section__image">
        <img src="img/pages/home/photo-graphics-1.png" alt="" class="list-text-section__pic">
      </div>
      <div class="list-text-section__content">
        <div
            data-aos="fade-up"
            data-aos-duration="700"
            class="list-text-section__title">
          <h2 class="title title--md">
            We connect our customers with the best, and help them keep up-and stay open.
          </h2>
        </div>

        <IconList class="list-text-section__list" :data="listData" />

        <div
            data-aos="fade-up"
            data-aos-duration="700">
          <Button>
            Start now
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconList from "@/components/ui/IconList/IconList.vue";
import Button from "@/components/ui/Button/Button.vue";

const listData = [
    'We connect our customers with the best.',
    'Advisor success customer launch party.',
    'Business-to-consumer long tail.',
]

export default {
  name: "ListTextSection",
  components: {
    IconList,
    Button,
  },
  data() {
    return {
      listData,
    }
  }
}
</script>

<style scoped lang="scss" src="./list-text-section.scss"></style>