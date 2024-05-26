<template>
  <Loading v-if="pending" :size="50" :centered="true" />
  <div v-else-if="specieUrl" class="specie-container">
    <Info label="Nome" :value="specie?.name" />
    <Info label="Classificação" :value="specie?.classification" />
    <Info label="Designação" :value="specie?.designation" />
    <Info label="Peso médio" :value="specie?.average_height" />
    <Info label="Linguagem" :value="specie?.language" />
  </div>
  <NotFound v-else />
</template>

<script setup>
import Info from "@/components/People/Info.vue";
import NotFound from "@/components/People/NotFound/index.vue";
import Loading from "@/components/Loading.vue";
import { usePeople } from "@/store/people.ts";

const store = usePeople();
const { specieUrl } = storeToRefs(store);

const {
  data: specie,
  pending,
  error,
  refresh,
} = await useLazyFetch(specieUrl, {
  method: "GET",
  watch: [specieUrl],
});
</script>

<style scoped>
.specie-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
}
</style>
