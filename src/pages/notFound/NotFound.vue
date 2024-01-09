<template>
  <main class="not-found">
    <h1 class="not-found__label"> The page was not found</h1>
    <base-button modeLabel="white-btn" mode="white-btn" @click="goPreviousPage">Previous Page</base-button>
  </main>
</template>

<script>
export default {
  methods: {
    goPreviousPage() {
      console.log(this.$router.go(-1))
      // this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 5rem;
}

.not-found__label {
  color: #b88e2f;
  font-size: 4rem;
}
</style>