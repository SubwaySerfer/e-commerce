<template>
  <aside class="search-wrapper">
    <base-search class="search-box"></base-search>
    <div class="search-wrapper__category-block">
      <h3 class="category-block__title">Categories</h3>
      <ul class="category-block__content">
        <li v-for="category in getCategories" class="content__topic">
          <!-- <a :href="category.link" class="topic__label">{{ category.name }}</a> -->
          <router-link :to="category.link" class="topic__label">{{
            category.name
          }}</router-link>
          <span class="topic_counter">{{ category.count }}</span>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import BaseSearch from "../ui/BaseSearch.vue";

export default {
  computed: {
    getCategories() {
      return this.$store.getters["blog/getCategories"];
    },
  },
  components: {
    BaseSearch,
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
</style>
