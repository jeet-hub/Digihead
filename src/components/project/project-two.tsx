"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const project_data = [
  
  {
    id: 1,
    img: "/assets/img/home-02/project/adidas.jpg",
    subtitle: "Socail Media & Event Promotion",
    title: "Adidas Runners",
  },
  {
    id: 2,
    img: "/assets/img/home-02/project/daily-g.jpeg",
    subtitle: "Brand Identity Toolkit & Advertising",
    title: "Daily Grocery",
  },
  {
    id: 3,
    img: "/assets/img/home-02/project/Manatee.jpg",
    subtitle: "Brand Identity Toolkit",
    title: "Manatee",
  },
  {
    id: 4,
    img: "/assets/img/home-02/project/atomy-main.jpg",
    subtitle: "Social Media Creatives",
    title: "Atomy",
  },
  {
    id: 5,
    img: "/assets/img/home-02/project/ganga-county-main.jpg",
    subtitle: "Social Media Creatives & Advertising",
    title: "Ganga County",
  },
  {
    id: 6,
    img: "/assets/img/home-02/project/IAF-main.jpg",
    subtitle: "Bus Exterior Branding",
    title: "Indian Air Force",
  },
  {
    id: 7,
    img: "/assets/img/home-02/project/van.jpg",
    subtitle: "Coffee Table Book Design",
    title: "Varanasi Government",
  },
];

export default function ProjectTwo() {
  return (
    <section className="tp-project-2-area tpproject">
      <div className="panels p-relative fix">
        <div className="panels-container d-flex">
          {project_data.map((item) => (
            <div key={item.id} className="panel">
              <div className="tp-project-2-item  p-relative">
                <div className="tp-project-2-thumb">
                  <Image src={item.img} alt="p-img" width={890} height={500} />
                </div>
                <div className="tp-project-2-content">
                  <span>{item.subtitle}</span>
                  <h4 className="tp-project-2-title-sm text-shadow-xl">
                   <Link href={`/portfolio-details-1?id=${item.id}`}>
                    {item.title}
                  </Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
