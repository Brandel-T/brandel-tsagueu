<script lang="ts">
import gsap from "gsap";

export default defineNuxtComponent({
  name: "Hero",
  props: {
    intro: { type: String, required: false, default: "" },
    anchors: { type: Array<any>, required: false, default: [] },
  },
  setup() {
    const animationDuration = 2.5;

    onBeforeMount(() => {
      gsap.fromTo(
        ".hero-description",
        {
          x: -100,
          opacity: 0,
          ease: "power4.inOut",
        },
        {
          x: 0,
          opacity: 1,
          duration: animationDuration,
          ease: "power4.inOut",
        },
      );

      document.querySelectorAll(".hero-link").forEach((anchor, index) => {
        gsap.fromTo(
          ".hero-link",
          {
            x: -100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            stagger: 0.2 * index,
            ease: "power4.inOut",
            duration: animationDuration,
            delay: 0.5,
          },
        );
      });

      gsap.from(".shapes-container", {
        opacity: 0,
        y: 150,
        duration: animationDuration,
        ease: "back.inOut",
      });

      document
        .querySelectorAll(".shapes-container > div")
        .forEach((item, index) => {
          gsap.fromTo(
            item,
            {
              x: 100,
              opacity: 0,
              stagger: 0.2 * index,
            },
            {
              x: 0,
              opacity: 1,
              stagger: 0.5 * index,
              ease: "power4.inOut",
              duration: animationDuration,
              delay: 0.5,
            },
          );
        });
    });
  },
});
</script>

<template>
  <div class="hero container h-screen">
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
            <span v-if="intro" class="body-text font-light">{{ intro }}</span>
            <span v-else class="body-text font-light"
              >I use code to build things for fun and on demand</span
            >
          </div>
        </div>
        <div class="mt-10 flex gap-x-6 justify-center md:justify-start">
          <Anchor
            v-for="anchor in anchors"
            :key="anchor.url"
            class="!z-10 hero-link"
            :name="anchor.name"
            :type="anchor.type"
            :url="anchor.url"
          />
        </div>
      </div>
      <div
        class="shapes-container animate-pulse -z-20 mx-auto items-stretch align-middle justify-self-center left-32 md:-left-12 w-60 !h-60 !-top-52 md:!top-2 md:!h-80 md:!w-80 ld:h-96"
      >
        <div class="shape-1 left-16 top-20 -z-20 md:top-32 md:left-32"></div>
        <div class="shape-2 animate-pulse -z-20"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shapes-container {
  background-image: $bg-gradient;
  background-size: 100%;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  position: relative;
  top: -4rem;
  z-index: 2;
  opacity: 1;
  isolation: isolate;

  .shape-1 {
    height: 100%;
    width: 100%;
    border-radius: 92% 8% 33% 67% / 76% 12% 88% 24%;
    position: relative;
    background-color: $accent-soft;
    z-index: -1;
    opacity: 0.5;
  }
  .shape-2 {
    height: 60%;
    width: 50%;
    outline: 1px solid $secondary;
    position: relative;
    top: -100%;
    left: -6rem;
    border-radius: 28% 72% 33% 67% / 76% 63% 37% 24%;
    z-index: -1;
  }
}
</style>
