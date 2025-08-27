import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UpArrow } from "../svg";
// images
import m_img_1 from "@/assets/img/home-05/mission/mission-1.jpg";
import m_img_2 from "@/assets/img/home-05/mission/mission-2.jpg";

export default function MissionOne() {
  return (
    <div className="tp-mission-area pt-120 pb-120 mb-110 black-bg p-relative">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-mission-title-box mb-80 text-center">
              <h4 className="tp-about-5-title tp_fade_bottom p-relative">
                <span className="tp-about-5-subtitle d-none d-lg-block tp_fade_left">
                  Our vision
                </span>
                We Help Create <br /> and Supercharge Brands
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-mission-thumb">
              <Image
                data-speed=".8"
                src={m_img_1}
                alt="thumb-img"
                style={{ height: "auto" }}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-mission-content">
              <p className="tp_fade_bottom">
                This is where data, know-how, and creativity meet design and
                walk the path to success. Thinking as one, acting as one; always
                by your side pushing boundaries. Our highly specialized approach
                offers a wide spectrum of services.!
              </p>
              <div className="tp-hover-btn-wrapper tp_fade_bottom">
                <Link
                  className="tp-btn-circle-2 tp-hover-btn-item tp-hover-btn"
                  href="/about-us"
                >
                  <span>
                    <UpArrow />
                    <br />
                    About us
                  </span>
                  <i className="tp-btn-circle-dot"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-mission-right-thumb">
        <Image
          data-speed=".9"
          src={m_img_2}
          alt="thumb-img"
          style={{ height: "auto" }}
        />
      </div>
    </div>
  );
}
