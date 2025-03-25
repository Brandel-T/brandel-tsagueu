<template>
  <a id="logo" class="logo" href="#">
    <span href="#hero" class="flex items-center gap-1">
      <span class="bracket">${</span>
      <span class="logo-title">Brandel-T</span>
      <span class="bracket">}</span></span
    >
  </a>
</template>

<style scoped>
@reference "../assets/styles/tailwind.css";

.logo {
  @apply font-thin text-base sm:text-lg cursor-pointer min-w-max;
}
.bracket {
  @apply text-secondary font-normal text-lg md:text-2xl animate-pulse;
}
.logo-title {
  font-family: "JetBrains Mono", "Fira Code", "consolas", serif;
  font-size: 1.4rem;
}

.logo:hover .logo-title {
  color: var(--primary);
}
.logo:hover .bracket {
  color: var(--text-color);
}
</style>
