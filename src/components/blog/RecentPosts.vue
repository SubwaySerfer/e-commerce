<template>
  <aside class="recent-box">
    <h2 class="recent-box__title">Recent Posts</h2>
    <ul class="recent-box__posts">
      <recent-post-template
        v-for="post in recentPosts"
        :recentPostImage="post.img"
        :recentPostImageAlt="post.alt"
        :recentPostTitle="post.title"
        :recentPostDate="post.date"
      ></recent-post-template>
    </ul>
  </aside>
</template>

<script>
import RecentPostTemplate from "../../modules/RecentPostTemplate.vue";
export default {
  components: {
    RecentPostTemplate,
  },
  created() {
    this.$store.commit("blog/getRecentPosts");
  },
  computed: {
    recentPosts() {
      return this.$store.getters["blog/recentPosts"];
    },
  },
};
</script>

<style scoped>
.recent-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem 6.5rem 1.6rem 7.6rem;
}
.recent-box__title {
  color: #000;
  font-family: Poppins;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  align-self: flex-start;
  margin-bottom: 1.5rem;
}
.recent-box__posts {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3.9rem;
}
</style>
