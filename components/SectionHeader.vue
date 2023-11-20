<script lang="ts">
export default {
  props: {
    title: { type: String, required: true },
  },
};
</script>

<template>
  <header
    class="section-header -z-10"
    data-aos="fade-left"
    data-aos-easing="ease-in-out"
    data-aos-duration="800"
  >
    <h1 class="section-header__container">
      <span class="hashtag">#</span>
      <span class="section-title">{{ title }}</span>
    </h1>
  </header>
</template>
