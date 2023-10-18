import { useAsyncData } from "#app";

export const useTechnologies = async () => {
  const { find } = useStrapi();
  const { data, pending } = await useAsyncData(() =>
    find<any[]>("technologies?populate=*"),
  );

  const techno = ref();
  techno.value = data.value;

  return { data, pending };
};
