'use client';
import React from "react";
import Image from "next/image";
import { SwiperOptions } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import CounterTwo from "../counter/counter-two";
import { NextArrow, PrevArrow } from "../svg";
import shape from "@/assets/img/home-08/testimonial/test-1.png";
import logo from "@/assets/img/home-08/testimonial/test-logo-1.png";

// slider setting
const slider_setting: SwiperOptions = {
  slidesPerView: 1,
  autoplay: true,
  navigation: {
    prevEl: ".tp-studio-prev",
    nextEl: ".tp-studio-next",
  },
};

// testimonial data
const testimonial_data = [
  {
    id: 1,
    logo: logo,
    name: "Chris Hughes",
    designation: "CEO | Gemini Skincare",
    desc: `"Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name."`,
  },
  {
    id: 2,
    logo: logo,
    name: "Daniel Smith",
    designation: "CEO | Gemini Skincare",
    desc: `"Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name."`,
  },
  {
    id: 3,
    logo: logo,
    name: "Brandon Smith",
    designation: "CEO | Gemini Skincare",
    desc: `"Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name."`,
  },
];

// prop type
type IProps = {
  style_2?: boolean;
}
export default function StudioPanelFour({style_2=false}: IProps) {
  return (
    <div className={`${style_2?'':'panel-2 tp-studio-height'}`}>
      <div className={`tp-studio-testimonial-area tp-studio-plr black-bg p-relative fix tp-studio-testimonial-xs-space ${style_2?'tm-testimonial-height':'tp-studio-height'}`}>
        <div className="tp-studio-testimonial-title-box d-none d-md-block">
          <h4 className="tp-studio-testimonial-title">What Our Clients Say</h4>
        </div>
        <div className="container container-1330">
          <div className="tp-studio-funfact-wrap">
            {/* counter area */}
            <CounterTwo />
            {/* counter area */}
          </div>
          <div className="tp-studio-testimonial-wrap pt-120">
            <div className="row align-items-start">
              <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                <div className="tp-studio-testimonial-shape">
                  <Image src={shape} alt="shape" style={{height:"auto"}} />
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3">
                <div className="tp-studio-testimonial-top-title">
                  <span>Testimonials:</span>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-9">
                <div className="tp-studio-testimonial-wrapper">
                  <div className="tp-studio-testimonial-slider-wrap p-relative">
                    <Swiper
                      {...slider_setting}
                      modules={[Navigation]}
                      className="swiper-container tp-studio-testimonial-active fix"
                    >
                      {testimonial_data.map((item, i) => (
                        <SwiperSlide key={item.id}>
                          <div className="tp-studio-testimonial-item">
                            <div className="tp-studio-testimonial-text">
                              <p>{item.desc}</p>
                            </div>
                            <div className="tp-studio-testimonial-user-info-box d-flex align-items-center">
                              <div className="tp-studio-testimonial-user-info">
                                <h4 className="tp-studio-testimonial-user-name">
                                  {item.name}
                                </h4>
                                <span>{item.designation}</span>
                              </div>
                              <div className="tp-studio-testimonial-line d-none d-md-block">
                                <span></span>
                              </div>
                              <div className="tp-studio-testimonial-logo">
                                <Image src={item.logo} alt="logo" />
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="tp-studio-testimonial-arrow">
                      <button className="tp-studio-prev">
                        <span>
                          <PrevArrow />
                        </span>
                      </button>
                      <button className="tp-studio-next">
                        <span>
                          <NextArrow />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
