<template>
  <header class="z-10 drop-shadow-2xl">
    <div
      class="container md:bg-opacity-20 flex justify-between items-center h-16 relative"
    >
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
        class="md:hidden block z-10!"
        @click="toggleMenu"
      />
      <IconXmark v-else class="md:hidden block z-10!" @click="toggleMenu" />
    </div>
    <nav v-if="menuOpen" class="mobile-nav-menu z-1">
      <ul class="mobile-menu-list">
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
  </header>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: "NavBar",
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
});
</script>

<style scoped>
@reference "../assets/styles/tailwind.css";

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
}
.menu-item:hover {
  background: var(--bg-gradient);
}

a {
  display: block;
}

.mobile-nav-menu {
  @apply bg-primary h-auto py-4 shadow-md md:hidden block absolute left-0 top-16 w-full px-4;
}
.mobile-nav-menu .mobile-menu-list {
  @apply grid grid-cols-1 gap-2 divide-soft;
}
.mobile-nav-menu .mobile-menu-list .menu-item {
  @apply h-14 flex items-center px-4 bg-accent-soft;
}
.mobile-nav-menu .mobile-menu-list .menu-item a {
  @apply h-full w-full flex items-center;
}
</style>
