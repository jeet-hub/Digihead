"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderTwelve from "@/layouts/headers/header-twelve";
import { IProductDT } from "@/types/product-d-t";
import ShopDetailsArea from "@/components/shop/details/shop-details-area";
import ShopDetailsBottomArea from "@/components/shop/details/shop-details-bottom-area";
import FooterSix from "@/layouts/footers/footer-six";

// prop type
type IProps = {
  product: IProductDT;
};

const ShopDetailsMain = ({ product }: IProps) => {
  useScrollSmooth();

  useGSAP(() => {
    const sp_2 = gsap.matchMedia();
    sp_2.add("(min-width: 1200px)", () => {
      if (document.querySelector(".tp-shop-details-area")) {
        ScrollTrigger.create({
          trigger: ".tp-shop-details-area",
          start: "top -18%",
          end: "bottom 110.5%",
          pin: ".tp-shop-details-right-wrap",
          pinSpacing: true,
        });
      }
    });
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderTwelve />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>

            {/* shop details */}
            <ShopDetailsArea product={product} />
            {/* shop details */}

            {/* shop details area */}
            <ShopDetailsBottomArea product={product} />
            {/* shop details area */}
          </main>

          {/* footer area */}
          <FooterSix />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default ShopDetailsMain;
