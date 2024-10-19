<template>
  <div class="custom-dropdown" @click="toggleDropdown" @blur="closeDropdown">
    <div class="selected-option">
      {{ selectedOption ? selectedOption.label : placeholder }}
      <span class="arrow" :class="{ 'arrow-up': isOpen }">▼</span>
    </div>
    <ul v-if="isOpen" class="options-list">
      <li
        v-for="option in options"
        :key="option.value"
        style="display: flex; gap: 8px"
        @click="selectOption(option)"
        :class="{ selected: option.value === selectedOption?.value }"
      >
        <img src="../../assets/icons/family.svg" alt="family icon" />
        <span>
          {{ option.label }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CustomDropdown",
  props: {
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: "Select an option",
    },
  },
  data() {
    return {
      isOpen: false,
      selectedOption: null,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown() {
      this.isOpen = false;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
      this.$emit("option-selected", option);
    },
  },
};
</script>
