<script setup lang="ts">
import BookingInput from "./booking-input.vue";

import RadioButton from "./radio-button.vue";
import arrivalIcon from "../../assets/icons/arrival.svg";
import departureIcon from "../../assets/icons/departure.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import seatIcon from "../../assets/icons/seat.svg";

const inputsData = [
  {
    id: "departure",
    type: "text",
    icon: departureIcon,
    label: "From",
    placeholder: "Flight from?",
  },
  {
    id: "arrival",
    type: "text",
    icon: arrivalIcon,
    label: "To",
    placeholder: "Where to?",
  },
  {
    id: "depart-date",
    type: "date",
    icon: calendarIcon,
    label: "Depart",
    placeholder: "DD/MM/YYYY",
  },
  {
    id: "arrive-date",
    type: "date",
    icon: calendarIcon,
    label: "Return",
    placeholder: "DD/MM/YYYY",
  },
  {
    id: "class-travelers",
    type: "dropdown",
    icon: seatIcon,
    label: "Cabin Class & Travelers",
    placeholder: "",
  },
];
</script>

<template>
  <form class="booking" @submit.prevent>
    <div class="trip-radio">
      <RadioButton name="trip-type" id="one-way" label="One Way" />
      <RadioButton name="trip-type" id="two-way" label="Two Way" />
    </div>

    <div class="line" />

    <div class="trip-details">
      <BookingInput
        v-for="input in inputsData"
        :type="input.type"
        :icon="input.icon"
        :label="input.label"
        :placeholder="input.placeholder"
        :id="input.id"
      />

      <button class="button button-search">
        <img src="../../assets//icons/search.svg" alt="search icon" />
      </button>
    </div>
  </form>
</template>
