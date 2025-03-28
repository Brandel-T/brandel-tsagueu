<template>
  <div>
    <div class="mx-auto max-w-[55rem]">
      <header class="
        sticky top-0 min-h-16 mb-4 flex flex-col justify-center items-center gap-2
        md:flex-row md:justify-between container drop-shadow-2xl
      ">
        <Logo />
        <slot name="breadcrumbs" />
      </header>
      <main class="pb-20">
        <slot />
      </main>
    </div>
    <MyFooter />
  </div>
</template>
