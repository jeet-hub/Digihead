'use client';
import React from "react";
import { maxPrice } from "@/utils/utils";
import InputRange from "@/components/ui/input-range";

export default function PriceFilter() {
  const [priceValue, setPriceValue] = React.useState([0, maxPrice()]);
  const handleChanges = (val: number[]) => {
    setPriceValue(val);
  };
  return (
    <div className="tp-shop-widget mb-35">
      <h3 className="tp-shop-widget-title no-border">Price Filter</h3>
      <div className="tp-shop-widget-content">
        <div className="tp-shop-widget-filter">
          <div id="slider-range" className="mb-10">
            <InputRange
              MAX={maxPrice()}
              MIN={0}
              STEP={1}
              values={priceValue}
              handleChanges={handleChanges}
            />
          </div>
          <div className="tp-shop-widget-filter-info d-flex align-items-center justify-content-between">
            <div className="input-range">
              <span>${priceValue[0]} - ${priceValue[1]}</span>
            </div>
            <button className="tp-shop-widget-filter-btn" type="button">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
