import React from "react";
import { Metadata } from "next";
import PortfolioGridColThreeFullwidthMain from "@/pages/portfolio/portfolio-grid-col-3-fullwidth-main";

export const metadata: Metadata = {
  title: "Liko - Portfolio Masonry page",
};

const PortfolioGridColThreeFullwidthPage = () => {
  return (
    <PortfolioGridColThreeFullwidthMain/>
  );
};

export default PortfolioGridColThreeFullwidthPage;
