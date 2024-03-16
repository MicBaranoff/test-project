<template>
  <div class="advantages-section">
    <div class="container advantages-section__container">
      <div class="advantages-section__content">
        <div class="advantages-section__title">
          <h2 class="title title--md">
            We connect our customers with the best, and help them keep up-and stay open.
          </h2>
        </div>

        <TextIconBox
            class="advantages-section__item"
            v-for="item in listData"
            :key="item.id + 'box'"
            :text="item.text"
            :icon="item.ico"
        />
      </div>

      <div class="advantages-section__image">
        <img src="/img/pages/home/call.jpg" alt="" class="advantages-section__pic">

        <div class="advantages-section__chart">
          <TestDataChart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextIconBox from "@/components/ui/TextIconBox/TextIconBox.vue";
import TestDataChart from "@/components/blocks/TestDataChart/TestDataChart.vue";

const listData = [
  {
    id: 0,
    ico: 'icons/pear',
    text: 'We connect our customers with the best.',
  },
  {
    id: 1,
    ico: 'icons/eye',
    text: 'Advisor success customer launch party.',
  },
  {
    id: 2,
    ico: 'icons/sun',
    text: 'Business-to-consumer long tail.',
  },
]

export default {
  name: "ListTextSection",
  components: {
    TextIconBox,
    TestDataChart,
  },
  data() {
    return {
      listData,
    }
  }
}
</script>

<style scoped lang="scss" src="./advantages-section.scss"></style>