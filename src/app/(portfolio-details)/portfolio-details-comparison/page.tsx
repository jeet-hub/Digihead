import React from "react";
import { Metadata } from "next";
import PortfolioDetailsComparisonMain from "@/pages/portfolio/details/portfolio-details-comparison-main";


export const metadata: Metadata = {
  title: "Liko - Portfolio Details Comparison page",
};

const PortfolioDetailsComparisonPage = () => {
  return (
    <PortfolioDetailsComparisonMain/>
  );
};

export default PortfolioDetailsComparisonPage;
