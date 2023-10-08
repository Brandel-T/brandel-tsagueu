import { useAsyncData } from "#app";

export const useJobs = async <T>() => {
  const { find } = useStrapi();
  const { data, pending } = await useAsyncData(() =>
    find<T[]>("jobs?populate=*"),
  );

  return { data, pending };
};
