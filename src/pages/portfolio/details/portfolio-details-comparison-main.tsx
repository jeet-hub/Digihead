"use client";
import { gsap } from "gsap";
import React from "react";
import ReactCompareImage from 'react-compare-image';

import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import Social from "@/components/social/social";
import { Dots } from "@/components/svg";
// animation

const PortfolioDetailsComparisonMain = () => {

  useScrollSmooth();

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven cls="tp-inner-header-border"/>
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio details area */}
            <div className="project-details-2-area pt-190">
               <div className="container container-1430">
                  <div className="row">
                     <div className="col-xl-12">
                       <div className="project-details-img-comparison">
                           <ReactCompareImage leftImage="/assets/img/inner-project/portfolio-details-2/slide-5.jpg" rightImage="/assets/img/inner-project/portfolio-details-2/slide-4.jpg" handleSize={60} />
                       </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="project-details-2-info-style">
                           <div className="row align-items-start">
                              <div className="col-xl-6">
                                 <div className="project-details-1-title-box pb-50">
                                    <span className="project-details-1-subtitle"><i>01</i>Shooting</span>
                                    <h4 className="project-details-1-title">Roadtrip</h4>
                                    <p>We provide digital experience services to startups and
                                       small businesses. We help our clients succeed by creating
                                       brand identities, digital experiences.!</p>
                                 </div>
                              </div>
                              <div className="col-xl-6">
                                 <div className="project-details-1-info-wrap">
                                    <div className="project-details-1-info">
                                       <span>Client</span>
                                       <h4>LikoTheme</h4>
                                    </div>
                                    <div className="project-details-1-info">
                                       <span>Date</span>
                                       <h4>October {"'2022"}</h4>
                                    </div>
                                    <div className="project-details-1-info">
                                       <span>Services</span>
                                       <h4>UI / UX Design</h4>
                                    </div>
                                    <div className="project-details-1-info">
                                       <span>Share</span>
                                       <div className="project-details-2-social">
                                          <Social/>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
                              <a className="project-details-1-prev" href="#">
                                 <i className="fa-sharp fa-regular fa-arrow-left"></i>
                                 <span>Prev</span>
                              </a>
                              <a href="#">
                                 <span>
                                    <Dots/>
                                 </span>
                              </a>
                              <a className="project-details-1-next" href="#">
                                 <span>Next</span>
                                 <i className="fa-sharp fa-regular fa-arrow-right"></i>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* portfolio details area */}

          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioDetailsComparisonMain;
