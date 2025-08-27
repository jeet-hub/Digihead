"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Autoplay } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import Image from "next/image";
import Link from "next/link";
import {addEvents, slideNextTransitionStart,slidePrevTransitionStart, verTextFragment} from "@/utils/webgl-anim";
import { WebGL } from "@/plugins";
// images
import showcase_1 from "@/assets/img/inner-project/showcase/showcase-1.jpg";
import showcase_2 from "@/assets/img/inner-project/showcase/showcase-2.jpg";
import showcase_3 from "@/assets/img/inner-project/showcase/showcase-3.jpg";
import showcase_4 from "@/assets/img/inner-project/showcase/showcase-4.jpg";

// slider data
const slider_data = [
  {
    id: 1,
    subtitle: "[ UI, Web Design ]",
    title: "Top <br/> Paddock",
  },
  {
    id: 2,
    subtitle: "[ UI, Web Design ]",
    title: "Band <br/> Some",
  },
  {
    id: 3,
    subtitle: "[ UI, Web Design ]",
    title: "Lune <br/> Lab",
  },
  {
    id: 4,
    subtitle: "[ UI, Web Design ]",
    title: "Park 108 <br/> Nyc",
  },
];

// slider setting
const slider_setting: SwiperOptions = {
  direction: "horizontal",
  loop: false,
  slidesPerView:1,
  touchStartPreventDefault: false,
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  mousewheel: true,
  simulateTouch: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  pagination: {
    el: ".tp-slider-dot",
    clickable: true,
    renderBullet: function (index, className) {
      return '<div className="' + className + '"></div>';
    },
  },
};

// slider images
const slider_images = [showcase_1, showcase_2, showcase_3, showcase_4];
export default function PortfolioSliderHomeEleven() {
  const webGLContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (webGLContainerRef.current) {

      const webGL = new WebGL( {
        vertex: verTextFragment().vertex,
			  fragment: verTextFragment().fragment,
      });

      // Instantiate WebGL
      addEvents(webGL)
      // Append renderer element to container
      webGLContainerRef.current.appendChild(webGL.renderer.domElement);

      // Clean up function
      return () => {
        // Stop WebGL rendering
        webGL.stop();
      };
    }
  }, []);
  return (
    <div id="port-showcase-slider-main">
      <div className="port-showcase-slider-spaces p-relative">
        <div
          className="port-showcase-slider-wrap tp-slider-parallax fix"
          id="showcase-slider-holder"
          data-pattern-img="/assets/img/webgl/1.jpg"
        >
          <div
            className="swiper-container parallax-slider-active p-relative"
            id="showcase-slider"
          >
            <Swiper
              direction="horizontal"
              slidesPerView="auto"
              touchStartPreventDefault={false}
              speed={1000}
              effect="fade"
              loop={true}                 
              mousewheel={true}
              simulateTouch={true}
              navigation={{
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
              }}
              pagination={{
                el: '.tp-slider-dot',
                clickable: true,
              }}
              modules={[Navigation, Pagination, Autoplay, Mousewheel]}
              onSlidePrevTransitionStart={slidePrevTransitionStart}
              onSlideNextTransitionStart={slideNextTransitionStart}
              id="trigger-slides"
            >
              {slider_data.map((item,i) => (
                <SwiperSlide key={item.id}>
                  <div className={`slide-wrap ${i === 0 ? 'active' : ''}`} data-slide={i}></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-8">
                        <div className="port-showcase-slider-item">
                          <div className="port-showcase-slider-content">
                            <span className="port-showcase-slider-subtitle">
                              {item.subtitle}
                            </span>
                            <h4 className="port-showcase-slider-title">
                              <Link
                                href="/portfolio-showcase-details"
                                dangerouslySetInnerHTML={{ __html: item.title }}
                              ></Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="tp-showcase-arrow-box">
              <button className="tp-showcase__button-next swiper-next">
                <i className="fa-light fa-angle-up"></i>
              </button>
              <button className="tp-showcase__button-prev swiper-prev">
                <i className="fa-light fa-angle-down"></i>
              </button>
            </div>
            <div className="tp-slider-dot d-none d-md-block"></div>
            <div className="port-showcase-slider-social tp-hover-btn-wrapper d-none d-md-block">
              <a className="tp-hover-btn-item" href="#">Fb</a>
              <a className="tp-hover-btn-item" href="#">In</a>
              <a className="tp-hover-btn-item" href="#">Be</a>
            </div>
          </div>
        </div>
      </div>

      {/*  canvas slider */}
      <div id="canvas-slider" className="canvas-slider" ref={webGLContainerRef}>
        {slider_images.map((imgSrc, index) => (
        <div key={index} className="slider-img" data-slide={index}>
          <Image
            className="slide-img"
            src={imgSrc}
            alt="showcase-img"
            style={{ height: "auto" }}
          />
        </div>
        ))}
      </div>
      {/* canvas slider  */}
    </div>
  );
}
