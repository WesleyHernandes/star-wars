<template>
  <div class="selection-container">
    <button type="button" class="selector" @click="() => (visible = !visible)">
      <span class="text">{{ current?.title || "..." }}</span>
      <div class="icon" :class="{ active: visible }">
        <Icon />
      </div>
    </button>
    <div class="options" :class="{ active: visible }">
      <button
        v-for="option in options"
        :key="option.url"
        type="button"
        class="option"
        :class="{ active: option.url === current?.url }"
        @click="() => setCurrent({ title: option.title, url: option.url })"
      >
        {{ option.title }}
      </button>
    </div>
  </div>
</template>

<script setup>
import Icon from "./Icon.vue";
import { onMounted, watchEffect } from "vue";

const props = defineProps({
  current: String,
  options: {
    type: Object,
    default: () => [],
  },
});

const current = defineModel();
const visible = ref(false);

const setCurrent = (payload) => {
  visible.value = false;
  current.value = payload;
};

watchEffect(() => {
  if (props.options?.length > 0 && !current.value) {
    const data = props.options[0];
    current.value = { title: data.title, url: data.url };
  }
});
</script>

<style scoped>
.selection-container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.selection-container .selector {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 24px;
  gap: 10px;
  border: none;
  border-bottom: solid 1px #a5a29a;
  background-color: transparent;
}
.selection-container .selector .text {
  max-width: calc(100% - 40px);
  color: var(--textLight);
  font-size: 24px;
}
.selection-container .selector .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  transition: all 0.3s ease-in-out;
}
.selection-container .selector .icon.active {
  transform: rotate(180deg);
}
.selection-container .options {
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 100%;
  left: 0px;
  border: 1px solid #a5a29a;
  background-color: #151515;
  pointer-events: none;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}
.selection-container .options.active {
  pointer-events: all;
  opacity: 100;
}
.selection-container .options .option {
  cursor: pointer;
  display: flex;
  padding: 14px 24px;
  color: var(--textMedium);
  font-size: 20px;
  border: none;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
}
.selection-container .options .option.active {
  color: #202020;
  background-color: #8d8d8d;
}
</style>
