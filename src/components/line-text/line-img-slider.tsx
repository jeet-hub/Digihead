import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// images
import port_1 from "@/assets/img/inner-service/portfolio/port-2.jpg";
import port_2 from "@/assets/img/inner-service/portfolio/port-3.jpg";
import port_3 from "@/assets/img/inner-service/portfolio/port-4.jpg";
import port_4 from "@/assets/img/inner-service/portfolio/port-1.jpg";

// images
const port_images = [port_1, port_1, port_2, port_3, port_4, port_1, port_2];

export default function LineImgSlider() {
  return (
    <div className="tp-line-text-wrap tp-line-text-wrap-2 pb-120">
      <div className="swiper tp-img-slide">
        <Marquee speed={150}>
          {port_images.map((imgSrc, index) => (
            <div
              key={index}
              className={`sv-port-thumb port-thumb-${index % 2 === 0 ? 1 : 2}`}
              style={{marginRight: '40px'}}
            >
              <Image src={imgSrc} alt="port-img" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
