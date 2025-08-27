import React from "react";
import Image from "next/image";
import { IProductDT } from "@/types/product-d-t";
import DetailsRightWrap from "./details-right-wrap";

// images
import s_d_1 from "@/assets/img/inner-shop/shop-details/shop-details-1.jpg";
import s_d_2 from "@/assets/img/inner-shop/shop-details/shop-details-2.jpg";
import s_d_3 from "@/assets/img/inner-shop/shop-details/shop-details-3.jpg";
import s_d_4 from "@/assets/img/inner-shop/shop-details/shop-details-4.jpg";
import s_d_5 from "@/assets/img/inner-shop/shop-details/shop-details-5.jpg";
import s_d_6 from "@/assets/img/inner-shop/shop-details/shop-details-6.jpg";

const shop_details_images = [s_d_1, s_d_2, s_d_3, s_d_4, s_d_5, s_d_6];

// prop type
type IProps = {
  product: IProductDT;
};

export default function ShopDetailsArea({ product }: IProps) {
  return (
    <div className="tp-shop-details-area tp-shop-details-scroll-height pt-100">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-xxl-8 col-xl-7">
            <div className="tp-shop-details-left-wrap">
              <div className="row gx-5">
                {shop_details_images.map((imgSrc, i) => (
                  <div key={i} className="col-xl-6 col-lg-6 col-md-6">
                    <div className="tp-shop-details-left-thumb mb-5">
                      <Image
                        src={imgSrc}
                        alt="shop-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-5">
            <DetailsRightWrap />
          </div>
        </div>
      </div>
    </div>
  );
}
