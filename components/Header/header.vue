<script setup lang="ts">
import Logo from "../GeneralComponents/logo.vue";
import Navbar from "./navbar.vue";
import SignIn from "./sign-in.vue";
import SwitchLanguageBtn from "./switch-language-btn.vue";
import BurgerMenu from "./burger-menu.vue";
</script>

<template>
  <header class="header">
    <!--  -->
    <BurgerMenu />

    <Logo />

    <Navbar />
    <div class="header__actions">
      <SwitchLanguageBtn />
      <SignIn />
    </div>
  </header>
</template>
