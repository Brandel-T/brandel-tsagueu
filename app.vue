<template>
  <div>
    <!-- <NavBar v-if="!useStore.error && !useStore.loading" class="sticky top-0" /> -->
    <NavBar v-if="!useStore.loading" class="sticky top-0" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- <MyFooter v-if="!useStore.error && !useStore.loading" /> -->
    <MyFooter v-if="!useStore.loading" />
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  charset: "utf-8",
  title: "Brandel Tsagueu",
  ogTitle: "Brandel Tsagueu | B.Sc. Computer Science and Software Developer",
  author: "Brandel Tsagueu",
  ogUrl: "https://brandel-tsagueu.dev/",
  ogImage: "https://brandel-tsagueu.dev/profil-1.jpeg",
  ogSiteName: "Brandel Tsagueu",
  ogType: "website",
  ogLocale: "en_UK",
  keywords:
    "Brandel Tsagueu, Brandel Tsagueu Temgoua Perez, Brandel-T, @Brandel-T, BrandelTsagueu",
  description:
    "Developer devoted to creating great web experiences focused on Vue/Nuxt, Angular, NestJS and Flutter based in Germany.",
  ogDescription:
    "Developer devoted to creating great web experiences focused on Vue/Nuxt, Angular, NestJS and Flutter based in Germany.",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    {
      name: "google-site-verification",
      content: "z5JTCdi2mTb686PlXj8x7qj-0LuF7dzqayk4je3FdGc",
    },
  ],
});
</script>
