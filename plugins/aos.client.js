import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.AOS = AOS.init({
    once: true,
    ease: "ease-in-out",
    duration: 600,
    delay: 0,
  });
});
