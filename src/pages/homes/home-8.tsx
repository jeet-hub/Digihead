'use client';
import { gsap } from "gsap";
import React, { useEffect } from "react";
import useScrollSmooth from '@/hooks/use-scroll-smooth';
import { ScrollSmoother, ScrollTrigger, SplitText, cursorAnimation } from '@/plugins';
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import HeaderEight from "@/layouts/headers/header-eight";
import { perspective } from "@/utils/perspective-anim";
import PerspectivePortfolioSlider from "@/components/portfolio/slider/perspective-port-slider";
import { revelAnimationOne } from "@/utils/title-animation";
import ThemeSetting from "@/components/theme-setting";

const HomeEightMain = () => {
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-magic-cursor");
    return () => {
      document.body.classList.remove("tp-magic-cursor");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && document.querySelector('.tp-magic-cursor')) {
      cursorAnimation();
    }
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      perspective();
      revelAnimationOne();
    }, 100);
    return () => clearTimeout(timer);
  })


  return (
    <div>

      {/* magic cursor start */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
      {/* magic cursor end */}


      {/* header area start */}
      <HeaderEight />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>

            {/* perspective area start */}
            <PerspectivePortfolioSlider />
            {/* perspective area end */}

          </main>
        </div>
      </div>

      {/* theme switcher */}
      <ThemeSetting/>
      {/* theme switcher */}
    </div>
  );
};

export default HomeEightMain;