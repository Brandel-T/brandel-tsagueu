import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.AOS = AOS.init({
    once: false,
    ease: "ease-in-out-back",
    delay: 600,
  });
});
