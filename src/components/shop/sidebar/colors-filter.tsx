import React from "react";

const colors = [
  { clr: "Red", items: 8 },
  { clr: "Dark Blue", items: 14 },
  { clr: "Orange", items: 18 },
  { clr: "Yellow", items: 22 },
  { clr: "Green", items: 17 },
  { clr: "Purple", items: 22 },
];

export default function ColorsFilter() {
  return (
    <div className="tp-shop-widget mb-50">
      <h3 className="tp-shop-widget-title">Filter by Color</h3>
      <div className="tp-shop-widget-content">
        <div className="tp-shop-widget-checkbox-circle-list">
          <ul>
            {colors.map((item, i) => (
              <li key={i}>
                <div className="tp-shop-widget-checkbox-circle">
                  <input
                    type="checkbox"
                    id={item.clr.split(" ").join("_").toLowerCase()}
                  />
                  <label htmlFor={item.clr.split(" ").join("_").toLowerCase()}>
                    {item.clr}
                  </label>
                  <span
                    className={`tp-shop-widget-checkbox-circle-self ${item.clr
                      .split(" ")
                      .join("_")
                      .toLowerCase()}`}
                  ></span>
                </div>
                <span className="tp-shop-widget-checkbox-circle-number">
                  {item.items}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
