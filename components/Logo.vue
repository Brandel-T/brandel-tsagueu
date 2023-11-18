<template>
  <div id="logo" class="logo">
    <a href="#hero" class="flex items-center gap-1">
      <span class="bracket">${</span>
      <span class="logo-title">Brandel-T</span>
      <span class="bracket">}</span></a
    >
  </div>
</template>

<style scoped lang="scss">
.logo {
  @apply font-thin text-base sm:text-lg;
}
.bracket {
  @apply text-secondary font-normal text-lg md:text-2xl animate-pulse;
}
.logo-title {
  font-family: "JetBrains", "FiraCode", "consolas", serif;
  font-size: 1.4rem;
}
.logo:hover {
  .logo-title {
    color: $primary;
  }
  .bracket {
    color: $text-color;
  }
}
</style>
