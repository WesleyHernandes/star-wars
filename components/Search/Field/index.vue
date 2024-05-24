<template>
  <form class="field-container" @submit.prevent="$emit('onSearch')">
    <button type="submit" class="btn-send">
      <IconSend />
    </button>

    <input
      class="field"
      placeholder="Busque por pessoas, planetas, naves espaciais.."
      v-model="query"
    />

    <button type="button" class="btn-clear" @click="clearField">
      <IconClear />
    </button>
  </form>
</template>

<script setup>
import IconSend from "./IconSend.vue";
import IconClear from "./IconClear.vue";

defineEmits(["onSearch"]);

const query = defineModel({
  default: "",
});

const clearField = () => {
  query.value = "";
};
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
