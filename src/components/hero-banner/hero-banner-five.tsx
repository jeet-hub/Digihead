import React from "react";
import Link from "next/link";
import Image from "next/image";
import { UpArrow } from "../svg";
import p_img_1 from "@/assets/img/home-05/project/project-2.jpg";
import p_img_2 from "@/assets/img/home-05/project/project-3.jpg";

export default function HeroBannerFive() {
  return (
    <div className="tp-hero-5-area tp-hero-5-space fix">
      <div className="container-fluid">
        <div className="col-xl-12">
          <div className="tp-hero-5-content-box">
            <h4 className="tp-hero-5-title tp-char-animation">
              Experience + <span>Creativity</span>
            </h4>
            <p className="">
              {"We're"} an innovative global ui/ux design agency building
              high-end products <br />
              and experiences that grow your business exponentially.
            </p>
            <Link className="tp-btn-black-square" href="/portfolio-grid-col-2">
              View Our Works
              <span>
                <UpArrow/>
              </span>
            </Link>
          </div>
          <div className="tp-project-5-wrap d-flex align-items-end justify-content-center justify-content-md-end">
            <div className="tp-project-5-text">
              <span>RECENT PROJECT</span>
            </div>
            <div className="tp-project-5-thumb-wrap d-flex align-items-center">
              <div className="tp-project-5-thumb">
                <Link href="/portfolio-details-1">
                  <Image src={p_img_1} alt="project-img" style={{height: "auto"}} />
                </Link>
              </div>
              <div className="tp-project-5-thumb">
                <div className="tp-project-5-video">
                  <video
                    className="play-video"
                    loop={true}
                    muted={true}
                    autoPlay={true}
                    playsInline={true}
                  >
                    <source
                      src="https://html.hixstudio.net/videos/liko/liko-2.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="tp-project-5-thumb">
                <Link href="/portfolio-details-1">
                  <Image src={p_img_2} alt="project-img" style={{height: "auto"}} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
