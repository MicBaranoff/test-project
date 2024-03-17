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
          class="feedback-form__button"
        typeAttr="submit"
        color="green"
        :disabled="failed || requestInProgress"
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

import simulateFetchRequest from "@/mixins/simulateFetchRequest";

import { ValidationObserver } from 'vee-validate';

const formDataTemplate = {
  email: ''
}
export default {
  name: "FeedbackForm",
  mixins: [simulateFetchRequest],
  components: {
    Input: withValidation(Input),
    Button,
    ValidationObserver,
  },

  data() {
    return {
      formData: {...formDataTemplate},
    };
  },

  methods: {
    resetFormData() {
      this.formData = {...formDataTemplate}
    },
    submitHandler() {
      this.$loader.inProgress = true;

      this.simulateRequest(this.formData).then(() => {
        this.resetFormData();
        this.$refs.formObserver.reset();

        this.$loader.inProgress = false;

        this.$emit('onSubmit');
      })
    },
  }
}
</script>

<style scoped lang="scss" src="./feedback-form.scss"></style>