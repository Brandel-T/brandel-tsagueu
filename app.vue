<template>
  <div>
    <NavBar class="sticky top-0" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <MyFooter />
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Brandel Tsagueu, Student and Software Developer",
  ogTitle: "Brandel Tsagueu",
  ogUrl: "https://brandel-tsagueu.dev",
  ogImage: useImage("profil-1.jpeg"),
  keywords:
    "Brandel Tsagueu, Brandel Tsagueu Temgoua Perez, Brandel-T, @Brandel-T, BrandelTsagueu",
  description:
    "Developer devoted to creating great web experiences focused on Vue/Nuxt, Angular, NestJS and Flutter based in Germany.",
  ogDescription:
    "Developer devoted to creating great web experiences focused on Vue/Nuxt, Angular, NestJS and Flutter based in Germany.",
  author: "Brandel Tsagueu",
  charset: "utf-8",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
});
</script>
