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

const { t } = useI18n();

const footerLinks = [
  {
    title: t("footer.links.about.title"),
    links: [
      { name: t("footer.links.about.about"), href: "#" },
      { name: t("footer.links.about.how"), href: "#" },
      { name: t("footer.links.about.blog"), href: "#" },
      { name: t("footer.links.about.forum"), href: "#" },
    ],
    extraButtons: null,
  },
  {
    title: t("footer.links.support.title"),
    links: [
      { name: t("footer.links.support.help"), href: "#" },
      { name: t("footer.links.support.contactUs"), href: "#" },
      { name: t("footer.links.support.privacyPolicy"), href: "#" },
      { name: t("footer.links.support.terms"), href: "#" },
      { name: t("footer.links.support.safety"), href: "#" },
      { name: t("footer.links.support.accessibility"), href: "#" },
    ],
    extraButtons: null,
  },
  {
    title: t("footer.links.getApp.title"),
    links: [
      { name: t("footer.links.getApp.android"), href: "#" },
      { name: t("footer.links.getApp.ios"), href: "#" },
      { name: t("footer.links.getApp.mobileSite"), href: "#" },
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
