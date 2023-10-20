export const useHero = async () => {
  const { find } = useStrapi();
  const { data, pending } = await useAsyncData(() =>
    find("hero-section?populate=*"),
  );

  return {
    hero: {
      heading: data.value?.data.attributes.heading,
      intro: data.value?.data.attributes.intro,
      anchors: data.value?.data.attributes.anchor.map((a) => {
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
    pending: pending.value,
  };
};
