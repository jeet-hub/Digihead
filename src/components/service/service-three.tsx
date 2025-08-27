"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import Link from "next/link";
import Image from "next/image";

// internal imports
import star_icon from "@/assets/img/home-04/service/sv-star-1.png";
import sv_1 from "@/assets/img/home-04/service/sv-icon-1.png";
import sv_2 from "@/assets/img/home-04/service/sv-icon-2.png";
import sv_3 from "@/assets/img/home-04/service/sv-icon-3.png";
import sv_4 from "@/assets/img/home-04/service/sv-icon-4.png";


// slider setting
const slider_setting: SwiperOptions = {
  slidesPerView: 4,
  loop: true,
  autoplay: false,
  spaceBetween: 60,
  speed: 1000,
  breakpoints: {
    "1400": {
      slidesPerView: 4,
    },
    "1200": {
      slidesPerView: 3,
    },
    "992": {
      slidesPerView: 2,
    },
    "768": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "576": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    "0": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
};
// service data
const service_data = [
  {
    id: 1,
    icon: sv_1,
    title: "Website design",
    subtitle: "You’re ready to take your business to higher ground.",
  },
  {
    id: 2,
    icon: sv_2,
    title: "Web development",
    subtitle: "You’re ready to take your business to higher ground.",
  },
  {
    id: 3,
    icon: sv_3,
    title: "UI/UX Design",
    subtitle: "You’re ready to take your business to higher ground.",
  },
  {
    id: 4,
    icon: sv_4,
    title: "Growth",
    subtitle: "You’re ready to take your business to higher ground.",
  },
  {
    id: 5,
    icon: sv_2,
    title: "App development",
    subtitle: "You’re ready to take your business to higher ground.",
  },
  {
    id: 6,
    icon: sv_4,
    title: "Marketing",
    subtitle: "You’re ready to take your business to higher ground.",
  },
];
export default function ServiceThree() {
  return (
    <div
      className="tp-service-4-area pt-120 pb-170 fix"
      data-background="assets/img/home-04/brand/overly.png"
      style={{ backgroundImage: "url(/assets/img/home-04/brand/overly.png)" }}
    >
      <div className="container">
        <div className="tp-service-4-title-wrap">
          <div className="row align-items-end">
            <div className="col-xl-9 col-lg-9 col-md-9">
              <div className="tp-service-4-title-box tp_fade_bottom">
                <h4 className="tp-service-4-title">
                  We work with select service providers in the disability sector
                  to develop inclusive products tailored to their needs.
                </h4>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="tp-service-4-shape-1 text-start text-md-end">
                <Image
                  className="tp-zoom-in-out"
                  src={star_icon}
                  alt="star"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-service-4-wrap">
        <Swiper
          {...slider_setting}
          className="swiper-container tp-service-4-slider-active"
        >
          {service_data.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="tp-service-4-item"
                style={{
                  backgroundImage: "url(/assets/img/home-04/hero/overly.png)",
                }}
              >
                <div className="tp-service-4-icon">
                  <Image src={item.icon} alt="icon" />
                </div>
                <div className="tp-service-4-content">
                  <h4 className="tp-service-4-title-sm">
                    <Link href="/service">{item.title}</Link>
                  </h4>
                  <p>{item.subtitle}</p>
                  <Link className="tp-service-4-link" href="/service">
                    Read more
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
