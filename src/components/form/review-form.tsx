import React from "react";

export default function ReviewForm() {
  return (
    <form action="#">
      <div className="tp-product-details-review-form-rating d-flex align-items-center">
        <p>Your Rating :</p>
        <div className="tp-product-details-review-form-rating-icon d-flex align-items-center">
          <span>
          <span><i className="fa-solid fa-star"></i></span>
          <span><i className="fa-solid fa-star"></i></span>
          <span><i className="fa-solid fa-star"></i></span>
          <span><i className="fa-solid fa-star"></i></span>
          <span><i className="fa-solid fa-star"></i></span>
          </span>
        </div>
      </div>
      <div className="tp-product-details-review-input-wrapper">
        <div className="tp-product-details-review-input-box">
          <div className="tp-product-details-review-input-title">
            <label htmlFor="msg">Your Review *</label>
          </div>
          <div className="tp-product-details-review-input">
            <textarea
              id="msg"
              name="msg"
              placeholder="Write your review here..."
            ></textarea>
          </div>
        </div>
        <div className="tp-product-details-review-input-box">
          <div className="tp-product-details-review-input-title">
            <label htmlFor="name">Name *</label>
          </div>
          <div className="tp-product-details-review-input">
            <input name="name" id="name" type="text" placeholder="Farhan" />
          </div>
        </div>
        <div className="tp-product-details-review-input-box">
          <div className="tp-product-details-review-input">
            <div className="tp-product-details-review-input-title">
              <label htmlFor="email">Email *</label>
            </div>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="liko@mail.com"
            />
          </div>
        </div>
      </div>
      <div className="tp-product-details-review-suggetions mb-20">
        <div className="tp-product-details-review-remeber">
          <input id="remeber" type="checkbox" />
          <label htmlFor="remeber">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
      </div>
      <div className="tp-product-details-review-btn-wrapper">
        <button
          type="submit"
          className="tp-product-details-review-btn tp-btn-submit"
        >
          Submit Review
        </button>
      </div>
    </form>
  );
}
