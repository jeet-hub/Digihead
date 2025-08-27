import React from "react";
import Image from "next/image";
import { Minus, Plus } from "../../svg";

// images
const variation_images = [
  "/assets/img/inner-shop/shop-details/shop-details-sm-1.jpg",
  "/assets/img/inner-shop/shop-details/shop-details-sm-2.jpg",
  "/assets/img/inner-shop/shop-details/shop-details-sm-3.jpg",
  "/assets/img/inner-shop/shop-details/shop-details-sm-4.jpg",
  "/assets/img/inner-shop/shop-details/shop-details-sm-5.jpg",
  "/assets/img/inner-shop/shop-details/shop-details-sm-6.jpg",
  "/assets/img/inner-shop/shop-details/shop-details-sm-7.jpg",
  "/assets/img/inner-shop/shop-details/shop-details-sm-8.jpg",
];

export default function DetailsRightWrap() {
  const [quantity, setQuantity] = React.useState(1);
  return (
    <div className="tp-shop-details-right-wrap">
      <div className="tp-shop-details-categories">
        <span>Mens • Running</span>
      </div>
      <h4 className="tp-shop-details-title">Weekender Soda Shoes</h4>
      <div className="tp-shop-details-inventory d-flex align-items-center">
        <div className="tp-shop-details-price">
          <span>$248.00</span>
        </div>
        <div className="tp-shop-details-ratting-wrap d-flex align-items-center">
          <div className="tp-shop-details-ratting">
            <span>
              <i className="fa-sharp fa-solid fa-star"></i>
            </span>
            <span>
              <i className="fa-sharp fa-solid fa-star"></i>
            </span>
            <span>
              <i className="fa-sharp fa-solid fa-star"></i>
            </span>
            <span>
              <i className="fa-sharp fa-solid fa-star"></i>
            </span>
            <span>
              <i className="fa-sharp fa-solid fa-star"></i>
            </span>
          </div>
          <div className="tp-shop-details-reviews">
            <span>148 reviews</span>
          </div>
        </div>
      </div>
      <div className="tp-shop-details-msg">
        <h4 className="tp-shop-details-title-sm">Running Shoe Guarantee</h4>
        <p>
          This product is excluded from all promotionaldiscounts and offers. Try
          this shoe for 30 days performance running shoe return guarantee.
        </p>
      </div>
      <div className="tp-shop-details-variation mb-40">
        <h4 className="tp-shop-details-title-sm">Colors available</h4>
        <div className="tp-shop-details-variation-list d-flex align-items-center flex-wrap">
          {variation_images.map((imgSrc, i) => (
            <button
              key={i}
              className="tp-shop-details-variation-button mr-5 mb-5"
            >
              <Image src={imgSrc} alt="variation-img" width={80} height={74} />
            </button>
          ))}
        </div>
      </div>
      <div className="tp-shop-details-size-wrap mb-40">
        <h4 className="tp-shop-details-title-sm">Man’s Sizes</h4>
        <div className="tp-shop-details-size-list">
          <button>36</button>
          <button>55</button>
          <button>66</button>
          <button>25</button>
          <button>12</button>
          <button>70</button>
          <button>22</button>
          <button>32</button>
          <button>37</button>
          <button>41</button>
        </div>
      </div>
      <div className="tp-shop-details-action-box mb-40 d-flex align-items-center">
        <div className="tp-shop-details-quantity">
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
            defaultValue={quantity}
          />
          <span
            className="tp-cart-plus"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus />
          </span>
        </div>
        <div className="tp-shop-details-btn-box d-flex align-items-center">
          <a className="tp-btn-cart mr-10" href="#">
            <span>
              <i className="fa-sharp fa-solid fa-cart-shopping"></i>
            </span>
            Add To Cart
          </a>
          <a className="tp-btn-wishlist" href="#">
            <span>
              <i className="fa-sharp fa-light fa-heart"></i>
            </span>
          </a>
        </div>
      </div>
      <div className="tp-shop-details-query">
        <div className="tp-shop-details-query-item d-flex align-items-center">
          <span>SKU:</span>
          <p>NTB7SDVX44</p>
        </div>
        <div className="tp-shop-details-query-item d-flex align-items-center">
          <span>Category:</span>
          <p>Running Shoes</p>
        </div>
        <div className="tp-shop-details-query-item d-flex align-items-center">
          <span>Tag:</span>
          <p>Shoes</p>
        </div>
      </div>
    </div>
  );
}
