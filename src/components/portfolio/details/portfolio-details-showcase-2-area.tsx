import React from 'react';
import Image from 'next/image';
import { Leaf, UpArrow, UpArrowTwo } from '@/components/svg';

// images 
import port_d_1 from '@/assets/img/inner-project/showcase/showcase-details-2-2.jpg';
import port_d_2 from '@/assets/img/inner-project/showcase/showcase-details-2-3.jpg';
import port_d_3 from '@/assets/img/inner-project/showcase/showcase-details-2-4.jpg';
import port_d_4 from '@/assets/img/inner-project/showcase/showcase-details-2-5.jpg';
import port_d_5 from '@/assets/img/inner-project/showcase/showcase-details-2-6.jpg';
import port_d_6 from '@/assets/img/inner-project/showcase/showcase-details-2-7.jpg';
import port_d_7 from '@/assets/img/inner-project/showcase/showcase-details-2-8.jpg';
import port_d_8 from '@/assets/img/inner-project/showcase/showcase-details-2-9.jpg';

import fullwidth_img from '@/assets/img/inner-project/showcase/showcase-details-2-10.jpg';
import d_g_img_1 from '@/assets/img/inner-project/showcase/showcase-details-2-11.jpg';
import d_g_img_2 from '@/assets/img/inner-project/showcase/showcase-details-2-12.jpg';

// img data
const img_data = [port_d_1, port_d_2, port_d_3, port_d_4, port_d_5, port_d_6, port_d_7, port_d_8];

