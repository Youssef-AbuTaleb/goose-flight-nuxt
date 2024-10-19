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

    <CustomDropdown
      v-if="type === 'dropdown'"
      icon="family"
      :options="[
        { label: $t('bookingForm.classOptions.economyOne'), value: '1' },
        { label: $t('bookingForm.classOptions.classTwo'), value: '2' },
        { label: $t('bookingForm.classOptions.economyTwo'), value: '3' },
      ]"
      :placeholder="$t('bookingForm.classOptions.economyOne')"
    />
  </div>
</template>

<script setup lang="ts">
import CustomDropdown from "./custom-dropdown.vue";

defineProps({
  id: { type: String, required: false },
  icon: { type: String, required: false },
  label: { type: String, required: true },
  type: { type: String, required: true },
  placeholder: { type: String, required: true },
});
</script>
