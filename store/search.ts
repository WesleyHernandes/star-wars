import { defineStore } from "pinia";

export const useSearch = defineStore("search", {
  state: () => ({ query: "" }),
  getters: {},
  actions: {
    setQuery(payload: string) {
      this.query = payload;
    },
  },
});
