import React from "react";
import { Metadata } from "next";
import PortfolioDetailsTwoMain from "@/pages/portfolio/details/portfolio-details-2-main";


export const metadata: Metadata = {
  title: "Liko - Portfolio Details 2 page",
};

const PortfolioDetailsTwoPage = () => {
  return (
    <PortfolioDetailsTwoMain/>
  );
};

export default PortfolioDetailsTwoPage;
