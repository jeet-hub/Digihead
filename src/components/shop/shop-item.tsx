import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IProductDT } from "@/types/product-d-t";
import { CartTwo, QuickViewEye, WishlistTwo } from "../svg";

// prop type
type IProps = {
  product: IProductDT;
  handleProductModal(product: IProductDT): void;
};
export default function ShopItem({ product,handleProductModal }: IProps) {
  return (
    <div className="tp-shop-right-item mb-30 p-relative">
      <div className="tp-shop-right-thumb fix">
        <Image
          className="w-100"
          src={product.img}
          alt="product-img"
          style={{ height: "auto" }}
        />
      </div>
      <div className="tp-product-action tp-product-action-blackStyle">
        <div className="tp-product-action-item d-flex flex-column">
          <button
            type="button"
            className="tp-product-action-btn tp-product-add-cart-btn"
          >
            <CartTwo />
            <span className="tp-product-tooltip tp-product-tooltip-right">
              Add to Cart
            </span>
          </button>
          <button
            type="button"
            className="tp-product-action-btn tp-product-quick-view-btn"
            onClick={() => handleProductModal(product)}
          >
            <QuickViewEye />
            <span className="tp-product-tooltip tp-product-tooltip-right">
              Quick View
            </span>
          </button>
          <button
            type="button"
            className="tp-product-action-btn tp-product-add-to-wishlist-btn"
          >
            <WishlistTwo />
            <span className="tp-product-tooltip tp-product-tooltip-right">
              Add To Wishlist
            </span>
          </button>
        </div>
      </div>
      <div className="tp-shop-right-content d-flex align-items-end justify-content-between">
        <div className="tp-shop-right-title-box">
          <span>{product.category}</span>
          <h4 className="tp-shop-right-title">
            <Link href={`/shop-details/${product.id}`}>{product.title}</Link>
          </h4>
        </div>
        <div className="tp-shop-right-price">
          <span>${product.price}</span>
        </div>
      </div>
      <div className="tp-product-btn-box">
        <Link href={`/shop-details/${product.id}`}
          className="tp-btn-shop-category black-bg w-100"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
