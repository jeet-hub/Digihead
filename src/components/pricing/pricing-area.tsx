import React from "react";
import { UpArrow } from "../svg";
import Link from "next/link";

const pricing_data = [
  {
    id: 1,
    bg: "/assets/img/price/price-bg-1.jpg",
    title: "Entry",
    price: 26,
    features: [
      "Dolor sit amet",
      "Tempor incididunt",
      "Sed do eiusmod",
      "Adipiscing elit",
    ],
  },
  {
    id: 2,
    bg: "/assets/img/price/price-bg-2.jpg",
    title: "Project",
    price: 46,
    features: [
      "Dolor sit amet",
      "Tempor incididunt",
      "Sed do eiusmod",
      "Adipiscing elit",
    ],
  },
  {
    id: 3,
    bg: "/assets/img/price/price-bg-3.jpg",
    title: "Enterprise",
    price: 96,
    features: [
      "Dolor sit amet",
      "Tempor incididunt",
      "Sed do eiusmod",
      "Adipiscing elit",
    ],
  },
];

export default function PricingArea() {
  return (
    <div className="tp-price-area">
      <div className="container">
        <div className="row">
          {pricing_data.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div
                className={`tp-price-item ${item.id === 2 ? "active" : ""}`}
                style={{
                  backgroundImage: item.id === 2 ? `url(${item.bg})` : "",
                }}
              >
                <div
                  className="tp-price-head"
                  style={{
                    backgroundImage: item.id !== 2 ? `url(${item.bg})` : "",
                  }}
                >
                  <span>#{item.id}</span>
                  <h5>{item.title}</h5>
                </div>
                <div className="tp-price-body">
                  <span className="tp-price-monthly">
                    $<i>{item.price}</i>/ per mo
                  </span>
                  <div className="tp-price-list">
                    <ul>
                      {item.features.map((l, i) => (
                        <li key={i}>
                          <i className="fa-sharp fa-light fa-check"></i>
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    className={`tp-btn-black-md ${item.id===2?"white-bg":""} w-100 text-center`}
                    href="/contact"
                  >
                    Choose Plan
                    <span>
                      <UpArrow />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
