<template>
  <section class="about page-section">
    <SectionHeader title="About Me" />
    <div class="section-body !-z-1">
      <div class="about-content">
        <ul class="list-disc pl-4">
          <li
            v-for="(about, index) in abouts"
            :key="index"
            class="body-text mb-3"
          >
            {{ about }}
          </li>
        </ul>
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
          >
            {{ interest }}
          </span>
        </div>
      </div>
      <div
        class="profile img-wrapper rounded-md after:outline after:outline-1 after:outline-tertiary hover:after:bg-tertiary"
      >
        <img
          src="~/assets/images/profil-1.jpeg"
          class="w-full h-full rounded-md"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  setup(props: any, ctx: any) {
    const abouts = ref<string[]>([
      "I study computer science at the Bingen University of Applied Sciences",
      "I’m currently contributing to digitalize a manually working process a Robert Bosch GmbH.",
      "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't,",
    ]);
    const interests = ref<string[]>([
      "mathematics",
      "data science",
      "big data",
      "challenge",
      "software development",
      "drawing",
    ]);

    onMounted(() => {
      console.log(props);
      console.log(ctx);
    });

    return { abouts, interests };
  },
};
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
        self-center
        h-fit
        md:col-span-7;
}

.profile {
  @apply col-span-12 mt-16 md:mt-0
        w-3/4 md:w-full lg:w-3/4 mx-auto -order-1
        md:order-none md:col-start-8 md:col-span-5
        portrait:-order-1 portrait:w-3/4
        self-center
        aspect-square
        md:aspect-auto
        shadow-lg
        rounded-md
        outline-secondary
        relative
        transition
        duration-300
        ease-in-out
        -translate-y-4
        object-cover;
}
</style>
