<template>
  <article class="card-container" @click="() => handlePeople(people)">
    <button type="button" class="redirect">
      <h3 class="name">{{ people?.name || "..." }}</h3>
      <p class="text">Altura: {{ people?.height || "..." }}cm</p>
      <p class="text">Peso: {{ people?.mass || "..." }}</p>
      <span class="more">Ver todos os detalhes</span>
    </button>
  </article>
</template>

<script setup>
import { usePeople } from "@/store/people.ts";
import { formatToUrl } from "@/utils/index.ts";

defineProps({
  people: {
    type: Object,
    default: () => {},
  },
});

const router = useRouter();
const store = usePeople();
const { setPeople } = store;

const handlePeople = (people) => {
  setPeople(people);
  router.push(`/personagem/${formatToUrl(people.name)}`);
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: solid 1px #ffffff;
  border-radius: 8px;
  background-color: #000000;
}
.card-container .redirect {
  cursor: pointer;
  outline: 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 25px;
  text-decoration: none;
  border: none;
  background-color: transparent;
}
@media (min-width: 576px) {
  .card-container .redirect {
    padding: 40px 55px;
  }
}
.card-container .redirect .name {
  color: var(--textLight);
  font-size: 24px;
  margin-bottom: 8px;
}
.card-container .redirect .text {
  color: var(--textMedium);
  font-size: 16px;
}
.card-container .redirect .more {
  color: var(--highlight);
  font-size: 16px;
  text-decoration: underline;
  margin-top: 8px;
}
</style>
