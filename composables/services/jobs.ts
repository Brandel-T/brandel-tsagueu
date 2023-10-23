export const useJobs = <T>() => {
  const { find } = useStrapi();

  const jobs = ref();
  const pending = ref();
  const error = ref(false);

  useAsyncData(() =>
    find<T[]>(
      "jobs?populate[job_requirements][fields]=title&populate[technologies_used][fields]=name&populate[company]=*",
    ),
  )
    .then(({ data, pending: loading }) => {
      pending.value = loading.value;

      if (data.value) {
        jobs.value = data.value;

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
            techStack: attributes.technologies_used.data.map(
              (tech: any) => tech.attributes.name,
            ),
          } as T;
        });
      } else {
        jobs.value = [];
        error.value = true;
      }
    })
    .catch((reason) => {
      error.value = true;
      pending.value = false;
      jobs.value = [];
    });

  watch(jobs, (value) => {
    if (value) jobs.value = value;
  });

  watch(pending, (value) => {
    if (value) pending.value = value;
  });

  return { jobs, pending, error };
};
