<template>
  <div class="post" :id=id @click="openPost(id, postTag)">
    <img :src="`${postImage}`" :alt="postImageAlt" class="post__image" />
    <ul class="post_info-block">
      <li class="info-block__elem">
        <img src="/assets/icons/blog/icon-admin.svg" alt="icon admin." class="elem__img" />
        <h6 class="elem__description">{{ postOwner }}</h6>
      </li>
      <li class="info-block__elem">
        <img src="/assets/icons/blog/icon-calender.svg" alt="icon calender." class="elem__img" />
        <h6 class="elem__description">{{ postDate }}</h6>
      </li>
      <li class="info-block__elem">
        <img src="/assets/icons/blog/icon-tag.svg" alt="icon mark." class="elem__img elem__img_tag" />
        <h6 class="elem__description">{{ postTag }}</h6>
      </li>
    </ul>
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
    postOwner: {
      type: String,
      required: true,
      default: "",
    },
    postDate: {
      type: String,
      required: true,
      default: "",
    },
    postTag: {
      type: String,
      required: true,
      default: "",
    },
    id: {
      type: Number,
      required: false,
      default: ''
    }
  },
  methods: {
    openPost(id, postTag) {
      // TODO: сделать действие если кликнули на материал\автора!
      this.$router.push(`/blog/${postTag}`);
    }
  }
};
</script>

<style scoped>
.post {
  width: 81.7rem;
  font-family: Poppins;
  font-style: normal;
  display: flex;
  flex-direction: column;
}

.post_info-block {
  display: flex;
  flex-direction: row;
  gap: 3.5rem;
  justify-content: flex-start;
  align-items: center;
  margin: 1.7rem 0 1.5rem;
}

.post__button {
  color: #000;
  background-color: transparent;
  text-align: justify;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
  align-self: flex-start;
  padding: 0;
  padding-top: 2.9rem;
  transition: transform .25s ease-in-out;
  outline: none;
}

.post__button:after {
  content: "";
  display: block;
  height: 1px;
  background: #000;
  width: 7.7rem;
  margin: 10px auto 0;
  transition: 1s;
}

.post__button:hover {
  border-color: transparent;
  transform: scale(1.1);

}

.post__image {
  width: 81.7rem;
  height: 50rem;
}

.post__title {
  color: #000;
  font-size: 3rem;
  font-weight: 500;
  line-height: normal;
  text-align: start;
}

.post__description {
  padding-top: 1.2rem;
  color: #9f9f9f;
  text-align: justify;
  font-family: Poppins;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 155%;
}

.info-block__elem {
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.7rem;
}

.elem__description {
  color: #9f9f9f;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
}

.elem__img {
  width: 2rem;
}

.elem__img_tag {
  width: 2.2rem;
}

@media(max-width: 1300px) {
  .post {
    width: 60vw;
  }

  .post__image {
    width: 100%;
    height: auto;
  }
}

@media(max-width: 825px) {
  .post {
    width: 100%;
  }
}

@media(max-width: 460px) {
  .post_info-block {
    gap: .4rem;
    justify-content: space-between;
  }

  .elem__description {
    font-size: 1.4rem;
  }

  .info-block__elem {
    gap: .5rem;
  }
}
</style>
