<template>
  <footer class="h-30 w-full pb-6 md:pb-10">
    <div
      class="flex items-center justify-center gap-2 w-full relative !-top-[1rem]"
      data-aos="zoom-in-out"
      data-aos-duration="1000"
      data-aos-easing="ease-in-cubic"
    >
      <span class="flex-1 h-2 bg-tertiary"></span>
      <Logo />
      <span class="flex-1 h-2 bg-tertiary"></span>
    </div>
    <div class="h-fit py-10 text-center text body-text align-middle px-4">
      Design and built with passion by
      <a href="#contact" class="highlight">Brandel Tsagueu</a>. All rights
      reserved &copy; {{ currentYear }}
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
