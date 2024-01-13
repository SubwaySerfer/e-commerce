<template>
  <main>
    <base-promo imgLink="/assets/icons/mainLogo.png" title="Blog" startPage="Home" currentPage="Blog"></base-promo>
    {{ currentItem }}
  </main>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params['id'],
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