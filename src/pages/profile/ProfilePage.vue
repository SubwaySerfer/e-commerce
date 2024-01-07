<template>
  <main class="profile-wrapper">
    <base-promo imgLink="/assets/icons/mainLogo.png" title="Profile" startPage="Home" currentPage="Profile"></base-promo>

    <ProfileInfo></ProfileInfo>
    <!-- TODO: Сделать несколько секций на выбор, изменение данных, карты, история покупок -->
  </main>
</template>

<script>
import ProfileInfo from '../../components/profile/ProfileInfo.vue';

export default {
  components: {
    ProfileInfo,
  },
};
</script>

<style scoped>
.profile-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
}
</style>
