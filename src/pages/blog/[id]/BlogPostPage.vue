<template>
  <main class="blog-post">
    <base-promo imgLink="/assets/icons/mainLogo.png" title="Blog" startPage="Home" currentPage="Blog"></base-promo>
    <post-section :author="currentItem.author" :title="currentItem.title" :img="currentItem.img"
      :imgAlt="currentItem.imgAlt" :description="currentItem.description" :tag="currentItem.tag"
      :date="currentItem.date"></post-section>
    <our-advantages></our-advantages>
  </main>
</template>

<script>
import PostSection from '../../../components/blog/[id]/PostSection.vue'

export default {
  components: {
    PostSection
  },
  data() {
    return {
      id: this.$route.params['id'],
    }
  },
  created() {
    if (!this.currentItem) {
      this.$store.commit('blog/createBlogPostsList')
    }
  },
  watch: {
    $route(toRoute) {
      this.id = toRoute.params['id']
    }
  },
  computed: {
    currentItem() {
      return this.$store.getters["blog/getBlogPosts"].find(el => el.id == this.id)
    },
  }
}
</script>

<style scoped>
.blog-post {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
}
</style>