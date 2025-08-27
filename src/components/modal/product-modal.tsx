"use client";
import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Modal from "react-bootstrap/Modal";
import { IProductDT } from "@/types/product-d-t";
import { AskQuestion, Compare, Minus, Plus, WishlistTwo } from "../svg";

// prop type
type IProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setProductItem: React.Dispatch<React.SetStateAction<IProductDT | null>>;
  productItem: IProductDT;
};

export default function ProductModal({showModal,setShowModal,productItem,setProductItem}: IProps) {
  const {relatedImages,title,category,price,id,img} = productItem || {};
  const [activeImg, setActiveImg] = React.useState<StaticImageData | null>(img);
  const [quantity, setQuantity] = React.useState(1);
  useEffect(() => {
 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[activeImg,img])
  const handleClose = () => {
    setShowModal(false);
    setProductItem(null);
  };
  return (
    <Modal show={showModal} onHide={handleClose} centered={true} className="tp-product-modal">

      <button
        onClick={handleClose}
        type="button"
        className="tp-product-modal-close-btn"
      >
        <i className="fa-regular fa-xmark"></i>
      </button>
            
      <Modal.Body>
        {productItem && (
          <div className="tp-product-modal-content d-lg-flex align-items-start">
            <div className="tp-product-details-thumb-wrapper tp-tab d-sm-flex">
              <nav>
                <div className="nav nav-tabs flex-sm-column ">
                  {relatedImages.map((imgSrc, i) => (
                    <button
                      key={i}
                      className={`nav-link ${activeImg === imgSrc ? "active" : ""}`}
                      type="button"
                      onClick={() => setActiveImg(imgSrc)}
                    >
                      <Image
                        src={imgSrc}
                        alt="nav-img"
                        width={90}
                        height={100}
                        style={{ objectFit: "cover" }}
                      />
                    </button>
                  ))}
                </div>
              </nav>

              <div className="m-img">
                <div className="tp-product-details-nav-main-thumb">
                  {activeImg && (
                    <Image
                      src={activeImg}
                      alt="main-thumb"
                      width={396}
                      height={465}
                      style={{ width: "100%" }}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="tp-product-details-wrapper">
              <div className="tp-product-details-category">
                <span>{category}</span>
              </div>
              <h3 className="tp-product-details-title">
                {title}
              </h3>

              {/* inventory details */}
              <div className="tp-product-details-inventory d-flex align-items-center mb-10">
                <div className="tp-product-details-stock mb-10">
                  <span>In Stock</span>
                </div>
                <div className="tp-product-details-rating-wrapper d-flex align-items-center mb-10">
                  <div className="tp-product-details-rating">
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </div>
                  <div className="tp-product-details-reviews">
                    <span>(36 Reviews)</span>
                  </div>
                </div>
              </div>
              <p>
                A Screen Everyone Will Love: Whether your family is streaming or
                video chatting with friends tablet A8... <span>See more</span>
              </p>

              {/* price */}
              <div className="tp-product-details-price-wrapper mb-20">
                <span className="tp-product-details-price old-price">
                  $320.00
                </span>
                <span className="tp-product-details-price new-price">
                  $236.00
                </span>
              </div>

              {/* actions */}
              <div className="tp-product-details-action-wrapper">
                <h3 className="tp-product-details-action-title">Quantity</h3>
                <div className="tp-product-details-action-item-wrapper d-flex align-items-center">
                  <div className="tp-product-details-quantity">
                    <div className="tp-product-quantity mb-15 mr-15">
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
                  </div>
                  <div className="tp-product-details-add-to-cart mb-15 w-100">
                    <button className="tp-cart-update-btn w-100">
                      Add To Cart
                    </button>
                  </div>
                </div>
                <button className="tp-cart-checkout-btn w-100">Buy Now</button>
              </div>
              <div className="tp-product-details-action-sm">
                <button
                  type="button"
                  className="tp-product-details-action-sm-btn"
                >
                  <Compare />
                  Compare
                </button>
                <button
                  type="button"
                  className="tp-product-details-action-sm-btn"
                >
                  <WishlistTwo />
                  Add Wishlist
                </button>
                <button
                  type="button"
                  className="tp-product-details-action-sm-btn"
                >
                  <AskQuestion />
                  Ask a question
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}
