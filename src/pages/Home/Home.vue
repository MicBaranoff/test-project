<template>
  <DefaultLayout>
    <div class="home-page">
      <MainSection />
      <OurServicesSection class="home-page__services" />
      <ListTextSection class="home-page__list" />
      <AdvantagesSection  class="home-page__advantages" />
      <TestimonialsSection class="home-page__testimonials" />
      <TabsImageSection class="home-page__tabs" />
      <BlogSection class="home-page__blog" />
      <FeedBackSection class="home-page__feedback" />
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout.vue'
import MainSection from "@/sections/MainSection/MainSection.vue";
import OurServicesSection from "@/sections/OurServicesSection/OurServicesSection.vue";
import ListTextSection from "@/sections/ListTextSection/ListTextSection.vue";
import AdvantagesSection from "@/sections/AdvantagesSection/AdvantagesSection.vue";
import TestimonialsSection from "@/sections/TestimonialsSection/TestimonialsSection.vue";
import TabsImageSection from "@/sections/TabsImageSection/TabsImageSection.vue";
import BlogSection from "@/sections/BlogSection/BlogSection.vue";
import FeedBackSection from "@/sections/FeedbackSection/FeedBackSection.vue";

export default {
  name: 'Home',

  components: {
    MainSection,
    DefaultLayout,
    OurServicesSection,
    ListTextSection,
    AdvantagesSection,
    TestimonialsSection,
    TabsImageSection,
    BlogSection,
    FeedBackSection,
  }
}
</script>

<style lang="scss" scoped src="./home.scss"></style>