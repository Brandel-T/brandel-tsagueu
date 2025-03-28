<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />

      <a
        href="#"
        class="btn-to-top"
        data-aos="zoom-in"
        data-aos-once="false"
        data-aos-anchor="#about"
        data-aos-duration="1000"
      >
        <IconArrowUp class="size-4 sm:size-6" />
      </a>
    </NuxtLayout>
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
  ogLocale: "en_US",
  ogLocaleAlternate: ["fr_FR", "DE"],
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

<style scoped>
@reference "~/assets/styles/tailwind.css";

.btn-to-top {
  @apply fixed p-1 md:p-2 bg-accent-soft right-9 bottom-9 rounded-xl ease-in-out
   hover:bg-accent-soft/25 hover:duration-700 hover:transition-all hover:shadow-lg hover:bottom-12;
}
</style>
