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

const CartMain = () => {
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
            {/* cart area */}
            <section className="tp-cart-area pt-200 pb-120">
              <div className="container container-1300">
                <div className="row">
                  <div className="col-xl-9 col-lg-8">
                    <div className="tp-cart-list mb-25">
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
                        <div className="col-xl-6 col-md-8">
                          <div className="tp-cart-coupon">
                            <form action="#">
                              <div className="tp-cart-coupon-input-box">
                                <label>Coupon Code:</label>
                                <div className="tp-cart-coupon-input d-flex align-items-center">
                                  <input
                                    type="text"
                                    placeholder="Enter Coupon Code"
                                  />
                                  <button type="submit">Apply</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="col-xl-6 col-md-4">
                          <div className="tp-cart-update text-md-end">
                            <button
                              type="button"
                              className="tp-cart-update-btn"
                            >
                              Update Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="tp-cart-checkout-wrapper ml-30">
                      <div className="tp-cart-checkout-top d-flex align-items-center justify-content-between">
                        <span className="tp-cart-checkout-top-title">
                          Subtotal
                        </span>
                        <span className="tp-cart-checkout-top-price">$742</span>
                      </div>
                      <div className="tp-cart-checkout-shipping">
                        <h4 className="tp-cart-checkout-shipping-title">
                          Shipping
                        </h4>

                        <div className="tp-cart-checkout-shipping-option-wrapper">
                          <div className="tp-cart-checkout-shipping-option">
                            <input
                              id="flat_rate"
                              type="radio"
                              name="shipping"
                            />
                            <label htmlFor="flat_rate">
                              Flat rate: <span>$20.00</span>
                            </label>
                          </div>
                          <div className="tp-cart-checkout-shipping-option">
                            <input
                              id="local_pickup"
                              type="radio"
                              name="shipping"
                            />
                            <label htmlFor="local_pickup">
                              Local pickup: <span> $25.00</span>
                            </label>
                          </div>
                          <div className="tp-cart-checkout-shipping-option">
                            <input
                              id="free_shipping"
                              type="radio"
                              name="shipping"
                            />
                            <label htmlFor="free_shipping">Free shipping</label>
                          </div>
                        </div>
                      </div>
                      <div className="tp-cart-checkout-total d-flex align-items-center justify-content-between">
                        <span>Total</span>
                        <span>$724</span>
                      </div>
                      <div className="tp-cart-checkout-proceed">
                        <Link
                          href="/checkout"
                          className="tp-cart-checkout-btn w-100"
                        >
                          Proceed to Checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* cart area */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default CartMain;
