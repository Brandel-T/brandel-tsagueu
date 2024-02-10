<template>
  <Lenis>
    <!-- <div
      v-if="error"
      class="h-screen flex items-center justify-center text-2xl animate-pulse"
    >
      An error occurred &#128549;
    </div> -->
    <!-- <div
      v-if="error || loading"
      class="h-screen flex items-center justify-center"
    >
      <Logo class="!text-lg" />
    </div> -->
    <div v-if="loading" class="h-screen flex items-center justify-center">
      <Logo class="!text-lg" />
    </div>
    <div v-else>
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
          :interests="interests"
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

<script lang="ts" setup>
definePageMeta({
  layoutTransition: true,
  pageTransition: true,
});

const runtimeConfig = useRuntimeConfig();

const { hero, pending: heroLoading /*, error: heroError */ } = await useHero();

const {
  aboutMe,
  interests,
  profileImage,
  pending: aboutLoading,
  // error: aboutError,
} = await useAbout(runtimeConfig);

const {
  jobs,
  pending: jobLoading,
  // error: jobsError,
} = await useJobs<JobType>();

const {
  projects,
  pending: projectsLoading,
  // error: projectsError,
} = await useProjects<ProjectType>(runtimeConfig);

const {
  recent,
  stacks,
  pending: stackLoading,
  // error: stackError,
} = await useStack();

const loading = computed({
  get() {
    return (
      heroLoading ||
      aboutLoading.value ||
      projectsLoading.value ||
      stackLoading.value ||
      jobLoading.value
    );
  },
  set(newValue) {
    loading.value = newValue;
  },
});

// const error = computed({
//   get() {
//     return (
//       heroError.value ||
//       aboutError.value ||
//       jobsError.value ||
//       projectsError.value ||
//       stackError.value
//     );
//   },
//   set(newValue) {
//     error.value = newValue;
//   },
// });

// if (error.value) {
//   throw createError({
//     statusCode: 404,
//     statusMessage: "Ooops, an error occured :/",
//   });
// }

// watchEffect(() => {
//   useStore.error = error.value;
// });
watchEffect(() => {
  useStore.loading = loading.value;
});
</script>

<style lang="scss" scoped>
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
  top: 45%;
  border-radius: 50%;
  background-image: $bg-gradient;
  background-size: 200%;
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
