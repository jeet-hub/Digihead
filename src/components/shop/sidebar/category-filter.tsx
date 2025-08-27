import React from "react";

const categories = [
  { category: "Classics", items: 10 },
  { category: "Running Shoes", items: 18 },
  { category: "Sports Shoes", items: 22 },
  { category: "Clothes", items: 17 },
  { category: "Boots", items: 22 },
  { category: "Lifestyle", items: 14 },
  { category: "Rider Pack", items: 19 },
  { category: "Outdoor", items: 29 },
  { category: "Phones", items: 5 },
  { category: "Grocery", items: 14 },
];
export default function CategoryFilter() {
  return (
    <div className="tp-shop-widget mb-50">
      <h3 className="tp-shop-widget-title">Categories</h3>

      <div className="tp-shop-widget-content">
        <div className="tp-shop-widget-categories">
          <ul>
            {categories.map((item, i) => (
              <li key={i}>
                <a href="#">
                  {item.category} <span>{item.items}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
