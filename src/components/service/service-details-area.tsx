import React from "react";
import Image from "next/image";
import Link from "next/link";

// images
import sv_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";

export default function ServiceDetailsArea() {
  return (
    <div className="service-details__area service-details__space pt-200 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-40">
              <span className="service-details__subtitle tp-char-animation">
                Design Studio
              </span>
              <h4 className="sv-hero-title tp-char-animation">
                Logo and branding
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="offset-xl-4 col-xl-5">
              <div className="service-details__banner-text mb-80">
                <p className="mb-30 tp_title_anim">
                  Branding is essential to establish yourself in the market
                  <br /> in a unique and permanent way. At Riveal, we attach{" "}
                  <br /> great importance. We seek to understand your business
                  to better convey your values ​​and your talent <br /> through
                  your brand image.{" "}
                </p>
                <p className="tp_title_anim">
                  Explore our achievements and let yourself be <br /> convinced!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__tab-wrapper text-center mb-120">
              <div className="service-details__tab-thumb">
                <Image
                  data-speed="0.4"
                  src={sv_1}
                  alt="service-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-20">
                <p className="text-1 tp_title_anim">
                  Your logo is at the heart of your identity. An impactful
                  design, tailor-made and in line with your activity will allow
                  you to differentiate yourself and mark your audience.
                </p>
                <p>
                  Great user experience design lets users focus on the task they
                  have to complete and evokes emotion without distracting them.!
                </p>
              </div>
              <div className="service-details__fea-list">
                <ul>
                  <li>Graphic research and production</li>
                  <li>Presentation of your logo on different media</li>
                  <li>
                    Advice on the graphic orientation of your logo or its
                    redesign
                  </li>
                  <li>Delivery of your logo in professional formats</li>
                </ul>
              </div>
              <div className="service-details__sm-thumb-wrap mb-60">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                    <div className="service-details__sm-thumb">
                      <Image
                        src={sv_2}
                        alt="service-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                    <div className="service-details__sm-thumb">
                      <Image
                        src={sv_3}
                        alt="service-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-details__left-text">
                <p>
                  Great user experience design lets users focus on the task they
                  have to complete & evokes emotion without distracting them.
                  Bonus points for when it also looks & feels aesthetically
                  pleasing!{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__rotate-text">
                <span>Full list of services</span>
              </div>
              <div className="service-details__right-category">
                <a href="#">Strategy</a>
                <a className="active" href="#">
                  Logo Design
                </a>
                <a href="#">Graphic identity</a>
                <a href="#">Web Design</a>
                <a href="#">Development</a>
              </div>
              <div className="service-details__right-text-box">
                <h4>
                  Logo <br /> Design
                </h4>
                <p className="mb-20">
                  Your logo is at the heart of your identity. An impactful
                  design, tailor-made and in line with your activity will allow
                  you to differentiate yourself and mark your audience.
                </p>
                <Link
                  className="tp-btn-white background-black"
                  href="/contact"
                >
                  Let’s Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
