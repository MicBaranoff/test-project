<template>
  <section class="main-section">
    <div class="container main-section__container">
      <div class="main-section__wrapper">
        <div class="main-section__info">
          <div
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-delay="500"
              class="main-section__title">
            <h1 class="title title--lg main-section__font main-section__font--title ">
              Save time by building <br class="mobile-hide">
              fast with Boldo Template
            </h1>
          </div>
          <p
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-delay="600"
              class="text text--md main-section__font main-section__font--text">
            Funding handshake buyer business-to-business metrics iPad partnership.
            First mover advantage innovator success deployment non-disclosure.
          </p>

          <div data-aos="fade-up"
               data-aos-duration="700"
               data-aos-delay="700"
               class="main-section__buttons">
            <Button color="green">Buy template</Button>
            <Button color="white" type="bordered">Explore</Button>
          </div>
        </div>

        <div data-aos="fade-in"
             data-aos-duration="700"
             data-aos-delay="800" class="main-section__image">
          <img class="main-section__pic" src="img/pages/home/hero-graphics.png" alt="">
        </div>
      </div>

      <LogoSlider class="main-section__logos" />
    </div>
  </section>
</template>

<script>
import Button from "@/components/ui/Button/Button.vue";
import LogoSlider from "@/components/blocks/LogoSlider/LogoSlider.vue";

export default {
  name: "MainSection",
  components: {
    Button,
    LogoSlider,
  }
}
</script>


<style lang="scss" src="./main-section.scss" scoped></style>
