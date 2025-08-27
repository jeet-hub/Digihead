import React, { CSSProperties } from "react";
import Image from "next/image";
// images
import hero_1 from "@/assets/img/home-08/hero/img-1.jpg";
import hero_2 from "@/assets/img/home-08/hero/img-2.jpg";
import shape from "@/assets/img/home-08/hero/shape-1.png";
import hero_thumb_1 from "@/assets/img/home-08/hero/img-3.jpg";
import hero_thumb_2 from "@/assets/img/home-08/hero/img-4.jpg";
import hero_thumb_3 from "@/assets/img/home-08/hero/img-5.jpg";
import hero_thumb_4 from "@/assets/img/home-08/hero/img-6.jpg";

const imgStyle: CSSProperties = { height: "auto" };

export default function StudioPanelOne() {
  return (
    <div className="panel-2 tp-studio-height">
      <div className="tp-studio-hero-area tp-studio-hero-space tp-studio-height tp-studio-plr p-relative fix pt-145 pb-145">
        <div className="tp-studio-hero-img-1 d-none d-xl-block">
          <Image src={hero_1} alt="hero-img" style={imgStyle} />
        </div>
        <div className="tp-studio-hero-img-2 d-none d-xl-block">
          <Image src={hero_2} alt="hero-img" style={imgStyle} />
        </div>
        <div className="container container-1480">
          <div className="row align-items-center">
            <div className="col-xl-7">
              <div className="tp-studio-hero-title-box p-relative">
                <h1 className="tp-studio-hero-title">
                  Digital Design Experience
                </h1>
                <span className="tp-studio-hero-shape-1 d-none d-md-block">
                  <Image src={shape} alt="hero-img" style={imgStyle} />
                </span>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="tp-studio-hero-right">
                <div className="row gx-90">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="tp-studio-hero-thumb mb-90 text-end">
                      <Image
                        src={hero_thumb_1}
                        alt="hero-img"
                        style={imgStyle}
                      />
                    </div>
                    <div className="tp-studio-hero-thumb text-end">
                      <Image
                        src={hero_thumb_2}
                        alt="hero-img"
                        style={imgStyle}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="tp-studio-hero-thumb mb-90 text-end">
                      <Image
                        src={hero_thumb_3}
                        alt="hero-img"
                        style={imgStyle}
                      />
                    </div>
                    <div className="tp-studio-hero-thumb text-end">
                      <Image
                        src={hero_thumb_4}
                        alt="hero-img"
                        style={imgStyle}
                      />
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
