import React from "react";
import Image from "next/image";
import { UpArrow } from "../svg";

// images
import brand_1 from "@/assets/img/inner-brand/brand-1.jpg";
import brand_2 from "@/assets/img/inner-brand/brand-2.jpg";
import brand_3 from "@/assets/img/inner-brand/brand-3.jpg";
import brand_4 from "@/assets/img/inner-brand/brand-4.jpg";
import brand_5 from "@/assets/img/inner-brand/brand-5.jpg";
import brand_6 from "@/assets/img/inner-brand/brand-6.jpg";
import brand_7 from "@/assets/img/inner-brand/brand-7.jpg";
import brand_8 from "@/assets/img/inner-brand/brand-8.jpg";
import brand_9 from "@/assets/img/inner-brand/brand-9.jpg";
import brand_10 from "@/assets/img/inner-brand/brand-10.jpg";
import brand_11 from "@/assets/img/inner-brand/brand-11.jpg";
import brand_12 from "@/assets/img/inner-brand/brand-12.jpg";
import brand_13 from "@/assets/img/inner-brand/brand-13.jpg";
import brand_14 from "@/assets/img/inner-brand/brand-14.jpg";
import brand_15 from "@/assets/img/inner-brand/brand-15.jpg";

// brand images
const brand_images = [
  brand_1,
  brand_2,
  brand_3,
  brand_4,
  brand_5,
  brand_6,
  brand_7,
  brand_8,
  brand_9,
  brand_10,
  brand_11,
  brand_12,
  brand_13,
  brand_14,
  brand_15,
];

export default function BrandMainArea() {
  return (
    <div className="bd-brand-area">
      <div className="container">
        <div className="row gx-80 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
          {brand_images.map((b, i) => (
            <div className="col" key={i}>
              <div className="bd-brand-item mb-80">
                <Image src={b} alt="brand-img" style={{ height: "auto" }} />
              </div>
            </div>
          ))}
        </div>
        <div className="row justify-content-center">
          <div className="bd-brand-btn-box mb-100 d-flex justify-content-center">
            <div className="tp-hover-btn-wrapper">
              <a
                className="tp-btn-circle style-2 tp-hover-btn-item tp-hover-btn"
                href="#"
              >
                <span className="tp-btn-circle-text">
                  More <br /> Browser
                </span>
                <span className="tp-btn-circle-icon">
                  <UpArrow />
                </span>
                <i className="tp-btn-circle-dot"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
