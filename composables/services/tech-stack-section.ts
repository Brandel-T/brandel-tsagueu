/* eslint-disable camelcase */
export const useStack = async () => {
  const { find } = useStrapi();

  const error = ref(false);
  const recent = ref([]);
  const stacks = ref([]);
  const pending = ref(false);

  try {
    const { data, pending: loading } = await useAsyncData(() =>
      find<any>(
        "tech-stack-section?fields=title&populate[tech_stacks][populate]=technologies&populate[recent_technologies][fields]=name&populate[tech_stacks][fields]=category&populate[tech_stacks]populate[technologies][fields]=name",
      ),
    );
    pending.value = loading.value;
    if (data.value) {
      const { recent_technologies, tech_stacks } = data.value.data.attributes;
      recent.value = recent_technologies.data.map(
        (item: any) => item.attributes.name,
      );
      stacks.value = tech_stacks.data.map((item) => {
        return {
          category: item.attributes.category,
          technologies: item.attributes.technologies.data.map(
            (tech) => tech.attributes.name,
          ),
        } as { category: string; technologies: string[] };
      });
    } else {
      error.value = true;
      pending.value = false;
      recent.value = [];
      stacks.value = [];
    }
  } catch (err) {
    error.value = true;
    pending.value = false;
    recent.value = [];
    stacks.value = [];
  }

  return { recent, stacks, pending, error };
};
