<template>
  <header class="drop-shadow-xl relative z-[2]">
    <div class="drawer drawer-end">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <div class="navbar w-full">
          <div class="w-full container flex justify-between items-center md:hidden">
            <Logo />
            <label for="my-drawer" aria-label="open sidebar" class="cursor-pointer">
              <Icon mode="svg" name="solar:hamburger-menu-broken" class="size-10" />
            </label>
          </div>
          <nav class="hidden md:flex md:justify-between container">
            <Logo />
            <ul class="flex gap-0 lg:gap-4 justify-end li-ctn">
              <li class="menu-item">
                <NuxtLink to="/about">About Me</NuxtLink>
              </li>
              <li class="menu-item">
                <NuxtLink to="/projects">Projects</NuxtLink>
              </li>
              <li class="menu-item">
                <NuxtLink to="/writings">Writings</NuxtLink>
              </li>
              <li class="menu-item">
                <NuxtLink to="/#contact">Contact</NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="drawer-side">
        <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="menu bg-dark/95 min-h-full w-80 p-4 justify-center h-screen">
          <li class="menu-item">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="menu-item">
            <NuxtLink to="/about">About Me</NuxtLink>
          </li>
          <li class="menu-item">
            <NuxtLink to="/projects">Projects</NuxtLink>
          </li>
            <li class="menu-item">
              <NuxtLink to="/writtings">Writtings</NuxtLink>
            </li>
          <li class="menu-item">
            <NuxtLink :to="{ path: '/', hash: '#contact' }">Contact</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
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
  @apply rounded-md sm:text-lg md:text-xl transition-all duration-500 ease-in-out;
}

.menu-item:hover a {
  color: var(--text-color);
}

.mobile-nav-menu {
  @apply h-auto py-4 shadow-md md:hidden block left-0 top-16 w-full px-4;
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

.router-link-exact-active {
  @apply text-white;
}
</style>
