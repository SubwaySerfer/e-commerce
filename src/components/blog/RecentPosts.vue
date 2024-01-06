<template>
  <aside class="recent-box">
    <h2 class="recent-box__title" @click="toggleIsModal">Recent Posts</h2>
    <ul class="recent-box__posts" v-if="windowWidth > 550">
      <recent-post-template v-for="post in recentPosts" :recentPostImage="post.img" :recentPostImageAlt="post.alt"
        :recentPostTitle="post.title" :recentPostDate="post.date"></recent-post-template>
    </ul>
    <ul class="recent-box__posts" v-else-if="windowWidth < 550 && isModalOpen">
      <recent-post-template v-for="post in recentPosts" :recentPostImage="post.img" :recentPostImageAlt="post.alt"
        :recentPostTitle="post.title" :recentPostDate="post.date"></recent-post-template>
    </ul>
  </aside>
</template>

<script>
import RecentPostTemplate from "../../modules/RecentPostTemplate.vue";
export default {
  components: {
    RecentPostTemplate,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      isModalOpen: false
    }
  },
  created() {
    this.$store.commit("blog/getRecentPosts");
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth > 550) {
        this.isModalOpen = false
      }
    },
    toggleIsModal() {
      if (this.windowWidth <= 550) {
        this.isModalOpen = !this.isModalOpen
      } else {
        this.isModalOpen = false
      }
    }
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

@media(max-width: 1200px) {
  .recent-box {
    padding: 0 0 0 3rem;
  }

}

@media(max-width: 900px) {
  .recent-box {
    padding-left: 0;
  }
}

@media(max-width:551px) {

  .recent-box__title {
    text-align: center;
    width: 27rem;
    cursor: pointer;
  }
}
</style>
