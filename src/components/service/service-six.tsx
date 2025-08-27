import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "Design Studio",
    title: "Logos and branding",
    text: "We create your graphic designs according to your budget and your needs. Reveal your brand image and capture your audience.",
    lists: [
      "Logo Design",
      "Graphic identity",
      "Business communication",
      "Web design",
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "Design Studio",
    title: "Web Design",
    text: "We create your graphic designs according to your budget and your needs. Reveal your brand image and capture your audience.",
    lists: [
      "Logo Design",
      "Graphic identity",
      "Business communication",
      "Web design",
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "Design Studio",
    title: "Motion-Design",
    text: "We create your graphic designs according to your budget and your needs. Reveal your brand image and capture your audience.",
    lists: [
      "Logo Design",
      "Graphic identity",
      "Business communication",
      "Web design",
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "Design Studio",
    title: "Web Analytics",
    text: "We create your graphic designs according to your budget and your needs. Reveal your brand image and capture your audience.",
    lists: [
      "Logo Design",
      "Graphic identity",
      "Business communication",
      "Web design",
    ],
  },
];

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="sv-service-btn">
                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href="/service-details"
                        >
                          <span className="zikzak-content">
                            See <br /> Details
                            <RightArrow clr="currentColor" />
                          </span>
                          <ShapeTwo />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
