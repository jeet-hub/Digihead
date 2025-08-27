import React from "react";
import { Metadata } from "next";
import PortfolioDetailsVideoMain from "@/pages/portfolio/details/portfolio-details-video-main";


export const metadata: Metadata = {
  title: "Liko - Portfolio Details video page",
};

const PortfolioDetailsVideoPage = () => {
  return (
    <PortfolioDetailsVideoMain/>
  );
};

export default PortfolioDetailsVideoPage;
