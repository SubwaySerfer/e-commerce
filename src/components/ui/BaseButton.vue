<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
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
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 2.5rem 7.2rem;
  /* font: inherit; */
  background-color: #b88e2f;
  border: 1px solid #b88e2f;
  /* color: white; */
  cursor: pointer;
  /* margin-right: 0.5rem; */
  display: inline-block;
  color: #fff;
  /* font-family: Poppins; */
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
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
