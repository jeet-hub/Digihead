import React from "react";
import Image from "next/image";

// brand images
import b_1 from "@/assets/img/inner-shop/shop-sidebar/brand/brand-1.png";
import b_2 from "@/assets/img/inner-shop/shop-sidebar/brand/brand-2.png";
import b_3 from "@/assets/img/inner-shop/shop-sidebar/brand/brand-3.png";
import b_4 from "@/assets/img/inner-shop/shop-sidebar/brand/brand-4.png";
import b_5 from "@/assets/img/inner-shop/shop-sidebar/brand/brand-5.png";
import b_6 from "@/assets/img/inner-shop/shop-sidebar/brand/brand-6.png";
import b_7 from "@/assets/img/inner-shop/shop-sidebar/brand/brand-7.png";
import b_8 from "@/assets/img/inner-shop/shop-sidebar/brand/brand-8.png";

// brand images
const brand_images = [b_1, b_2, b_3, b_4, b_5, b_6, b_7, b_8];

export default function ShopBrands() {
  return (
    <div className="tp-shop-widget mb-50">
      <h3 className="tp-shop-widget-title">Popular Brands</h3>
      <div className="tp-shop-widget-content ">
        <div className="tp-shop-widget-brand-list d-flex align-items-center justify-content-between flex-wrap">
          {brand_images.map((item, i) => (
            <div className="tp-shop-widget-brand-item" key={i}>
              <a href="#">
                <Image src={item} alt="brand-img" style={{ height: "auto" }} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
