import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuThree } from "@/components/svg";
import logo from "@/assets/img/logo/logo-white.png";
import MobileOffcanvasTwo from "@/components/offcanvas/mobile-offcanvas-2";

export default function HeaderTen() {
  const [openOffCanvas, setOpenOffcanvas] = React.useState(false);
  return (
    <>
    <header className="tp-header-height z-index-5">
      <div className="tp-inner-header-area tp-inner-header-style-3 tp-inner-header-mob-space pt-90 pl-80 pr-80">
        <div className="container container-1800">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 col-md-6 col-6">
              <div className="tp-inner-header-logo tp-header-logo">
                <Link href="/">
                  <Image src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-xl-10 col-lg-10 col-md-6 col-6">
              <div className="tp-inner-header-right-wrap d-flex align-items-center justify-content-end">
                <div className="tp-inner-header-right-action">
                  <ul>
                    <li>
                      <div className="tp-inner-bar">
                        <button onClick={() => setOpenOffcanvas(true)} className="tp-offcanvas-open-btn">
                          <span>
                            <MenuThree />
                          </span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

     {/* off canvas */}
     <MobileOffcanvasTwo openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffcanvas} />
     {/* off canvas */}
    </>
  );
}
