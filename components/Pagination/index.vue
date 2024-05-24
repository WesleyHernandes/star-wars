<template>
  <section class="pages-container">
    <Page label="1" :active="true" />
    <Page label="2" />
    <Page label="3" />
    <Page label="4" />
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
