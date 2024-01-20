<template>
  <main class="favorite-page">
    <base-promo title="Wish List" startPage="Home" currentPage="Wish List"
      imgLink="/assets/icons/mainLogo.png"></base-promo>
    <h1 class="favorite-page__label">Wish list</h1>
    <div class="favorite-page__cards-list">
      <base-card v-for="card in this.favoriteList" :name="card.name" :img="card.img" :price="card.price"
        :description="card.description" :id="card.id">
      </base-card>
      <div v-if="this.favoriteList.length == 0" class="cards-list__empty-box">
        <h2 class="empty-box__label">Your wish list is empty</h2>
        <router-link to="/shop">
          <base-button class="fav-btn" mode="yellow-btn">Back to shop</base-button>
        </router-link>
      </div>

    </div>
    <our-advantages></our-advantages>
  </main>
</template>

<script>
export default {
  computed: {
    favoriteList() { return this.$store.getters['home/getFavoriteList'] }
  }
}
</script>

<style scoped>
.favorite-page {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  padding: 4rem 2rem;
}


.favorite-page__label {
  text-align: start;
  padding-left: 2rem;
  border-bottom: 1px solid grey;
  padding-bottom: 1rem;
  color: #b88e2f;
  font-size: 5.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 6.5rem;
}

.favorite-page__cards-list {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: min-content;
  list-style-type: none;
  min-height: 30rem;
  width: 100%;
}

.cards-list__empty-box {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-self: center;
  flex: 0 1 100%;
}

.empty-box__label {
  font-size: 2.5rem;
  font-weight: 500;
}
</style>