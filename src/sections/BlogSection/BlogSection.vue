<template>
  <div class="blog-section">
    <div class="container">
      <div class="blog-section__head">
        <h4 class="text text--lg blog-section__font blog-section__font--subtitle">
          Our Blog
        </h4>
        <div class="blog-section__title">
          <h2 class="title title--lg">
            Value proposition accelerator product management venture
          </h2>
        </div>
      </div>

      <div class="blog-section__wrapper">
        <BlogCard
            v-for="item in blogConfig"
            :key="item.id + 'blog'"
            :name="item.name"
            :message="item.message"
            :category="item.category"
            :date="item.date"
            :avatar="item.avatar"
            :image="item.image"
        />
      </div>

      <div class="blog-section__button">
        <Button type="bordered">Load more</Button>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "@/components/cards/BlogCard/BlogCard.vue";
import Button from "@/components/ui/Button/Button.vue";

import blogConfig from "@/configs/blogConfig";

export default {
  name: "BlogSection",
  components: {
    BlogCard,
    Button,
  },

  data() {
    return {
      blogConfig,
    }
  }
}
</script>

<style scoped lang="scss" src="./blog-section.scss"></style>