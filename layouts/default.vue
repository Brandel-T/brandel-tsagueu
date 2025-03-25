<template>
  <div>
    <NavBar />
    <main>
      <slot />
    </main>
    <MyFooter />
  </div>
</template>

<style scoped >
:deep(.e-badge) {
  width: 14rem;
  height: 14rem;
  background: var(--text-color-2);
}

:deep(.e-badge-icon) {
  padding: 2rem;
  height: 80%;
  width: 80%;
  background: none;
  border-radius: 0;
  margin-inline: auto;
}
</style>
