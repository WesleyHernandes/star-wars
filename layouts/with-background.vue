<template>
  <main class="main-layout">
    <Header />

    <section class="main-container">
      <slot />
    </section>
  </main>
</template>

<script setup>
import Header from "../components/Header/index.vue";
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
}
.main-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-image: url("/background.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
