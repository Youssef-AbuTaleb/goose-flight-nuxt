<script setup lang="ts">
import BookingInput from "./booking-input.vue";

import RadioButton from "./radio-button.vue";
import arrivalIcon from "../../assets/icons/arrival.svg";
import departureIcon from "../../assets/icons/departure.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import seatIcon from "../../assets/icons/seat.svg";
import CustomDropdown from "./custom-dropdown.vue";

const { t } = useI18n();

const inputsData = [
  {
    id: "departure",
    type: "text",
    icon: departureIcon,
    label: t("bookingForm.from"),
    placeholder: t("bookingForm.fromPlaceholder"),
  },
  {
    id: "arrival",
    type: "text",
    icon: arrivalIcon,
    label: t("bookingForm.to"),
    placeholder: t("bookingForm.toPlaceholder"),
  },
  {
    id: "depart-date",
    type: "date",
    icon: calendarIcon,
    label: t("bookingForm.depart"),
    placeholder: "DD/MM/YYYY",
  },
  {
    id: "arrive-date",
    type: "date",
    icon: calendarIcon,
    label: t("bookingForm.return"),
    placeholder: "DD/MM/YYYY",
  },
  {
    id: "class-travelers",
    type: "dropdown",
    icon: seatIcon,
    label: t("bookingForm.class"),
    placeholder: "",
  },
];
</script>

<template>
  <form class="booking" @submit.prevent>
    <div class="trip-radio">
      <RadioButton
        name="trip-type"
        id="one-way"
        :label="$t('bookingForm.oneWay')"
      />
      <RadioButton
        name="trip-type"
        id="two-way"
        :label="$t('bookingForm.roundTrip')"
      />
    </div>
    <div class="trip-dropdown">
      <CustomDropdown
        :options="[
          { label: $t('bookingForm.oneWay'), value: '1' },
          { label: $t('bookingForm.roundTrip'), value: '2' },
        ]"
        :placeholder="$t('bookingForm.oneWay')"
      />
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
        <img src="../../assets/icons/search.svg" alt="search icon" />
        <span class="button-search__text-mobile">Search</span>
      </button>
    </div>
  </form>
</template>
