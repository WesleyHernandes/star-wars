<template>
  <section class="search-container">
    <div class="search-content">
      <div class="text">
        <h2 class="title">Todos os dados de Star Wars que você sempre quis:</h2>
        <h3 class="subtitle">
          Planetas, naves espaciais, veículos, pessoas, filmes e espécies
        </h3>
      </div>

      <Field />
    </div>
  </section>
</template>

<script setup>
import Field from "./Field/index.vue";
</script>

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
}
@media (min-width: 1280px) {
  .search-container {
    justify-content: center;
  }
}
.search-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1090px;
  margin: 0 auto;
  padding: 50px 16px;
}
@media (min-width: 768px) {
  .search-content {
    padding: 88px 16px;
  }
}
.search-content .text {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  margin-bottom: 30px;
}
.search-content .text .title {
  display: block;
  color: var(--textLight);
  font-size: 26px;
  font-weight: 700;
  text-align: center;
}
.search-content .text .subtitle {
  display: block;
  color: var(--textMedium);
  font-size: 18px;
  font-weight: 400;
  text-align: center;
}
@media (min-width: 768px) {
  .search-content .text {
    margin-bottom: 72px;
  }
  .search-content .text .title {
    font-size: 32px;
  }
  .search-content .text .subtitle {
    font-size: 24px;
  }
}
</style>
