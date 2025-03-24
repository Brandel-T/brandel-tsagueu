<template>
  <div>
    <NavBar v-if="false" class="sticky top-0" />

    <div
      class="h-screen text-center align-middle flex flex-col gap-8 justify-center items-center"
    >
      <div class="text-xl">The site is currently undergoing maintenance.</div>
      <Badge icon-name="maintenance" theme="primary" />
    </div>

    <main v-if="false">
      <slot />
    </main>
    <MyFooter v-if="false" />
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
