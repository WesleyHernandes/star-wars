<template>
  <Loading v-if="pending" :size="50" :centered="true" />
  <template v-else-if="filmsUrl && options?.length > 0">
    <Selection :options="options" v-model="current" />

    <template v-for="(film, index) in collection" :key="`people-film-${index}`">
      <div v-if="current?.url === film.url" class="films-container">
        <Info label="ID do episódio" :value="film?.episode_id" />
        <Info label="Diretor" :value="film?.director" />
        <Info label="Produtor" :value="film?.producer" />
        <Info label="Data de lançamento" :value="film?.release_date" />
      </div>
    </template>
  </template>
  <Alert v-else text="Informações não encontradas" />

  <Alert v-if="error" type="danger" :text="error.message" />
</template>

<script setup>
import Info from "@/components/People/Info.vue";
import Alert from "@/components/Alert/index.vue";
import Selection from "@/components/People/Selection/index.vue";
import Loading from "@/components/Loading.vue";
import { watch } from "vue";
import { usePeople } from "@/store/people.ts";

const store = usePeople();
const { filmsUrl } = storeToRefs(store);
const current = ref();
const options = ref([]);

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

watch(collection, () => {
  options.value =
    collection.value?.length > 0
      ? (options.value = collection.value.map((data) => ({
          label: data?.title,
          url: data?.url,
        })))
      : [];
});
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
