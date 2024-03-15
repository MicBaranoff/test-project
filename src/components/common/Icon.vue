<template>
  <svg
    :class="className"
    v-html="iconTemplate.content"
    v-bind="iconTemplate.attributes"
  />
</template>

<script>
export default {
  name: 'Icon',

  props: {
    name: {
      type: String,
      required: true
    },
    folder: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconTemplate() {
      const path = this.folder ? `svg/${this.folder}/` : `svg/`;

      try {
        return require(`@/assets/${path}${this.name.toLowerCase()}.svg`);
      } catch (e) {
        console.error(`Icon "${this.name}" not found`);
        return null;
      }
    },
    className() {
      return 'icon icon--' + this.name;
    }
  }
};
</script>
