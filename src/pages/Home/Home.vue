<template>
  <DefaultLayout>
    <div class="home-page">
      <MainSection />
      <OurServicesSection class="home-page__services" />
      <HomeListTextSection class="home-page__list" />
      <AdvantagesSection  class="home-page__advantages" />
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout.vue'
import MainSection from "@/sections/MainSection/MainSection.vue";
import OurServicesSection from "@/sections/OurServicesSection/OurServicesSection.vue";
import HomeListTextSection from "@/sections/ListTextSection/ListTextSection.vue";
import AdvantagesSection from "@/sections/AdvantagesSection/AdvantagesSection.vue";

export default {
  name: 'Home',

  components: {
    MainSection,
    DefaultLayout,
    OurServicesSection,
    HomeListTextSection,
    AdvantagesSection,
  }
}
</script>

<style lang="scss" scoped src="./home.scss"></style>