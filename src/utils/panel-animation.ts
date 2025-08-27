import { gsap } from "gsap";
import $ from "jquery";
import { ScrollTrigger } from "@/plugins";

function panelOneAnimation() {
  let pp = gsap.matchMedia();
  pp.add("(min-width: 1200px)", () => {
    const panelsSections = gsap.utils.toArray(".panels");
    for (var i = 0; i < panelsSections.length; i++) {
      const thePanelsSection: any = panelsSections[i];
      const panels = gsap.utils.toArray(
        ".panels-container .panel",
        thePanelsSection
      );
      const panelsContainer =
        thePanelsSection.querySelector(".panels-container");

      gsap.set(panelsContainer, { height: window.innerHeight });
      gsap.set(panels, { height: window.innerHeight });

      let totalPanelsWidth = 0;
      panels.forEach(function (panel: any) {
        if (panel) {
          totalPanelsWidth += $(panel).width() ?? 0;
        }
      });

      gsap.set(panelsContainer, { width: totalPanelsWidth });
      gsap.to(panels, {
        x: -totalPanelsWidth + innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: panelsContainer,
          pin: true,
          start: "top 140",
          scrub: 1,
          end: (st: any) => "+=" + (st.vars.trigger.offsetWidth - innerWidth),
        },
      });
    }
  });

  //
  let pj = gsap.matchMedia();
  pj.add("(min-width: 992px)", () => {
    if (document.querySelector(".tp-project-2-area")) {
      let sections = gsap.utils.toArray(".tp-project-2-area");
      let listItem = gsap.utils.toArray(".tpproject");
      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          markers: false,
          start: "bottom 115%",
          end: "bottom -100%",
          toggleClass: { targets: listItem[index], className: "addclass" },
        });
      });
    }
  });
}

// PORTFOLIO TWO ANIMATION
function panelTwoAnimation() {
  let pr = gsap.matchMedia();
  pr.add("(min-width: 768px)", () => {

    let tl = gsap.timeline();
    let projectPanels = document.querySelectorAll('.project-panel')
    // if (projectPanels.length > 0) {
    projectPanels.forEach((section) => {
      tl.to(section, {
        scrollTrigger: {
          trigger: section,
          pin: section,
          scrub: 1,
          start: 'top top',
          end: "bottom 100%",
          endTrigger: '.project-panel-area',
          pinSpacing: false,
          markers: false,
        },
      })
    })
    // }

  });
};


function studioPanel() {
  let pp_2 = gsap.matchMedia();
  pp_2.add("(min-width: 1200px)", () => {

    const panelsSectionss = gsap.utils.toArray(".panels-2");
    for (let i = 0; i < panelsSectionss.length; i++) {

      const thePanelsSection: any = panelsSectionss[i];
      const panels = gsap.utils.toArray(".panels-container-2 .panel-2", thePanelsSection);
      const panelsContainer = thePanelsSection.querySelector(".panels-container-2");

      gsap.set(panelsContainer, { height: window.innerHeight });
      gsap.set(panels, { height: window.innerHeight });

      let totalPanelsWidth: any = 0;
      panels.forEach(function (panel: any) {
        totalPanelsWidth += $(panel).width();
      });


      gsap.set(panelsContainer, { width: totalPanelsWidth });
      let scrollTween = gsap.to(panels, {
        x: - totalPanelsWidth + innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: panelsContainer,
          pin: true,
          pinSpacing: true,
          start: "top 0",
          scrub: 1,
          end: (st) => "+=" + totalPanelsWidth,
        }
      });

      const services_items: any = gsap.utils.toArray(".tp-studio-service-item");

      services_items.forEach(function (item: any) {
        gsap.to(item, {
          marginLeft: '0',
          scrollTrigger: {
            trigger: '.tp-studio-service-area',
            containerAnimation: scrollTween,
            start: "left center",
            end: "400px 200px",
            scrub: .5,
          }
        })
      });
    }

  });
};


function servicePanel() {
  const sv = gsap.matchMedia();
  const tl = gsap.timeline();
  sv.add("(min-width: 991px)", () => {
    const projectpanelss = document.querySelectorAll('.project-panel-2')
    projectpanelss.forEach((section) => {
      tl.to(section, {
        scrollTrigger: {
          trigger: section,
          pin: section,
          scrub: 1,
          start: 'top top',
          end: "bottom 100%",
          endTrigger: '.project-panel-area-2',
          pinSpacing: false,
          markers: false,
        },
      })
    })

  });
};




export { panelOneAnimation, panelTwoAnimation, studioPanel,servicePanel };
