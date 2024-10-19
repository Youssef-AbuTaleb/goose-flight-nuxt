<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <div :dir="locale === 'ar' ? 'rtl' : 'lts'">
    <slot />
  </div>
</template>
