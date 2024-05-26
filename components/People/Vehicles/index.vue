<template>
  <Loading v-if="pending" :size="50" :centered="true" />
  <template v-else-if="vehiclesUrl && options?.length > 0">
    <Selection :options="options" v-model="current" />

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
  <Alert v-else text="Informações não encontradas" />

  <Alert v-if="error" type="danger" :text="error.message" />
</template>

<script setup>
import Info from "@/components/People/Info.vue";
import Alert from "@/components/Alert/index.vue";
import Selection from "@/components/People/Selection/index.vue";
import Loading from "@/components/Loading.vue";
import { watch } from "vue";
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

watch(collection, () => {
  options.value =
    collection.value?.length > 0
      ? (options.value = collection.value.map((data) => ({
          label: data?.name,
          url: data?.url,
        })))
      : [];
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
