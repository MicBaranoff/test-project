<template>
  <DefaultLayout>
    <div class="home-page">
      <MainSection />
      <OurServicesSection class="home-page__services" />
      <HomeListTextSection />
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout.vue'
import MainSection from "@/sections/MainSection/MainSection.vue";
import OurServicesSection from "@/sections/OurServicesSection/OurServicesSection.vue";
import HomeListTextSection from "@/sections/HomeListTextSection/HomeListTextSection.vue";

export default {
  name: 'Home',

  components: {
    MainSection,
    DefaultLayout,
    OurServicesSection,
    HomeListTextSection,
  }
}
</script>

<style lang="scss" scoped src="./home.scss"></style>