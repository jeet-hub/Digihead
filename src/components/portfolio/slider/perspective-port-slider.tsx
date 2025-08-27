import React from "react";
import Image from "next/image";
import { Share } from "../../svg";
import Link from "next/link";
// images
import port_1 from "@/assets/img/home-09/slider/slider-1.jpg";
import port_2 from "@/assets/img/home-09/slider/slider-2.jpg";
import port_3 from "@/assets/img/home-09/slider/slider-3.jpg";
import port_4 from "@/assets/img/home-09/slider/slider-4.jpg";
import port_5 from "@/assets/img/home-09/slider/slider-5.jpg";

const portfolio_data = [
  {
    id: 1,
    title: "Keepgrading",
    category: "Branding",
    image: port_1,
  },
  {
    id: 2,
    title: "Fiedunit",
    category: "Branding",
    image: port_2,
  },
  {
    id: 3,
    title: "Roadtrip",
    category: "Branding",
    image: port_3,
  },
  {
    id: 4,
    title: "Perspective",
    category: "Photography",
    image: port_4,
  },
  {
    id: 5,
    title: "Roadtrip",
    category: "Branding",
    image: port_5,
  },
];
export default function PerspectivePortfolioSlider() {
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <React.Fragment>
      <div className="tp-portfolio-9-area">
        <div className="container container-1685">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-perspective-slider">
                {portfolio_data.map((item) => (
                  <div key={item.id} className="tp-slide">
                    <div className="tp-slide-inner">
                      <div
                        className="tp-image"
                        data-background="assets/img/home-09/slider/slider-1.jpg"
                        style={{ backgroundImage: `url(${item.image.src})` }}
                      >
                        <div className="tp-slider-content">
                          <span className="tp-portfolio-9-category tp_reveal_anim">
                            {item.category}
                          </span>
                          <h1
                            className="tp-portfolio-9-title tp_reveal_anim not-hide-cursor"
                            data-cursor="View<br>Demo"
                          >
                            <Link
                              className="cursor-hide"
                              href="/portfolio-showcase-details-2"
                            >
                              {item.title}
                            </Link>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-portfolio-9-social-wrap">
        <div className="container container-1685">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-6">
              <div className="tp-portfolio-9-social-info">
                <span>
                  Follow Us{" "}
                  <Share />
                </span>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-6">
              <div className="tp-portfolio-9-scroll text-end">
                <a onClick={scrollTop} href="#">(Scroll)</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
