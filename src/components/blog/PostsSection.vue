<template>
  <section class="posts-wrapper">
    <post-template v-for="post in postsList" :postImage="post.img" :postImageAlt="post.alt"
      :postDescription="post.description" :postTitle="post.title" :postMaterial="post.material" :postOwner="post.author"
      :postDate="post.date" :id="post.id"></post-template>
  </section>
</template>

<script>
import PostTemplate from "../../modules/PostTemplate.vue";

export default {
  components: {
    PostTemplate,
  },
  computed: {
    postsList() {
      return this.$store.getters['blog/getBlogPosts']
    }
  }
};
</script>

<style scoped>
.posts-wrapper {
  gap: 5.4rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.2rem;
}
</style>
