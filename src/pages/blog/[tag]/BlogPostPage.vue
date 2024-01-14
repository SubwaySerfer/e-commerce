<template>
  <main class="blog-post">
    <base-promo imgLink="/assets/icons/mainLogo.png" title="Blog" startPage="Home" currentPage="Blog"></base-promo>
    <!-- <post-section :author="currentItem.author" :title="currentItem.title" :img="currentItem.img"
      :imgAlt="currentItem.imgAlt" :description="currentItem.description" :tag="currentItem.tag"
      :date="currentItem.date"></post-section> -->
    <post-section v-for="post in postsList" :author="post.author" :title="post.title" :img="post.img"
      :imgAlt="post.imgAlt" :description="post.description" :tag="post.tag" :date="post.date"></post-section>
    <our-advantages></our-advantages>
  </main>
</template>

<script>
import PostSection from '../../../components/blog/[tag]/PostSection.vue'

export default {
  components: {
    PostSection
  },
  data() {
    return {
      // id: this.$route.params['id'],
      id: null,
      tag: this.$route.params['tag'],
    }
  },
  created() {
    // if (!this.currentItem) {
    if (Object.keys(this.getCategories).length == 0) {
      this.$store.commit('blog/createCategories')
    }
    this.$store.commit('blog/createBlogPostsList')
  },
  computed: {
    getCategories() {
      return this.$store.getters["blog/getCategories"];
    },
    categories() {
      return Object.values(this.$store.getters['blog/getCategories'][this.tag])
    },
    postsList() {
      return this.$store.getters['blog/getBlogPosts'].filter(el => el.tag == this.tag)
    }
    //TODO: Сделать поиск с добавлением id, чтобы отображался только один пост, мб даже сверху всех
  }
  // TODO: сделать проверку, что значение из урл существует в масиве
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