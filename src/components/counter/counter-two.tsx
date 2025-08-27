import React from "react";
import CounterItem from "./counter-item";

const counter_data = [
  {
    id: 1,
    title: "Experts",
    count: 54,
  },
  {
    id: 2,
    title: "Projects",
    count: 21,
  },
  {
    id: 3,
    title: "Years in business",
    count: 17,
  },
  {
    id: 4,
    title: "Awards",
    count: 86,
  },
  {
    id: 5,
    title: "Offices",
    count: 4,
  },
];
export default function CounterTwo() {
  return (
    <div className="row gx-0">
      {counter_data.map((item) => (
        <div key={item.id} className="col-xl col-lg col-md col-sm-4 col-6">
          <div className="tp-studio-funfact-item text-start text-md-center">
            <h4 className="tp-studio-funfact-title">
              <span>+</span>
              <CounterItem min={0} max={item.count} />
            </h4>
            <span>{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
