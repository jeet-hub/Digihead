import { gsap, Power2 } from "gsap";
import $ from "jquery";
import { SplitText } from "@/plugins";

function heroTitleAnim() {
  const heroArea = document.querySelector(".tp-hero-2-area");
  if (heroArea) {
    gsap.set(".tp-hero-2-title.text-1", { x: 300 });
    gsap.to(".tp-hero-2-title.text-1", {
      scrollTrigger: {
        trigger: heroArea,
        start: "top center",
        markers: false,
      },
      duration: 1.7,
      x: 0,
    });

    gsap.set(".tp-hero-2-title.text-2", { x: -300 });
    gsap.to(".tp-hero-2-title.text-2", {
      scrollTrigger: {
        trigger: heroArea,
        start: "top center",
        markers: false,
      },
      duration: 1.7,
      x: 0,
    });

    gsap.set(".tp-hero-2-content", { x: -500 });
    gsap.to(".tp-hero-2-content", {
      scrollTrigger: {
        trigger: heroArea,
        start: "top center",
        markers: false,
      },
      duration: 2,
      x: 0,
    });
  }
}

function heroBgAnimation() {
  const heroBg = document.querySelector(".tp-hero-bg-single");
  if (heroBg) {
    gsap.from(heroBg, {
      scale: 1.3,
      duration: 1.5,
    });
  }
}

// bounce animation
function bounceAnimation() {
  const bounce = document.querySelectorAll(".tp-btn-bounce");
  if (bounce.length > 0) {
    gsap.from(bounce, { y: -100, opacity: 0 });
    let mybtn = gsap.utils.toArray(bounce);
    mybtn.forEach((btn: any) => {
      const $this = $(btn);
      gsap.to(btn, {
        scrollTrigger: {
          trigger: $this.closest(".tp-btn-trigger"),
          start: "top center",
          markers: false,
        },
        duration: 1,
        ease: "bounce.out",
        y: 0,
        opacity: 1,
      });
    });

    gsap.from(bounce, { y: -100, opacity: 0 });
    let mybtn2 = gsap.utils.toArray(bounce);
    mybtn2.forEach((btn: any) => {
      const $this = $(btn);
      gsap.to(btn, {
        scrollTrigger: {
          trigger: $this.closest(".tp-btn-trigger"),
          start: "bottom bottom",
          markers: false,
        },
        duration: 0.9,
        delay: 4,
        ease: "bounce.out",
        y: 0,
        opacity: 1,
      });
    });
  }
}

// char animation
function charAnimation() {
    let char_come = gsap.utils.toArray(".tp-char-animation");
    char_come.forEach((splitTextLine: any) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
      });

      const itemSplitted = new SplitText(splitTextLine, {
        type: "chars, words",
      });

      gsap.set(splitTextLine, { perspective: 300 });
      itemSplitted.split({ type: "chars, words" });
      tl.from(itemSplitted.chars, {
        duration: 1,
        delay: 0.5,
        x: 100,
        autoAlpha: 0,
        stagger: 0.05,
      });
    });
}

