<script lang="ts">
export default {
  setup() {
    const menuOpen = ref<boolean>(false);
    function toggleMenu() {
      menuOpen.value = !menuOpen.value;
    }

    function highlightLinksOnScroll() {
      const sections = document.querySelectorAll("section.page-section");
      const navLinks = document.querySelectorAll(".menu-item");
      window.onscroll = () => {
        let current: string = "";
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 80) {
            current = section.getAttribute("id"); /*  ?? '' */
          }
        });
        navLinks.forEach((li) => {
          const link = li
            .firstElementChild!.getAttribute("href")!
            .replace("#", "");
          li.classList.remove("active-nav-link");
          if (link == current) {
            li.classList.add("active-nav-link");
          }
        });
      };
    }

    onMounted(() => {
      highlightLinksOnScroll();
    });

    return { menuOpen, toggleMenu };
  },
};
</script>

<template>
  <div class="z-10 backdrop-blur-xl shadow-xl">
    <div class="container flex justify-between items-center h-16 relative">
      <Logo />
      <nav class="hidden md:block">
        <ul class="flex gap-0 lg:gap-4 justify-end li-ctn">
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

      <IconMenu
        v-if="!menuOpen"
        class="md:hidden block !z-10"
        @click="toggleMenu"
      />
      <IconXmark v-else class="md:hidden block !z-10" @click="toggleMenu" />
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
.li-ctn > .menu-item {
  @apply h-full flex justify-center items-center;
}
.li-ctn > .menu-item a {
  @apply w-fit h-full py-2 px-4;
}

.menu-item {
  @apply rounded-md
    sm:text-lg md:text-xl
    hover:text-secondary
    transition-all duration-500 ease-in-out;
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
