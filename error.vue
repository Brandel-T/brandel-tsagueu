<template>
  <NuxtLayout>
    <div class="h-screen flex flex-col justify-center items-center">
      <h1>{{ error.statusCode }}</h1>
      <div>Page not found: {{ error.url }}</div>

      <button class="px-4 px-2 rounded-sm bg-tertiary" @click="goBack">
        Back home
      </button>
    </div>
  </NuxtLayout>
</template>

<script setup>
const router = useRouter();
const error = useError();
async function goBack() {
  router.push({ path: "/", hash: "#hero" });
  await refreshNuxtData();
}
</script>
