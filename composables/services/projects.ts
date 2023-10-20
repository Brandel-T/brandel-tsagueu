import { RuntimeConfig } from "nuxt/schema";

export const useProjects = async <T>(runtimeConfig: RuntimeConfig) => {
  const { find } = useStrapi();
  const { data, pending } = await useAsyncData(() =>
    find<T>("projects?populate=*"),
  );

  const projects = ref<ProjectType[]>([]);
  projects.value =
    data.value?.data.map((project) => {
      const { assets, description, technologies, title, type, url } =
        project.attributes as any;

      return {
        description,
        title,
        type,
        url,
        assets: assets.data.map(
          (asset: any) => runtimeConfig.public.apiUrl + asset.attributes.url,
        ),
        technologies: technologies.data.map(
          (tech: any) => tech.attributes.name,
        ),
      } as ProjectType;
    }) || [];

  return { projects, pending };
};
