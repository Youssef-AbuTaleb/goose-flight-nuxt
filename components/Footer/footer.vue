<script setup lang="ts">
import GoogleStoreButton from "../GeneralComponents/google-store-button.vue";
import AppleStoreButton from "../GeneralComponents/apple-store-button.vue";

interface LinksData {
  title: string;
  links: Link[];
  extraButtons: Object[];
}

interface Link {
  name: string;
  href: string;
}
import Logo from "../GeneralComponents/logo.vue";
import FooterLinks from "./footer-links.vue";

const footerLinks = [
  {
    title: "About",
    links: [
      { name: "About GooseFlight", href: "#" },
      { name: "How it works", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Forum", href: "#" },
    ],
    extraButtons: null,
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Contact us", href: "#" },
      { name: "Privacy policy", href: "#" },
      { name: "Terms of service", href: "#" },
      { name: "Trust and safety", href: "#" },
      { name: "Accessibility", href: "#" },
    ],
    extraButtons: null,
  },
  {
    title: "Get the app",
    links: [
      { name: "Tripma for Android", href: "#" },
      { name: "Tripma for iOS", href: "#" },
      { name: "Mobile site", href: "#" },
    ],
    extraButtons: [GoogleStoreButton, AppleStoreButton],
  },
] as LinksData[];
</script>

<template>
  <footer class="footer">
    <Logo />
    <FooterLinks :links-data="footerLinks" />
  </footer>
</template>
