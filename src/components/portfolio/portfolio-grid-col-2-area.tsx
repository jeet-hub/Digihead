import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { UpArrow } from "../svg";
import { useIsotop } from "@/hooks/use-isotop";

// images
import port_1 from "@/assets/img/inner-project/portfolio-col-2/port-1.jpg";
import port_2 from "@/assets/img/inner-project/portfolio-col-2/port-2.jpg";
import port_3 from "@/assets/img/inner-project/portfolio-col-2/port-3.jpg";
import port_4 from "@/assets/img/inner-project/portfolio-col-2/port-4.jpg";
import port_5 from "@/assets/img/inner-project/portfolio-col-2/port-5.jpg";
import port_6 from "@/assets/img/inner-project/portfolio-col-2/port-6.jpg";

// data
const portfolio_data = [
  {
    id: 1,
    img: port_1,
    category: "Shooting",
    title: "Roadtrip",
    year: "2024",
    show: "cat2 cat4 cat3",
  },
  {
    id: 2,
    img: port_2,
    category: "Studio",
    title: "Fashion",
    year: "2023",
    show: "cat3 cat1 cat3",
  },
  {
    id: 3,
    img: port_3,
    category: "Agency",
    title: "Tesla",
    year: "2022",
    show: "cat4 cat4 cat2 cat3",
  },
  {
    id: 4,
    img: port_4,
    category: "Studio",
    title: "Cosmetic",
    year: "2024",
    show: "cat1 cat4 cat3",
  },
  {
    id: 5,
    img: port_5,
    category: "Visual",
    title: "Porsche",
    year: "2024",
    show: "cat4 cat1 cat2",
  },
  {
    id: 6,
    img: port_6,
    category: "Agency",
    title: "Fiedunit",
    year: "2024",
    show: "cat1 cat2 cat3 cat4",
  },
];

export default function PortfolioGridColTwoArea() {
  const { initIsotop, isotopContainer } = useIsotop();

  useEffect(() => {
    initIsotop();
  }, [initIsotop]);
  return (
    <div className="tp-project-5-2-area tp-project-5-2-pt pb-130">
      <div className="container container-1530">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="portfolio-filter masonary-menu d-flex justify-content-center mb-40">
              <button data-filter="*" className="active">
                <span>SHOW ALL</span>
              </button>
              <button data-filter=".cat1">
                <span>AGENCY</span>
              </button>
              <button data-filter=".cat2">
                <span>Visual</span>
              </button>
              <button data-filter=".cat3">
                <span>SHOOTING</span>
              </button>
              <button data-filter=".cat4">
                <span>STUDIO</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row grid" ref={isotopContainer}>
          {portfolio_data.map((item) => (
            <div
              key={item.id}
              className={`col-xl-6 col-lg-6 col-md-6 grid-item ${item.show}`}
            >
              <div className="tp-project-5-2-thumb anim-zoomin-wrap mb-30 not-hide-cursor p-relative" data-cursor="View<br>Demo">
                <Link href="/portfolio-details-1" className="cursor-hide">
                  <Image
                    className="anim-zoomin"
                    src={item.img}
                    alt="port-img"
                    style={{ height: "auto" }}
                  />
                  <div className="tp-project-5-2-category tp_fade_anim">
                    <span>{item.category}</span>
                  </div>
                  <div className="tp-project-5-2-content tp_fade_anim">
                    <span className="tp-project-5-2-meta">{item.year}</span>
                    <h4 className="tp-project-5-2-title-sm">{item.title}</h4>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-projct-5-2-btn-box mt-50 d-flex justify-content-center">
              <div className="tp-hover-btn-wrapper">
                <Link
                  className="tp-btn-circle style-2 tp-hover-btn-item tp-hover-btn"
                  href="/portfolio-grid-col-4-fullwidth"
                >
                  <span className="tp-btn-circle-text">
                    More <br /> Projects
                  </span>
                  <span className="tp-btn-circle-icon">
                    <UpArrow />
                  </span>
                  <i className="tp-btn-circle-dot"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
