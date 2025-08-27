import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/img/logo/logo.png';
import logo_2 from '@/assets/img/logo/logo-white.png';
import MobileOffcanvasTwo from "@/components/offcanvas/mobile-offcanvas-2";

export default function HeaderFive() {
  const [openOffCanvas, setOpenOffcanvas] = React.useState(false);
  return (
    <>
    <header>
      <div className="tp-header-2-area tp-header-2-space tp-transparent">
        <div className="container container-1840">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6">
              <div className="tp-header-logo">
                <Link className="logo-1" href="/">
                  <Image src={logo} alt="logo" />
                </Link>
                <Link className="logo-2" href="/">
                  <Image src={logo_2} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6">
              <div className="tp-header-2-menu-bar text-end text-sm-center">
                <button onClick={() => setOpenOffcanvas(true)} className="tp-offcanvas-open-btn">
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 d-none d-sm-block">
              <div className="tp-header-2-btn-box text-end">
                <div className="tp-header-2-button">
                  <Link className="tp-btn-animation" href="/contact">
                    <span>Get In Touch</span>
                    <span>Get In Touch</span>
                    <span>Get In Touch</span>
                    <span>Get In Touch</span>
                    <span>Get In Touch</span>
                    <span>Get In Touch</span>
                    <span>Get In Touch</span>
                    <span>Get In Touch</span>
                    <span>Get In Touch</span>
                    <span>Get In Touch</span>
                    <span>Get In Touch</span>
                    <span>Get In Touch</span>
                  </Link>
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
