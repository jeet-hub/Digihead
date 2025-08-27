import React from "react";
import Image from "next/image";
import { Leaf } from "../svg";
// images
import b_1 from "@/assets/img/home-04/brand/brand-1.png";
import b_2 from "@/assets/img/home-04/brand/brand-2.png";
import b_3 from "@/assets/img/home-04/brand/brand-3.png";
import b_4 from "@/assets/img/home-04/brand/brand-4.png";
import b_5 from "@/assets/img/home-04/brand/brand-5.png";
import b_6 from "@/assets/img/home-04/brand/brand-6.png";
import b_7 from "@/assets/img/home-04/brand/brand-7.png";
import b_8 from "@/assets/img/home-04/brand/brand-8.png";

// brand_data
const brand_data = [
  {
    id: 1,
    brand: b_1,
    texts: [
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
    ],
  },
  {
    id: 2,
    brand: b_2,
    texts: [
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
    ],
  },
  {
    id: 3,
    brand: b_3,
    texts: [
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
    ],
  },
  {
    id: 4,
    brand: b_4,
    texts: [
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
    ],
  },
  {
    id: 5,
    brand: b_5,
    texts: [
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
    ],
  },
  {
    id: 6,
    brand: b_6,
    texts: [
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
    ],
  },
  {
    id: 7,
    brand: b_7,
    texts: [
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
    ],
  },
  {
    id: 8,
    brand: b_8,
    texts: [
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
    ],
  },
];

// brand items
export function BrandItems() {
  return (
    <>
      {brand_data.map((item) => (
        <div key={item.id} className="col-xl-3 col-lg-3 col-md-6">
          <div className="tp-brand-4-item p-relative">
            <Image src={item.brand} alt="brand" style={{ height: "auto" }} />
            <div className="tp-brand-4-line-text d-flex align-items-center">
              {item.texts.map((text, index) => (
                <span key={index}>{text}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

const BrandTwo = () => {
  return (
    <div
      className="tp-brand-4-area mt-20 pt-120 pb-120 grey-bg-3"
      style={{ backgroundImage: "url(/assets/img/home-04/brand/overly.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="tp-service-4-title-box tp_fade_bottom mb-65">
              <span className="tp-section-subtitle-3">
                <span>
                  <Leaf />
                </span>
                Our Clients
              </span>
              <h4 className="tp-section-title-40 font-style-2">
                We love to work with clients to develop unique, innovative
                websites.
              </h4>
            </div>
          </div>
        </div>
        <div className="row gx-0">
          <BrandItems />
        </div>
      </div>
    </div>
  );
};

export default BrandTwo;
