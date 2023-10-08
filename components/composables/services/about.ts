import { useLazyAsyncData } from "#app";

export const useAbout = async <T>() => {
  const { find } = useStrapi();
  const { data, pending } = await useLazyAsyncData(() =>
    find<T>("about?populate=*"),
  );

  return { data, pending };
};
