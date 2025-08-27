import { gsap } from "gsap";



function brandAnimation() {
  if (document.querySelectorAll(".bd-brand-item").length > 0) {
    gsap.set(".bd-brand-item img", { scale: 1.3, opacity: 0 });
    gsap.to(".bd-brand-item img", {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "bounce.out",
      stagger: {
        each: 0.1
      },
      scrollTrigger: {
        trigger: '.bd-brand-area',
        start: "top 100%"
      }
    })
  }
};


export {
  brandAnimation,
}