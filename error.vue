<template>
  <NuxtLayout>
    <div class="h-screen flex flex-col justify-center items-center">
      <h1 v-if="error" class="text-8xl">{{ error?.statusCode }}</h1>
      <div v-if="error" class="text-xl">{{ error?.message }}</div>
      <button class="btn btn-soft mt-10" @click="handleError">
        Back home
      </button>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const error = useError();
const handleError = () => clearError({ redirect: "/#" });
</script>
