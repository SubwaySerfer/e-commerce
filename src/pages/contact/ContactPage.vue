<template>
  <section>
    <base-promo
      img="assets/icons/mainLogo.png"
      title="Contact"
      startPage="Home"
      currentPage="Contact"
    ></base-promo>
    <contact-form></contact-form>
    <our-advantages class="advantages-container"></our-advantages>
  </section>
</template>

<script>
import ContactForm from "../../components/contact/ContactForm.vue";
export default {
  components: {
    ContactForm,
  },
};
</script>

<style scoped>
.advantages-container {
  margin-bottom: 3rem;
}
</style>
