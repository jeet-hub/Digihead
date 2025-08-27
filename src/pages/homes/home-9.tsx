"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import HeaderEight from "@/layouts/headers/header-eight";
import PortfolioSliderHomeNine from "@/components/portfolio/slider/portfolio-slider-home-nine";
import ThemeSetting from "@/components/theme-setting";

const HomeNineMain = () => {
  const [whiteCls, setWhiteCls] = React.useState(true);
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {}, 100);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div
            className={`tp-porfolio-10-main ${whiteCls ? "header-white" : ""}`}
          >
            {/* header area start */}
            <HeaderEight style_2={true} container="1685" />
            {/* header area end */}

            <main>
              {/* portfolio slider start */}
              <PortfolioSliderHomeNine setWhiteCls={setWhiteCls} />
              {/* portfolio slider end */}
            </main>
          </div>
        </div>
      </div>

      {/* theme switcher */}
      <ThemeSetting />
      {/* theme switcher */}
    </div>
  );
};

export default HomeNineMain;
