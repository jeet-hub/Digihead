import React from "react";
import CheckoutOrder from "./checkout-order";
import NiceSelect from "../ui/nice-select";

export default function CheckoutArea() {
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openCoupon, setOpenCoupon] = React.useState(false);
  const handleCountry = (item: { value: string; label: string }) => {};
  return (
    <section className="tp-checkout-area pt-200 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="tp-checkout-verify">
              <div className="tp-checkout-verify-item">
                <p className="tp-checkout-verify-reveal">
                  Returning customer?{" "}
                  <button
                    type="button"
                    className="tp-checkout-login-form-reveal-btn"
                    onClick={() => setOpenLogin(!openLogin)}
                  >
                    Click here to login
                  </button>
                </p>

                {openLogin && (
                  <div
                    id="tpReturnCustomerLoginForm"
                    className="tp-return-customer"
                  >
                    <form action="#">
                      <div className="tp-return-customer-input">
                        <label>Email</label>
                        <input type="text" placeholder="Your Email" />
                      </div>
                      <div className="tp-return-customer-input">
                        <label>Password</label>
                        <input type="password" placeholder="Password" />
                      </div>

                      <div className="tp-return-customer-suggetions d-sm-flex align-items-center justify-content-between mb-20">
                        <div className="tp-return-customer-remeber">
                          <input id="remeber" type="checkbox" />
                          <label htmlFor="remeber">Remember me</label>
                        </div>
                        <div className="tp-return-customer-forgot">
                          <a href="#">Forgot Password?</a>
                        </div>
                      </div>
                      <button type="submit" className="tp-btn-cart sm">
                        Login
                      </button>
                    </form>
                  </div>
                )}
              </div>
              <div className="tp-checkout-verify-item">
                <p className="tp-checkout-verify-reveal">
                  Have a coupon?{" "}
                  <button
                    type="button"
                    className="tp-checkout-coupon-form-reveal-btn"
                    onClick={() => setOpenCoupon(!openCoupon)}
                  >
                    Click here to enter your code
                  </button>
                </p>

                {openCoupon && (
                  <div id="tpCheckoutCouponForm" className="tp-return-customer">
                    <form action="#">
                      <div className="tp-return-customer-input">
                        <label>Coupon Code :</label>
                        <input type="text" placeholder="Coupon" />
                      </div>
                      <button type="submit" className="tp-btn-cart sm">
                        Apply
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <form action="">
          <div className="row">
            <div className="col-lg-7">
              <div className="tp-checkout-bill-area">
                <h3 className="tp-checkout-bill-title">Billing Details</h3>

                <div className="tp-checkout-bill-form">
                  <div className="tp-checkout-bill-inner">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="tp-checkout-input">
                          <label>
                            First Name <span>*</span>
                          </label>
                          <input type="text" placeholder="First Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="tp-checkout-input">
                          <label>
                            Last Name <span>*</span>
                          </label>
                          <input type="text" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="tp-checkout-input">
                          <label>Company name (optional)</label>
                          <input type="text" placeholder="Example LTD." />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="tp-checkout-input">
                          <label>Country / Region </label>
                          <input type="text" placeholder="United States (US)" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="tp-checkout-input">
                          <label>Street address</label>
                          <input
                            type="text"
                            placeholder="House number and street name"
                          />
                        </div>

                        <div className="tp-checkout-input">
                          <input
                            type="text"
                            placeholder="Apartment, suite, unit, etc. (optional)"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="tp-checkout-input">
                          <label>Town / City</label>
                          <input type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="tp-checkout-input">
                          <label>State / County</label>
                          <NiceSelect
                            options={[
                              { value: "", label: "Select Country" },
                              { value: "new-york", label: "New York US" },
                              { value: "berlin", label: "Berlin Germany" },
                              { value: "paris", label: "Paris France" },
                              { value: "tokiyo", label: "Tokiyo Japan" },
                            ]}
                            defaultCurrent={0}
                            onChange={(item) => handleCountry(item)}
                            name="Country"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="tp-checkout-input">
                          <label>Postcode ZIP</label>
                          <input type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="tp-checkout-input">
                          <label>
                            Phone <span>*</span>
                          </label>
                          <input type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="tp-checkout-input">
                          <label>
                            Email address <span>*</span>
                          </label>
                          <input type="email" placeholder="" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="tp-checkout-input">
                          <label>Order notes (optional)</label>
                          <textarea placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              {/* checkout order */}
              <CheckoutOrder />
              {/* checkout order */}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
