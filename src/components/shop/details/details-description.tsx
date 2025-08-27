import React from "react";
import Image from "next/image";
import desc_img from '@/assets/img/inner-shop/shop-details/soul.jpg';

export default function DetailsDescription() {
  return (
    <div className="tp-product-details-dsc-wrap pt-90">
      <div className="row">
        <div className="col-xl-7 col-lg-6">
          <div className="tp-product-details-dsc">
            <div className="tp-product-details-dsc-content mb-40">
              <h4 className="tp-product-details-dsc-title">Uses Of Shoes</h4>
              <p>
                A shoe is an item of footwear intended to protect and comfort
                the human foot. Shoes are also used as an item of decoration and
                fashion.The design of shoes has varied enormously through time
                and from culture to culture, with form originally being tied to
                function. Though the human foot can adapt to varied terrains and
                climate conditions, it is still vulnerable to environmental
                hazards such as sharp rocks.!
              </p>
            </div>
            <div className="tp-product-details-dsc-list">
              <h4 className="tp-product-details-dsc-title sm">
                Product Details
              </h4>
              <ul>
                <li>High-top shoe vvith durable cotton canvas upper</li>
                <li>OrthoLite cushioning for all-day comfort</li>
                <li>Mesh lining for breathability</li>
                <li>Screenprinted end embroidered florals celebrate summer</li>
                <li>Faux leather ankle patch</li>
              </ul>
            </div>
            <div className="tp-product-details-dsc-content">
              <h4 className="tp-product-details-dsc-title">
                Chuck Taylor All Star Origins
              </h4>
              <p>
                A shoe is an item of footwear intended to protect and comfort
                the human foot. Shoes are also used as an item of decoration and
                fashion. The design of shoes has varied enormously through time
                and from culture to culture, with form originally being tied to
                function.
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-5 col-lg-6">
          <div className="tp-product-details-dsc-thumb">
            <Image src={desc_img} alt="desc-img" style={{height:"auto"}} />
          </div>
        </div>
      </div>
    </div>
  );
}
