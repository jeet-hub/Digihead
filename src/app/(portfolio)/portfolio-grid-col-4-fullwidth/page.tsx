import React from "react";
import { Metadata } from "next";
import PortfolioGridColFourFullwidthMain from "@/pages/portfolio/portfolio-grid-col-4-fullwidth-main";

export const metadata: Metadata = {
  title: "Liko - Portfolio 4 col fullwidth page",
};

const PortfolioGridFourColFullWidthPage = () => {
  return (
    <PortfolioGridColFourFullwidthMain/>
  );
};

export default PortfolioGridFourColFullWidthPage;
