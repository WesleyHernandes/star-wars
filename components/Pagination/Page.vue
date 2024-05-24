<template>
  <NuxLink class="page-redirect" :class="{ active: active }">
    {{ label }}
  </NuxLink>
</template>

<script setup>
defineProps({
  label: String,
  active: Boolean,
});
</script>

<style scoped>
.page-redirect {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: var(--highlight);
  font-size: 14px;
  font-weight: 700;
  border: 1px solid var(--highlight);
}
.page-redirect.active {
  color: var(--textDark);
  background-color: var(--highlight);
}
.page-redirect:first-of-type {
  border-radius: 8px 0px 0px 8px;
}
.page-redirect:last-of-type {
  border-radius: 0px 8px 8px 0px;
}
</style>
