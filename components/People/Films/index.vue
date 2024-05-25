<template>
  <template v-if="filmsUrl">
    <Selection :current="current" :options="collection" v-model="current" />

    <template v-for="(film, index) in collection" :key="`people-film-${index}`">
      <div v-if="current?.url === film.url" class="films-container">
        <Info label="ID do episódio" :value="film?.episode_id" />
        <Info label="Diretor" :value="film?.director" />
        <Info label="Produtor" :value="film?.productor" />
        <Info label="Data de lançamento" :value="film?.release_date" />
      </div>
    </template>
  </template>
  <NotFound v-else />
</template>

<script setup>
import Info from "@/components/People/Info.vue";
import NotFound from "@/components/People/NotFound/index.vue";
import Selection from "@/components/People/Films/Selection/index.vue";
import { usePeople } from "@/store/people.ts";

const store = usePeople();
const { filmsUrl } = storeToRefs(store);
const current = ref();

const {
  data: collection,
  pending,
  error,
  refresh,
} = await useLazyAsyncData(
  "people-films",
  async () => {
    const request = await Promise.all(filmsUrl.value.map((url) => $fetch(url)));
    return request;
  },
  { watch: [filmsUrl] }
);
</script>

<style scoped>
.films-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  margin-top: 30px;
}
</style>
