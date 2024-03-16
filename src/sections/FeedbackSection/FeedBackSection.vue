<template>
  <div class="feedback-section">
    <div class="container feedback-section__container">
        <div
            class="feedback-section__wrapper"
            :class="{'feedback-section__wrapper--hide': formSubmitted}"
        >
          <div class="feedback-section__title">
            <h2 class="title title--lg feedback-section__font feedback-section__font--title">
              An enterprise template to ramp up your company website
            </h2>
          </div>

          <FeedbackForm @onSubmit="formSubmitted = true" />
        </div>

        <div
            class="feedback-section__submitted"
            :class="{'feedback-section__submitted--active': formSubmitted}"
        >
          <h2 class="title title--lg feedback-section__font feedback-section__font--title">
            Success! Form submitted =)
          </h2>
          <Button @onClick="formSubmitted = false"
                  class="feedback-section__submitted-button"
                  color="green">
            Retry
          </Button>
        </div>
    </div>
  </div>
</template>

<script>
import FeedbackForm from "@/components/forms/FeedbackForm/FeedbackForm.vue";
import Button from "@/components/ui/Button/Button.vue";

export default {
  name: "FeedBackSection",
  data() {
    return {
      formSubmitted: false,
    }
  },
  components: {
    FeedbackForm,
    Button,
  }
}
</script>

<style scoped lang="scss" src="./feedback-section.scss"></style>