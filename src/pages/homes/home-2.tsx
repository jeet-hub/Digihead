"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// ================= layouts =================
import Wrapper from "@/layouts/wrapper";
import HeaderTwo from "@/layouts/headers/header-two";
import FooterTwo from "@/layouts/footers/footer-two";

// ================= Home-2 sections (AS IS) =================
import HeroBannerTwo from "@/components/hero-banner/hero-banner-two";
import AboutOne from "@/components/about/about-one";
import VideoTwo from "@/components/video/video-two";
import ServiceTwo from "@/components/service/service-two";
import ProjectTwo from "@/components/project/project-two";
import AwardTwo from "@/components/award/award-two";
import LineText from "@/components/line-text/line-text";
import InstagramArea from "@/components/instagram/instagram-area";
import PortfolioSliderHomeTwelve from "@/components/portfolio/slider/portfolio-slider-home-twelve";


// ================= ADDED sections =================
import ServiceSix from "@/components/service/service-six";
import ContactOne from "@/components/contact/contact-one";

// ================= animations =================
import {
  bounceAnimation,
  heroBgAnimation,
  heroTitleAnim,
} from "@/utils/title-animation";
import { videoAnimTwo } from "@/utils/video-anim";
import { panelOneAnimation, servicePanel } from "@/utils/panel-animation";
import { awardAnimOne } from "@/utils/award-anim";
import { instagramAnim } from "@/utils/instagram-anim";
import { hoverBtn } from "@/utils/hover-btn";

const HomeMain = () => {
  useScrollSmooth();

  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  // ✅ SINGLE useGSAP (HomeTwo + ServiceSix)
  useGSAP(() => {
    const timer = setTimeout(() => {
      // hero
      heroTitleAnim();
      heroBgAnimation();

      // bounce
      bounceAnimation();

      // video
      videoAnimTwo();

      // project slider
      panelOneAnimation();

      // award
      awardAnimOne();

      // instagram
      instagramAnim();

      // service six
      servicePanel();

      // hover
      hoverBtn();
    }, 100);

    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <HeaderTwo />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroBannerTwo />
            <AboutOne />

            <AwardTwo />
            <VideoTwo />
            <ServiceTwo />
                    {/* <PortfolioSliderHomeTwelve /> */}
            
            <ProjectTwo />
            <LineText />
            {/* <InstagramArea /> */}

            {/* ADDED */}
            <ServiceSix />
            <ContactOne />
          </main>

          <FooterTwo />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeMain;
