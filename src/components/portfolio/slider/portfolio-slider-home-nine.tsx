import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// images
import port_1 from "@/assets/img/home-10/porfolio/port-1.jpg";
import port_2 from "@/assets/img/home-10/porfolio/port-2.jpg";
import port_3 from "@/assets/img/home-10/porfolio/port-3.jpg";
import port_4 from "@/assets/img/home-10/porfolio/port-4.jpg";
import port_5 from "@/assets/img/home-10/porfolio/port-5.jpg";
import port_6 from "@/assets/img/home-10/porfolio/port-6.jpg";
import port_7 from "@/assets/img/home-10/porfolio/port-7.jpg";

// portfolio titles
const portfolio_titles = [
  {
    id: 1,
    title: "Silkvision",
    category: "Visual",
  },
  {
    id: 2,
    title: "Disefio Gräfico",
    category: "Creative",
  },
  {
    id: 3,
    title: "PSD Mockup",
    category: "Branding",
  },
  {
    id: 4,
    title: "Fastwire",
    category: "Branding",
  },
  {
    id: 5,
    title: "Tesla",
    category: "Mobile Application",
  },
  {
    id: 6,
    title: "Ecommerce",
    category: "Digital Design",
  },
  {
    id: 7,
    title: "Cosmetic",
    category: "Visual",
  },
  {
    id: 8,
    title: "Waves",
    category: "UI Design",
  },
];

// bg img
function BgImg({ imgSrc, id }: { imgSrc: StaticImageData; id: string }) {
  return (
    <Image
      src={imgSrc}
      alt="bg-img"
      className={`tp-porfolio-10-bg-${id}`}
      style={{ height: "auto" }}
    />
  );
}

// prop type
type IProps = {
  setWhiteCls: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function PortfolioSliderHomeNine({ setWhiteCls }: IProps) {
  const [activeBg, setActiveBg] = React.useState<string | null>('tp-porfolio-10-bg-4');
  function handleActiveBg(id: number) {
    setActiveBg(`tp-porfolio-10-bg-${id}`);
    setWhiteCls(true);
  }
  function handleDeactiveBg() {
    setActiveBg('tp-porfolio-10-bg-4');
    setWhiteCls(true);
  }
  return (
    <div className="tp-porfolio-10-area tp-porfolio-10-height p-relative">
      <div className="tp-porfolio-10-bg-wrap">
        <div id="tp-porfolio-10-bg-box" className={activeBg ? activeBg : ""}>
          <BgImg imgSrc={port_1} id="1" />
          <BgImg imgSrc={port_2} id="2" />
          <BgImg imgSrc={port_3} id="3" />
          <BgImg imgSrc={port_4} id="4" />
          <BgImg imgSrc={port_5} id="5" />
          <BgImg imgSrc={port_6} id="6" />
          <BgImg imgSrc={port_7} id="7" />
          <BgImg imgSrc={port_5} id="8" />
        </div>
      </div>
      <div className="container container-1380">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-porfolio-10-title-wrap z-index-5">
              <ul>
                {portfolio_titles.map((item) => (
                  <li
                    key={item.id}
                    onMouseEnter={() => handleActiveBg(item.id)}
                    onMouseLeave={() => handleDeactiveBg()}
                    className={
                      activeBg === `tp-porfolio-10-bg-${item.id}` ||
                      activeBg === null
                        ? "active"
                        : ""
                    }
                    rel={`tp-porfolio-10-bg-${item.id}`}
                  >
                    <Link href="/portfolio-details-3">
                      <div className="tp-porfolio-10-title-box d-flex align-items-end">
                        <h2 className="tp-porfolio-10-title">{item.title}</h2>
                        <span className="tp-porfolio-10-category">
                          / {item.category}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
