<template>
  <div class="input">
    <div class="input__label-icon">
      <img :src="icon" :alt="label + ' icon'" />
      <label class="input__label">{{ label }}</label>
    </div>

    <input
      v-if="['text', 'date'].includes(type)"
      :type="type"
      :id="id"
      class="input__element"
      :placeholder="placeholder"
    />

    <BookingDropdown
      v-if="type === 'dropdown'"
      :options="[
        { label: '1 adult, Economy', value: '1' },
        { label: '2 adult, Class', value: '2' },
        { label: '2 adult, Economy', value: '3' },
      ]"
      placeholder="1 adult, Economy"
      @option-selected="(option) => console.log(option)"
    />
  </div>
</template>

<script setup lang="ts">
import BookingDropdown from "./booking-dropdown.vue";

defineProps({
  id: { type: String, required: false },
  icon: { type: String, required: false },
  label: { type: String, required: true },
  type: { type: String, required: true },
  placeholder: { type: String, required: true },
});
</script>
