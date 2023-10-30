<template>
  <aside class="search-wrapper">
    <base-search></base-search>
    <div class="search-wrapper__category-block">
      <h3 class="category-block__title">Categories</h3>
      <ul class="category-block__content">
        <li class="content__topic">
          <a href="" class="topic__label">Crafts</a>
          <span class="topic_counter">0</span>
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
};
</script>
