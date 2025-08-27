"use client";
import React from "react";
import { gsap } from "gsap";
import Image from "next/image";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderSix from "@/layouts/headers/header-six";
import HeroBannerSix from "@/components/hero-banner/hero-banner-six";
import ShopCategory from "@/components/category/shop-category";
import ShopBanner from "@/components/shop/shop-banner";
import ShopProducts from "@/components/shop/shop-products";
// images
import banner_img from "@/assets/img/inner-shop/banner/banner-3.jpg";
import InstagramTwo from "@/components/instagram/instagram-two";
import BrandFour from "@/components/brand/brand-four";
import FooterSix from "@/layouts/footers/footer-six";
// animation

const HomeSixMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      let sp = gsap.matchMedia();
      sp.add("(min-width: 1200px)", () => {
        if (document.querySelectorAll(".tp-shop-area")) {
          ScrollTrigger.create({
            trigger: ".tp-shop-area",
            start: "top -3%",
            end: "bottom 110.5%",
            pin: ".tp-shop-left-thumb",
            pinSpacing: true,
          });
        }
      });
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderSix />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* hero area start */}
            <HeroBannerSix />
            {/* hero area end */}

            {/* category area start */}
            <ShopCategory />
            {/* category area end */}

            {/* shop banner start */}
            <ShopBanner />
            {/* shop banner end */}

            {/* shop product start */}
            <ShopProducts />
            {/* shop product end */}

            {/* shop banner 2 start */}
            <div className="tp-shop-banner-area pb-120">
              <div className="container-fluid">
                <div className="tp-shop-banner-anim">
                  <Image
                    data-speed=".8"
                    className="w-100"
                    src={banner_img}
                    alt="banner-img"
                  />
                </div>
              </div>
            </div>
            {/* shop banner 2 end */}

            {/* instagram area start */}
            <InstagramTwo/>
            {/* instagram area end */}

            {/* brand area start */}
            <BrandFour/>
            {/* brand area end */}
          </main>

          {/* footer area */}
          <FooterSix/>
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeSixMain;
