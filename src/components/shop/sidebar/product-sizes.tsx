import React from "react";

// sizes 
const sizes = [38,48,60,58,18,56,47,81,32,21,34];

export default function ProductSizes() {
  return (
    <div className="tp-shop-widget mb-50">
      <h3 className="tp-shop-widget-title">Product Size</h3>
      <div className="tp-shop-widget-size-wrap d-flex align-items-center flex-wrap">
        {sizes.map((s, i) => (
          <div className="tp-shop-widget-size-item" key={i}>
            <button>{s}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