// fade left animation
function fadeAnimation() {
  if ($(".tp_fade_bottom").length > 0) {
    gsap.set(".tp_fade_bottom", { y: 100, opacity: 0 });
    const fadeArray = gsap.utils.toArray(".tp_fade_bottom");
    fadeArray.forEach((item: any, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=400",
        },
      });
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      });
    });
  }

  if ($(".tp_fade_top").length > 0) {
    gsap.set(".tp_fade_top", { y: -100, opacity: 0 });
    const fadetopArray = gsap.utils.toArray(".tp_fade_top");
    fadetopArray.forEach((item: any, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=100",
        },
      });
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 2.5,
      });
    });
  }

  if ($(".tp_fade_left").length > 0) {
    gsap.set(".tp_fade_left", { x: -100, opacity: 0 });
    const fadeleftArray = gsap.utils.toArray(".tp_fade_left");
    fadeleftArray.forEach((item: any, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=100",
        },
      });
      fadeTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 2.5,
      });
    });
  }

  if ($(".tp_fade_right").length > 0) {
    gsap.set(".tp_fade_right", { x: 100, opacity: 0 });
    const faderightArray = gsap.utils.toArray(".tp_fade_right");
    faderightArray.forEach((item: any, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=100",
        },
      });
      fadeTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 2.5,
      });
    });
  }
  if ($(".tp_fade_anim").length > 0) {
    const fadeArrayup = gsap.utils.toArray(".tp_fade_anim");
    fadeArrayup.forEach((t: any, e) => {
      let r = "bottom",
        a = 1,
        o = 1,
        i = 50,
        s = .5,
        l = "power2.out";
      t.getAttribute("data-fade-offset") && (i = t.getAttribute("data-fade-offset")), t.getAttribute("data-duration") && (o = t.getAttribute("data-duration")), t.getAttribute("data-fade-from") && (r = t.getAttribute("data-fade-from")), t.getAttribute("data-on-scroll") && (a = t.getAttribute("data-on-scroll")), t.getAttribute("data-delay") && (s = t.getAttribute("data-delay")), t.getAttribute("data-ease") && (l = t.getAttribute("data-ease")), 1 == a ? ("top" == r && gsap.from(t, {
        y: -i,
        opacity: 0,
        ease: l,
        duration: o,
        delay: s,
        scrollTrigger: {
          trigger: t,
          start: "top 110%"
        }
      }), "left" == r && gsap.from(t, {
        x: -i,
        opacity: 0,
        ease: l,
        duration: o,
        delay: s,
        scrollTrigger: {
          trigger: t,
          start: "top 110%"
        }
      }), "bottom" == r && gsap.from(t, {
        y: i,
        opacity: 0,
        ease: l,
        duration: o,
        delay: s,
        scrollTrigger: {
          trigger: t,
          start: "top 110%"
        }
      }), "right" == r && gsap.from(t, {
        x: i,
        opacity: 0,
        ease: l,
        duration: o,
        delay: s,
        scrollTrigger: {
          trigger: t,
          start: "top 110%"
        }
      }), "in" == r && gsap.from(t, {
        opacity: 0,
        ease: l,
        duration: o,
        delay: s,
        scrollTrigger: {
          trigger: t,
          start: "top 110%"
        }
      })) : ("top" == r && gsap.from(t, {
        y: -i,
        opacity: 0,
        ease: l,
        duration: o,
        delay: s
      }), "left" == r && gsap.from(t, {
        x: -i,
        opacity: 0,
        ease: l,
        duration: o,
        delay: s
      }), "bottom" == r && gsap.from(t, {
        y: i,
        opacity: 0,
        ease: l,
        duration: o,
        delay: s
      }), "right" == r && gsap.from(t, {
        x: i,
        opacity: 0,
        ease: l,
        duration: o,
        delay: s
      }), "in" == r && gsap.from(t, {
        opacity: 0,
        ease: l,
        duration: o,
        delay: s
      }))
    });
  }
}

