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
  charset: "utf-8",
  title: "Brandel Tsagueu | B.Sc. Computer Science and Software Developer",
  ogSiteName: "Brandel Tsagueu | B.Sc. Computer Science and Software Developer",
  ogTitle: "Brandel Tsagueu",
  author: "Brandel Tsagueu",
  ogUrl: "https://brandel-tsagueu.dev/",
  ogImage: "/profil-1.jpeg",
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
