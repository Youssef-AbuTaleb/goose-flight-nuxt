<template>
  <div class="radio-group">
    <input type="radio" class="radio-input" :id="id" :name="name" />
    <label :for="id" class="radio-label">
      <span class="radio-button"></span>
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  label: { type: String, required: true },
});
</script>
