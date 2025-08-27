import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import Social from '@/components/social/social';
import { Dots } from '@/components/svg';

// images
import full_img from '@/assets/img/inner-project/custom/custom-big-1.jpg';
import full_img_2 from '@/assets/img/inner-project/custom/custom-big-2.jpg';
import port_1 from '@/assets/img/inner-project/custom/port-1.jpg';
import port_2 from '@/assets/img/inner-project/custom/port-2.jpg';
import port_3 from '@/assets/img/inner-project/custom/port-3.jpg';

// slider images
const slider_images = [port_1,port_2,port_3,port_2];

// slider setting
const slider_setting:SwiperOptions = {
  slidesPerView: 3,
  loop: true,
  autoplay: true,
  spaceBetween: 20,
  speed: 1000,
  breakpoints: {
    '1400': {
      slidesPerView: 3,
    },
    '1200': {
      slidesPerView: 3,
    },
    '992': {
      slidesPerView: 2,
    },
    '768': {
      slidesPerView: 2,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
}

export default function PortfolioDetailsCustomLightArea() {
  return (
    <>
      {/* portfolio details area */}
      <div className="pd-custom-area pt-145 pb-80">
        <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                  <div className="project-details-1-title-box">
                    <span className="project-details-1-subtitle"><i>01</i>Shooting</span>
                    <h4 className="project-details-1-title fs-100 tp-char-animation">Magazine Cover</h4>
                    <p className="mb-35 tp_title_anim">Designing a portfolio for a wonderful Photographer The site promotes the stunning work of Russian photographer Elena Iv-Skaya. Elena has a passion for highly aesthetic, strong and elegant imagery with saturated colors, and I built a minimalist layout that let her work stand out on its own.</p>
                    <Link className="project-details-custom-link" href="/portfolio-details-2">Visit Website</Link>
                  </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                  <div className="pd-custom-info-wrap">
                    <div className="project-details-1-info-wrap">
                        <div className="project-details-1-info tp_fade_bottom">
                          <span>Client</span>
                          <h4>LikoTheme</h4>
                        </div>
                        <div className="project-details-1-info tp_fade_bottom">
                          <span>Date</span>
                          <h4>October {"'2024"}</h4>
                        </div>
                        <div className="project-details-1-info tp_fade_bottom">
                          <span>Services</span>
                          <h4>UI / UX Design</h4>
                        </div>
                        <div className="project-details-1-info tp_fade_bottom">
                          <span>Share</span>
                          <div className="project-details-2-social">
                              <Social/>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
      {/* portfolio details area */}

      {/* full image */}
      <div className="pd-custom-full-img">
        <Image data-speed=".8" src={full_img} alt="full_img" style={{height: "auto"}}/>
      </div>
      {/* full image */}

      {/* details title area */}
      <div className="pd-visual-content-area pt-125 pb-125">
          <div className="container">
              <div className="row">
                <div className="col-xl-6">
                    <div className="pd-visual-content-left">
                      <div className="pd-visual-title-box">
                          <span className="pd-visual-subtitle tp_fade_bottom">01</span>
                          <h4 className="project-details-1-title fs-100 fw-700 tp-char-animation">Visual Identity</h4>
                      </div>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6">
                    <div className="pd-visual-left-text">
                      <span className="tp-char-animation">Visually match Elena personal style</span>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="pd-visual-right-content">
                      <p className="tp_title_anim">The design needed to be as elegant and clean as possible. I chose a serif font that felt like one you’d see in a fashion newspaper, and plenty of negative space ensures that the pictures do not fight with each other for attention. I also used very muted colors to keep the focus on the saturated ones in Elena’s photos.</p>
                      <div className="pd-visual-right-list">
                          <ul className="tp_fade_bottom">
                            <li>DIGITAL STRATEGY</li>
                            <li>USER EXPERIENCE (UX)</li>
                            <li>USER INTERFACE DESIGN (UI)</li>
                            <li>PRODUCT DEVELOPMENT</li>
                          </ul>
                      </div>
                    </div>
                </div>
              </div>
              <div className="pd-custom-full-img-2 mb-120 mt-120">
                <Image data-speed=".8" src={full_img_2} alt="full-image"/>
              </div>
              <div className="pd-typography-wrap">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="pd-typography-left tp_fade_bottom">
                          <span className="text-1">Typography</span>
                          <span className="text-2">Big Shoulders Display</span>
                          <span className="text-3">abcdefghijklmnopqrstuvwxyz</span>
                          <span className="text-4">0123456789</span>
                          <span className="text-5">Aa</span>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="pd-typography-middle tp_fade_bottom">
                          <div className="pd-typography-left">
                            <span className="text-2">Syne</span>
                            <span className="text-3">abcdefghijklmnopqrstuvwxyz</span>
                            <span className="text-4">0123456789</span>
                            <span className="text-5">Aa</span>
                          </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="pd-typography-color tp_fade_bottom">
                          <h5 className="text-1">Colors</h5>
                          <span className="color-1">#19191A</span>
                          <span className="color-2">#5D5D63</span>
                          <span className="color-3">#ECECEA</span>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
      {/* details title area */}


      {/* slider images area */}
      <div className="pd-visual-slider-wrap pb-120">
          <Swiper {...slider_setting} modules={[Autoplay]} className="swiper-container pd-visual-slider-active">
              {slider_images.map((imgSrc, index) => (
                <SwiperSlide key={index}>
                  <div className="pd-visual-slider-thumb fix">
                    <Image src={imgSrc} alt="port-img" style={{height:"auto"}}/>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      {/* slider images area */}

      {/* details text */}
      <div className="pd-visual-content-area pb-80">
        <div className="container">
            <div className="row">
              <div className="col-xl-6">
                  <div className="pd-visual-content-left">
                    <div className="pd-visual-title-box">
                        <span className="pd-visual-subtitle tp_fade_bottom">02</span>
                        <h4 className="project-details-1-title fs-100 fw-700 tp-char-animation">The Solution</h4>
                    </div>
                  </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6">
                  <div className="pd-visual-left-text">
                    <span className="tp-char-animation">Visually match Elena’s personal style</span>
                  </div>
              </div>
              <div className="col-xl-6">
                  <div className="pd-visual-right-content tp_title_anim">
                    <p>The design needed to be as elegant and clean as possible. I chose a serif font that felt like one you’d see in a fashion newspaper, and plenty of negative space ensures that the pictures do not fight with each other for attention. I also used very muted colors to keep the focus on the saturated ones in Elena’s photos.</p>
                    <p>We build and activate brands through cultural insight, strategic vision, and the power of emotion across every element of its expression.</p>
                  </div>
              </div>
            </div>
        </div>
      </div>
      {/* details text */}


      {/* details navigation */}
      <div className="pd-navigation-area">
        <div className="container">
            <div className="row">
              <div className="col-xl-12">
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
      {/* details navigation */}
    </>
  )
}
