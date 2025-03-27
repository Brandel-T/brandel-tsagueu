<template>
  <NuxtErrorBoundary>
    <section id="about" class="about page-section container">
      <SectionHeader title="About Me" />
      <article class="section-body">
        <div class="about-content">
          <div
            data-aos="fade-up-right"
            data-aos-delay="0"
            data-aos-easing="ease-in-out"
            data-aos-duration="600"
          >
            <div v-if="pending">Loading ... {{ pending }}</div>
            <div v-else>
              <div v-html="about.description"></div>
            </div>
          </div>
          <div class="flex justify-center md:justify-start gap-x-12 mt-6">
            <div
              class="w-fit body-text flex items-center gap-2"
              data-aos="zoom-in-right"
            >
              <strong class="text-[2.5rem] md:text-[3.5rem] font-normal">
                {{ yearsOfexperience }}+
              </strong>
              years experience
            </div>
            <div
              class="w-fit body-text flex items-center gap-2"
              data-aos="zoom-in-right"
            >
              <IconLocation
                class="w-[2.5rem]! h-[2.5rem]! md:w-[3.5rem]! md:h-[3.5rem]!"
              />Germany, DE
            </div>
          </div>
          <div
            v-if="about.interests"
            class="mb-4 text-accent text-center md:text-left text-xl md:text-2xl mt-12 capitalize"
          >
            My interests
          </div>
          <ul class="flex flex-wrap justify-center md:justify-start gap-2">
            <li
              v-for="(interest, index) in about.interests"
              :key="index"
              class="badge badge-outline badge-soft capitalize list-item text-white!"
              data-aos="zoom-in-right"
            >
              {{ interest.name }}
            </li>
          </ul>
        </div>
        <div
          class="profile max-w-[25rem] img-wrapper rounded-md after:outline after:outline-tertiary hover:after:bg-tertiary mask-squircle"
        >
          <img
            v-if="about.profileImage"
            :src="
              about.profileImage
                ? useRuntimeImage(about.profileImage.url)
                : '~/assets/images/profil-1.jpeg'
            "
            alt="profile picture: Brandel Tsagueu"
            class="w-full h-full rounded-md"
            data-aos="fade-left"
          />
        </div>
      </article>
    </section>

    <template #error="{ error }">
      <p>
        An error occured when loading the
        <i class="text-soft">about</i> content.
      </p>
      <p>{{ error }}</p>
    </template>
  </NuxtErrorBoundary>
</template>

<script lang="ts" setup>
const { find } = useStrapi();

const about = ref();

const toYearFactor = 1000 * 60 * 60 * 24 * 365.25;
const yearsDiff = ref(
  (new Date().getTime() - new Date("2021-01-01").getTime()) / toYearFactor,
);

const yearsOfexperience = computed(() => Math.floor(yearsDiff.value));

const { data, pending } = await useAsyncData(async () => {
  return await find("about", {
    fields: ["title", "description"],
    populate: {
      interests: {
        fields: ["name"],
        populate: "*",
      },
      profileImage: {
        populate: "*",
      },
    },
  }).then(({ data }) => data);
});

watchEffect(() => {
  if (!about) return;
  about.value = data.value;
});
</script>

<style scoped>
@reference "../assets/styles/tailwind.css";

.section-body {
  @apply grid grid-cols-12 gap-12 justify-center
    portrait:flex portrait:flex-col relative;
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

.mask-squircle {
  -webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzIwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTAwIDBDMjAgMCAwIDIwIDAgMTAwczIwIDEwMCAxMDAgMTAwIDEwMC0yMCAxMDAtMTAwUzE4MCAwIDEwMCAwWicvPjwvc3ZnPg==);
  mask-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzIwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTAwIDBDMjAgMCAwIDIwIDAgMTAwczIwIDEwMCAxMDAgMTAwIDEwMC0yMCAxMDAtMTAwUzE4MCAwIDEwMCAwWicvPjwvc3ZnPg==);
  mask-repeat: no-repeat;
  mask-size: contain;
  transform: perspective(900px) translate3d(0px, 0px, -50px) rotateY(-15deg)
    rotateX(10deg) scale(1);
  border-radius: 20px;
  box-shadow: 0 70px 40px -20px red !important;
  transition: 0.4s ease-in-out transform;
  isolation: isolate;
  transition: all 1s ease-in-out;
}
.mask-squircle:hover {
  transform: translate3d(0px, 0px, -250px);
}
.mask-squircle img {
  filter: grayscale(0%);
}
.mask-squircle img:hover {
  filter: brightness(130%);
}

@media only screen and (max-width: 768px) {
  .mask-squircle {
    transform: none !important;
    transition: none;
  }
  .mask-squircle:hover {
    transform: none;
  }
  .mask-squircle img {
    filter: brightness(130%);
  }
}
</style>
