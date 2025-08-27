"use client";
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderTwelve from "@/layouts/headers/header-twelve";
import ShopArea from "@/components/shop/shop-area";
import FooterSix from "@/layouts/footers/footer-six";

const ShopMain = () => {
  useScrollSmooth();

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderTwelve />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* shop breadcrumb */}
            <section className="breadcrumb__area include-bg pt-170 pb-90">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-6">
                    <div className="breadcrumb__content p-relative text-center z-index-1">
                      <h3 className="breadcrumb__title">Shop Grid</h3>
                      <div className="breadcrumb__list">
                        <span>
                          <a href="#">Home</a>
                        </span>
                        <span>Shop Grid</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* shop breadcrumb */}

            {/* shop area */}
            <ShopArea />
            {/* shop area */}
          </main>

          {/* footer area */}
          <FooterSix />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default ShopMain;
