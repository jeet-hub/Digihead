
"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import useScrollSmooth from "@/hooks/use-scroll-smooth";
import {
  ScrollSmoother,
  ScrollTrigger,
  SplitText,
} from "@/plugins";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  SplitText
);


// ================= layouts =================

import Wrapper from "@/layouts/wrapper";
import HeaderTwo from "@/layouts/headers/header-two";
import FooterTwo from "@/layouts/footers/footer-two";
import BigText from "@/components/big-text";


// ================= Home-2 sections =================

import HeroBannerTwo from "@/components/hero-banner/hero-banner-two";
import AboutOne from "@/components/about/about-one";
import VideoTwo from "@/components/video/video-two";
import ServiceTwo from "@/components/service/service-two";
import ProjectTwo from "@/components/project/project-two";
import LineText from "@/components/line-text/line-text";


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

import {
  panelOneAnimation,
  servicePanel,
} from "@/utils/panel-animation";

import { awardAnimOne } from "@/utils/award-anim";
import { instagramAnim } from "@/utils/instagram-anim";
import { hoverBtn } from "@/utils/hover-btn";


const HomeMain = () => {

  // =====================================================
  // SMOOTH SCROLL
  // =====================================================

  useScrollSmooth();


  // =====================================================
  // BODY CLASS
  // =====================================================

  useEffect(() => {

    document.body.classList.add("tp-smooth-scroll");

    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };

  }, []);


  // =====================================================
  // GSAP
  // =====================================================

  useGSAP(() => {

    const timer = setTimeout(() => {

      // Hero
      heroTitleAnim();
      heroBgAnimation();

      // Bounce
      bounceAnimation();

      // Video
      videoAnimTwo();

      // Project
      panelOneAnimation();

      // Award
      awardAnimOne();

      // Instagram
      instagramAnim();

      // Service Six
      servicePanel();

      // Hover
      hoverBtn();

    }, 100);

    return () => clearTimeout(timer);

  });


  // =====================================================
  // RENDER
  // =====================================================

  return (
    <Wrapper>

      {/* =================================================
          HEADER
      ================================================= */}

      <HeaderTwo />


      <div id="smooth-wrapper">

        <div id="smooth-content">


          {/* =================================================
              MAIN
          ================================================= */}

          <main>

            <HeroBannerTwo />

            <AboutOne />

            {/* <AwardTwo /> */}

            <VideoTwo />

            <ServiceTwo />

            {/* <PortfolioSliderHomeTwelve /> */}

            <ProjectTwo />

            <LineText />

            {/* <InstagramArea /> */}


            {/* =================================================
                ADDED SECTIONS
            ================================================= */}

            <ServiceSix />

            
            <BigText />

          </main>


          {/* =================================================
              FOOTER
          ================================================= */}
      
      <FooterTwo topCls="" />


        </div>

      </div>

    </Wrapper>
  );
};


export default HomeMain;