<template>
  <ValidationObserver ref="formObserver" v-slot="{ failed, handleSubmit }" slim>
    <form class="feedback-form"  @submit.prevent="handleSubmit(submitHandler)">
        <Input
            class="feedback-form__input"
            v-model="formData.email"
            placeholder="Your email address"
            name="email"
            type="email"
            input-mode="email"
            rules="required|email"
            required
        />
      <Button
        typeAttr="submit"
        color="green"
        :disabled="failed"
      >
        Start now
      </Button>
    </form>
  </ValidationObserver>
</template>

<script>
import Input from "@/components/ui/Input/Input.vue";
import Button from "@/components/ui/Button/Button.vue";

import withValidation from '@/tools/withValidation';

import { ValidationObserver } from 'vee-validate';

export default {
  name: "FeedbackForm",
  components: {
    Input: withValidation(Input),
    Button,
    ValidationObserver,
  },

  data() {
    return {
      formData: {
        email: '',
      },
    };
  },

  methods: {
    async submitHandler() {
      const { email } = this.formData;

      console.log(email);
    },
  }
}
</script>

<style scoped lang="scss" src="./feedback-form.scss"></style>