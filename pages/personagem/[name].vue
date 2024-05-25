<template>
  <NuxtLayout name="with-background">
    <section class="people-container">
      <h2 class="title">Detalhes do personagem</h2>
      <h1 class="name">{{ people?.name || "..." }}</h1>

      <div class="slide-pagination"></div>

      <div class="slide-container">
        <button type="button" class="slide-button slide-button-prev">
          <IconPrev />
        </button>

        <Swiper
          :modules="[Navigation, Pagination]"
          :slides-per-view="1"
          :loop="true"
          :navigation="{
            nextEl: '.slide-button-next',
            prevEl: '.slide-button-prev',
          }"
          :pagination="{
            el: '.slide-pagination',
            clickable: true,
            renderBullet: (index, className) =>
              `<span class='${className}'>${slideOptions[index]}</span>`,
          }"
        >
          <SwiperSlide>
            <Board />
          </SwiperSlide>

          <SwiperSlide>
            <Board />
          </SwiperSlide>

          <SwiperSlide>
            <Board />
          </SwiperSlide>

          <SwiperSlide>
            <Board />
          </SwiperSlide>

          <SwiperSlide>
            <Board />
          </SwiperSlide>

          <SwiperSlide>
            <Board />
          </SwiperSlide>
        </Swiper>

        <button type="button" class="slide-button slide-button-next">
          <IconNext />
        </button>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
import Board from "@/components/People/Board/index.vue";
import IconPrev from "@/components/People/Board/IconPrev.vue";
import IconNext from "@/components/People/Board/IconNext.vue";

import { Navigation, Pagination } from "swiper/modules";
import { onBeforeUnmount } from "vue";
import { storeToRefs } from "pinia";
import { usePeople } from "@/store/people";

const store = usePeople();
const { people, reset } = storeToRefs(store);

definePageMeta({
  middleware: ["people-less"],
});

const slideOptions = [
  "Detalhes",
  "Filmes",
  "Espécie",
  "Veiculos",
  "Naves espaciais",
];

onBeforeUnmount(() => reset());
</script>

<style scoped>
.swiper {
  width: 100%;
}

.people-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 100px 64px;
}
.people-container .title {
  display: block;
  margin-bottom: 48px;
  color: var(--textLight);
  font-size: 32px;
  font-weight: 700;
  text-align: center;
}
.people-container .name {
  display: block;
  margin-bottom: 72px;
  color: var(--highlight);
  font-size: 72px;
  font-weight: 700;
  text-align: center;
}

.slide-pagination {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  gap: 32px;
  margin-bottom: 74px;
}
.swiper-pagination-bullet {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  padding: 12px 48px;
  border: 2px solid #a5a29a;
  border-radius: 50px;
  background-color: #000000;
  color: #a5a29a;
  font-size: 24px;
}
.swiper-pagination-bullet-active {
  color: #000000;
  background-color: #a5a29a;
}

.slide-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1035px;
  margin: 0 auto;
  gap: 14px;
}
.slide-container .swiper {
  width: 100%;
  max-width: 857px;
}
.slide-container .slide-button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 100%;
  background-color: #a5a29a;
}
</style>
