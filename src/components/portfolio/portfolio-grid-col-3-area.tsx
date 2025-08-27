import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { UpArrow } from "../svg";
import { useIsotop } from "@/hooks/use-isotop";


// data
const portfolio_data = [
  {
    id: 1,
    img: "/assets/img/inner-project/portfolio-col-2/port-9.jpg",
    category: "Branding",
    title: "The Stage",
    year: "2024",
    show: "cat2 cat4",
  },
  {
    id: 2,
    img: "/assets/img/inner-project/portfolio-col-2/port-8.jpg",
    category: "Creative",
    title: "Big dream",
    year: "2023",
    show: "cat2 cat4 cat3",
  },
  {
    id: 3,
    img: "/assets/img/inner-project/portfolio-col-2/port-7.jpg",
    category: "Concept",
    title: "Sed Lectus",
    year: "2023",
    show: "cat4 cat2 cat3",
  },
  {
    id: 4,
    img: "/assets/img/inner-project/portfolio-col-2/port-6.jpg",
    category: "Branding",
    title: "Art Direction",
    year: "2024",
    show: "cat2 cat4 cat3",
  },
  {
    id: 5,
    img: "/assets/img/inner-project/portfolio-col-2/port-5.jpg",
    category: "Branding",
    title: "Petit Navire",
    year: "2024",
    show: "cat1 cat4 cat3",
  },
  {
    id: 6,
    img: "/assets/img/inner-project/portfolio-col-2/port-4.jpg",
    category: "Branding",
    title: "Big dream",
    year: "2024",
    show: "cat4 cat1 cat3",
  },
  {
    id: 7,
    img: "/assets/img/inner-project/portfolio-col-2/port-3.jpg",
    category: "Branding",
    title: "The Stage",
    year: "2024",
    show: "cat2 cat4 cat3",
  },
  {
    id: 8,
    img: "/assets/img/inner-project/portfolio-col-2/port-2.jpg",
    category: "Creative",
    title: "Big dream",
    year: "2024",
    show: "cat2 cat4",
  },
  {
    id: 9,
    img: "/assets/img/inner-project/portfolio-col-2/port-1.jpg",
    category: "Concept",
    title: "Sed Lectus",
    year: "2024",
    show: "cat1 cat3",
  },
];

// prop type
type IProps = {
  style_2?: boolean;
};
export default function PortfolioGridColThreeArea({ style_2 = false }: IProps) {
  const { initIsotop, isotopContainer } = useIsotop();

  useEffect(() => {
    initIsotop();
  }, [initIsotop]);

  return (
    <div className="tp-project-5-2-area tp-project-5-2-pt pb-130">
      <div className={`container container-${style_2 ? "1800" : "1530"}`}>
        {!style_2 && (
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="portfolio-filter masonary-menu d-flex justify-content-center mb-60">
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
        )}
        <div className="row grid" ref={isotopContainer}>
          {portfolio_data.map((item) => (
            <div
              key={item.id}
              className={`col-xl-4 col-lg-6 col-md-6 grid-item ${item.show}`}
            >
              <div className="tp-project-5-2-thumb mb-30 p-relative not-hide-cursor" data-cursor="View<br>Demo">
                <Link href="/portfolio-details-1" className="cursor-hide">
                    <Image
                      className="anim-zoomin"
                      src={item.img}
                      alt="port-img"
                      width={style_2 ? 573 : 486}
                      height={style_2 ? 683 : 576}
                      style={{ height: "100%" }}
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
                  href="/portfolio-grid-col-4"
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
