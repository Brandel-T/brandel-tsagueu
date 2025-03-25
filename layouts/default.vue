<template>
  <div>
    <NavBar />
    <main>
      <slot />
    </main>
    <MyFooter />
  </div>
</template>

<style scoped lang="scss">
:deep(.e-badge) {
  width: 14rem;
  height: 14rem;
  background: $text-color-2;

  .e-badge-icon {
    padding: 2rem;
    height: 80%;
    width: 80%;
    background: none;
    border-radius: 0;
    margin-inline: auto;
  }
}
</style>
