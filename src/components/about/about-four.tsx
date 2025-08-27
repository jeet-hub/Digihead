import React from "react";
import { BallRound } from "../svg";

export default function AboutFour() {
  return (
    <div className="tp-about-5-area black-bg pt-150 pb-120">
      <div className="container container-1560">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-about-5-title-box pb-90">
              <h4 className="tp-about-5-title p-relative tp_fade_bottom">
                <span className="tp-about-5-subtitle tp_fade_left">
                  140+ projects closed
                </span>
                <span className="text-space"></span>
                As a digital designer, I <br /> focus on
                <span>
                  <BallRound />
                </span>
                producing top notch and impactful digital
                <span>
                  <BallRound />
                </span>
                experiences.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-about-5-category">
              <span className="tp_fade_bottom">Website Development</span>
              <span className="tp_fade_bottom">Ul / UX Design</span>
              <span className="tp_fade_bottom">Mobile Apps Development</span>
              <span className="tp_fade_bottom">
                Custom Software Development
              </span>
              <span className="tp_fade_bottom">Brand Ideation</span>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-about-5-text">
              <p className="mb-30 tp_fade_bottom">
                Together, we construct tailored marketing campaigns that engage
                and resonate with customers on a deeper level. Adaptiv’s
                approach amplifies brand awareness and loyalty and paves the way
                for sustainable business growth and success.
              </p>
              <p className="mb-30 tp_fade_bottom">
                We believe that understanding and solving clients issues is the
                key to success. Now {"It's"}
                your time to overcome challenges, face fresh perspective and
                realize full potential.
              </p>
              <p className="tp_fade_bottom">
                Based on strong expertise and a battle-tested business.!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
