<template>
  <div class="not-found">
    <Icon />
    <p class="text">Informações não encontradas</p>
  </div>
</template>

<script setup>
import Icon from "./Icon.vue";
</script>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
}
.not-found .text {
  color: var(--textLight);
  font-size: 20px;
  font-weight: 500;
}
</style>
