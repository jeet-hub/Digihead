import React from "react";
import Image from "next/image";
import { Hand } from "../svg";
import shape from '@/assets/img/inner-about/about/shape-1.png';

export default function AboutMeArea() {
  return (
    <div className="ab-about-area ab-about-mt pb-90 z-index-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-about-content p-relative tp_fade_bottom">
              <span>
                <Hand />
                Hi!
              </span>
              <p className="tp-dropcap">
                I’m a Indigo Volet interactive designer, 34 years old and I am a
                self-taught web designer from the USA. I create interfaces, help
                with art direction, & appreciate polished motion design pieces!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-4 mb-40">
                <div className="ab-about-category-title-box tp_fade_bottom ab-2-about-title-style p-relative">
                  <h4 className="ab-about-category-title">
                    Something <br />
                    <span>About me</span>
                  </h4>
                  <Image
                    className="ab-about-shape-1 d-none d-md-block"
                    src={shape}
                    alt="shape"
                  />
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-8">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40 tp_fade_bottom">
                    <div className="ab-about-category-list category-space-1">
                      <span className="ab-about-category-title mb-30">
                        WHAT I DO
                      </span>
                      <ul>
                        <li>Art direction</li>
                        <li>Branding</li>
                        <li>Content Production</li>
                        <li>User Interface Design</li>
                        <li>Animation</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40 tp_fade_bottom">
                    <div className="ab-about-category-list category-space-2">
                      <span className="ab-about-category-title mb-30">
                        Awards
                      </span>
                      <ul>
                        <li>Best Web Design 2019</li>
                        <li>Site of the Day 2021</li>
                        <li>Best Color Sensation 2021</li>
                        <li>UI Trend Winner 2020</li>
                        <li>Site of the Month 2022</li>
                      </ul>
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
