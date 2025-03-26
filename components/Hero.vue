<template>
  <NuxtErrorBoundary>
    <section v-if="!pending && hero" class="hero container h-screen">
      <div
        class="w-full h-full my-auto grid grid-rows-1 grid-cols-12 justify-center items-center"
      >
        <div class="col-span-12 md:col-span-9 lg:col-span-8 xl:col-span-7">
          <div class="hero-description">
            <div class="body-text mb-4 text-center md:text-left font-light">
              Hey, I&apos;m
            </div>
            <div
              class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center md:text-left"
            >
              Brandel Tsagueu, student and
              <span class="highlight">Software Developer</span>
            </div>
            <div class="mt-6 text-center md:text-left">
              <p v-if="hero.intro" class="body-text font-light">
                {{
                  hero.intro ??
                  "I use code to build things for fun and on demand."
                }}.
              </p>
            </div>
          </div>
          <nav class="mt-10 flex gap-x-6 justify-center md:justify-start">
            <Anchor
              v-for="anchor in hero.anchor"
              :key="anchor.url"
              class="z-10! hero-link"
              :name="anchor.name"
              :type="anchor.type"
              :url="anchor.url"
            />
          </nav>
        </div>
        <div
          class="shapes-container animate-pulse -z-20 mx-auto items-stretch align-middle justify-self-center left-32 md:-left-12 w-60 h-60! -top-52! md:top-2! md:h-80! md:w-80! ld:h-96"
        >
          <div class="shape-1 left-16 top-20 -z-20 md:top-32 md:left-32"></div>
          <div class="shape-2 animate-pulse -z-20"></div>
        </div>
      </div>
    </section>

    <template #error="{ error }">
      <p>An error occured while loading Hero section</p>
      <p>{{ error }}</p>
    </template>
  </NuxtErrorBoundary>
</template>

<script lang="ts" setup>
const animationDuration = 2.5;
const { find } = useStrapi();

const hero = ref();

const { data, pending } = useAsyncData(async () => {
  return await find("hero-section", {
    fields: ["heading", "intro"],
    populate: {
      anchor: {
        populate: "*",
      },
    },
  }).then(({ data }) => data);
});

watch(
  data,
  (value) => {
    if (value) {
      hero.value = data.value;
    }
  },
  { immediate: true },
);
</script>

<style scoped>
.shapes-container {
  background-image: var(--bg-gradient);
  background-size: 100%;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  position: relative;
  top: -4rem;
  z-index: 2;
  opacity: 1;
  isolation: isolate;
}

.shapes-container .shape-1 {
  height: 100%;
  width: 100%;
  border-radius: 92% 8% 33% 67% / 76% 12% 88% 24%;
  position: relative;
  background-color: var(--accent-soft);
  z-index: -1;
  opacity: 0.5;
}

.shapes-container .shape-2 {
  height: 60%;
  width: 50%;
  outline: 1px solid var(--secondary);
  position: relative;
  top: -100%;
  left: -6rem;
  border-radius: 28% 72% 33% 67% / 76% 63% 37% 24%;
  z-index: -1;
}
</style>
