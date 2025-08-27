import React, { useEffect } from "react";
import Link from "next/link";
import { parallaxSlider } from "@/utils/parallax-slider";

const slider_data = [
  {
    id: 1,
    subtitle: "branding",
    title: "Brand some",
  },
  {
    id: 2,
    subtitle: "Digital",
    title: "Digital Thinker",
  },
  {
    id: 3,
    subtitle: "Markus",
    title: "Markus Erickson",
  },
  {
    id: 4,
    subtitle: "Emko",
    title: "Emko Furniture",
  },
  {
    id: 5,
    subtitle: "branding",
    title: "Brand some",
  },
  {
    id: 6,
    subtitle: "Craig",
    title: "Craig Reynolds",
  },
  {
    id: 7,
    subtitle: "Green",
    title: "Green Reel",
  },
];

export default function PortfolioSliderHomeTwelve() {
  useEffect(() => {
    const timer = setTimeout(() => {
      parallaxSlider();
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="parallax-slider-wrapper">
      <div className="parallax-slider">
        <div className="parallax-slider-inner">
          {slider_data.map((item) => (
            <div
              className="parallax-item not-hide-cursor"
              data-cursor="View<br>Demo"
              key={item.id}
            >
              <Link className="cursor-hide" href="/portfolio-showcase-details">
                <div className="parallax-content">
                  <span>{item.subtitle}</span>
                  <h4>{item.title}</h4>
                </div>
                <div className="parallax-img"></div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
