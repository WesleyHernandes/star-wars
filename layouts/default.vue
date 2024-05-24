<template>
  <main class="main-layout">
    <Header />
    <slot />
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
</style>
