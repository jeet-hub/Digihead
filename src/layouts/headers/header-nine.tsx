import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/img/logo/logo-white.png";
import MobileOffcanvasTwo from "@/components/offcanvas/mobile-offcanvas-2";

export default function HeaderNine() {
  const [openOffCanvas, setOpenOffcanvas] = React.useState(false);
  return (
    <>
    <header>
      <div className="tp-header-10-area tp-transparent z-index-5 pt-50 pl-80 pr-80 d-none">
        <div className="tp-header-10-wrapper d-flex align-items-center justify-content-between">
          <div className="tp-header-10-logo">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <div className="tp-header-10-menubar">
            <button onClick={() => setOpenOffcanvas(true)}>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      <div className="tp-header-6-area tp-transparent z-index-5 pt-40">
        <div className="container container-1840">
          <div className="row">
            <div className="col-md-6 col-6">
              <div className="tp-header-logo">
                <Link href="/">
                  <Image src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <div className="tp-header-6-menu-box tp-offcanvas-open-btn d-flex align-items-center justify-content-end">
                <span>Menu</span>
                <button onClick={() => setOpenOffcanvas(true)} className="tp-header-6-menubar">
                  <span></span>
                  <span></span>
                </button>
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
