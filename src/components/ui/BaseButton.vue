<template>
  <button v-if="!link" :class="mode">
    <slot>{{ linkName }}</slot>
  </button>
  <button v-else :class="mode" class="btn">
    <router-link :to="to" :linkName="linkName" class="btn"
      >{{ linkName }}
      <!-- <slot>{{ linkName }}</slot> -->
    </router-link>
  </button>
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
};
</script>

<style scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}
.btn:hover {
  color: white;
}
/* button,
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
} */
a {
  text-decoration: none;
  color: #b88e2f;
  width: 100%;
  height: 100%;
}
a:hover {
  color: white;
}
.white-btn {
  border: 1px solid #b88e2f;
  background: #fff;
  color: #b88e2f;
  font-family: Poppins;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  width: 24.5rem;
  height: 4.8rem;
  border-radius: 0;
}
.white-btn:hover {
  color: #fff;
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
