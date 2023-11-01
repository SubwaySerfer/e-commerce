<template>
  <section class="posts-wrapper">
    <post-template
      postImage="assets/postImage-1.png"
      postImageAlt="work atmosphere, laptop, phone and nodepad."
      postDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
      postTitle="Going all-in with millennial design"
      postOwner="Admin"
      postDate="14 Oct 2022"
      postMaterial="Wood"
    ></post-template>
    <post-template
      postImage="/src/assets/image/posts/postImage-2.png"
      postImageAlt="Woman hands write on the notepad."
      postTitle="Exploring new ways of decorating"
      postDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
      postOwner="Admin"
      postDate="14 Oct 2022"
      postMaterial="Handmade"
    >
    </post-template>
    <post-template
      postImage="/src/assets/image/posts/postImage-3.png"
      postImageAlt="Woman hands write on the notepad, near she have mug of coffee, laptop and phone. "
      postTitle="Handmade pieces that took time to make"
      postDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
      postOwner="Admin"
      postDate="14 Oct 2022"
      postMaterial="Wood"
    >
    </post-template>
  </section>
</template>

<script>
import PostTemplate from "../../modules/PostTemplate.vue";

export default {
  components: {
    PostTemplate,
  },
};
</script>

<style scoped>
.posts-wrapper {
  gap: 5.4rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.2rem;
}
</style>
