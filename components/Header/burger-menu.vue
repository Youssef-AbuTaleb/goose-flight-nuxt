<template>
  <button class="burger-menu" @click="toggleMenu">
    <span class="burger-menu__line"></span>
    <span class="burger-menu__line"></span>
    <span class="burger-menu__line"></span>
  </button>
  <div class="burger-menu__nav" v-if="showMenu">
    <a href="#" class="link">{{ $t("header.signIn") }}</a>
    <a href="#" class="link">{{ $t("header.links.home") }}</a>
    <a href="#" class="link">{{ $t("header.links.promo") }}</a>
    <a href="#" class="link">{{ $t("header.links.booking") }}</a>
    <SwitchLanguageBtn />
  </div>
</template>

<script setup lang="ts">
import SwitchLanguageBtn from "./switch-language-btn.vue";
const showMenu = ref(false);
function toggleMenu() {
  showMenu.value = !showMenu.value;
}
</script>
