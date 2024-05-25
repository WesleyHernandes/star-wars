import { ref } from "vue";
import { defineStore } from "pinia";

export const useSearch = defineStore("search", () => {
  const query = ref("");

  const setQuery = (payload: string) => {
    query.value = payload;
  };

  return {
    query,
    setQuery,
  };
});
