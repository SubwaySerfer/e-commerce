<template>
  <main class="profile-wrapper">
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
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
