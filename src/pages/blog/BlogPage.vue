<template>
  <section>
    <h2>Blog Page</h2>

    <posts-section></posts-section>
    <buttons-field></buttons-field>
  </section>
</template>

<script>
import ButtonsField from "../../components/ui/ButtonsField.vue";
import PostsSection from "../../components/blog/PostsSection.vue";

export default {
  components: {
    ButtonsField,
    PostsSection,
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 500px;
  padding: 10.6rem 10rem 2.2rem;
}
</style>
