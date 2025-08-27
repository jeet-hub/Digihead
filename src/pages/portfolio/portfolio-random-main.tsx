"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import {
  ScrollSmoother,
  ScrollTrigger,
  SplitText,
  cursorAnimation,
} from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import ProjectOne from "@/components/project/project-one";
import { UpArrowThree } from "@/components/svg";
import LineTextThree from "@/components/line-text/line-text-3";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";

const PortfolioRandomMain = () => {
  useScrollSmooth();

  useEffect(() => {
    document.body.classList.add("tp-magic-cursor");
    return () => {
      document.body.classList.remove("tp-magic-cursor");
    };
  }, []);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      document.querySelector(".tp-magic-cursor")
    ) {
      cursorAnimation();
    }
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  // contact data
  const contact_data = ["Have a project?", "Email us", "Join our team"];
  return (
    <Wrapper>
      {/* magic cursor start */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
      {/* magic cursor end */}

      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div
              className="portfolio-random-bg"
              style={{
                backgroundImage:
                  "url(/assets/img/inner-project/hero/hero-bg-2.png)",
              }}
            >
              {/* portfolio hero */}
              <div className="tm-hero-area tm-hero-ptb p-relative">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <span className="tm-hero-subtitle">Liko Studio</span>
                        <h4 className="tm-hero-title tp-char-animation">
                          Our latest & great projects
                        </h4>
                      </div>
                      <div className="tm-hero-text tp_title_anim">
                        <p>
                          We’re a diverse team that works as fancies attention
                          to details, enjoys beers on Friday nights and aspires
                          to design the dent in the universe.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* portfolio hero */}

              {/* portfolio area */}
              <ProjectOne style_2={true} />
              {/* portfolio area */}
            </div>

            {/* line text */}
            <LineTextThree cls="tp-project-text-slide" data_2={true} />
            {/* line text */}

            {/* contact area */}
            <div className="rm-project-contact-area pb-120">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <div className="rm-project-contact-content mb-40">
                      <span className="tm-hero-subtitle">CONTACT</span>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <div className="rm-project-contact-wrap">
                      {contact_data.map((text, i) => (
                        <a href="#" key={i}>
                          <div className="rm-project-contact-item d-flex align-items-center justify-content-between">
                            <span>{text}</span>
                            <UpArrowThree />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* contact area */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioRandomMain;
