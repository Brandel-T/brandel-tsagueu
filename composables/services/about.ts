import { RuntimeConfig } from "nuxt/schema";
import { useLazyAsyncData } from "#app";

export const useAbout = async <T = any>(runtimeConfig: RuntimeConfig) => {
  const { find } = useStrapi();
  const { data, pending } = await useLazyAsyncData(
    () => find<T>("about?populate=*"),
    {
      server: true,
    },
  );

  const aboutMe = ref("");
  const profileImage = ref("");
  const interests = ref([]);

  profileImage.value = `${runtimeConfig.public.apiUrl}${data.value.data.attributes.profileImage.data.attributes.url}`;
  interests.value = data.value!.data.attributes.interests.data.map(
    (interest: any) => interest.attributes.name,
  );
  aboutMe.value = data.value.data.attributes.description;

  return {
    pending,
    aboutMe,
    interests,
    profileImage,
  };
};
