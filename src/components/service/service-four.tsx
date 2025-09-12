import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FirstBracket, FirstBracketTwo, RightArrow, SvgBg } from "../svg";
import icon from '@/assets/img/home-03/service/sv-icon-1.png';

const service_data = [
  {
    id: 1,
    title: "Product design",
    desc: "Once we have an idea of your needs, a research and design process begins to gain deep knowledge about the business, users <br> and world context.",
    category: ["Research", "Ui/ UX", "Prototyping"],
  },
  {
    id: 2,
    title: "Web/Mobile",
    desc: "Creation of user-friendly, responsive websites that effectively convey a brand's message.",
    category: ["SEO", "Creative Development", "E-commerce", ],
  },
  {
    id: 3,
    title: "Social Media Management",
    desc: "we can help you increase your brand visibility resulting in higher brand awareness.",
    category: ["Facebook ", "Instagram", "LinkedIn", "Community Management"],
  },
  {
    id: 4,
    title: "Advertising & Promotion",
    desc: "Development of creative concepts, design & production of print, online and outdoor advertising campaigns.",
    category: ["Paid Ads", "Campaign Management", "Brand Awareness"],
  },
  {
    id: 4,
    title: "Digital Strategy & Planing",
    desc: "Implementing your vision, goals, and objectives in the digital space.",
    category: ["Market Research", "Long time Plan", "Business Growth"],
  },
];
export default function ServiceFour() {
  
  return (
    <div className="tp-service-3-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="tp-service-3-title-box mb-60 p-relative">
              <div className="tp-service-3-icon">
                <Image src={icon} alt="icon" />
              </div>
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text tp_text_invert">
                  Our approach
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
                Creative <br /> development studio
              </h4>
            </div>
          </div>
        </div>

        {service_data.map((item) => (
          <div key={item.id} className="tp-service-3-wrap tp_fade_bottom">
            <div className="row align-items-start">
              <div className="col-xl-3 col-lg-3">
                <div className="tp-service-3-title-box">
                  <h4 className="tp-service-3-title">
                    <Link href="/service">{item.title}</Link>
                  </h4>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="tp-service-3-content">
                  <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                  <div className="tp-service-3-category cat ">
                    {item.category.map((c, i) => (
                      <span key={i}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2">
                <div className="tp-service-3-btn-box text-start text-md-end">
                  <Link
                    className="tp-btn-zikzak-sm p-relative"
                    href="/service"
                  >
                    <span className="zikzak-content">
                      See <br /> Details
                      <RightArrow clr="currentColor" />
                    </span>
                    <span>
                      <SvgBg />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
