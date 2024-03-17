<template>
  <div class="tabs-image-section">
    <div class="container tabs-image-section__container">
      <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="500"
          class="tabs-image-section__image">
        <img src="/img/pages/home/office.jpg" alt="" class="tabs-image-section__pic">
      </div>

      <div class="tabs-image-section__wrapper">
        <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="500"
            class="tabs-image-section__title">
          <h2 class="title title--md tabs-image-section__font tabs-image-section__font--title">
            We connect our customers with the best, and help them keep up-and stay open.
          </h2>
        </div>

        <div class="tabs-image-section__tabs">
          <Tab
              v-for="(item, index) in tabsData"
              :key="item.id + 'tab'"
              :title="item.title"
              :text="item.text"
              data-aos="fade-up"
              data-aos-duration="700"
              :data-aos-delay="100 * (index + 1)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from "@/components/ui/Tab/Tab.vue";

const tabsData = [
  {
    id: 0,
    title: 'We connect our customers with the best?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
        '          Aliquid cupiditate dignissimos distinctio ex\n' +
        '          facere hic id ipsa minus reiciendis repudiandae?',
  },
  {
    id: 1,
    title: 'Android research & development rockstar?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
        '          Aliquid cupiditate dignissimos distinctio ex\n' +
        '          facere hic id ipsa minus reiciendis repudiandae?',
  },
]

export default {
  name: "TabsImageSection",
  components: {
    Tab,
  },
  data() {
    return {
      tabsData,
    }
  }
}
</script>


<style scoped lang="scss" src="./tabs-image-section.scss"></style>