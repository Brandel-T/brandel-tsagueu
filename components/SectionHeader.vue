<script lang="ts" setup>
defineProps({
  title: String,
})
</script>

<template>
  <header
    class="section-header"
    data-aos="fade-left"
    data-aos-easing="ease-in-out"
    data-aos-duration="800"
  >
    <h1 class="section-header__container">
      <span class="text">{{ title }}</span>
    </h1>
  </header>
</template>

<style scoped>
.text {
  font-family: "Oregano";
  font-size: 2rem;
  color: var(--text-color-3);
}
</style>
