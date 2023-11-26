<template>
  <section class="contact page-section">
    <SectionHeader title="Get In Touch" />
    <article class="section-body flex !items-center mx-auto pb-20">
      <div
        class="grid grid-cols-1 grid-rows-3 items-center rounded-lg px-4 h-fit"
      >
        <div class="contact-wrapper row-span-2">
          <div class="heading-thin contact-label">E-mail</div>
          <div class="heading-1">
            <Anchor
              class="heading-1 !z-0"
              url="johndoe@gmail.com"
              name="Tsagueubrandel@gmail.com"
              :email="true"
              type="external"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-sine"
            />
          </div>
          <div class="heading-thin contact-label">Social Media</div>
          <div
            class="col-start-2 col-span-2 row-start-2 row-span-2 flex flex-col gap-2"
          >
            <Anchor
              class="heading-1 !z-0"
              url="https://www.linkedin.com/in/brandel-tsagueu-6a27bb205/"
              name="LinkedIn"
              type="external"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-sine"
            />
            <Anchor
              class="heading-1 !z-0"
              url="https://www.xing.com/profile/Brandel_Tsagueu/cv"
              name="Xing"
              type="external"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-sine"
            />
            <Anchor
              class="heading-1 !z-0"
              url="https://github.com/Brandel-T"
              name="GitHub"
              type="external"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-sine"
            />
          </div>
        </div>
        <div class="h-fit grid grid-cols-4 md:grid-cols-3 gap-8 justify-center">
          <div
            class="col-span-3 md:col-span-1 md:text-end heading-thin text-soft"
          >
            Feel free to address me in
            <span
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-sine"
              data-aos-delay="2000"
              >&#128578;</span
            >
          </div>
          <div
            class="text-xl col-start-2 col-span-2 sm:text-2xl md:text-3xl font-light mr-2 flex flex-col gap-6"
          >
            <div
              class="text-soft"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-sine"
            >
              English<small class="small">,</small>
            </div>
            <div
              class="text-soft"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-sine"
            >
              German <small class="small">or</small>
            </div>
            <div
              class="text-soft"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-sine"
            >
              French
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped lang="scss">
.contact-wrapper {
  @apply max-h-80 md:max-h-80
        mx-auto py-8 gap-4
        grid grid-cols-4 md:grid-cols-3 grid-rows-3;
}
.contact-label {
  @apply justify-self-end col-start-1 col-span-1 text-soft text-end;
}

:deep(.anchor) {
  @apply relative -top-2;
}
</style>
