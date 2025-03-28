<template>
  <div>
    <About class="section" />
    <WorkExperience class="section" />
    <TechStack class="section" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layoutTransition: true,
  pageTransition: true,
});

useSeoMeta({
  ogTitle: "About Brandel",
  title: "About Brandel",
  ogImage: "",
  ogImageAlt: "",
  description: "Get to know me",
  ogDescription: "Get to know me",
  ogUrl: "https://www.brande-tsagueu.dev/about",
})
</script>
