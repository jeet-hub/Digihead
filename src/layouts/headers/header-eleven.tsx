'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cart, MenuThree } from "@/components/svg";
import HeaderMenus from "./header-menus";
import useSticky from "@/hooks/use-sticky";
import logo from "@/assets/img/logo/logo.png";
import logo_2 from "@/assets/img/logo/logo-white.png";
import CartOffcanvas from "@/components/offcanvas/cart-offcanvas";
import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";

// prop type 
type IProps = {
  transparent?: boolean;
  cls?: string;
}
export default function HeaderEleven({transparent=false,cls=''}: IProps) {
  const { sticky, headerRef, headerFullWidth } = useSticky();
  const [openCartMini, setOpenCartMini] = React.useState(false);
  const [openOffCanvas, setOpenOffCanvas] = React.useState(false);
  useEffect(() => {
    headerFullWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <header className="tp-header-height z-index-5" ref={headerRef}>  
        <div
          id="header-sticky"
          className={`tp-inner-header-area ${cls} ${transparent?'transparent':'tp-inner-header-style-2'} tp-inner-header-mob-space ${sticky ? "header-sticky" : ""}`}
        >
          <div className="container container-1800">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-inner-header-logo tp-header-logo">
                  <Link className={`${transparent?'ab-logo-1':'logo-1'}`} href="/">
                    <Image src={transparent?logo_2:logo} alt="logo" />
                  </Link>
                  <Link className={`${transparent?'ab-logo-2':'logo-2'}`} href="/">
                    <Image src={transparent?logo:logo_2} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 d-none d-xl-block">
                <div className="tp-inner-header-right-wrap text-center">
                  <div className="tp-inner-header-menu header-main-menu">
                    <nav className="tp-main-menu-content">
                      {/* header menus */}
                      <HeaderMenus />
                      {/* header menus */}
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-inner-header-right-action text-end">
                  <ul>
                    <li>
                      <div className="tp-inner-cart">
                        <a
                          onClick={() => setOpenCartMini(true)}
                          className="cartmini-open-btn pointer"
                        >
                          <span className="p-relative">
                            <Cart />
                            <i>0</i>
                          </span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="tp-inner-bar tp-header-bar">
                        <button onClick={()=> setOpenOffCanvas(true)} className="tp-offcanvas-open-btn">
                          <span></span>
                          <span></span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* cart mini */}
      <CartOffcanvas openCartMini={openCartMini} setOpenCartMini={setOpenCartMini} />
      {/* cart mini */}

      {/* off canvas */}
      <MobileOffcanvas openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
      {/* off canvas */}
    </>
  );
}
