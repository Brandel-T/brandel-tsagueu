<template>
  <Lenis>
    <div
      v-if="error"
      class="h-screen flex items-center justify-center text-2xl animate-pulse"
    >
      An error occured &#128549;
    </div>
    <div v-else-if="!loading" class="h-screen flex items-center justify-center">
      <Logo class="!text-lg" />
    </div>
    <div v-else class="app">
      <div>
        <NavBar
          class="fixed left-0 right-0 shadow-lg mx-auto !bg-transparent"
        />
      </div>
      <div
        class="hero-wrapper after:animate-pulse before:animate-pulse before:delay-200 before:duration-1000"
      >
        <Hero
          id="hero"
          :intro="hero.intro"
          :anchors="hero.anchors"
          class="z-1"
        />
      </div>
      <div class="scroll-trigger-container">
        <About
          id="about"
          class="-z-1 section"
          :interest="interests"
          :profile-image="profileImage"
          :about-me="aboutMe"
        />
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

      <a
        href="#hero"
        class="btn-to-top"
        data-aos="zoom-in"
        data-aos-once="false"
        data-aos-anchor="#about"
        data-aos-duration="1000"
      >
        <IconArrowUp class="!h-6 !w-6 sm:!h-8 sm:!w-8" />
      </a>
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

    const { hero, pending: heroLoading, error: heroError } = await useHero();

    const {
      aboutMe,
      interests,
      profileImage,
      pending: aboutLoading,
      error: aboutError,
    } = await useAbout(runtimeConfig);

    const {
      jobs,
      pending: jobLoading,
      error: jobsError,
    } = await useJobs<JobType>();

    const {
      projects,
      pending: projectsLoading,
      error: projectsError,
    } = await useProjects<ProjectType>(runtimeConfig);

    const {
      recent,
      stacks,
      pending: stackLoading,
      error: stackError,
    } = await useStack();

    const loading = computed(() => {
      return (
        heroLoading ||
        aboutLoading ||
        projectsLoading ||
        stackLoading ||
        jobLoading
      );
    });

    const error = computed(() => {
      return (
        heroError.value ||
        aboutError.value ||
        jobsError.value ||
        projectsError.value ||
        stackError.value
      );
    });

    return {
      hero,
      aboutMe,
      jobs,
      projects,
      recent,
      stacks,
      interests,
      profileImage,
      loading,
      error,
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

.btn-to-top {
  @apply fixed
  p-2 md:p-4
  bg-accent
  right-9 bottom-9
  rounded-xl 
  ease-in-out
  hover:bg-background
  hover:duration-700
  hover:transition-all
  hover:shadow-lg
  hover:bottom-12;
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
