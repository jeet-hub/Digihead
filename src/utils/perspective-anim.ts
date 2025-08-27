import { gsap } from "gsap";
import $ from "jquery";

function perspective() {
  if ($(".tp-perspective-slider").length) {
    gsap.set(".tp-perspective-slider .tp-slide .tp-slide-inner", {
      perspective: 60,
    });

    $(".tp-perspective-slider .tp-slide .tp-slide-inner .tp-image").each(
      function () {
        let slide = $(this);

        gsap.fromTo(
          this,
          {
            rotationX: 1.8,
            scaleX: 1,
            z: "0vh",
          },
          {
            rotationX: -0.5,
            scaleX: 1,
            z: "-2vh",
            scrollTrigger: {
              trigger: slide,
              start: "top+=150px bottom",
              end: "bottom top",
              immediateRender: false,
              scrub: 0.1,
            },
          }
        );
      }
    );
  }
};

export { perspective };
