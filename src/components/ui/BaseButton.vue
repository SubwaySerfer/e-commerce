<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :linkName="linkName" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
    linkName: {
      type: String,
      required: false,
      default: "",
    },
  },
  // computed: {
  // createLink() {
  //   return;
  // },
  // },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  background-color: #b88e2f;
  border: 1px solid #b88e2f;
  cursor: pointer;
  display: inline-block;
  color: #fff;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #b88e2f;
  border-color: #b88e2f;
}

.flat {
  background-color: transparent;
  color: #b88e2f;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #b88e2f;
  color: #b88e2f;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #b88e2f;
}
</style>
