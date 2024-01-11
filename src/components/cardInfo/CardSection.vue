<template>
  <section class="card-section">
    <ul class="card-section__images-list">
      <li class="images-list__item">
        <img src="/assets/icons/cardInfo/mini-sofa1.png" alt="blue sofa with two armchairs." />
      </li>
      <li class="images-list__item">
        <img src="/assets/icons/cardInfo/mini-sofa2.png" alt="grey sofa with two armchairs." />
      </li>
      <li class="images-list__item">
        <img src="/assets/icons/cardInfo/mini-sofa3.png" alt="white sofa with two grey pillows." />
      </li>
      <li class="images-list__item">
        <img src="/assets/icons/cardInfo/mini-sofa4.png" alt="beige sofa with table." />
      </li>
    </ul>
    <div class="card-section__main-photo">
      <img :src=currentItem.img alt="sofa with two armchairs." class="main-photo" />
    </div>

    <card-section-info :name=currentItem.name :price=currentItem.price :description=currentItem.description
      :counter=currentItem.counter :id=currentItem.id></card-section-info>
  </section>
</template>

<script>
import CardSectionInfo from "./CardSectionInfo.vue";

export default {
  props: ['currentItem'],
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

@media(max-width: 1400px) {
  .card-section {
    height: auto;
    padding: 3.5rem 2vw 6.7rem;
    width: 100vw;
  }

}

@media(max-width: 1270px) {
  .card-section {
    justify-content: space-between;
  }
}

@media(max-width: 1200px) {
  .card-section {
    flex-wrap: wrap;
    justify-content: center;
  }

  .card-section__main-photo {
    width: 40vw;
    object-fit: contain;
    height: min-content;
  }
}

@media(max-width:960px) {
  .card-section__main-photo {
    width: 50vw;
  }

  .main-photo {
    object-fit: fill;
  }
}

@media(max-width:630px) {
  .card-section {
    gap: 2rem;
  }

  .card-section__main-photo {
    width: 60vw
  }
}

@media(max-width: 540px) {
  .card-section {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .card-section__images-list {
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
    width: 100%;
    padding: 0 4vw;
  }

  .card-section__main-photo {
    width: 100%;
  }
}

@media(max-width: 420px) {

  .images-list__item {
    width: 6rem;
    height: 6.5rem;
    padding-bottom: .7rem;
  }

  .images-list__item>img {
    width: 100%;
  }
}
</style>
