import React from "react";
import { Metadata } from "next";
import PortfolioGridColFourMain from "@/pages/portfolio/portfolio-grid-col-4-main";

export const metadata: Metadata = {
  title: "Liko - Portfolio Grid Col 4 page",
};

const PortfolioGridColFourPage = () => {
  return (
    <PortfolioGridColFourMain/>
  );
};

export default PortfolioGridColFourPage;
