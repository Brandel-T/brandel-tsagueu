import { useAsyncData } from "#app";

export const useTechStack = async () => {
  const { find } = useStrapi();
  const { data, pending } = await useAsyncData(() =>
    find("tech-stacks?populate=*"),
  );

  const techStack = ref();
  techStack.value = data.value!.data;

  techStack.value = data.value!.data.map((tech: any) => {
    return {
      category: tech.attributes.category,
      technologies: tech.attributes.technologies.data.map(
        (techno: any) => techno.attributes.name,
      ),
    };
  });

  return {
    techStack,
    pending,
  };
};
