"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// images
import port_1 from "@/assets/img/home-04/portfolio/port-1.jpg";
import port_2 from "@/assets/img/home-04/portfolio/port-2.jpg";
import port_3 from "@/assets/img/home-04/portfolio/port-3.jpg";
import port_4 from "@/assets/img/home-04/portfolio/port-4.jpg";

// portfolio data
const portfolio_data = [
  {
    id: 1,
    title: "Silkvision",
    img: port_1,
  },
  {
    id: 2,
    title: "Egatan",
    img: port_2,
  },
  {
    id: 3,
    title: "Métrica",
    img: port_3,
  },
  {
    id: 4,
    title: "Fiedunit",
    img: port_4,
  },
];
export default function ProjectThree() {
  return (
    <div
      className="tp-project-4-area pb-120 project-panel-area"
      style={{ backgroundImage: "url(/assets/img/home-04/brand/overly.png)" }}
    >
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-xl-12">
            {portfolio_data.map((item) => (
              <div key={item.id} className="tp-project-4-bg project-panel">
                <Link href="/portfolio-details-1">
                  <div className="tp-project-4-thumb">
                    <Image src={item.img} alt="port-thumb" style={{ height: "auto" }} /> 
                  </div>
                  <div className="tp-project-4-content z-index">
                    <h4 className="tp-project-4-title tp_reveal_anim-2">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
