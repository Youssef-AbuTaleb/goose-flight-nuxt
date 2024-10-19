<script setup lang="ts">
import RadioButton from "./radio-button.vue";
</script>

<template>
  <form class="booking">
    <div class="trip-radio">
      <RadioButton name="trip-type" id="one-way" label="One Way" />
      <RadioButton name="trip-type" id="two-way" label="Two Way" />
    </div>

    <hr class="line" />
  </form>
</template>
