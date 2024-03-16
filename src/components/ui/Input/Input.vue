<template>
  <div class="input" :class="{ 'input--error': hasError }">
    <input
        ref="input"
        class="input__field"
        :name="name"
        :value="value"
        :inputmode="inputMode"
        :type="type"
        :maxlength="maxLength"
        autocomplete="off"
        :disabled="disabled"
        :required="required"
        :placeholder="placeholder"
        :aria-describedby="ariaDescribedby"
        :aria-required="required"
        :aria-invalid="isAriaInvalid"
        @input="emitInput"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
    />

    <div v-if="hasError" class="input__footer">
      <span
          :id="randomErrorId"
          aria-live="assertive"
          class="text text--sm input__font input__font--error"
      >{{ error }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    maxLength: {
      type: Number,
      default: null,
    },
    showErrors: {
      type: Boolean,
      default: false,
    },
    type: {
      default: 'text',
      validator(value) {
        return ['text', 'email', 'search', 'password', 'number'].includes(
            value
        );
      },
    },
    inputMode: {
      default: 'text',
      validator(value) {
        return ['text', 'decimal', 'none', 'email'].includes(value);
      },
    },
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      randomErrorId: null,
    };
  },

  computed: {
    hasError() {
      return Boolean(this.error);
    },
    isAriaInvalid() {
      return Boolean(this.showErrors && this.error);
    },
    ariaDescribedby() {
      return `${this.randomErrorId}`;
    },
  },

  created() {
    // присвоение значений данным переменным на created необходимо что бы исправить ошибки при проверке в validator.w3.org (ругвется на пустые поля)
    this.randomErrorId = this.getRandomCode('error');
  },
  mounted() {
    this.randomErrorId = this.getRandomCode('error');
  },

  methods: {
    emitInput(e) {
      this.$emit('input', e.target.value);
    },
    getRandomCode(name) {
      return `${name}-${Math.floor(Math.random() * 1001)}`;
    },
  },
};
</script>

<style scoped lang="scss" src="./input.scss"></style>
