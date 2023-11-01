<template>
  <section class="card-section">
    <ul class="card-section__images-list">
      <li class="images-list__item">
        <img
          src="/src/assets/icons/cardInfo/mini-sofa1.png"
          alt="blue sofa with two armchairs."
        />
      </li>
      <li class="images-list__item">
        <img
          src="/src/assets/icons/cardInfo/mini-sofa2.png"
          alt="grey sofa with two armchairs."
        />
      </li>
      <li class="images-list__item">
        <img
          src="/src/assets/icons/cardInfo/mini-sofa3.png"
          alt="white sofa with two grey pillows."
        />
      </li>
      <li class="images-list__item">
        <img
          src="/src/assets/icons/cardInfo/mini-sofa4.png"
          alt="beige sofa with table."
        />
      </li>
    </ul>
    <div class="card-section__main-photo">
      <img
        src="/src/assets/image/cardInfo/mainSofa1.png"
        alt="sofa with two armchairs."
        class="main-photo"
      />
    </div>

    <card-section-info
      name="Asgaard sofa"
      price="Rs. 250,000.00"
      description="Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
"
    ></card-section-info>
  </section>
</template>

<script>
import CardSectionInfo from "./CardSectionInfo.vue";

export default {
  components: {
    CardSectionInfo,
  },
};
</script>

<style scoped>
.card-section {
  height: 83.1rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 3.5rem 10rem 6.7rem;
  gap: 3.1rem;
}
.card-section__images-list {
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin: 0;
}
.images-list__item {
  list-style-type: none;
  width: 7.6rem;
  height: 8rem;
  border-radius: 1rem;
  background: #f9f1e7;
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
}
.card-section__main-photo {
  width: 42.3rem;
  height: 50rem;
  border-radius: 1rem;
  background: #f9f1e7;
  display: flex;
  justify-content: center;
}
.main-photo {
  width: 100%;
}
</style>
