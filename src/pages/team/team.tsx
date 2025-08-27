"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import TeamArea from "@/components/team/team-area";
import StudioPanelFour from "@/components/studio-panels/studio-panel-4";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import {charAnimation,titleAnimation} from "@/utils/title-animation";
import { hoverBtn } from "@/utils/hover-btn";

const TeamMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      hoverBtn();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* team hero */}
            <div className="tm-hero-area tm-hero-ptb">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-hero-content">
                      <span className="tm-hero-subtitle">Liko Studio</span>
                      <h4 className="tm-hero-title tp-char-animation">
                        Talented team
                      </h4>
                    </div>
                    <div className="tm-hero-text tp_title_anim">
                      <p>
                        We’re a diverse team that works as fancies attention to
                        details, enjoys beers on Friday nights and aspires to
                        design the dent in the universe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* team hero */}

            {/* team area */}
            <TeamArea/>
            {/* team area */}

            {/* testimonial area */}
            <StudioPanelFour style_2={true}/>
            {/* testimonial area */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" whiteFooter={true} />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default TeamMain;
