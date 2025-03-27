<template>
  <NuxtLayout>
    <div class="h-screen flex flex-col justify-center items-center">
      <h1 class="text-8xl">{{ error!.statusCode }}</h1>
      <div class="text-xl">{{ error!.message }}</div>

      <br />
      <button class="btn btn-soft" @click="handleError">
        Back home
      </button>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const error = useError();
const handleError = () => clearError({ redirect: "/#" });
</script>
