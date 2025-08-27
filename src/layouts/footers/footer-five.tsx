import React from "react";
import { UpArrow } from "@/components/svg";

export default function FooterFive() {
  return (
    <footer>
      <div className="tp-footer-5-area black-bg pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-footer-5-content-wrap">
                <div className="tp-footer-5-title-box">
                  <span className="tp-footer-5-subtitle">
                    Want to <br /> Start a Project?
                  </span>
                  <h4 className="tp-footer-5-title tp_reveal_anim-2 footer-big-text">
                    {"Let's"} Talk
                  </h4>
                </div>
                <div className="tp-footer-5-info d-flex align-items-center justify-content-start justify-content-md-end">
                  <a className="tp-footer-5-mail" href="mailto:info@liko.com">
                    info@liko.com
                  </a>
                  <a className="tp-footer-5-link" href="#">
                    <UpArrow clr="#19191A" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer area end */}

      {/* copyright area start */}
      <div className="tp-copyright-5-area tp-copyright-5-style-2 black-bg pb-50">
        <div className="container container-1560">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-6 col-md-5 d-none d-xl-block">
              <div className="tp-copyright-5-left-info">
                <span>
                  <a
                    href="https://www.google.com/maps/@40.1001598,-74.0544407,8.83z?entry=ttu"
                    target="_blank"
                  >
                    86 Street St.San Francisco,CA
                  </a>
                </span>
                <span>
                  Phone:
                  <a href="tel:+725214456">+ 725 214 456</a>
                </span>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-7">
              <div className="tp-copyright-2-social text-start text-sm-center text-xl-center">
                <a className="mb-10" href="#">
                  Linkedin
                </a>
                <a className="mb-10" href="#">
                  Twitter
                </a>
                <a className="mb-10" href="#">
                  Instagram
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-5">
              <div className="tp-copyright-2-left text-center text-md-end">
                <p>©{new Date().getFullYear()}- All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
