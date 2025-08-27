import React from "react";
import Marquee from "react-fast-marquee";

// marquee text
const marquee_text = [
  "our work",
  "our work",
  "our work",
  "our work",
  "our work",
  "our work",
];

export default function LineTextTwo() {
  return (
    <div
      className="tp-line-text-wrap pb-30"
      style={{ backgroundImage: "url(/assets/img/home-04/brand/overly.png)" }}
    >
      <div className="tp-line-text-slide">
        <Marquee direction="right" speed={100} autoFill={true}>
          {marquee_text.map((text, index) => (
            <div key={index} className="tp-line-content mr-50">
              <span>{text}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
