<template>
  <div class="dest-card">
    <img class="dest-card__img" height="180" :src="imgSrc" :alt="imgAlt" />
    <p class="dest-card__location">
      <img src="../../assets/icons/location.svg" alt="location icon" />
      <span>
        {{ location }}
      </span>
    </p>
    <p class="dest-card__title">{{ title }}</p>
    <p class="dest-card__duration" v-if="duration">{{ duration }}</p>
    <p class="dest-card__price">{{ price }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  imgSrc: { type: String, required: true },
  imgAlt: { type: String, required: true },
  location: { type: String, required: true },
  duration: { type: String, required: false },
  price: { type: String, required: true },
  title: { type: String, required: true },
});
</script>
