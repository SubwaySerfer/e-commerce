<template>
  <div class="blog-wrapper">
    <base-promo></base-promo>
    <section class="blog-wrapper__blog-content">
      <h2>Blog Page</h2>
      <div class="blog-content">
        <posts-section></posts-section>
        <div class="blog-content__aside">
          <h2>Search</h2>
          <recent-posts></recent-posts>
        </div>
      </div>

      <buttons-field></buttons-field>
    </section>
    <our-advantages></our-advantages>
  </div>
</template>

<script>
import ButtonsField from "../../components/ui/ButtonsField.vue";
import PostsSection from "../../components/blog/PostsSection.vue";
import RecentPosts from "../../components/blog/RecentPosts.vue";

export default {
  components: {
    ButtonsField,
    PostsSection,
    RecentPosts,
  },
};
</script>

<style scoped>
.blog-wrapper {
}
.blog-wrapper__blog-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 500px;
  padding: 10.6rem 10rem 2.2rem;
}
.blog-content {
  display: flex;
  flex-direction: row;
  gap: 3rem;
}
</style>
