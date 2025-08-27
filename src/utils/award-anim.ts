import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";

function awardAnimOne() {
  const awardItem = document.querySelector(".tp-award-2-area");
  if(!awardItem) return
  const sections_2 = gsap.utils.toArray(".tp-award-2-area");
  const listItem_2 = gsap.utils.toArray(".tpaward");
  sections_2.forEach((section, index) => {
    ScrollTrigger.create({
      trigger: section,
      markers: false,
      start: "top 98%",
      end: "bottom -100%",
      toggleClass: { targets: listItem_2[index], className: "addclass" },
    });
  });
 // title 1
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".tp-award-2-area ",
        start: "top 100%",
        end: "bottom 20%",
        scrub: true,
        invalidateOnRefresh: true,
      },
    })
    .to(".tp-award-title-1 ", {
      x: "-15%",
    });
  gsap.set(".tp-award-title-1", {
    x: "10%",
  });
  // title 2
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".tp-award-2-area ",
        start: "top 100%",
        end: "bottom 20%",
        scrub: true,
        invalidateOnRefresh: true,
      },
    })
    .to(".tp-award-title-2 ", {
      x: "15%",
    });
  gsap.set(".tp-award-title-2", {
    x: "-10%",
  });
}

export { awardAnimOne };
