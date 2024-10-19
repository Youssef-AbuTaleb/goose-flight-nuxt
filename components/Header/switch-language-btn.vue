<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
  <a
    class="footer-links__link"
    v-for="locale in availableLocales"
    :href="switchLocalePath(locale.code)"
    >{{ locale.name }}</a
  >
</template>
