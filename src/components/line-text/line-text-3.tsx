import React from "react";
import Marquee from "react-fast-marquee";
import { StarSquare } from "../svg";

// marquee text
const marquee_text = [
  "Have A Great Project ?",
  "Have A Great Project ?",
  "Have A Great Project ?",
  "Have A Great Project ?",
];
const marquee_text_2 = [
  "See more",
  "See more",
  "See more",
  "See more",
  "See more",
  "See more",
];

// prop type 
type IProps = {
  cls?: string;
  data_2?:boolean;
};

export default function LineTextThree({cls="",data_2=false}:IProps) {
  const textArray = data_2 ? marquee_text_2 : marquee_text;
  return (
    <div className={`tp-line-text-wrap tp-line-text-wrap-2 ${cls}`}>
      <div className="tp-line-text-slide">
        <Marquee speed={100} autoFill={true}>
          {textArray.map((text, index) => (
            <div key={index} className="tp-line-content">
              <h4 className="tp-footer-4-big-title">
                <span className="d-none d-md-inline-block mr-40">
                  <StarSquare />
                </span>
                {text}
              </h4>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
