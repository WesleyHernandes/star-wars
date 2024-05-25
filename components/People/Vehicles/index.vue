<template>
  <template v-if="vehiclesUrl">
    <Selection :current="current" :options="options" v-model="current" />

    <template
      v-for="(vehicle, index) in collection"
      :key="`people-vehicle-${index}`"
    >
      <div v-if="current?.url === vehicle.url" class="vehicles-container">
        <Info label="Modelo" :value="vehicle?.model" />
        <Info label="Manufaturador" :value="vehicle?.manufacturer" />
        <Info label="Valor em créditos" :value="vehicle?.cost_in_credits" />
        <Info label="Classe do veiculo" :value="vehicle?.vehicle_class" />
      </div>
    </template>
  </template>
  <NotFound v-else />
</template>

<script setup>
import Info from "@/components/People/Info.vue";
import NotFound from "@/components/People/NotFound/index.vue";
import Selection from "@/components/People/Selection/index.vue";
import { usePeople } from "@/store/people.ts";

const store = usePeople();
const { vehiclesUrl } = storeToRefs(store);
const current = ref();
const options = ref([]);

const {
  data: collection,
  pending,
  error,
  refresh,
} = await useLazyAsyncData(
  "people-vehicles",
  async () => {
    const request = await Promise.all(
      vehiclesUrl.value.map((url) => $fetch(url))
    );
    return request;
  },
  { watch: [vehiclesUrl] }
);

watchEffect(() => {
  if (collection.value?.length > 0) {
    options.value = collection.value.map((data) => ({
      label: data?.name,
      url: data?.url,
    }));
  }
});
</script>

<style scoped>
.vehicles-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  margin-top: 30px;
}
</style>
