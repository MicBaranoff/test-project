<template>
  <div class="tabs-image-section">
    <div class="container">
      <div class="tabs-image-section__image">
        <img src="/img/pages/home/office.jpg" alt="" class="tabs-image-section__pic">
      </div>

      <div class="tabs-image-section__wrapper">
        <div class="tabs-image-section__title">
          <h2 class="title title--md tabs-image-section__font tabs-image-section__font--title">
            We connect our customers with the best, and help them keep up-and stay open.
          </h2>
        </div>

        <div class="tabs-image-section__tabs">
          <Tab
              v-for="item in tabsData"
              :key="item.id + 'tab'"
              :title="item.title"
              :text="item.text"
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