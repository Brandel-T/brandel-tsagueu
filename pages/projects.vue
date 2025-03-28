<template>
  <div>
    <Projects class="section" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layoutTransition: true,
  pageTransition: true,
});

useSeoMeta({
  ogTitle: "Some of my work",
  title: "Some of my work",
  description: "Some of the projects I've worked on.",
  ogDescription: "Some of the projects I've worked on.",
  ogUrl: "https://www.brande-tsagueu.dev/projects",
})
</script>
