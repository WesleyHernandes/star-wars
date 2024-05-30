<template>
  <form class="field-container">
    <button type="button" class="btn-send">
      <Loading v-if="loading" />
      <IconSend v-else />
    </button>

    <input
      class="field"
      placeholder="Busque por pessoas, planetas, naves espaciais.."
      :value="query"
      @keyup="(e) => handleInput(e)"
    />

    <button type="button" class="btn-clear" @click="(e) => clearField(e)">
      <IconClear />
    </button>
  </form>
</template>

<script setup>
import IconSend from "./IconSend.vue";
import IconClear from "./IconClear.vue";
import Loading from "@/components/Loading.vue";
import { storeToRefs } from "pinia";
import { useSearch } from "@/store/search.ts";

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});

const store = useSearch();
const { query } = storeToRefs(store);
const { setQuery } = store;

let searchInterval;
const handleInput = (e) => {
  clearTimeout(searchInterval);
  searchInterval = setTimeout(() => setQuery(e.target.value), 600);
};

const clearField = () => setQuery("");

defineExpose({ handleInput, clearField });
</script>

<style scoped>
.field-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 16px;
  border: 1px solid #434343;
  background-color: #202020;
  border-radius: 8px;
}

.field-container .field {
  outline: none;
  display: flex;
  flex-grow: 1;
  padding: 16px 20px;
  border: none;
  background-color: none;
  color: var(--textMedium);
  font-size: 12px;
  border: none;
  background-color: transparent;
}

.field-container .btn-send,
.field-container .btn-clear {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
}
</style>
