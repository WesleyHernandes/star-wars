import { defineStore } from "pinia";

export const usePeople = defineStore("people", {
  state: () => ({ people: {} }),
  getters: {},
  actions: {
    setPeople(payload: string) {
      this.people = payload;
    },
    reset() {
      this.people = {};
    },
  },
});
