<script lang="ts">
export default {
    props: {
        title: {type: String, required: true}
    }
}
</script>

<template>
<div class="section-header">
  <div class="section-header__container">
      <span class="hashtag">#</span>
      <span class="section-title">{{ title }}</span>
  </div>
</div>
</template>

<style scoped lang="scss">
</style>