import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { type IPeople } from "@/Interfaces/IPeople";

export const usePeople = defineStore("people", () => {
  const people = ref<IPeople | null>(null);

  const setPeople = (payload: IPeople) => {
    people.value = payload;
  };

  const reset = () => {
    people.value = null;
  };

  const specieUrl = computed(() => people.value?.species[0]);
  const filmsUrl = computed(() => people.value?.films);
  const vehiclesUrl = computed(() => people.value?.vehicles);

  return {
    people,
    setPeople,
    specieUrl,
    filmsUrl,
    vehiclesUrl,
    reset,
  };
});
