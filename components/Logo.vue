<template>
  <NuxtLink id="logo" class="logo" to="/#">
    <span class="logo-title">Brandel-T</span>
  </NuxtLink>
</template>

<style scoped>
.logo-title {
  font-family: Oregano, "JetBrains Mono", "Fira Code", "consolas", serif;
  font-size: 1.8rem;
  font-weight: 300;
  color: var(--text-color)
}
.logo:hover .logo-title {
  color: var(--primary);
}
</style>
