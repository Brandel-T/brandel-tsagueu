<template>
  <Transition mode="in-out">
    <div>
      <div class="hero-wrapper after:animate-pulse before:animate-pulse before:delay-200 before:duration-1000">
        <Hero id="hero" />
      </div>
      <div class="container pb-20" v-if="projects?.length">
        <h1 class="font-oregano font-italic text-2xl mb-8 md:mb-14">Work</h1>
        <div class="flex flex-wrap gap-2 md:gap-4 justify-center">
          <NuxtLink
            v-for="project in projects"
            :key="project.documentId"
            :to="project.url"
          >
            <div class="
              card image-full before:bg-dark-surface! before:opacity-55! w-96 max-h-60 shadow-sm
              hover:shadow-2xl hover:opacity-75! hover:relative hover:bottom-2
              transition-all ease-in-out duration-250
            ">
              <figure>
                <img :src="useRuntimeImage(project.assets[0].url)" :alt="project.assets[0].name" />
              </figure>
              <div class="card-body max-h-[65%] mt-auto mb-0">
                <h2 class="card-title">{{ project.title }}</h2>
                <p class="text-wrap truncate">
                  {{ project.description }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div class="ml-auto mr-0 mt-8">
          <NuxtLink to="/projects" class="cursor-pointer!">
            <button class="font-italic font-oregano underline">See all</button>
          </NuxtLink>
        </div>
      </div>
      <div class="bg-gradient section">
        <Contact />
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
definePageMeta({
  layoutTransition: true,
  pageTransition: true,
});

useSeoMeta({
  ogTitle: "Home page | Brandel Tsagueu",
  title: "Home page | Brandel Tsagueu",
  ogUrl: "https://www.brande-tsagueu.dev/",
  ogType: "website",
})

const { find } = useStrapi()
const { data: projects } = await useAsyncData('Projects', async () => {
  return await find('projects', { populate: '*' }).then(({ data }) => {
    return data
  })
})
</script>

<style scoped>
@reference "../assets/styles/tailwind.css";

.hero-wrapper {
  overflow: hidden;
}
.hero-wrapper::after {
  content: "";
  width: 10rem;
  height: 15rem;
  border: 2px solid var(--primary);
  position: absolute;
  left: 50%;
  top: 45%;
  border-radius: 50%;
  background-image: var(--bg-gradient);
  background-size: 200%;
  filter: blur(130px) brightness(200%) contrast(1);
  animation: bg-animation 10s infinite alternate;
  border-radius: 50% 50% 42% 58% / 53% 24% 76% 47%;
  overflow: hidden;
}
.hero-wrapper::before {
  content: "";
  width: 10rem;
  height: 5rem;
  border: 4rem solid var(--primary);
  position: absolute;
  left: -10%;
  top: 35%;
  border-radius: 50%;
  filter: blur(300px);
}

@keyframes bg-animation {
  0% {
    background-position: left;
    background-size: 150%;
    top: 25%;
  }
  50% {
    background-size: 200%;
  }
  100% {
    background-position: right;
    background-size: 120%;
    top: 50%;
  }
}
</style>
