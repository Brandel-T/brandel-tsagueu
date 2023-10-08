<script lang="ts">
import { PropType } from "vue";
import { JobType } from "~/utils/models";
import { useDateFormat } from "~/components/composables/utils";
import { useWorkExperience } from "~/components/composables/services/work";
import { useJobs } from "~/components/composables/services/jobs";

export default {
  props: {
    jobs: { type: Object as PropType<JobType[]>, required: false },
  },
  setup() {
    const jobs = ref<JobType[]>();

    useJobs<JobType>().then(({ data, pending }) => {
      jobs.value = data.value?.data.map((job) => {
        const attributes: any = job.attributes;
        return {
          title: attributes.title,
          startDate: attributes.startDate,
          endDate: attributes.endDate,
          locationFormat: attributes.locationFormat,
          workFormat: attributes.workFormat,
          description: attributes.description,
          company: {
            name: attributes.company.name,
            url: attributes.company.url,
            hasHashtag: attributes.company.hasHashtag,
            isEmail: attributes.company.isEmail,
            type: attributes.company.type,
            showExternalIcon: attributes.company.showExternalIcon,
          },
          requirements: attributes.job_requirements.data.map(
            (requirement: any) => requirement.attributes.title,
          ),
          techStack: attributes.technologiesUsed.data.map(
            (tech: any) => tech.attributes.name,
          ),
        } as JobType;
      });
    });

    const selectedJob = ref<number>(0);
    function selectJob(accordionIndex: number) {
      selectedJob.value = accordionIndex;
    }
    return { selectedJob, jobs, selectJob };
  },
  methods: { useDateFormat },
};
</script>

<template>
  <section class="work-experience page-section">
    <SectionHeader title="Work experience" />
    <div class="section-body">
      <div>
        <div
          v-for="(job, index) in jobs"
          :key="job.startDate"
          class="accordion"
        >
          <div
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
          <div
            v-if="selectedJob === index"
            :class="{ hidden: !(selectedJob === index) }"
            class="accordion-body transition-all duration-300 ease-in"
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
              <div class="heading-1">
                <Anchor
                  :name="job.company.name"
                  :hashtag-visible="false"
                  :url="job.company.url"
                />
              </div>
              <div
                class="flex items-center gap-2 text-white font-light text-base"
              >
                <IconTime class="!h-5 !w-5" />
                {{ job.workFormat }}
                <span class="text-secondary">/</span>
                <IconBuilding class="!h-5 !w-5" />
                {{ job.locationFormat }}
              </div>
            </div>
            <div class="mb-4">
              <div class="body-text mb-6">{{ job.description }}</div>
              <div class="highlight">Requirements</div>
              <div class="body-text">
                <ul class="list-disc pl-4">
                  <li
                    v-for="(requirement, index) in job.requirements"
                    :key="index"
                    class="body-text"
                  >
                    {{ requirement }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="">
              <div class="highlight mb-2">Technologies used</div>
              <div class="body-text">
                <ul
                  class="flex flex-wrap gap-2 justify-center md:justify-start"
                >
                  <li
                    v-for="(tech, index) in job.techStack"
                    :key="index"
                    class="badge"
                  >
                    {{ tech }}
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
          :key="job.startDate"
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
    </div>
  </section>
</template>
