<template>
  <aside class="search-wrapper">
    <base-search class="search-box"></base-search>
    <div class="search-wrapper__category-block">
      <h3 class="category-block__title" @click="toggleIsModal">Categories</h3>
      <ul class="category-block__content" v-if="windowWidth > 550">
        <li v-for="(value, name, index) in getCategories" class="content__topic">
          <!-- <a :href="category.link" class="topic__label">{{ category.name }}</a> -->
          <router-link to="" class="topic__label">{{
            this.toCapitalLetter(name)
          }}</router-link>
          <span class="topic_counter">{{ value.length || 0 }}</span>
        </li>
      </ul>
      <ul class="category-block__content content-popup" v-else-if="windowWidth < 550 && isModalOpen">
        <li v-for="(value, name) in getCategories" class="content__topic">
          <!-- <a :href="category.link" class="topic__label">{{ category.name }}</a> -->
          <router-link to="" class="topic__label">{{
            name
          }}</router-link>
          <span class="topic_counter">{{ value.length || 0 }}</span>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import BaseSearch from "../ui/BaseSearch.vue";

export default {
  components: {
    BaseSearch,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      isModalOpen: false
    }
  },
  computed: {
    getCategories() {
      return this.$store.getters["blog/getCategories"];
    },
  },
  created() {
    this.$store.commit('blog/createCategories')
    console.log(this.getCategories)
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
    },
    toCapitalLetter(word) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }
  },
};
</script>

<style scoped>
.search-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4.1rem 6.1rem;
  gap: 3.3rem;
  margin-bottom: 3rem;
}

.search-wrapper__category-block {
  margin-top: 1rem;
}

.category-block__content {
  display: flex;
  flex-direction: column;
  gap: 4.1rem;
  padding-left: 1.1rem;
}

.category-block__title {
  color: #000;
  font-family: Poppins;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-bottom: 2.3rem;
  text-align: start;
  text-indent: 1rem;
}

.content__topic {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 25rem;
  color: #9f9f9f;
  font-family: Poppins;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.topic__label {
  text-decoration: none;
  color: #9f9f9f;
}

@media(max-width:1200px) {
  .search-wrapper {
    padding: 0 0 6.1rem;
  }
}

@media(max-width: 900px) {
  .content__topic {
    width: 100%;
  }

  .search-wrapper__category-block {
    width: 100%;
  }

  .category-block__content {
    padding-right: 1rem;
  }

  .search-wrapper {
    margin-bottom: 0;
  }
}

@media(max-width:551px) {
  .search-wrapper {
    padding-bottom: 0;
  }

  .category-block__title {
    text-align: center;
    width: 27rem;
    cursor: pointer;
    text-indent: 0;
  }

  .content-popup {
    margin-bottom: 3rem;
  }

  /* TODO: проверить на айфоне, заголовки блоков, странное поведение */
}
</style>
