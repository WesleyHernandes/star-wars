import { ref } from "vue";
import { defineStore } from "pinia";

export const usePeople = defineStore("people", () => {
  const people = ref({});

  const setPeople = (payload: string) => {
    people.value = payload;
  };

  const reset = () => {
    people.value = {};
  };

  return {
    people,
    setPeople,
    reset,
  };
});
