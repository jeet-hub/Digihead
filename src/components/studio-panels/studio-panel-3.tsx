import React from "react";
import Image from "next/image";
import Link from "next/link";
// images
import shape from '@/assets/img/home-08/hero/shape-1.png';
import port_1 from "@/assets/img/home-12/portfolio/port-1.jpg";
import port_2 from "@/assets/img/home-12/portfolio/port-2.jpg";
import port_3 from "@/assets/img/home-12/portfolio/port-3.jpg";
import port_4 from "@/assets/img/home-12/portfolio/port-4.jpg";
import port_5 from "@/assets/img/home-12/portfolio/port-5.jpg";
import port_6 from "@/assets/img/home-12/portfolio/port-6.jpg";

const portfolio_data = [
  {
    id: 1,
    img: port_1,
    title: "Digital Thinker",
  },
  {
    id: 2,
    img: port_2,
    title: "Magazine Cover",
  },
  {
    id: 3,
    img: port_3,
    title: "Twin Tigers",
  },
  {
    id: 4,
    img: port_4,
    title: "Squarespace Brand",
  },
  {
    id: 5,
    img: port_5,
    title: "Markus Erikkson",
  },
  {
    id: 6,
    img: port_6,
    title: "Twin Tigers",
  },
];

export default function StudioPanelThree() {
  return (
    <div className="panel-2 tp-studio-height">
      <div className="tp-studio-portfolio-area d-flex align-items-end tp-studio-height tp-studio-plr p-relative fix pt-100 pb-60">
        <div className="tp-studio-portfolio-shape d-none d-md-block">
          <Image src={shape} alt="shape" style={{height:"auto"}} />
        </div>
        <div className="container container-1630">
          <div className="row align-items-end counter-row">
            <div className="col-xl-3 col-lg-6">
              <div className="tp-studio-portfolio-title-box">
                <h4 className="tp-studio-portfolio-title">
                  Unique & <br /> Creative Studio
                </h4>
                <p>
                  The list is far from is exhaustive we all have our own
                  predictions and predilections
                </p>
                <Link
                  className="tp-btn-black-sm"
                  href="/portfolio-grid-col-4-fullwidth"
                >
                  View More
                </Link>
              </div>
            </div>
            <div className="col-xl-9 col-lg-12">
              <div className="tp-studio-line-wrap p-relative">
                <div className="tp-studio-portfolio-wrap p-relative tp-marker-tab">
                  {portfolio_data.map((item) => (
                    <div
                      key={item.id}
                      className="tp-studio-portfolio-item p-relative"
                    >
                      <div className="tp-studio-portfolio-inner-title-box">
                        <h4 className="tp-studio-portfolio-inner-title">
                          <Link href="/portfolio-custom-light">{item.title}</Link>
                          <span>{item.id < 9 ? `0${item.id}` : item.id}</span>
                        </h4>
                      </div>
                      <div className="tp-studio-portfolio-img">
                        <Image
                          src={item.img}
                          alt="portfolio-img"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <span id="myline"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
