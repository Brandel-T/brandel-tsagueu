<template>
  <Transition mode="in-out">
    <div>
      <About class="section" />
      <WorkExperience class="section" />
      <TechStack class="section" />
    </div>
  </Transition>
</template>

<script lang="ts" setup>
definePageMeta({
  layoutTransition: true,
  pageTransition: true,
});

const { find } = useStrapi();
const about = ref()

useSeoMeta({
  title: () => about.value?.title ?? 'About' + ' Brandel',
  ogTitle: () => about.value?.title ?? 'About' + ' Brandel',
  ogImage: "",
  ogImageAlt: "",
  description: "Get to know me",
  ogDescription: "Get to know me",
  ogUrl: "https://www.brande-tsagueu.dev/about",
})

const { data } = useAsyncData('about-page', async () => {
  return await find("about").then(({ data }) => {
    return data
  });
});

watch(data, (value) => {
  if (value) about.value = data.value
}, { immediate: true })
</script>
