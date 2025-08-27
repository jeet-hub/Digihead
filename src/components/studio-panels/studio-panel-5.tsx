import React from "react";
import { NextArrowTwo } from "../svg";
import Link from "next/link";

export default function StudioPanelFive() {
  return (
    <div className="panel-2 tp-studio-height">
      <div className="tp-studio-cta-area pt-100 pb-100 tp-studio-height tp-studio-plr d-flex justify-content-center align-items-center">
        <div className="container container-1330">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-studio-cta-title-box mb-70 text-center">
                <h4 className="tp-studio-cta-title">
                  {"Let's"} build
                  <span>the next</span> <br />
                  <span>big thing </span>together
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-studio-cta-btn-box mb-45 d-flex justify-content-center">
                <Link
                  className="tp-btn-black-animated p-relative d-inline-flex align-items-center d-none d-md-flex"
                  href="/contact"
                >
                  <span className="btn-expand"></span>
                  <span className="btn-1">Keep</span>
                  <span className="btn-2">In</span>
                  <span className="btn-3">Touch</span>
                </Link>
                <Link className="tp-btn-black d-md-none" href="/contact">
                  Keep In Touch
                </Link>
              </div>
              <div className="tp-studio-cta-subscribe-link text-center">
                <a href="#">
                  Subscribe to the Newsletter
                  <span>
                    <NextArrowTwo />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
