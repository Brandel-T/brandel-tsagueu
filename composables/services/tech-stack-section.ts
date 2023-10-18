export const useStack = async () => {
  const { find } = useStrapi();
  const { data, pending } = await useAsyncData(() =>
    find<any>(
      "tech-stack-section?fields=title&populate[tech_stacks][populate]=technologies&populate[recent_technologies][fields]=name&populate[tech_stacks][fields]=category&populate[tech_stacks]populate[technologies][fields]=name",
    ),
  );

  let { recent_technologies: recent, tech_stacks: stacks } =
    data.value.data.attributes;

  recent = recent.data.map((item: any) => item.attributes.name);
  stacks = stacks.data.map((item) => {
    return {
      category: item.attributes.category,
      technologies: item.attributes.technologies.data.map(
        (tech) => tech.attributes.name,
      ),
    } as { category: string; technologies: string[] };
  });

  return { recent, stacks, pending };
};
