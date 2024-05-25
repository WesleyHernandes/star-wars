<template>
  <NuxtLayout name="with-background">
    <section class="people-container">
      <h2 class="title">Detalhes do personagem</h2>
      <h1 class="name">{{ people?.name || "..." }}</h1>

      <Slide />

      <div class="back-container">
        <button type="button" class="back" @click="$router.back()">
          Voltar aos outros personagens
        </button>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
import Slide from "@/components/People/Slide/index.vue";
import { onBeforeUnmount } from "vue";
import { usePeople } from "@/store/people";

const store = usePeople();
const { people, reset } = store;

definePageMeta({
  middleware: ["people-less"],
});

onBeforeUnmount(() => reset());
</script>

<style scoped>
.people-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 16px;
}
.people-container .title {
  display: block;
  margin-bottom: 28px;
  color: var(--textLight);
  font-size: 25px;
  font-weight: 700;
  text-align: center;
}
.people-container .name {
  display: block;
  margin-bottom: 50px;
  color: var(--highlight);
  font-size: 50px;
  font-weight: 700;
  text-align: center;
}
.people-container .back-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1207px;
  margin: 0 auto;
}
.people-container .back-container .back {
  outline: 0px;
  cursor: pointer;
  display: flex;
  margin-top: 50px;
  border: none;
  color: var(--highlight);
  font-size: 16px;
  text-decoration: underline;
  background-color: transparent;
}
@media (min-width: 1280px) {
  .people-container {
    padding: 100px 64px;
  }
}
@media (min-width: 1024px) {
  .people-container {
    padding: 100px 16px;
  }
  .people-container .title {
    font-size: 32px;
    margin-bottom: 48px;
  }
  .people-container .name {
    font-size: 72px;
    margin-bottom: 72px;
  }
  .people-container .back {
    margin-top: 119px;
  }
}
</style>
