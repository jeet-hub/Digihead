'use client';
import React, { CSSProperties } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { Leaf } from "../svg";
// images
import ab_1 from '@/assets/img/home-02/about/ab-1.jpg';
import ab_2 from '@/assets/img/home-02/about/ab-2.jpg';
import ab_3 from '@/assets/img/home-02/about/ab-s.jpg';

// img style
const imgStyle:CSSProperties = {height: "auto"};
const AboutOne = () => {

  return (
    <div className="tp-about-2-area pt-25 pb-45">
      <div className="container container-1480">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-10">
            <div className="tp-about-2-title-box tp-btn-trigger tp-btn-bounce mb-70 text-start text-xl-center">
              <h2 className="tp-about-2-section-title" style={{fontSize:"35"}}>
               Design shouldn’t just sit there looking pretty it should do something.
              </h2>
               {/* <Link
                      className="tp-btn-white"
                      href="/portfolio-grid-col-3-fullwidth"
                    >
                      View More
                      <span><Leaf /></span>
                    </Link> */}
            </div>
           
          </div>
        </div>
        {/* <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6 col-md-6 order-1 order-xl-0">
            <div className="tp-about-2-thumb-box p-relative">
              <div className="tp-about-2-thumb-main">
                <Image src={ab_1} alt="ab-img" style={imgStyle} />
              </div>
              <div className="tp-about-2-thumb-inner">
                <Image src={ab_2} alt="ab-img" style={imgStyle} />
                <span className="tp-about-2-thumb-text">I’M A SUNGLASSES INFLUENCER</span>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-12 order-0 order-xl-1">
            <div className="tp-about-2-content">
              <span>FOLLOW FOR THE BEST EYEWEAR INSPIRATION</span>
              <p className="mb-30">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
              </p>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt .!
              </p>
            </div>
          </div>
          <div className="col-xl-2 col-lg-6 col-md-6 order-1">
            <div className="tp-about-2-right-thumb text-end">
              <Image data-speed="auto" src={ab_3} alt="ab-img" data-lag="0" style={imgStyle} />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutOne;