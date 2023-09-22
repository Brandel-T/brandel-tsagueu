<template>
  <div class="hero container h-screen">
    <div
      class="w-full h-full my-auto grid grid-cols-12 grid-rows-5 md:grid-rows-1 justify-center items-center overflow-y-visible"
    >
      <div
        class="col-span-12 md:col-span-9 lg:col-span-8 xl:col-span-7 !z-20 row-span-4"
      >
        <div>
          <div class="body-text mb-4 text-center md:text-left">Hey, I’m</div>
          <div
            class="-z-20 text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center md:text-left"
          >
            Brandel Tsagueu,
            <span class="highlight">Student and Software developer</span> in
            part time
          </div>
          <div class="body-text mt-6 text-center md:text-left">
            I use code to build things for fun and on demand
          </div>
        </div>
        <div class="mt-10 flex gap-x-6 justify-center md:justify-start">
          <Anchor
            class="!z-1"
            name="LinkedIn"
            type="external"
            url="https://www.linkedin.com/in/brandel-tsagueu-6a27bb205/"
          />
          <Anchor
            class="!z-1"
            name="Xing"
            type="external"
            url="https://www.xing.com/profile/Brandel_Tsagueu/cv"
          />
          <Anchor
            class="!z-1"
            name="GitHub"
            type="external"
            url="https://github.com/Brandel-T"
          />
        </div>
      </div>
      <div
        class="shapes-container -z-20 mx-auto items-stretch align-middle justify-self-center left-32 md:-left-12 w-60 !h-60 !-top-52 md:!top-2 md:!h-80 md:!w-80 ld:h-96"
      >
        <div class="shape-1 left-16 top-20 -z-20 md:top-32 md:left-32"></div>
        <div class="shape-2 -z-20"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
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
