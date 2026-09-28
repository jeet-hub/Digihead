"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { project_details_data } from "./project-details-data";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// Internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import Social from "@/components/social/social";
import { Dots, Share } from "@/components/svg";
import { projectDetailsPin } from "@/utils/project-anim";
import FooterTwo from "@/layouts/footers/footer-two";

// Animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";

const PortfolioDetailsOneContent = () => {
  const [showSocial, setShowSocial] = React.useState(false);

  const searchParams = useSearchParams();

  useScrollSmooth();

  /*
  |--------------------------------------------------------------------------
  | GET PROJECT ID FROM URL
  |--------------------------------------------------------------------------
  |
  | /portfolio-details-1?id=1
  | /portfolio-details-1?id=2
  | /portfolio-details-1?id=3
  |
  */

  // searchParams can be null, so use optional chaining
  const projectId = Number(searchParams?.get("id")) || 1;

  const project =
    project_details_data.find((item) => item.id === projectId) ||
    project_details_data[0];

  const currentIndex = project_details_data.findIndex(
    (item) => item.id === project.id
  );

  const prevProject =
    project_details_data[
      currentIndex <= 0 ? project_details_data.length - 1 : currentIndex - 1
    ];

  const nextProject =
    project_details_data[
      currentIndex >= project_details_data.length - 1 ? 0 : currentIndex + 1
    ];

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      projectDetailsPin();
    }, 100);

    return () => clearTimeout(timer);
  }, [project.id]);

  return (
    <Wrapper>
      <HeaderEleven cls="tp-inner-header-border" />

      {/* SMOOTH SCROLL */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* PORTFOLIO DETAILS */}
            <div className="project-details-1-area project-details-1-pt">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  {/* LEFT SIDE - PROJECT IMAGES */}
                  <div className="col-xl-7">
                    <div className="project-details-1-left">
                      {project.images.map((imgSrc, index) => (
                        <div
                          key={index}
                          className="project-details-1-thumb mb-10"
                        >
                          <Image
                            src={imgSrc}
                            alt={`${project.title} - ${index + 1}`}
                            width={1200}
                            height={800}
                            style={{
                              width: "100%",
                              height: "auto",
                            }}
                            priority={index === 0}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="col-xl-5">
                    <div className="project-details-1-right-wrap">
                      <div className="project-details-1-right p-relative">
                        {/* TITLE */}
                        <div className="project-details-1-title-box">
                          <span className="project-details-1-subtitle">
                            <i>{project.number}</i>
                            {project.category}
                          </span>

                          <h4 className="project-details-1-title">
                            {project.title}
                          </h4>

                          <p>{project.description}</p>
                        </div>

                        {/* PROJECT INFORMATION */}
                        <div className="project-details-1-info-wrap">
                          {/* CLIENT */}
                          <div className="project-details-1-info">
                            <span>Client</span>
                            <h4>{project.client}</h4>
                          </div>

                          {/* DATE */}
                          <div className="project-details-1-info">
                            <span>Date</span>
                            <h4>{project.date}</h4>
                          </div>

                          {/* SERVICES */}
                          <div className="project-details-1-info">
                            <span>Services</span>
                            <h4>{project.services}</h4>
                          </div>

                          {/* DELIVERABLES */}
                          <div className="project-details-1-info">
                            <span>Deliverables</span>
                            <h4>{project.deliverables}</h4>
                          </div>
                        </div>

                        {/* SOCIAL SHARE */}
                        <div className="project-details-1-social">
                          {showSocial && (
                            <div className="project-details-1-social-inner">
                              <Social />
                            </div>
                          )}

                          <div className="project-details-1-social-main">
                            <a
                              className="share-icon pointer"
                              onClick={() => setShowSocial(!showSocial)}
                            >
                              <span>
                                <Share />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* PREVIOUS / NEXT NAVIGATION */}
                      <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
                        {/* PREVIOUS */}
                        <Link
                          className="project-details-1-prev"
                          href={`/portfolio-details-1?id=${prevProject.id}`}
                        >
                          <i className="fa-sharp fa-regular fa-arrow-left"></i>
                          <span>Prev</span>
                        </Link>

                        {/* DOTS */}
                        <Link href="/portfolio-wrapper">
                          <span>
                            <Dots />
                          </span>
                        </Link>

                        {/* NEXT */}
                        <Link
                          className="project-details-1-next"
                          href={`/portfolio-details-1?id=${nextProject.id}`}
                        >
                          <span>Next</span>
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* FOOTER */}
          <FooterTwo topCls="" />
        </div>
      </div>
    </Wrapper>
  );
};

/*
| useSearchParams() requires a Suspense boundary during static build,
| so the exported component wraps the content in <Suspense>.
*/
const PortfolioDetailsOneMain = () => {
  return (
    <Suspense fallback={null}>
      <PortfolioDetailsOneContent />
    </Suspense>
  );
};

export default PortfolioDetailsOneMain;