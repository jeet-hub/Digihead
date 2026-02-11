"use client";
import React from "react";
import Image from "next/image";
import award_img from "@/assets/img/home-02/award/float1.png";
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
              <span className="tp-award-2-subtitle">About Us</span>
              <h2 className="tp-award-2-title tp-award-title-1">DIGI</h2>
              <h2 className="tp-award-2-title tp-award-title-2">
                <span>HEADS</span>
              </h2>
              <p>
                Our simple belief: design shouldn’t just sit there looking pretty — 
                it should do something. It should give you goosebumps. Start conversations. 
                Make people say, “Wait… who did this?” We work with founders, startups, and 
                ambitious teams who care about standing out.
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
                      About <br /> Us
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
