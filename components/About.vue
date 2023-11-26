<template>
  <section class="about page-section">
    <SectionHeader title="About Me" />
    <article class="section-body !-z-1">
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
            class="w-fit body-text flex items-center gap-2 -z-10"
            data-aos="zoom-in-right"
          >
            <strong class="text-[2.5rem] md:text-[3.5rem] font-normal"
              >{{ yearsOfexperience }}+</strong
            >
            years experience
          </div>
          <div
            class="w-fit body-text flex items-center gap-2 -z-10"
            data-aos="zoom-in-right"
          >
            <IconLocation
              class="!w-[2.5rem] !h-[2.5rem] md:!w-[3.5rem] md:!h-[3.5rem]"
            />Germany, DE
          </div>
        </div>
        <div
          v-if="interests"
          class="mb-4 text-accent text-center md:text-left text-xl md:text-2xl mt-12 capitalize"
        >
          My interests
        </div>
        <ul class="flex flex-wrap justify-center md:justify-start gap-2">
          <li
            v-for="(interest, index) in interests"
            :key="index"
            class="badge-outline capitalize list-item"
            data-aos="zoom-in-right"
          >
            {{ interest }}
          </li>
        </ul>
      </div>
      <div
        class="profile max-w-[25rem] img-wrapper rounded-md after:outline after:outline-1 after:outline-tertiary hover:after:bg-tertiary"
      >
        <img
          v-if="profileImage"
          :src="profileImage ? profileImage : '~/assets/images/profil-1.jpeg'"
          alt="Brandel Tsagueu website profile image"
          class="w-full h-full rounded-md"
          data-aos="fade-left"
        />
      </div>
    </article>
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
  setup() {
    const toYearFactor = 1000 * 60 * 60 * 24 * 365.25;
    const yearsDiff = ref(
      (new Date().getTime() - new Date("2021-01-01").getTime()) / toYearFactor,
    );

    const yearsOfexperience = computed(() => Math.ceil(yearsDiff.value));

    return {
      yearsOfexperience,
    };
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
