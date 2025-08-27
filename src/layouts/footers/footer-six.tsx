import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Email, Location } from "@/components/svg";
import logo from "@/assets/img/logo/logo-white.png";
import payment from "@/assets/img/inner-shop/payment.png";
import social_data from "@/data/social-data";

export default function FooterSix() {
  return (
    <footer>
      <div className="tp-footer-6-area black-bg pt-100">
        <div className="container container-1300">
          <div className="tp-footer-6-widget-wrap">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-60">
                <div className="tp-footer-6-widget footer-col-6-1">
                  <div className="tp-footer-6-logo">
                    <Link href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                  <div className="tp-footer-6-talk">
                    <span>Got Questions? Call us</span>
                    <h4>
                      <a href="tel:+67041390762">+670 413 90 762</a>
                    </h4>
                  </div>
                  <div className="tp-footer-6-contact">
                    <div className="tp-footer-6-contact-item d-flex align-items-start">
                      <div className="tp-footer-6-contact-icon">
                        <span>
                          <Email />
                        </span>
                      </div>
                      <div className="tp-footer-6-contact-content">
                        <a href="mailto:liko@gmail.com">liko@gmail.com</a>
                      </div>
                    </div>
                    <div className="tp-footer-6-contact-item d-flex align-items-start">
                      <div className="tp-footer-6-contact-icon">
                        <span>
                          <Location />
                        </span>
                      </div>
                      <div className="tp-footer-6-contact-content">
                        <a href="https://www.google.com/maps" target="_blank">
                          79 Sleepy Hollow St.
                          <br />
                          Jamaica, New York 1432
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-60">
                <div className="tp-footer-6-widget footer-col-6-2">
                  <h4 className="tp-footer-6-widget-title">Category</h4>
                  <div className="tp-footer-6-list">
                    <ul>
                      <li><a href="#">Our Story</a></li>
                      <li><a href="#">Careers</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Terms & Conditions</a></li>
                      <li><a href="#">Latest News</a></li>
                      <li><a href="#">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 col-sm-4 mb-60">
                <div className="tp-footer-6-widget footer-col-6-3">
                  <h4 className="tp-footer-6-widget-title">My Account</h4>
                  <div className="tp-footer-6-list">
                    <ul>
                      <li><a href="#">Track Orders</a></li>
                      <li><a href="#">Shipping</a></li>
                      <li><a href="#">Wishlist</a></li>
                      <li><a href="#">My Account</a></li>
                      <li><a href="#">Order History</a></li>
                      <li><a href="#">Returns</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 mb-60">
                <div className="tp-footer-6-widget footer-col-6-4">
                  <h4 className="tp-footer-6-widget-title">Subcribe.</h4>
                  <div className="tp-footer-6-input-box">
                    <form action="#">
                      <label>Our conversation is just getting started</label>
                      <div className="tp-footer-6-input p-relative">
                        <input type="text" placeholder="Enter Your Email" />
                        <button className="tp-btn-subscribe" type="submit">
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="tp-footer-6-social-box">
                    <h4 className="tp-footer-6-social-title">Follow Us On</h4>
                    <div className="tp-footer-6-social">
                      {social_data.map((item) => ( 
                        <a key={item.id} href={item.link} target="_blank">
                          <i className={item.icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-copyright-2-area tp-copyright-2-bdr-top black-bg">
          <div className="container container-1300">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-5 col-md-6">
                <div className="tp-copyright-2-left text-center text-md-start">
                  <p className="mb-0">
                    All rights reserved — {new Date().getFullYear()} © Themepure
                  </p>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7 col-md-6">
                <div className="tp-copyright-2-payment text-center text-md-end">
                  <Image src={payment} alt="payment" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
