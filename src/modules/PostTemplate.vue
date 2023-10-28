<template>
  <div class="post">
    <img :src="`${postImage}`" :alt="postImageAlt" class="post__image" />
    <div>
      <div>admin</div>
      <div>oct</div>
      <div>wood</div>
    </div>
    <h2 class="post__title">{{ postTitle }}</h2>
    <p class="post__description">{{ postDescription }}</p>
    <button class="post__button">Read more</button>
  </div>
</template>

<script>
export default {
  props: {
    postImage: {
      type: String,
      required: true,
      default: "",
    },
    postDescription: {
      type: String,
      required: true,
      default: "",
    },
    postTitle: {
      type: String,
      required: false,
      default: "",
    },
    postImageAlt: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>

<style scoped>
.post__button {
  color: #000;
  background-color: transparent;
  text-align: justify;
  font-family: Poppins;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.post__button:after {
  content: "";
  display: block;
  height: 1px; /* Высота линии */
  background: #000;
  width: 7.7rem;
  margin: 10px auto 0;
  transition: 1s;
}

.post__image {
  width: 81.7rem;
  height: 50rem;
}
.post__title {
  color: #000;
  font-family: Poppins;
  font-size: 3rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.post__description {
  color: #9f9f9f;
  text-align: justify;
  font-family: Poppins;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
</style>
