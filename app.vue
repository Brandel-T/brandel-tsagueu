<template>
  <Lenis>
    <div class="app">
      <div>
        <NavBar
          class="fixed left-0 right-0 shadow-lg mx-auto !bg-transparent"
        />
      </div>
      <div
        class="hero-wrapper after:animate-pulse before:animate-pulse before:delay-200 before:duration-1000"
      >
        <Hero id="hero" :intro="hero" class="z-1" />
      </div>
      <div class="scroll-trigger-container">
        <About id="about" class="-z-1 section" />
        <WorkExperience id="work" class="section" :jobs="jobs" />
        <Projects id="projects" class="section" :projects="projects" />
        <TechStack
          id="tech-stack"
          class="section"
          :items="stacks"
          :recent-technologies="recent"
        />
        <div class="bg-gradient section">
          <Contact id="contact" />
        </div>
      </div>
      <MyFooter />
    </div>
  </Lenis>
</template>

<script lang="ts">
export default defineNuxtComponent({
  async setup() {
    useSeoMeta({
      title: "Brandel Tsagueu, Student and Software Developer",
      ogTitle: "Brandel Tsagueu, Student and Software Developer",
      description:
        "Developer devoted to creating great web experiences focused on Vue/Nuxt, Angular, NestJS and Flutter based in Germany.",
      ogDescription:
        "Developer devoted to creating great web experiences focused on Vue/Nuxt, Angular, NestJS and Flutter based in Germany.",
      author: "Brandel Tsagueu",
    });

    const runtimeConfig = useRuntimeConfig();

    const hero = ref("");

    const { find } = useStrapi();
    useAsyncData(() => find<any>("heroes")).then(({ data }) => {
      hero.value = data.value?.data[0].attributes.intro ?? "";
    });

    const { jobs } = await useJobs<JobType>();

    const { projects } = await useProjects<ProjectType>(runtimeConfig);

    const { recent, stacks } = await useStack();

    return {
      jobs,
      projects,
      hero,
      recent,
      stacks,
    };
  },
});
</script>

<style lang="scss" scoped>
.app {
  overflow: hidden;
}
.hero-wrapper {
  overflow: hidden;
}
.hero-wrapper::after {
  content: "";
  width: 10rem;
  height: 15rem;
  border: 2px solid $primary;
  position: absolute;
  left: 50%;
  // top: -45%;
  top: 45%;
  border-radius: 50%;
  background-image: $bg-gradient;
  background-size: 200%;
  // filter: blur(400px);
  filter: blur(130px) brightness(200%) contrast(1);
  z-index: -1;
  animation: bg-animation 10s infinite alternate;
  border-radius: 50% 50% 42% 58% / 53% 24% 76% 47%;
  overflow: hidden;
}
.hero-wrapper::before {
  content: "";
  width: 10rem;
  height: 5rem;
  border: 4rem solid $primary;
  position: absolute;
  left: -10%;
  top: 35%;
  border-radius: 50%;
  filter: blur(300px);
  z-index: -1;
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
