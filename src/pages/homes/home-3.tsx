"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderThree from "@/layouts/headers/header-three";
import HeroBannerThree from "@/components/hero-banner/hero-banner-three";
import AboutTwo from "@/components/about/about-two";
import ServiceThree from "@/components/service/service-three";
import LineTextTwo from "@/components/line-text/line-text-2";
import ProjectThree from "@/components/project/project-three";
import BrandTwo from "@/components/brand/brand-two";
import TeamTwo from "@/components/team/team-two";
import FooterThree from "@/layouts/footers/footer-three";
// animation
import { bounceAnimation, charAnimation, fadeAnimation, revelAnimationTwo } from "@/utils/title-animation";
import { serviceMarqueAnim } from "@/utils/scroll-marque";
import { panelTwoAnimation } from "@/utils/panel-animation";
import { hoverBtn } from "@/utils/hover-btn";

const HomeThreeMain = () => {
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
      serviceMarqueAnim();
      panelTwoAnimation();
      revelAnimationTwo();
      hoverBtn();
      bounceAnimation();
    },100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderThree />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div
              className="tp-overlay-bg black-bg-2"
              style={{
                backgroundImage: "url(/assets/img/home-04/hero/overly.png)",
              }}
            >
              {/* hero area start */}
              <HeroBannerThree />
              {/* hero area end */}

              {/* about area start */}
              <AboutTwo />
              {/* about area end */}
            </div>

            {/* service area start */}
            <ServiceThree />
            {/* service area end */}

            {/* marquee text */}
            <LineTextTwo />
            {/* marquee text */}

            {/* portfolio area */}
            <ProjectThree />
            {/* portfolio area */}

            {/* brand area */}
            <BrandTwo />
            {/* brand area */}

            {/* team area */}
            <TeamTwo />
            {/* team area */}
          </main>

          {/* footer area */}
          <FooterThree />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeThreeMain;
