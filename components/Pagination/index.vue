<template>
  <section class="pages-container">
    <Page />
    <Page />
    <Page />
    <Page />
  </section>
</template>

<script setup>
import Page from "./Page.vue";
</script>

<style scoped>
.pages-container {
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  width: 100%;
}
</style>
