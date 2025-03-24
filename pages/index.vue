<template>
  <div>
    <div
      class="hero-wrapper after:animate-pulse before:animate-pulse before:delay-200 before:duration-1000"
    >
      <Hero id="hero" class="z-1" />
    </div>
    <div class="scroll-trigger-container">
      <About class="-z-1 section" />
      <WorkExperience class="section" />
      <Projects class="section" />
      <TechStack class="section" />
      <div class="bg-gradient section">
        <Contact />
      </div>
    </div>

    <a
      href="#"
      class="btn-to-top"
      data-aos="zoom-in"
      data-aos-once="false"
      data-aos-anchor="#about"
      data-aos-duration="1000"
    >
      <IconArrowUp class="!h-6 !w-6 sm:!h-8 sm:!w-8" />
    </a>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layoutTransition: true,
  pageTransition: true,
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
