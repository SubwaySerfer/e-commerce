<template>
  <the-header></the-header>
  <router-view class="wrapper" v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  created() {
    this.$store.commit("home/getFurnitureList");
  },
};
</script>
<style scoped>
html {
  font-family: "Poppins", sans-serif;
  font-size: 10px;
  color: #000;
}

body {
  margin: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>

<style>
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul {
  padding-left: 0;
}
</style>
