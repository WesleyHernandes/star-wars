<template>
  <div class="slide-pagination" />

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
          `<span class='${className}'>${slideOptions[index] || '...'}</span>`,
      }"
    >
      <SwiperSlide>
        <Board>
          <Detail />
        </Board>
      </SwiperSlide>

      <SwiperSlide>
        <Board>
          <Films />
        </Board>
      </SwiperSlide>

      <SwiperSlide>
        <Board>
          <Specie />
        </Board>
      </SwiperSlide>

      <SwiperSlide>
        <Board>
          <Vehicles />
        </Board>
      </SwiperSlide>

      <SwiperSlide>
        <Board>
          <Starships />
        </Board>
      </SwiperSlide>
    </Swiper>

    <button type="button" class="slide-button slide-button-next">
      <IconNext />
    </button>
  </div>
</template>

<script setup>
import IconPrev from "@/components/People/Board/IconPrev.vue";
import IconNext from "@/components/People/Board/IconNext.vue";
import Board from "@/components/People/Board/index.vue";
import Detail from "@/components/People/Detail/index.vue";
import Films from "@/components/People/Films/index.vue";
import Specie from "@/components/People/Specie/index.vue";
import Vehicles from "@/components/People/Vehicles/index.vue";
import Starships from "@/components/People/Starships/index.vue";
import { Navigation, Pagination } from "swiper/modules";

const slideOptions = [
  "Detalhes",
  "Filmes",
  "Espécie",
  "Veiculos",
  "Naves espaciais",
];
</script>

<style>
.swiper-pagination-bullet {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  padding: 12px 25px;
  border: 2px solid #a5a29a;
  border-radius: 50px;
  background-color: #000000;
  color: #a5a29a;
  font-size: 20px;
  transition: all 0.3s ease-in-out;
}
.swiper-pagination-bullet-active {
  color: #000000;
  background-color: #a5a29a;
}
@media (min-width: 1024px) {
  .swiper-pagination-bullet {
    font-size: 24px;
    padding: 12px 48px;
  }
}
</style>

<style scoped>
.slide-pagination {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  gap: 10px;
  margin-bottom: 50px;
}
@media (min-width: 1024px) {
  .slide-pagination {
    gap: 32px;
    margin-bottom: 74px;
  }
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
  display: none;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 100%;
  background-color: #a5a29a;
}
@media (min-width: 1280px) {
  .slide-container .slide-button {
    display: flex;
  }
}
</style>
