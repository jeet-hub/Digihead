import { gsap, Power2 } from "gsap";
function imageRevealAnimation() {
  const tp_img_reveal = document.querySelectorAll(".tp_img_reveal");

	if(tp_img_reveal.length > 0) {
    tp_img_reveal.forEach((img_reveal) => {
      let image = img_reveal.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: img_reveal,
          start: "top 70%",
        }
      });
  
      tl.set(img_reveal, { autoAlpha: 1 });
      tl.from(img_reveal, 1.5, {
        xPercent: -100,
        ease: Power2.easeOut
      });
      tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.5,
        delay: -1.5,
        ease: Power2.easeOut
      });
    });
  }
};

export {
  imageRevealAnimation,
}