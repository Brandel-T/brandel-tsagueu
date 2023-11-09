export const useHero = async () => {
  const { find } = useStrapi();

  const error = ref(true);
  const loading = ref(true);
  const heroData = ref<any>();

  try {
    const { data, pending } = await useAsyncData(() =>
      find("hero-section?populate=*"),
    );
    loading.value = pending.value;

    if (data.value) {
      error.value = false;
      heroData.value = data.value;
    }
  } catch (err) {
    error.value = true;
    loading.value = false;
  }

  return {
    hero: {
      heading: !heroData.value ? "" : heroData.value?.data.attributes.heading,
      intro: !heroData.value ? "" : heroData.value?.data.attributes.intro,
      anchors: !heroData.value
        ? []
        : heroData.value?.data.attributes.anchor.map((a) => {
            return {
              name: a.name,
              url: a.url,
              hasHashtag: a.hasHashtag,
              isEmail: a.isEmail,
              type: a.type,
              showExternalIcon: a.showExternalIcon,
            };
          }),
    },
    pending: loading.value,
    error,
  };
};
