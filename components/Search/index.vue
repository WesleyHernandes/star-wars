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

      <div v-if="results.length > 0" class="results">
        <Card
          v-for="(people, index) in results"
          :key="`card-people-${index}`"
          :people="people"
        />
      </div>

      <template v-if="notFoundVisible">
        <NotFound :query="query" />
      </template>

      <!-- OBS.: A API no momento não fornece a opção para setar limite nas requisições, 
        assim não foi possivel criar a paginação dos resultados, porém o componente foi construido -->
      <!-- <Pagination /> -->
    </div>
  </section>
</template>

<script setup>
import Card from "./Card.vue";
import Field from "./Field/index.vue";
import Pagination from "../Pagination/index.vue";
import NotFound from "./NotFound.vue";
import { ref, watch, computed } from "vue";
import { storeToRefs } from "pinia";
import { useSearch } from "@/store/search";

const store = useSearch();
const { query } = storeToRefs(store);

const notFoundVisible = ref(false);

const endpoint = computed(() =>
  query.value ? `https://swapi.dev/api/people/?search=${query.value}` : ""
);
const results = computed(() => data.value?.results || []);

const { data, pending, error, refresh } = await useLazyFetch(endpoint, {
  method: "GET",
  watch: [endpoint],
});

watch(query.value, () => {
  data.value.results = [];
  notFoundVisible.value = false;
});
</script>

<style scoped>
.search-container {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
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
  gap: 70px;
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
  .search-content .text .title {
    font-size: 32px;
  }
  .search-content .text .subtitle {
    font-size: 24px;
  }
}
.search-content .results {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  max-width: 986px;
  gap: 24px;
  margin: 0 auto;
}
@media (min-width: 768px) {
  .search-content .results {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .search-content .results {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
