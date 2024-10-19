<template>
  <div class="dest">
    <h2 class="dest__title">{{ $t("popularDest.title") }}</h2>
    <h3 class="dest__subtitle">
      {{ $t("popularDest.subTitle") }}
    </h3>
    <div class="dest__cards">
      <DestinationCard
        v-for="dest in destinations"
        :imgSrc="dest.imgSrc"
        :imgAlt="dest.alt"
        :location="dest.location"
        :duration="dest.duration"
        :price="dest.price"
        :title="dest.title"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import DestinationCard from "./destination-card.vue";
import destOneImg from "../../assets/imgs/dest-1.png";
import destTwoImg from "../../assets/imgs/dest-2.png";
import destThreeImg from "../../assets/imgs/dest-3.png";
import destFourImg from "../../assets/imgs/dest-4.png";

const { t } = useI18n();

const destinations = [
  {
    imgSrc: destOneImg,
    location: t("popularDest.destinations.destOne.location"),
    title: t("popularDest.destinations.destOne.title"),
    duration: t("popularDest.destinations.destOne.duration"),
    price: t("popularDest.destinations.destOne.price"),
    alt: "destination 1",
  },
  {
    imgSrc: destTwoImg,
    location: t("popularDest.destinations.destTwo.location"),
    title: t("popularDest.destinations.destTwo.title"),
    duration: t("popularDest.destinations.destTwo.duration"),
    price: t("popularDest.destinations.destTwo.price"),
    alt: "destination 2",
  },
  {
    imgSrc: destThreeImg,
    location: t("popularDest.destinations.destThree.location"),
    title: t("popularDest.destinations.destThree.title"),
    duration: t("popularDest.destinations.destThree.duration"),
    price: t("popularDest.destinations.destThree.price"),
    alt: "destination 3",
  },
  {
    imgSrc: destFourImg,
    location: t("popularDest.destinations.destFour.location"),
    title: t("popularDest.destinations.destFour.title"),
    duration: t("popularDest.destinations.destFour.duration"),
    price: t("popularDest.destinations.destFour.price"),
    alt: "destination 4",
  },
];
</script>
