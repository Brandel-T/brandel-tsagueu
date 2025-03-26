<template>
  <footer class="w-full">
    <div
      class="flex items-center justify-center gap-2 w-full relative -top-[1rem]!"
      data-aos="zoom-in-out"
      data-aos-duration="1000"
      data-aos-easing="ease-in-cubic"
    >
      <span class="flex-1 h-[1.3px] bg-tertiary"></span>
      <Logo />
      <span class="flex-1 h-[1.3px] bg-tertiary"></span>
    </div>
    <div class="h-fit pt-5 pb-10 text-center text body-text align-middle px-4">
      Design with
      <a href="https://www.figma.com/de/" class="highlight">Figma</a> and built
      with passion by <NuxtLink to="/#contact" class="highlight">me</NuxtLink>. All rights
      reserved &copy; {{ currentYear }}
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<style scoped>
@reference "~/assets/styles/tailwind.css";

:deep(.logo) .logo-title {
  @apply text-lg;
}
</style>
