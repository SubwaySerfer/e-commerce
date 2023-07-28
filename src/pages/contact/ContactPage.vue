<template>
  <section>
    <base-promo
      img="src/assets/icons/mainLogo.png"
      title="Contact"
      startPage="Home"
      currentPage="Contact"
    ></base-promo>
    <contact-form></contact-form>
    <our-advantages></our-advantages>
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
