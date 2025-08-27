'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Leaf } from "../svg";
import hero_bg from "@/assets/img/home-02/hero/hero-bg-1.jpg";

const HeroBannerTwo = () => {
  return (
    <div className="tp-hero-2-area tp-hero-2-pt">
      <div className="container container-1870">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-2-wrapper-main">
              <div className="tp-hero-2-wrapper d-flex align-items-center p-relative">
                <div className="tp-hero-2-bg tp-gsap-bg tp-hero-bg-single">
                  <Image src={hero_bg} alt="hero-bg" />
                </div>
                <div className="tp-hero-2-content-wrap p-relative">
                  <div className="tp-hero-2-title-box">
                    <h2 className="tp-hero-2-title text-1 z-index-5">
                      Fashion
                    </h2>
                    <h2 className="tp-hero-2-title text-2">
                      <span>& Branding</span>
                    </h2>
                  </div>
                  <div className="tp-hero-2-content">
                    <p>
                      Bringing Your Fashion {"Brand's"} Unique Identity to Life
                      Through Strategic Marketing and Advertising.
                    </p>
                    <Link
                      className="tp-btn-white"
                      href="/portfolio-grid-col-3-fullwidth"
                    >
                      View More
                      <span>
                        <Leaf />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerTwo;
