import { useAsyncData } from "#app";

export const useTechnologies = async () => {
  const { find } = useStrapi();
  const { data, pending } = await useAsyncData(() =>
    find<any[]>("technologies?populate=*"),
  );

  return { data, pending };
};
