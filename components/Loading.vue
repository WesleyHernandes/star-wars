<template>
  <div
    className="loading"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      borderWidth: `${size / 10}px`,
      margin: `${centered ? '0 auto' : '0px'}`,
    }"
  />
</template>

<script setup>
defineProps({
  size: {
    type: Number,
    default: 24,
  },
  centered: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.loading {
  display: flex;
  border-radius: 100%;
  border: solid 1px var(--textMedium);
  border-right-color: var(--highlight);
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
</style>
