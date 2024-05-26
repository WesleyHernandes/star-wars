<template>
  <div class="alert">
    <IconWarning v-if="type === 'warning'" />
    <IconDanger v-else-if="type === 'danger'" />
    <IconWarning v-else />
    <p class="text">{{ text }}</p>
  </div>
</template>

<script setup>
import IconWarning from "./IconWarning.vue";
import IconDanger from "./IconDanger.vue";

defineProps({
  type: {
    type: String,
    default: "warning",
  },
  text: {
    type: String,
    default: "...",
  },
});
</script>

<style scoped>
.alert {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
}
.alert .text {
  max-width: calc(100% - 24px);
  color: var(--textLight);
  font-size: 20px;
  font-weight: 500;
}
</style>
