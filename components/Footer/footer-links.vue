<template>
  <div class="footer-links__container">
    <div class="footer-links__col" v-for="col in linksData">
      <div class="footer-links__links">
        <p class="footer-links__title">{{ col.title }}</p>
        <a
          :href="link.href"
          v-for="link in col.links"
          class="footer-links__link link"
          >{{ link.name }}</a
        >
        <div v-if="col.extraButtons" class="stores-btns">
          <component v-for="btn in col.extraButtons" :is="btn" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface LinksData {
  title: string;
  links: Link[];
  extraButtons: Object[];
}

interface Link {
  name: string;
  href: string;
}
defineProps<{ linksData: LinksData[] }>();
</script>
