import React from "react";
import Image from "next/image";
import ReviewForm from "@/components/form/review-form";
import RatingItem from "./rating-item";

export default function DetailsReview() {
  return (
    <div className="tp-product-details-review-wrapper pt-60">
      <div className="row">
        <div className="col-lg-6">
          <div className="tp-product-details-review-statics">
            <div className="tp-product-details-review-number d-inline-block mb-50">
              <h3 className="tp-product-details-review-number-title">
                Customer reviews
              </h3>
              <div className="tp-product-details-review-summery d-flex align-items-center">
                <div className="tp-product-details-review-summery-value">
                  <span>4.5</span>
                </div>
                <div className="tp-product-details-review-summery-rating d-flex align-items-center">
                  <span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                  </span>
                  <p>(36 Reviews)</p>
                </div>
              </div>
              <div className="tp-product-details-review-rating-list">
                <RatingItem star={5} percent={82} />
                <RatingItem star={4} percent={30} />
                <RatingItem star={3} percent={15} />
                <RatingItem star={2} percent={6} />
                <RatingItem star={1} percent={10} />
              </div>
            </div>

            {/* reviews */}
            <div className="tp-product-details-review-list pr-110">
              <h3 className="tp-product-details-review-title">
                Rating & Review
              </h3>
              <div className="tp-product-details-review-avater d-flex align-items-start">
                <div className="tp-product-details-review-avater-thumb">
                  <a href="#">
                    <Image
                      src="/assets/img/inner-shop/avatar/avatar-1.png"
                      alt="avatar"
                      width={70}
                      height={70}
                    />
                  </a>
                </div>
                <div className="tp-product-details-review-avater-content">
                  <div className="tp-product-details-review-avater-rating d-flex align-items-center">
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                  </div>
                  <h3 className="tp-product-details-review-avater-title">
                    Eleanor Fant
                  </h3>
                  <span className="tp-product-details-review-avater-meta">
                    06 March, 2024{" "}
                  </span>

                  <div className="tp-product-details-review-avater-comment">
                    <p>
                      Designed very similarly to the nearly double priced Galaxy
                      tab S6 with the only removal being.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end col */}
        <div className="col-lg-6">
          <div className="tp-product-details-review-form">
            <h3 className="tp-product-details-review-form-title">
              Review this product
            </h3>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            {/* review form */}
            <ReviewForm />
            {/* review form */}
          </div>
        </div>
      </div>
    </div>
  );
}
