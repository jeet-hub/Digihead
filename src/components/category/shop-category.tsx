import React from "react";
import Image from "next/image";
import cate_1 from "@/assets/img/inner-shop/category/category-1.jpg";
import cate_2 from "@/assets/img/inner-shop/category/category-2.jpg";
import cate_3 from "@/assets/img/inner-shop/category/category-3.jpg";
import Link from "next/link";

const category_data = [
  {
    id: 1,
    img: cate_1,
    title: "Shop men",
  },
  {
    id: 2,
    img: cate_2,
    title: "Shop Women",
  },
  {
    id: 3,
    img: cate_3,
    title: "Shop kids",
  },
];

export default function ShopCategory() {
  return (
    <div className="tp-shop-category-area pt-100 pb-90">
      <div className="container container-1720">
        <div className="row">
          {category_data.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 mb-30">
              <div className="tp-shop-category-item p-relative fix">
                <Image src={item.img} alt="category-img" style={{height:"auto"}} />
                <Link className="tp-btn-shop-category" href="/shop">
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
