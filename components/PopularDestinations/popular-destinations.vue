<template>
  <div class="dest">
    <h2 class="dest__title">Popular Destinations</h2>
    <h3 class="dest__subtitle">
      Vacations to make your experience enjoyable in Indonesia!
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

const destinations = [
  {
    imgSrc: destOneImg,
    location: "Manggarai Barat",
    title: "Flores Road Trip 3D2N",
    duration: "3 Days",
    price: "$375",
    alt: "destination 1",
  },
  {
    imgSrc: destTwoImg,
    location: "Bogor",
    title: "Forrester Glamping Co Bogor",
    duration: "1 Days",
    price: "$375",
    alt: "destination 2",
  },
  {
    imgSrc: destThreeImg,
    location: "Jakarta",
    title: "Paket Tiket Pesawat Jakarta Bali",
    duration: "",
    price: "$375",
    alt: "destination 3",
  },
  {
    imgSrc: destFourImg,
    location: "Kota Semarang",
    title: "Desa Wisata Kandri",
    duration: "14 Days",
    price: "$375",
    alt: "destination 4",
  },
];
</script>
