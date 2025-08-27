import React from "react";

// prop type 
type IProps = {
  star: number;
  percent: number;
}
export default function RatingItem({ star, percent }: IProps) {
  return (
    <div className="tp-product-details-review-rating-item d-flex align-items-center">
      <span>{star} Start</span>
      <div className="tp-product-details-review-rating-bar">
        <span
          className="tp-product-details-review-rating-bar-inner"
          data-width="82%"
          style={{ width: `${percent}%` }}
        ></span>
      </div>
      <div className="tp-product-details-review-rating-percent">
        <span>{percent}%</span>
      </div>
    </div>
  );
}
