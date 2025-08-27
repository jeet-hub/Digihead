"use client";
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

import HeaderTen from "@/layouts/headers/header-ten";
import PortfolioSliderHomeEleven from "@/components/portfolio/slider/portfolio-slider-home-eleven";
import ThemeSetting from "@/components/theme-setting";
// internal imports

const HomeElevenMain = () => {
  useScrollSmooth();
  return (
    <div>
      {/* header area start */}
      <HeaderTen />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio slider start */}
            <PortfolioSliderHomeEleven />
            {/* portfolio slider end */}
          </main>
        </div>
      </div>

      {/* theme switcher */}
      <ThemeSetting />
      {/* theme switcher */}
    </div>
  );
};

export default HomeElevenMain;
