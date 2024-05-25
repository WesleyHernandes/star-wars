<template>
  <div class="detail-container">
    <Info label="Altura" :value="people?.height" />
    <Info label="Peso" :value="people?.mass" />
    <Info label="Cor do cabelo" :value="people?.hair_color" />
    <Info label="Cor da pele" :value="people?.skin_color" />
    <Info label="Cor dos olhos" :value="people?.eye_color" />
  </div>
</template>

<script setup>
import Info from "@/components/People/Info.vue";
import { usePeople } from "@/store/people.ts";

const store = usePeople();
const { people } = store;
</script>

<style scoped>
.detail-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
}
</style>
