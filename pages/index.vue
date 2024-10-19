<script setup lang="ts">
import BookingSection from "~/components/BookingSection/booking-section.vue";
import Hero from "~/components/Hero/Hero.vue";
import PopularDestinations from "~/components/PopularDestinations/popular-destinations.vue";

// const { locale, setLocale } = useI18n();
</script>

<template>
  <main class="main">
    <Hero />
    <BookingSection />
    <PopularDestinations />
  </main>
</template>
