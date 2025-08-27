import React from "react";
import Image from "next/image";
// images
import s_icon_1 from "@/assets/img/home-08/service/sv-icon-1.png";
import s_icon_2 from "@/assets/img/home-08/service/sv-icon-2.png";
import s_icon_3 from "@/assets/img/home-08/service/sv-icon-3.png";
import Link from "next/link";

// service data
const service_data = [
  {
    id: 1,
    icon: s_icon_1,
    subtitle: "The importance of an idea",
    title: "Right concept, Right client",
    desc: "Unique, recognizable projects have a strong concept to hold them up.",
  },
  {
    id: 2,
    icon: s_icon_2,
    subtitle: "The strength of design",
    title: "Beauty attracts People",
    desc: "Unique, recognizable projects have a strong concept to hold them up.",
  },
  {
    id: 3,
    icon: s_icon_3,
    subtitle: "Purpose as a necessity",
    title: "Focus on the Meaning",
    desc: "Unique, recognizable projects have a strong concept to hold them up.",
  },
];
export default function StudioPanelTwo() {
  return (
    <div className="panel-2 tp-studio-height">
      <div className="tp-studio-service-area tp-studio-service-ptb tp-studio-height tp-studio-plr fix p-relative black-bg">
        <div className="tp-studio-service-linetext-wrap d-none d-md-block">
          <h4 className="tp-studio-service-linetext">
            passion <span>is the</span> point
          </h4>
        </div>
        <div className="container container-1480">
          <div className="row">
            <div className="col-xl-12">
              {service_data.map((item) => (
                <div
                  key={item.id}
                  className={`tp-studio-service-item d-flex space-ml-${item.id} align-items-start`}
                >
                  <span className="tp-studio-border"></span>
                  <div className="tp-studio-service-icon">
                    <span>
                      <Image src={item.icon} alt="icon" />
                    </span>
                  </div>
                  <div className="tp-studio-service-content">
                    <span className="tp-studio-service-subtitle">
                      {item.subtitle}
                    </span>
                    <h4 className="tp-studio-service-title">
                      <Link href="/service-details">{item.title}</Link>
                    </h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
