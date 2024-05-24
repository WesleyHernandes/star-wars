<template>
  <NuxtLayout name="with-background">
    <section class="people-container">
      <h2 class="title">Detalhes do personagem</h2>
      <h1 class="name">{{ people?.name || "..." }}</h1>

      <div class="slide-container">
        <button type="button" class="slide-button slide-button-prev">
          <IconPrev />
        </button>

        <Swiper
          :modules="[Navigation]"
          :slides-per-view="1"
          :loop="true"
          :navigation="{
            nextEl: '.slide-button-next',
            prevEl: '.slide-button-prev',
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

import { Navigation } from "swiper/modules";
import { onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import { usePeople } from "@/store/people";

const router = useRouter();
const store = usePeople();
const { people } = storeToRefs(store);

onBeforeMount(() => {
  if (Object.keys(people.value).length === 0) router.push("/");
});
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
