import { useAsyncData } from "#app";

export const useTechStack = async () => {
  const { find } = useStrapi();
  const { data, pending } = await useAsyncData(() =>
    find<any[]>("tech-stacks?populate=*"),
  );

  return {
    data,
    pending,
  };
};
