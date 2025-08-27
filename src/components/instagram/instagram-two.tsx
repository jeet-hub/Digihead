import React from "react";
import Image from "next/image";
// images
import insta_1 from "@/assets/img/inner-shop/instagram/insta-1.jpg";
import insta_2 from "@/assets/img/inner-shop/instagram/insta-2.jpg";
import insta_3 from "@/assets/img/inner-shop/instagram/insta-3.jpg";
import insta_4 from "@/assets/img/inner-shop/instagram/insta-4.jpg";
import insta_5 from "@/assets/img/inner-shop/instagram/insta-5.jpg";
import insta_6 from "@/assets/img/inner-shop/instagram/insta-6.jpg";

const insta_images = [insta_1, insta_2, insta_3, insta_4, insta_5, insta_6];
export default function InstagramTwo() {
  return (
    <div className="tp-shop-insta-area pb-90">
      <div className="container container-1300">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="tp-shop-insta-title-box mb-70 text-center">
              <span>Follow Us</span>
              <h4 className="tp-shop-insta-title">
                <a href="mailto:@liko.shoes">@liko.shoes</a>
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {insta_images.map((src, i) => (
            <div key={i} className="col-md-2 col-4">
              <div className="tp-shop-insta-thumb mb-30">
                <a href="#">
                  <Image
                    data-speed={i % 2 === 0 ? "1.1" : "1.2"}
                    src={src}
                    alt="img"
                    style={{ height: "auto" }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
