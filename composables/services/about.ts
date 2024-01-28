import { RuntimeConfig } from "nuxt/schema";

export const useAbout = async <T = any>(runtimeConfig: RuntimeConfig) => {
  const { find } = useStrapi();

  const error = ref<boolean>(false);
  const pending = ref<boolean>(false);
  const aboutMe = ref("");
  const profileImage = ref("");
  const interests = ref([]);

  try {
    const { data, pending: loading } = await useLazyAsyncData(
      () =>
        find<T>(
          "about?populate[profileImage]=*&populate[interests][fields]=name",
        ),
      {
        server: true,
      },
    );
    pending.value = loading.value;

    if (data.value) {
      profileImage.value = `${data.value?.data.attributes.profileImage.data.attributes.url}`;
      interests.value = data.value!.data.attributes.interests.data.map(
        (interest: any) => interest.attributes.name,
      );
      aboutMe.value = data.value.data.attributes.description;
    } else {
      error.value = true;
    }
  } catch (err) {
    error.value = true;
  }

  return {
    error,
    pending,
    aboutMe,
    interests,
    profileImage,
  };
};
