import React from "react";
import Marquee from "react-fast-marquee";

// marquee text
const marquee_text = [
  "Have A Great Project ?",
  "Have A Great Project ?",
  "Have A Great Project ?",
  "Have A Great Project ?",
];

export default function LineTextFour() {
  return (
    <div className="tp-line-text-wrap tp-line-text-wrap-2">
      <Marquee className="tp-line-text-slide">
        {marquee_text.map((text, index) => (
          <div key={index} className="tp-line-content">
            <h4 className="tp-project-5-2-title">{text}</h4>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