export default function PortfolioDetailsShowcaseTwoArea() {
  return (
    <>
    {/* portfolio hero */}
    <div className="showcase-details-2-area showcase-details-2-bg p-relative" style={{backgroundImage: "url(/assets/img/inner-project/showcase/showcase-details-2-1.jpg)"}}>
          <div className="showcase-details-2-link">
            <a className="project-details-custom-link" href="#">
                Visit Website
                <span>
                  <UpArrow/>
                </span>
            </a>
          </div>
          <div className="showcase-details-2-wrapper" data-lag="0.2" data-stagger="0.08">
            <div className="container container-1550">
                <div className="row">
                  <div className="col-xl-8">
                      <div className="showcase-details-2-title-box">
                        <h5 className="showcase-details-2-title mb-20 tp-char-animation">World Fashion</h5>
                        <span className="showcase-details-2-subtitle tp_title_anim">Effortless chic lifestyle</span>
                      </div>
                  </div>
                  <div className="col-xxl-7 col-xl-10">
                      <div className="showcase-details-2-content tp_title_anim">
                        <p>Lorem ipsum dolor sit amet consectetur. Ultrices
                            malesuada sed volutpat elit cum. Viverra dolor
                            maecenas amet dui Netus aliquet.!</p>
                      </div>
                      <div className="showcase-details-2-info-wrap d-flex align-items-center justify-content-between">
                        <div className="showcase-details-2-info tp_fade_bottom">
                            <span>CLIENT</span>
                            <h5>Castro Capital</h5>
                        </div>
                        <div className="showcase-details-2-info tp_fade_bottom">
                            <span>Services</span>
                            <h5>Web Development</h5>
                        </div>
                        <div className="showcase-details-2-info tp_fade_bottom">
                            <span>INDUSTRIES</span>
                            <h5>Photography</h5>
                        </div>
                        <div className="showcase-details-2-info tp_fade_bottom">
                            <span>Date</span>
                            <h5>April 2024</h5>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* portfolio hero */}

      {/* details title  */}
      <div className="showcase-details-2-area pt-120 pb-120">
          <div className="container">
            <div className="row">
                <div className="col-xl-8">
                  <div className="showcase-details-2-section-box">
                      <h4 className="showcase-details-2-section-title tp-char-animation">Simple & Significant</h4>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-3">
                  <div className="showcase-details-2-section-left">
                      <span className="ab-inner-subtitle mb-25">
                        <Leaf/>
                        Objective
                      </span>
                  </div>
                </div>
                <div className="col-xl-9">
                  <div className="showcase-details-2-section-right tp_title_anim">
                      <p>Liko website was using a generic template, felt quite outdated and not in-line with the quality of his work. The main goal was to translate his high-end photography into a digital experience that would honor and present his work in a memorable and contemporary way.</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* details title  */}

      {/* moving image */}
      <div className="showcase-details-2-slider-area pb-120">
          <div className="moving-gallery">
            <div className="showcase-details-2-slider-wrap wrapper-gallery slider-wrap-top d-flex align-items-end mb-20">
              {img_data.slice(0,4).map((imgSrc,i) => (
                <div key={i} className="showcase-details-2-slider-item">
                  <Image src={imgSrc} alt="port-img" style={{height:"auto"}}/>
                </div>
              ))}
            </div>
          </div>

          <div className="moving-gallery">
            <div className="showcase-details-2-slider-wrap wrapper-gallery slider-wrap-bottom d-flex align-items-start">
              {img_data.slice(4,8).map((imgSrc,i) => (
                <div key={i} className="showcase-details-2-slider-item">
                  <Image src={imgSrc} alt="port-img" style={{height:"auto"}}/>
                </div>
              ))}
            </div>
          </div>
      </div>
      {/* moving image */}

      {/* details title 2 */}
      <div className="showcase-details-2-area pb-120">
          <div className="container">
            <div className="row">
                <div className="col-xl-8">
                  <div className="showcase-details-2-section-box">
                      <h4 className="showcase-details-2-section-title tp-char-animation">The Goal</h4>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-3">
                  <div className="showcase-details-2-section-left">
                      <span className="ab-inner-subtitle mb-25">
                        <Leaf/>
                        An introduction
                      </span>
                  </div>
                </div>
                <div className="col-xl-9">
                  <div className="showcase-details-2-content-right tp_title_anim">
                      <p className="pb-25">Liko website was using a generic template, felt quite outdated and not in-line with the quality of his work. The main goal was to translate his high-end photography into a digital experience that would honor and present his work in a memorable and contemporary way.</p>
                      <p>Each case study gets its own identity through the styling options in the custom content management system. The styling options are pre-defined</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* details title 2 */}

      {/* full width image */}
      <div className="showcase-details-2-fullwidth-img">
          <Image data-speed=".8" src={fullwidth_img} alt="fullwidth_img" style={{height:'auto'}}/>
      </div>
      {/* full width image */}

      {/* detail title 3 */}
      <div className="showcase-details-2-area pt-120 pb-120">
          <div className="container">
            <div className="row">
                <div className="col-xl-8">
                  <div className="showcase-details-2-section-box">
                      <h4 className="showcase-details-2-section-title tp-char-animation">The planning..</h4>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-3">
                  <div className="showcase-details-2-section-left">
                      <span className="ab-inner-subtitle mb-25">
                        <Leaf/>
                        Mapping the journey
                      </span>
                  </div>
                </div>
                <div className="col-xl-9">
                  <div className="showcase-details-2-content-right tp_title_anim">
                      <p>The journey of visiting Khajuraho and mapping out all temples for the Khajuraho Digital Expo by HASPR was a truly immersive experience. Our team was tasked with capturing the essence of the UNESCO World Heritage Site and bringing it to life through digital technology.</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* detail title 3 */}

      {/* grid images */}
      <div className="showcase-details-2-grid-area pb-90">
          <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="showcase-details-2-grid-img mb-30">
                      <Image className="img-left" src={d_g_img_1} alt="details-img" style={{height:'auto'}}/>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="showcase-details-2-grid-img mb-30">
                      <Image className="img-right" src={d_g_img_2} alt="details-img" style={{height:'auto'}}/>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* grid images */}

      {/* details title 4 */}
      <div className="showcase-details-2-area pb-120">
          <div className="container">
            <div className="row">
                <div className="col-xl-3">
                  <div className="showcase-details-2-section-left">
                      <span className="ab-inner-subtitle mb-25">
                        <Leaf/>
                        Case Details
                      </span>
                  </div>
                </div>
                <div className="col-xl-9">
                  <div className="showcase-details-2-content-right tp_title_anim">
                      <p>Each case study gets its own identity through the styling options in the custom content management system. The styling options are pre-defined by our design team to makes sure the website looks amazing in every composition.</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* details title 4 */}
    </>
  )
}
