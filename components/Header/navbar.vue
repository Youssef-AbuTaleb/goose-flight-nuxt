<script lang="ts" setup>
const activeIndex = 0;
const links = [
  {
    label: "home",
    href: "#",
  },
  {
    label: "promo",
    href: "#",
  },
  {
    label: "my booking",
    href: "#",
  },
];
</script>

<template>
  <nav class="nav">
    <a
      v-for="(link, index) in links"
      :href="link.href"
      class="link"
      :class="{ active: index === activeIndex }"
      >{{ link.label }}</a
    >
  </nav>
</template>
