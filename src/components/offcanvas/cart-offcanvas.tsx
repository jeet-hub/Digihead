import Image from "next/image";
import Link from "next/link";
import React from "react";

// prop type
type IProps = {
  openCartMini: boolean;
  setOpenCartMini: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CartOffcanvas({openCartMini,setOpenCartMini}:IProps) {
  return (
    <>
      <div
        className={`cartmini__area ${openCartMini ? "cartmini-opened" : ""}`}
      >
        <div className="cartmini__wrapper d-flex justify-content-between flex-column">
          <div className="cartmini__top-wrapper">
            <div className="cartmini__top p-relative">
              <div className="cartmini__top-title">
                <h4>Shopping cart</h4>
              </div>
              <div className="cartmini__close">
                <button
                  onClick={() => setOpenCartMini(false)}
                  type="button"
                  className="cartmini__close-btn cartmini-close-btn"
                >
                  <i className="fal fa-times"></i>
                </button>
              </div>
            </div>
            <div className="cartmini__shipping">
              <p> Free Shipping for all orders over <span>$50</span> </p>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{width:"70%" }}
                  data-width="70%"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="cartmini__widget">
              {/* card item start */}
              <div className="cartmini__widget-item">
                <div className="cartmini__thumb">
                  <Link href="/shop-details/1">
                    <Image
                      src="/assets/img/inner-blog/blog-sidebar/rc-post/rc-1.jpg"
                      alt="cart-img"
                      width={70}
                      height={70}
                    />
                  </Link>
                </div>
                <div className="cartmini__content">
                  <h5 className="cartmini__title">
                    <Link href="/shop-details/1">Level Bolt Smart Lock</Link>
                  </h5>
                  <div className="cartmini__price-wrapper">
                    <span className="cartmini__price">$46.00</span>
                    <span className="cartmini__quantity">x2</span>
                  </div>
                </div>
                <a href="#" className="cartmini__del">
                  <i className="fa-regular fa-xmark"></i>
                </a>
              </div>

              {/* card item end */}
            </div>
          </div>
          <div className="cartmini__checkout">
            <div className="cartmini__checkout-title mb-30">
              <h4>Subtotal:</h4>
              <span>$113.00</span>
            </div>
            <div className="cartmini__checkout-btn">
              <Link
                href="/cart"
                className="tp-btn-black-2 text-center mb-10 w-100"
              >
                view cart
              </Link>
              <Link
                href="/checkout"
                className="tp-btn-black-2 text-center w-100"
              >
                checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* overlay */}
      <div
        onClick={() => setOpenCartMini(false)}
        className={`body-overlay ${openCartMini ? "opened" : ""}`}
      ></div>
    </>
  );
}
