<template>
  <div class="not-found">
    <h2 class="title">
      Não conseguimos encontrar nenhum personagem com o termo “{{ query }}”:
    </h2>
    <h3 class="subtitle">tente novamente com outro termo de pesquisa</h3>
  </div>
</template>

<script setup>
defineProps({
  query: String,
});
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  margin-bottom: 30px;
}
.not-found .title {
  display: block;
  color: var(--textLight);
  font-size: 18px;
  font-weight: 700;
}
.not-found .subtitle {
  display: block;
  color: var(--textMedium);
  font-size: 18px;
  font-weight: 400;
}
@media (min-width: 768px) {
  .not-found {
    margin-bottom: 72px;
  }
  .not-found .title {
    font-size: 24px;
  }
  .not-found .subtitle {
    font-size: 24px;
  }
}
</style>
