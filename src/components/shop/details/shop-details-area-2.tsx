import React from "react";
import Image from "next/image";
import DetailsRightWrap from "./details-right-wrap";

// images
import tab_img_1 from "@/assets/img/inner-shop/shop-details/tab-img/tab-1.png";
import tab_img_2 from "@/assets/img/inner-shop/shop-details/tab-img/tab-2.png";
import tab_img_3 from "@/assets/img/inner-shop/shop-details/tab-img/tab-3.png";
import tab_img_4 from "@/assets/img/inner-shop/shop-details/tab-img/tab-4.png";
import tab_img_5 from "@/assets/img/inner-shop/shop-details/tab-img/tab-5.png";
// nav images
import nav_1 from "@/assets/img/inner-shop/shop-details/tab-img/nav-1.png";
import nav_2 from "@/assets/img/inner-shop/shop-details/tab-img/nav-2.png";
import nav_3 from "@/assets/img/inner-shop/shop-details/tab-img/nav-3.png";
import nav_4 from "@/assets/img/inner-shop/shop-details/tab-img/nav-4.png";
import nav_5 from "@/assets/img/inner-shop/shop-details/tab-img/nav-5.png";

const tab_images = [tab_img_1, tab_img_2, tab_img_3, tab_img_4, tab_img_5];
const nav_images = [nav_1, nav_2, nav_3, nav_4, nav_5];

export default function ShopDetailsAreaTwo() {
  return (
    <div className="tp-shop-details-2-area tp-product-details-2-style pt-170">
      <div className="container container-1300">
        <div className="row align-items-start">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-product-details-thumb-wrapper tp-tab">
              <div
                className="tab-content m-img mb-20"
                id="productDetailsNavContent"
              >
                {tab_images.map((imgSrc, i) => (
                  <div
                    key={i}
                    className={`tab-pane fade ${i === 0 ? "show active" : ""}`}
                    id={`nav-${i + 1}`}
                    role="tabpanel"
                    aria-labelledby={`nav-${i + 1}-tab`}
                    tabIndex={0}
                  >
                    <div className="tp-product-details-nav-main-thumb">
                      <Image
                        className="w-100"
                        src={imgSrc}
                        alt="tab-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <nav>
                <div
                  className="nav nav-tabs"
                  id="productDetailsNavThumb"
                  role="tablist"
                >
                  {nav_images.map((imgSrc, i) => (
                    <button
                      key={i}
                      className={`nav-link ${i === 0 ? "active" : ""}`}
                      id={`nav-${i + 1}-tab`}
                      data-bs-toggle="tab"
                      data-bs-target={`#nav-${i + 1}`}
                      type="button"
                      role="tab"
                      aria-controls={`nav-${i + 1}`}
                      aria-selected="false"
                    >
                      <Image
                        className="w-100"
                        src={imgSrc}
                        alt="nav-img"
                        style={{ height: "100%" }}
                      />
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <DetailsRightWrap />
          </div>
        </div>
      </div>
    </div>
  );
}
