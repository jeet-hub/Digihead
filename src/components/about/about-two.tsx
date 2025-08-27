import React from "react";
import Link from "next/link";
import Image from "next/image";
import shape from '@/assets/img/home-04/about/about-shape-2.png'
import shape_2 from '@/assets/img/home-04/about/about-shape-1.png'

export default function AboutTwo() {
  return (
    <div className="tp-about-4-area pt-100 pb-110 p-relative">
      <div className="tp-about-4-shape-2">
        <Image
          className="tp-zoom-in-out"
          src={shape}
          alt="shape"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-md-10">
            <div className="tp-about-4-title-box tp_fade_bottom">
              <h4 className="tp-about-4-title">
                Find out more about the team behind the best and fastest Liko
                minimal portfolio HTML Template
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-3 col-lg-2 col-md-3">
            <div className="tp-about-4-shape-1">
              <Image src={shape_2} alt="shape-2" />
            </div>
          </div>
          <div className="col-xl-9 col-lg-10 col-md-9">
            <div className="tp-about-4-content-wrap">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="tp-about-4-content item-1 tp_fade_bottom">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas varius tortor nibh, sit amet tempor nibh finibus
                      et. Aenean eu enim justo.
                    </p>
                    <Link href="/about-us">Read more About</Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="tp-about-4-content item-2 tp_fade_bottom">
                    <p>
                      Ut nec ipsum sapien. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus. Integer id nisi nec nulla luctus
                      lacinia non.
                    </p>
                    <Link href="/contact">Get in Touch</Link>
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
