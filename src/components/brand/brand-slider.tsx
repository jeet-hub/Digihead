"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// brand images
import b_1 from "@/assets/img/home-01/brand/brand-1.png";
import b_2 from "@/assets/img/home-01/brand/brand-2.png";
import b_3 from "@/assets/img/home-01/brand/brand-3.png";
import b_4 from "@/assets/img/home-01/brand/brand-4.png";
import b_5 from "@/assets/img/home-01/brand/brand-5.png";
import b_6 from "@/assets/img/home-01/brand/brand-6.png";
import b_7 from "@/assets/img/home-01/brand/brand-7.png";
import b_8 from "@/assets/img/home-01/brand/brand-2.png";


const brand_images = [b_1, b_2, b_3, b_4, b_5, b_6, b_7, b_8,  b_1, b_2, b_3, b_4, b_5, b_6, b_7, b_8];

export default function BrandSlider() {
  return (
    <div className="tp-brand-slider-active fix">
      <Marquee
        speed={100}
        loop={0}
        className="brand-wrapper"
      >
        {brand_images.map((b, i) => (
          <div key={i} className="tp-brand-item" style={{ height: "auto",width: "200px" }}>
            <Image src={b} alt="" />
          </div>
        ))}
      </Marquee>
      {/* <Swiper
        {...slider_setting}
        modules={[Autoplay, FreeMode]}
        className="brand-wrapper"
      >
        {brand_images.map((b, i) => (
          <SwiperSlide key={i}>
            <div className="tp-brand-item">
              <Image src={b} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
}
