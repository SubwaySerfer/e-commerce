<template>
  <div class="post">
    <img
      :src="`${recentPostImage}`"
      :alt="recentPostImageAlt"
      class="post__image"
    />
    <h5 class="post__title">{{ recentPostTitle }}</h5>
    <span class="post__date">{{ recentPostDate }}</span>
  </div>
</template>

<script>
export default {
  props: [
    "recentPostImage",
    "recentPostImageAlt",
    "recentPostTitle",
    "recentPostDate",
  ],
};
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 8rem;
  font-family: Poppins;
  font-style: normal;
  text-align: start;
}
.post__image {
  width: 8rem;
  height: 8rem;
  margin-right: 1.2rem;
}
.post__title {
  max-width: 16rem;
  color: #000;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 0.5rem;
  padding-top: 0.8rem;
}
.post__date {
  color: #9f9f9f;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: normal;
}
</style>
