<script setup lang="ts">
import Footer from "~/components/Footer/footer.vue";
import Header from "~/components/Header/header.vue";

const { locale } = useI18n();
</script>

<template>
  <div :dir="locale === 'ar' ? 'rtl' : 'lts'">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>
