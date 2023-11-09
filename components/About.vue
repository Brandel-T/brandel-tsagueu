<template>
  <section class="about page-section">
    <SectionHeader title="About Me" />
    <div class="section-body !-z-1">
      <div class="about-content">
        <div
          data-aos="fade-up-right"
          data-aos-delay="0"
          data-aos-easing="ease-in-out"
          data-aos-duration="600"
        >
          <ContentDoc
            path="/about"
            class="body-text text-center md:text-left !font-light"
          />
        </div>
        <div class="flex justify-center md:justify-start gap-x-12 mt-6">
          <div
            class="body-text flex items-center gap-2 -z-10"
            data-aos="zoom-in-right"
          >
            <strong class="text-[2.5rem] md:text-[3.5rem] font-normal"
              >2+</strong
            >
            years experience
          </div>
          <div
            class="body-text flex items-center gap-2 -z-10"
            data-aos="zoom-in-right"
          >
            <IconLocation
              class="!w-[2.5rem] !h-[2.5rem] md:!w-[3.5rem] md:!h-[3.5rem]"
            />Germany, DE
          </div>
        </div>
        <div
          class="mb-4 text-accent text-center md:text-left text-xl md:text-2xl mt-12 capitalize"
        >
          My interests
        </div>
        <div class="flex flex-wrap justify-center md:justify-start gap-2">
          <span
            v-for="(interest, index) in interests"
            :key="index"
            class="badge capitalize"
            data-aos="zoom-in-right"
          >
            {{ interest }}
          </span>
        </div>
      </div>
      <div
        class="profile img-wrapper rounded-md after:outline after:outline-1 after:outline-tertiary hover:after:bg-tertiary"
      >
        <img
          v-if="profileImage"
          :src="profileImage ? profileImage : '~/assets/images/profil-1.jpeg'"
          class="w-full h-full rounded-md"
          data-aos="fade-left"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: "About",
  props: {
    aboutMe: { type: String, required: true },
    interests: { type: Array<String>, default: [], required: false },
    profileImage: { type: String, required: true },
  },
});
</script>

<style scoped lang="scss">
.section-body {
  @apply grid grid-cols-12 gap-12 justify-center
    portrait:flex portrait:flex-col relative;
}
.img-wrapper::after {
  content: "";
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 2em;
  left: 2em;
  z-index: -1;
  border-radius: 0.32em;
  transition: all 1s;
  mix-blend-mode: darken;
}
.img-wrapper:hover {
  &::after {
    top: 1em;
    left: 1em;
  }
}
.img-wrapper img {
  filter: brightness(130%);
  isolation: isolate;
  transition: all 1s ease-in-out;
}
.img-wrapper img:hover {
  filter: grayscale(0%);
}

.about-content {
  @apply col-span-12
        self-start
        h-fit
        md:col-span-7;
}

.profile {
  @apply col-span-12 mt-16 md:mt-0
        w-3/4 md:w-full lg:w-3/4 mx-auto -order-1
        md:order-none md:col-start-8 md:col-span-5
        portrait:-order-1 portrait:w-3/4
        self-start
        aspect-square
        md:aspect-auto
        shadow-lg
        rounded-md
        outline-secondary
        relative top-4
        transition
        duration-300
        ease-in-out
        -translate-y-4
        object-cover;
}
</style>
