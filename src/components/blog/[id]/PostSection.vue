<template>
  <section class="post-wrapper">
    <img :src="img" :alt="imgAlt">
    <ul class="post-info">
      <li>{{ author }}</li>
      <li>{{ date }}</li>
      <li>{{ material }}</li>
    </ul>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </section>
</template>

<script>
export default {
  props: ['img', 'imgAlt', 'description', 'title', 'author', 'date', 'material']
}
</script>

<style scoped>
.post-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60rem;
  gap: 1rem;
}

.post-info {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
}
</style>