// revel animation
// revel animation one
function revelAnimationOne() {
  const anim_reveal: NodeListOf<HTMLElement> =
    document.querySelectorAll(".tp_reveal_anim");
  if (anim_reveal.length > 0) {
    anim_reveal.forEach((areveal: any) => {
      let duration_value = 1.5;
      let onscroll_value = 1;
      let stagger_value = 0.02;
      let data_delay = 0.05;

      if (areveal.getAttribute("data-duration")) {
        duration_value = areveal.getAttribute("data-duration");
      }
      if (areveal.getAttribute("data-on-scroll")) {
        onscroll_value = areveal.getAttribute("data-on-scroll");
      }
      if (areveal.getAttribute("data-stagger")) {
        stagger_value = areveal.getAttribute("data-stagger");
      }
      if (areveal.getAttribute("data-delay")) {
        data_delay = areveal.getAttribute("data-delay");
      }

      areveal.split = new SplitText(areveal, {
        type: "lines,words,chars",
        linesClass: "tp-reveal-line",
      });

      if (onscroll_value == 1) {
        areveal.anim = gsap.from(areveal.split.chars, {
          scrollTrigger: {
            trigger: areveal,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play reverse play reverse",
          },
          duration: duration_value,
          delay: data_delay,
          ease: "circ.out",
          y: 200,
          stagger: stagger_value,
          opacity: 0,
        });
      } else {
        areveal.anim = gsap.from(areveal.split.chars, {
          duration: duration_value,
          delay: data_delay,
          ease: "circ.out",
          y: 200,
          stagger: stagger_value,
          opacity: 0,
        });
      }
    });
  }
}
// revel animation two
function revelAnimationTwo() {
  const anim_reveal2: NodeListOf<HTMLElement> =
    document.querySelectorAll(".tp_reveal_anim-2");
  if (anim_reveal2.length > 0) {
    anim_reveal2.forEach((areveal: any) => {
      let duration_value = 2;
      let onscroll_value = 1;
      let stagger_value = 0.05;
      let data_delay = 0.1;

      if (areveal.getAttribute("data-duration")) {
        duration_value = areveal.getAttribute("data-duration");
      }
      if (areveal.getAttribute("data-on-scroll")) {
        onscroll_value = areveal.getAttribute("data-on-scroll");
      }
      if (areveal.getAttribute("data-stagger")) {
        stagger_value = areveal.getAttribute("data-stagger");
      }
      if (areveal.getAttribute("data-delay")) {
        data_delay = areveal.getAttribute("data-delay");
      }

      areveal.split = new SplitText(areveal, {
        type: "lines,words,chars",
        linesClass: "tp-reveal-line-2",
      });

      if (onscroll_value == 1) {
        areveal.anim = gsap.from(areveal.split.chars, {
          scrollTrigger: {
            trigger: areveal,
            start: "top 85%",
          },
          duration: duration_value,
          delay: data_delay,
          ease: "circ.out",
          y: 200,
          stagger: stagger_value,
          opacity: 0,
        });
      } else {
        areveal.anim = gsap.from(areveal.split.chars, {
          duration: duration_value,
          delay: data_delay,
          ease: "circ.out",
          y: 200,
          stagger: stagger_value,
          opacity: 0,
        });
      }
    });
  }
}

function zoomAnimation() {
  // zoom in
  if ($(".anim-zoomin").length > 0) {
    $(".anim-zoomin").each(function () {
      // Add wrap <div>.
      $(this).wrap('<div class="anim-zoomin-wrap"></div>');

      // Add overflow hidden.
      $(".anim-zoomin-wrap").css({ overflow: "hidden" });

      const $this = $(this);
      const $asiWrap = $this.parents(".anim-zoomin-wrap");

      let tp_ZoomIn = gsap.timeline({
        scrollTrigger: {
          trigger: $asiWrap,
          start: "top 90%",
          markers: false,
        },
      });
      tp_ZoomIn.from($this, {
        duration: 1.5,
        autoAlpha: 0,
        scale: 1.4,
        ease: Power2.easeOut,
        clearProps: "all",
      });
    });
  }
};

function titleAnimation() {
  if ($('.tp_title_anim').length > 0) {
    let splitTitleLines = gsap.utils.toArray(".tp_title_anim");
    splitTitleLines.forEach((splitTextLine: any) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: false,
          markers: false,
          toggleActions: 'play none none none'
        }
      });

      const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
      gsap.set(splitTextLine, { perspective: 400 });
      itemSplitted.split({ type: "lines" })
      tl.from(itemSplitted.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1
      });
    });
  }
}

export {
  heroTitleAnim,
  heroBgAnimation,
  bounceAnimation,
  fadeAnimation,
  charAnimation,
  revelAnimationTwo,
  revelAnimationOne,
  zoomAnimation,
  titleAnimation,
};
