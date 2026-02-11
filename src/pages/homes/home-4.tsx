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
import FooterFour from "@/layouts/footers/footer-four";

// ================= OLD sections (DON'T TOUCH) =================
import HeroBannerTwo from "@/components/hero-banner/hero-banner-two";
import AboutOne from "@/components/about/about-one";


import ServiceSix from "@/components/service/service-six";
import ContactOne from "@/components/contact/contact-one";

// ================= NEW sections =================
import VideoTwo from "@/components/video/video-two";
import ServiceTwo from "@/components/service/service-two";
import ProjectTwo from "@/components/project/project-two";
import AwardTwo from "@/components/award/award-two";
import LineText from "@/components/line-text/line-text";
import InstagramArea from "@/components/instagram/instagram-area";

// ================= animations =================
import { textInvert } from "@/utils/text-invert";
import { fadeAnimation, revelAnimationOne } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import { ctaAnimation } from "@/utils/cta-anim";

// 🔥 IMPORTANT
import { servicePanel, panelOneAnimation } from "@/utils/panel-animation";
import { videoAnimTwo } from "@/utils/video-anim";
import { awardAnimOne } from "@/utils/award-anim";
import { instagramAnim } from "@/utils/instagram-anim";
import { hoverBtn } from "@/utils/hover-btn";

const HomeFourMain = () => {
  useScrollSmooth();

  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  // ✅ ONE useGSAP — NOW COMPLETE
  useGSAP(() => {
    const timer = setTimeout(() => {
      // ===== OLD animations =====
      fadeAnimation();
      revelAnimationOne();
      projectThreeAnimation();
      ctaAnimation();
      textInvert();
      servicePanel(); // ServiceSix

      // ===== NEW animations (REQUIRED) =====
      videoAnimTwo();
      panelOneAnimation(); // 🔥 FIX FOR ProjectTwo SLIDER
      awardAnimOne();
      instagramAnim();
      hoverBtn();
    }, 100);

    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* <HeaderFour /> */}
       <HeaderTwo />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* OLD */}
             <HeroBannerTwo />
              <AboutOne/>
            {/* <HeroBannerFour /> */}
            {/* <AboutThree /> */}
            {/* <BrandThree /> */}
            <div className="content" style={{margin:"0 20px"}}>
        <AwardTwo />
            </div>
            

            {/* NEW */}
            <VideoTwo />
            <ServiceTwo />
            <ProjectTwo />
            
            <LineText />
            {/* <InstagramArea /> */}

            {/* OLD */}
            <ServiceSix />
            <ContactOne />
          </main>

          <FooterFour />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeFourMain;
