<script lang="ts" setup>
const { t } = useI18n();

const activeIndex = 0;
const links = [
  {
    label: t("header.links.home"),
    href: "#",
  },
  {
    label: t("header.links.promo"),
    href: "#",
  },
  {
    label: t("header.links.booking"),
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
