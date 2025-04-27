<script lang="ts" setup>
defineProps({ title: String })
</script>

<template>
  <header
    class="section-header"
    data-aos="fade-left"
    data-aos-easing="ease-in-out"
    data-aos-duration="800"
  >
    <h1 class="h-fit relative capitalize flex gap-2 items-center justify-between mx-auto md:mx-0">
      <span class="bg-secondary h-[1px] w-24 max-w-full"></span>
      <span class="font-oregano text-lg md:text-2xl">{{ title }}</span>
      <span class="bg-secondary h-[1px] w-24 max-w-full"></span>
    </h1>
  </header>
</template>
