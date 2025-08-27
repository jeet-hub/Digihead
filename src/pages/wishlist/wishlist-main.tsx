"use client";
import { gsap } from "gsap";
import React from "react";
import Image from "next/image";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderTwelve from "@/layouts/headers/header-twelve";
import FooterTwo from "@/layouts/footers/footer-two";
import { Close, Minus, Plus } from "@/components/svg";
import Link from "next/link";

const WishlistMain = () => {
  const [quantity, setQuantity] = React.useState(1);
  useScrollSmooth();

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderTwelve />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* wishlist area */}
            <div className="tp-wishlist-area pt-200 pb-120">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-cart-list mb-45 mr-30">
                      <table className="table">
                        <thead>
                          <tr>
                            <th colSpan={2} className="tp-cart-header-product">
                              Product
                            </th>
                            <th className="tp-cart-header-price">Price</th>
                            <th className="tp-cart-header-quantity">
                              Quantity
                            </th>
                            <th>Action</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="tp-cart-img">
                              <Link href={`/shop-details/1`}>
                                <Image
                                  src="/assets/img/inner-shop/shop-details/tab-img/nav-1.png"
                                  alt="cart-img"
                                  width={78}
                                  height={100}
                                />
                              </Link>
                            </td>
                            <td className="tp-cart-title">
                              <Link href={`/shop-details/1`}>
                                Legendary Whitetails Women.
                              </Link>
                            </td>
                            <td className="tp-cart-price">
                              <span>$76.00</span>
                            </td>
                            <td className="tp-cart-quantity">
                              <div className="tp-product-quantity mt-10 mb-10">
                                <span
                                  className="tp-cart-minus"
                                  onClick={() => {
                                    if (quantity > 1) setQuantity(quantity - 1);
                                  }}
                                >
                                  <Minus />
                                </span>
                                <input
                                  className="tp-cart-input"
                                  type="text"
                                  value={quantity}
                                  readOnly
                                />
                                <span
                                  className="tp-cart-plus"
                                  onClick={() => setQuantity(quantity + 1)}
                                >
                                  <Plus />
                                </span>
                              </div>
                            </td>

                            <td className="tp-cart-add-to-cart">
                              <button type="submit" className="tp-btn-cart sm">
                                Add To Cart
                              </button>
                            </td>

                            <td className="tp-cart-action">
                              <button className="tp-cart-action-btn">
                                <Close />{" "}
                                <span>Remove</span>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="tp-cart-bottom">
                      <div className="row align-items-end">
                        <div className="col-xl-6">
                          <div className="tp-cart-update">
                            <Link href="/cart" className="tp-btn-cart">
                              Go To Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* wishlist area */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default WishlistMain;
