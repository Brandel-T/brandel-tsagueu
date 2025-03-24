<template>
  <NuxtErrorBoundary>
    <section id="work" class="work-experience page-section">
      <SectionHeader title="Work experience" />
      <article class="section-body">
        <div class="lg:w-1/2">
          <div
            v-for="(job, index) in jobs"
            :key="String(job.startDate)"
            class="accordion"
          >
            <div
              :class="{
                'accordion-open': selectedJob === index,
                'accordion-close': selectedJob !== index,
              }"
              class="accordion-header transition-all duration-300"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-easing="ease-in-out-sine"
              @click="selectJob(index)"
            >
              <span :class="{ 'text-accent': selectedJob == index }">{{
                job.title
              }}</span>
              <IconPlus v-if="!(selectedJob === index)" />
              <IconMinus v-else class="icon-secondary-accent" />
            </div>
            <div
              v-if="selectedJob === index"
              :class="{ hidden: !(selectedJob === index) }"
              class="accordion-body transition-all duration-300 ease-in"
              data-aos="zoom-up"
              data-aos-duration="600"
              data-aos-easing="ease-in-out-sine"
            >
              <div class="mb-6 mt-4">
                <div class="body-text">
                  <span class="small flex items-center gap-2">
                    <IconCalendar class="!h-5 !w-5 icon-gray" />
                    {{ useDateFormat(new Date(job.startDate)) }} -
                    <span>
                      <span v-if="job.endDate" class="small">{{
                        useDateFormat(new Date(job.endDate))
                      }}</span>
                      <span v-else :class="{ 'text-secondary': !job.endDate }"
                        >Today</span
                      >
                    </span>
                  </span>
                </div>
                <div class="heading-1 w-fit">
                  <Anchor
                    :name="job.company?.name"
                    :hashtag-visible="false"
                    :url="job.company?.url"
                  />
                </div>
                <div
                  class="flex items-center gap-2 text-white font-light text-base"
                >
                  <IconTime class="!h-5 !w-5" />
                  {{ job.workFormat ?? "undefined" }}
                  <span class="text-secondary">/</span>
                  <IconBuilding class="!h-5 !w-5" />
                  {{ job.locationFormat ?? "undefined" }}
                </div>
              </div>
              <div class="mb-4">
                <div class="body-text mb-6">{{ job.description }}</div>
                <div
                  v-if="job.job_requirements && job.job_requirements.length"
                  class="highlight"
                >
                  Requirements
                </div>
                <div class="body-text">
                  <ul class="list-disc pl-4">
                    <li
                      v-for="(requirement, i) in job.job_requirements"
                      :key="i"
                      class="body-text"
                    >
                      {{ requirement.title }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="">
                <div
                  v-if="
                    job.technologies_used && job.technologies_used.length > 0
                  "
                  class="highlight mb-2"
                >
                  Technologies used
                </div>
                <div v-if="job.technologies_used.length > 0" class="body-text">
                  <ul
                    class="flex flex-wrap gap-2 justify-center md:justify-start"
                  >
                    <li v-for="(tech, j) in job.technologies_used" :key="j">
                      <Badge
                        :value="tech.name"
                        :icon-name="tech.iconName"
                        theme="outline"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-header__container--desktop">
          <div
            v-for="(job, index) in jobs"
            :key="String(job.startDate)"
            :class="{
              'accordion-open': selectedJob === index,
              'accordion-close': selectedJob !== index,
            }"
            class="accordion-header"
            @click="selectJob(index)"
          >
            <span :class="{ 'text-accent': selectedJob == index }">{{
              job.title
            }}</span>
            <IconPlus v-if="!(selectedJob === index)" />
            <IconMinus v-else class="icon-secondary-accent" />
          </div>
        </div>
      </article>
    </section>

    <template #error="{ error }">
      <p>
        An error occured when loading the
        <i class="text-soft">work experience</i> content.
      </p>
      <p>{{ error }}</p>
    </template>
  </NuxtErrorBoundary>
</template>

<script lang="ts" setup>
const { find } = useStrapi();

const jobs = ref([]);
const work = ref();
const selectedJob = ref<number>(0);

const { data } = useAsyncData(async () => {
  return await find("work", {
    fields: ["title"],
    populate: {
      jobs: {
        populate: "*",
      },
    },
  }).then(({ data }) => data);
});

function selectJob(accordionIndex: number) {
  selectedJob.value = accordionIndex;
}

watch(
  data,
  (value) => {
    if (!value) return;
    work.value = data.value;
    jobs.value = data.value.jobs;
  },
  { immediate: true },
);
</script>
