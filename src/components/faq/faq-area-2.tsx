import React from "react";
import Image from "next/image";
import { faq_data } from "./faq-area";
import FaqItem from "./faq-item";
import shape from '@/assets/img/home-02/service/sv-shape-1.png';

export default function FaqAreaTwo() {
  return (
    <div className="tp-service-2-area tp-service-2-pt pb-150">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-xl-4 col-lg-5">
            <div className="tp-price-inner-faq">
              <div className="tp-service-2-title-box pt-25 pb-120">
                <h4 className="tp-service-2-title mb-20 tp_title_anim">
                  Frequently Asked Question
                </h4>
                <p className="tp_title_anim">
                  We believe in making life-long connections through great
                  communication.
                </p>
              </div>
              <div className="tp-service-2-shape-img text-center text-lg-start">
                <Image src={shape} alt="shape" />
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7">
            <div className="tp-price-inner-faq-wrap">
              <div className="fq-faq-wrapper">
                <div className="tp-service-2-accordion-box">
                  <div className="accordion" id="accordionExample">
                    {faq_data.map((item) => (
                      <FaqItem key={item.id} item={item} />
                    ))}
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
