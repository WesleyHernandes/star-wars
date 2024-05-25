<template>
  <p class="info-container">
    <span class="label">{{ label }}</span>
    <span class="value">{{ value }}</span>
  </p>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "...",
  },
  value: {
    type: String,
    default: "...",
  },
});
</script>

<style scoped>
.info-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 29px;
}
.info-container .label {
  color: var(--highlight);
  font-size: 24px;
  font-weight: 500;
}
.info-container .value {
  color: var(--textLight);
  font-size: 32px;
  font-weight: 500;
}
</style>
