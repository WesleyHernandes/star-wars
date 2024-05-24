<template>
  <header class="header-container">
    <NuxtLink class="logo" to="/">
      <img src="/logo.png" alt="Logo Star Wars" />
    </NuxtLink>
  </header>
</template>

<script setup></script>

<style scoped>
.header-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 30px;
  border-bottom: solid 1px var(--highlight);
}
@media (min-width: 576px) {
  .header-container {
    padding: 24px 64px;
  }
}
.logo {
  outline: none;
  display: flex;
  width: 100%;
  max-width: 148px;
}
img {
  display: block;
  width: 100%;
}
</style>
