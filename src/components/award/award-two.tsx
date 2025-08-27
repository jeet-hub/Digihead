"use client";
import React from "react";
import Image from "next/image";
import award_img from "@/assets/img/home-02/award/award-1.png";
import Link from "next/link";
import { UpArrow } from "../svg";

export default function AwardTwo() {
  return (
    <div className="tp-award-2-area tpaward tp-award-2-space p-relative fix">
      <div className="tp-award-2-shape">
        <span className="tp-award-2-circle"></span>
        <span className="tp-award-2-img">
          <Image src={award_img} alt="award-img" />
        </span>
      </div>
      <div className="container container-1650">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-award-2-title-box p-relative">
              <span className="tp-award-2-subtitle">Accolades</span>
              <h2 className="tp-award-2-title tp-award-title-1">award</h2>
              <h2 className="tp-award-2-title tp-award-title-2">
                <span>winning agency</span>
              </h2>
              <p>
                Quality is the common thread in everything we do. It’s not
                something we say, it’s something we’ve been recognized for. And
                we proudly hold these awards as a reminder of how the way you do
                things matters.
              </p>
            </div>
            <div className="tp-award-2-btn-box">
              <div className="tp-projct-5-2-btn-box d-flex justify-content-end">
                <div className="tp-hover-btn-wrapper">
                  <Link
                    className="tp-btn-circle tp-hover-btn-item tp-hover-btn"
                    href="/portfolio-details-1"
                  >
                    <span className="tp-btn-circle-text">
                      See Our <br /> Awards
                    </span>
                    <span className="tp-btn-circle-icon">
                      <UpArrow />
                    </span>
                    <i className="tp-btn-circle-dot"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
