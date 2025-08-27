"use client";
import React, { useEffect } from "react";

// internal imports
import HeaderEight from "@/layouts/headers/header-eight";
import { cursorAnimation } from "@/plugins";
import PortfolioSliderHomeTwelve from "@/components/portfolio/slider/portfolio-slider-home-twelve";
import ThemeSetting from "@/components/theme-setting";

const HomeTwelveMain = () => {
  useEffect(() => {
    document.body.classList.add("tp-magic-cursor");
    return () => {
      document.body.classList.remove("tp-magic-cursor");
    };
  }, []);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      document.querySelector(".tp-magic-cursor")
    ) {
      cursorAnimation();
    }
  }, []);


  return (
    <div>
      {/* magic cursor start */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
      {/* magic cursor end */}

      {/* header area start */}
      <HeaderEight container="1800" />
      {/* header area end */}

      <main>
        {/* portfolio slider start */}
        <PortfolioSliderHomeTwelve />
        {/* portfolio slider end */}
      </main>

      {/* theme switcher */}
      <ThemeSetting/>
      {/* theme switcher */}
    </div>
  );
};

export default HomeTwelveMain;
