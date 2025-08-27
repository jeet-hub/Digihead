"use client";
import React, { useEffect } from "react";
// internal imports
import HeaderNine from "@/layouts/headers/header-nine";
import PortfolioSliderHomeTen from "@/components/portfolio/slider/portfolio-slider-home-ten";
import ThemeSetting from "@/components/theme-setting";

const HomeTenMain = () => {
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  return (
    <div>
      {/* header area start */}
      <HeaderNine />
      {/* header area end */}

      <main>
        {/* portfolio slider start */}
        <PortfolioSliderHomeTen />
        {/* portfolio slider end */}
      </main>

      {/* theme switcher */}
      <ThemeSetting />
      {/* theme switcher */}
    </div>
  );
};

export default HomeTenMain;
