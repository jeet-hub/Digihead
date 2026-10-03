
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { UpArrow } from "../svg";
import { useIsotop } from "@/hooks/use-isotop";

// =====================================================
// PORTFOLIO DATA
// =====================================================

const portfolio_data = [
  {
    id: 1,
    img: "/assets/img/home-02/project/adidas-main.jpg",
    category: "Social Media & Event Promotion",
    title: "Adidas Runners",
    year: "2026",
    show: "cat2 cat4",
  },

  {
    id: 2,
    img: "/assets/img/home-02/project/daily-g.jpeg",
    category: "Brand Identity Toolkit & Advertising",
    title: "Daily Grocery",
    year: "2026",
    show: "cat1 cat4",
  },

  {
    id: 3,
    img: "/assets/img/home-02/project/Manatee.jpg",
    category: "Brand Identity Toolkit",
    title: "Manatee",
    year: "2026",
    show: "cat2 cat4",
  },

  {
    id: 4,
    img: "/assets/img/home-02/project/atomy-main.jpg",
    category: "Social Media Creatives",
    title: "Atomy",
    year: "2026",
    show: "cat2 cat3",
  },

  {
    id: 5,
    img: "/assets/img/home-02/project/ganga-county-main.jpg",
    category: "Social Media Creatives & Advertising",
    title: "Ganga County",
    year: "2026",
    show: "cat1 cat3",
  },

  {
    id: 6,
    img: "/assets/img/home-02/project/IAF-main.jpg",
    category: "Bus Exterior Branding",
    title: "Indian Air Force",
    year: "2026",
    show: "cat1 cat4",
  },

  {
    id: 7,
    img: "/assets/img/home-02/project/van.jpg",
    category: "Coffee Table Book Design",
    title: "Varanasi Government",
    year: "2026",
    show: "cat3 cat4",
  },
];


// =====================================================
// PROP TYPE
// =====================================================

type IProps = {
  style_2?: boolean;
};


// =====================================================
// COMPONENT
// =====================================================

export default function PortfolioGridColThreeArea({
  style_2 = false,
}: IProps) {

  const {
    initIsotop,
    isotopContainer,
  } = useIsotop();


  // =====================================================
  // ISOTOPE
  // =====================================================

  useEffect(() => {
    initIsotop();
  }, [initIsotop]);


  return (
    <div className="tp-project-5-2-area tp-project-5-2-pt pb-130">

      <div className="container container-1530">


        {/* =================================================
            FILTER BUTTONS
        ================================================= */}

        {!style_2 && (
          <div className="row justify-content-center">

            <div className="col-xl-8">

              <div className="portfolio-filter masonary-menu d-flex justify-content-center mb-60">

                {/* SHOW ALL */}

                <button
                  data-filter="*"
                  className="active"
                >
                  <span>SHOW ALL</span>
                </button>


                {/* AGENCY */}

                <button data-filter=".cat1">
                  <span>AGENCY</span>
                </button>


                {/* VISUAL */}

                <button data-filter=".cat2">
                  <span>VISUAL</span>
                </button>


                {/* SHOOTING */}

                <button data-filter=".cat3">
                  <span>SHOOTING</span>
                </button>


                {/* STUDIO */}

                <button data-filter=".cat4">
                  <span>STUDIO</span>
                </button>

              </div>

            </div>

          </div>
        )}


        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div
          className="row grid"
          ref={isotopContainer}
        >

          {portfolio_data.map((item) => (

            <div
              key={item.id}
              className={`col-xl-6 col-lg-6 col-md-6 grid-item ${item.show}`}
            >

              <div
                className="tp-project-5-2-thumb mb-30 p-relative not-hide-cursor"
                data-cursor="View<br>Demo"
              >

                <Link
                  href={`/portfolio-details-1?id=${item.id}`}
                  className="cursor-hide"
                >


                  {/* =================================================
                      IMAGE - 890 / 500
                  ================================================= */}

                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "890 / 500",
                      overflow: "hidden",
                    }}
                  >

                    <Image
                      className="anim-zoomin"
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="
                        (max-width: 767px) 100vw,
                        (max-width: 1199px) 50vw,
                        50vw
                      "
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />

                  </div>


                  {/* =================================================
                      CATEGORY
                  ================================================= */}

                  <div className="tp-project-5-2-category tp_fade_anim">

                    <span>
                      {item.category}
                    </span>

                  </div>


                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="tp-project-5-2-content tp_fade_anim">

                    <span className="tp-project-5-2-meta">
                      {item.year}
                    </span>

                    <h4 className="tp-project-5-2-title-sm">
                      {item.title}
                    </h4>

                  </div>

                </Link>

              </div>

            </div>

          ))}

        </div>


        {/* =================================================
            MORE PROJECTS BUTTON
        ================================================= */}

        {/* <div className="row">

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

        </div> */}

      </div>

    </div>
  );
}
