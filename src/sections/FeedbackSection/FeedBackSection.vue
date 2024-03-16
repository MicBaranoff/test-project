<template>
  <div class="feedback-section">
    <div class="container feedback-section__container">
      <div class="feedback-section__wrapper">
        <div class="feedback-section__title">
          <h2 class="title title--lg feedback-section__font feedback-section__font--title">
            An enterprise template to ramp up your company website
          </h2>
        </div>

        <FeedbackForm />
      </div>
    </div>
  </div>
</template>

<script>
import FeedbackForm from "@/components/forms/FeedbackForm/FeedbackForm.vue";

export default {
  name: "FeedBackSection",
  components: {
    FeedbackForm,
  }
}
</script>

<style scoped lang="scss" src="./feedback-section.scss"></style>