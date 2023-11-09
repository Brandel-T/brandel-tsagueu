import { RuntimeConfig } from "nuxt/schema";

export const useProjects = async <T>(runtimeConfig: RuntimeConfig) => {
  const { find } = useStrapi();

  const error = ref(false);
  const pending = ref(false);
  const projects = ref<ProjectType[]>([]);

  try {
    const { data, pending: loading } = await useAsyncData(() =>
      find<T>("projects?populate=*"),
    );
    pending.value = loading.value;

    if (data.value) {
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
              (asset: any) =>
                runtimeConfig.public.apiUrl + asset.attributes.url,
            ),
            technologies: technologies.data.map(
              (tech: any) => tech.attributes.name,
            ),
          } as ProjectType;
        }) || [];
    } else {
      projects.value = [];
      error.value = true;
    }
  } catch (err) {
    error.value = true;
    pending.value = false;
  }

  return { projects, pending, error };
};
