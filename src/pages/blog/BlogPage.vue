<template>
  <main class="blog-wrapper">
    <base-promo imgLink="/assets/icons/mainLogo.png" title="Blog" startPage="Home" currentPage="Blog"></base-promo>
    <section class="blog-wrapper__blog-content">
      <div class="blog-content">
        <posts-section></posts-section>
        <div class="blog-content__aside">
          <search-section></search-section>
          <recent-posts></recent-posts>
        </div>
      </div>

      <buttons-field :curPage="currentPage" :buttonsCounter="1"></buttons-field>
    </section>
    <our-advantages></our-advantages>
  </main>
</template>

<script>
import ButtonsField from "../../components/ui/ButtonsField.vue";
import PostsSection from "../../components/blog/PostsSection.vue";
import RecentPosts from "../../components/blog/RecentPosts.vue";
import SearchSection from "../../components/blog/SearchSection.vue";

export default {
  components: {
    ButtonsField,
    PostsSection,
    RecentPosts,
    SearchSection,
  },
  data() {
    return {
      currentPage: 1
    }
  },
  created() {
    this.$store.commit('blog/createBlogPostsList')
  },
  // computed: {
  //   postsList() {
  //     return this.$store.getters['blog/getBlogPosts']
  //   }
  // }
};
</script>

<style scoped>
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

@media(max-width:1200px) {
  .blog-wrapper__blog-content {
    padding: 10.6rem 3rem 2.2rem;
  }

  .blog-content {
    justify-content: space-around;
    width: 100%;
  }
}

@media(max-width: 825px) {
  .blog-wrapper__blog-content {
    padding-top: 6rem;
  }

  .blog-content {
    flex-direction: column-reverse;
  }

  .blog-content__aside {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
  }
}

@media(max-width: 551px) {
  .blog-content__aside {
    flex-direction: column;
    align-items: center
  }
}

@media(max-width: 420px) {
  .blog-wrapper__blog-content {
    padding: 10.6rem 4vw 2.2rem;
  }
}
</style>
