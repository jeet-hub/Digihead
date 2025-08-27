import React, { CSSProperties } from "react";
import Image from "next/image";
// images
import hero_star from "@/assets/img/home-04/hero/hero-star.png";
import hero_star_2 from "@/assets/img/home-04/hero/hero-star-2.png";
import hero_img from "@/assets/img/home-04/hero/hero-1.jpg";

// imgStyle
const imgStyle: CSSProperties = { height: "auto" };
export default function HeroBannerThree() {
  return (
    <div className="tp-hero-4-area tp-btn-trigger">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-4-content-wrap">
              <div className="p-relative">
                <div className="tp-hero-4-content p-relative">
                  <h1 className="tp-section-title-200 tp-char-animation">
                    Digital <br /> Experiences
                  </h1>
                  <div className="tp-hero-4-text tp_fade_right">
                    <span>
                      <Image
                        className="tp-zoom-in-out"
                        src={hero_star}
                        alt="star"
                      />
                    </span>
                    <p>Great design services without the pretentiousness.!</p>
                  </div>
                </div>
                <div className="tp-hero-4-achievement tp-btn-bounce d-none d-md-block">
                  <div className="tp-hero-4-star-1">
                    <Image
                      className="tp-zoom-in-out"
                      src={hero_star_2}
                      alt="star"
                    />
                  </div>
                  <div className="tp-hero-4-star-2">
                    <Image
                      className="tp-zoom-in-out-2"
                      src={hero_star_2}
                      alt="star"
                    />
                  </div>
                  <span>
                    <i
                      data-purecounter-duration="1"
                      data-purecounter-end="18"
                      className="purecounter"
                    >
                      18
                    </i>
                    k
                  </span>
                  <p>
                    Projects completed <br /> successfully
                  </p>
                </div>
              </div>
              <div className="tp-hero-4-thumb text-end">
                <Image
                  data-speed=".7"
                  src={hero_img}
                  alt="hero-img"
                  style={imgStyle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
