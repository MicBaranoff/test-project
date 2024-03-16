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

        <transition-group
            name="list"
            class="blog-section__wrapper"
            tag="div"
        >
          <BlogCard
              class="blog-section__card"
              v-for="item in blogCardsToShow"
              :key="item.id + 'blog'"
              :name="item.name"
              :message="item.message"
              :category="item.category"
              :date="item.date"
              :avatar="item.avatar"
              :image="item.image"
          />
        </transition-group>

      <div class="blog-section__button">
        <transition name="fade">
          <Button
              v-show="!isNothingToFetch"
              @onClick="loadBlogCards"
              type="bordered">
            Load more
          </Button>
        </transition>
      </div>
    </div>

    <transition name="fade">
      <GlobalLoader v-if="requestInProgress"/>
    </transition>

  </div>
</template>

<script>
import BlogCard from "@/components/cards/BlogCard/BlogCard.vue";
import Button from "@/components/ui/Button/Button.vue";
import GlobalLoader from "@/components/common/GlobalLoader/GlobalLoader.vue";

import fetchDataWithTimeout from "@/mixins/fetchDataWithTimeout";

import blogConfig from "@/configs/blogConfig";

export default {
  name: "BlogSection",
  mixins: [fetchDataWithTimeout],
  components: {
    BlogCard,
    Button,
    GlobalLoader,
  },

  data() {
    return {
      blogConfig,
      blogCardsToShow: [],
    }
  },

  mounted() {
    this.loadBlogCards();
  },

  methods: {
    loadBlogCards() {
      this.fetchDataWithPromise(this.blogConfig).then((res) => {
        this.blogCardsToShow = [...this.blogCardsToShow, ...res];
      });
    },
  }
}
</script>

<style scoped lang="scss" src="./blog-section.scss"></style>