<script lang="ts">
export default {
  setup() {
    const menuOpen = ref<boolean>(false);
    function toggleMenu() {
      menuOpen.value = !menuOpen.value;
    }
    return { menuOpen, toggleMenu };
  },
};
</script>

<template>
  <div class="z-1">
    <div class="container flex justify-between items-center h-16 relative">
      <div id="logo" class="logo">
        <a href="#hero">Brandel-T</a>
      </div>
      <nav class="hidden md:block">
        <ul class="flex gap-x-2 justify-end">
          <li class="menu-item">
            <a href="#about">About</a>
          </li>
          <li class="menu-item">
            <a href="#work">Work</a>
          </li>
          <li class="menu-item">
            <a href="#projects">Projects</a>
          </li>
          <li class="menu-item">
            <a href="#tech-stack">Tech Stack</a>
          </li>
          <li class="menu-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <IconMenu v-if="!menuOpen" class="md:hidden block" @click="toggleMenu" />
      <IconXmark v-else class="md:hidden block" @click="toggleMenu" />
      <nav
        v-if="menuOpen"
        class="bg-primary shadow-md md:hidden block absolute left-0 top-16 w-full px-4 z-1"
      >
        <ul class="grid grid-cols-1 divide-y divide-tertiary">
          <li class="menu-item">
            <a href="#about">About</a>
          </li>
          <li class="menu-item">
            <a href="#work">Work</a>
          </li>
          <li class="menu-item">
            <a href="#projects">Projects</a>
          </li>
          <li class="menu-item">
            <a href="#tech-stack">Tech Stack</a>
          </li>
          <li class="menu-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu-item {
  @apply py-3 px-4 sm:text-lg md:text-xl hover:text-secondary transition-all duration-500 ease-in-out;
}
.menu-item {
  display: block;
  &:hover {
    background: $bg-gradient;
  }
}

a {
  display: block;
}
</style>
