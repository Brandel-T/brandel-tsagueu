<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="h-30 w-full py-6 md:py-10 relative">
    <div class="logo w-fit mx-auto text-center">Brandel-T</div>
    <div class="h-fit py-10 text-center text align-middle px-4">
      Design and built with passion by
      <a href="#" class="highlight">Brandel Tsagueu</a>. All rights reserved
      &copy; {{ currentYear }}
    </div>
    <div class="h-2 bg-secondary absolute top-0 left-0 w-full"></div>
  </footer>
</template>

<style scoped lang="scss">
:deep(.logo) {
  position: relative;

  &::after,
  &::before {
    content: "";
    display: block;
    height: 1px;
    width: calc(100vw);
    background-color: $secondary;
    position: absolute;
    top: 50%;
  }
  &::before {
    right: 100%;
    margin-right: 1rem;
  }
  &::after {
    left: 100%;
    margin-left: 1rem;
  }
}
</style>
