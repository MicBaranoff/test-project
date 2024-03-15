<template>
  <div class="our-services-section">
    <div class="container">
      <div class="our-services-section__head">
        <h4 class="text text--lg our-services-section__font our-services-section__font--subtitle">
          Our Services
        </h4>
        <div class="our-services-section__title">
          <h2 class="title title--lg">
            Handshake infographic mass market crowdfunding iteration.
          </h2>
        </div>
      </div>

      <div class="our-services-section__cards">
        <LinkCard
            v-for="item in ourServicesConfig"
            :key="item.id + 'serv'"
            :title="item.title"
            :text="item.text"
            :image="item.img"
        />
      </div>

    </div>
  </div>
</template>


<script>
import LinkCard from "@/components/cards/LinkCard/LinkCard.vue";

import ourServicesConfig from "@/configs/ourServicesConfig";

export default {
  name: "OurServicesSection",

  data() {
    return {
      ourServicesConfig,
    }
  },

  components: {
    LinkCard,
  }
}
</script>

<style scoped lang="scss" src="./our-services-section.scss"></style>