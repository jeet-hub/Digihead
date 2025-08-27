import React from "react";

// prop type
type IProps = {
  item: {id:number;question: string; answer: string};
};

export default function FaqItem({ item }: IProps) {
  return (
    <div className="accordion-items">
      <h2 className="accordion-header">
        <button
          className="accordion-buttons collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${item.id}`}
          aria-expanded="true"
          aria-controls={`collapse-${item.id}`}
        >
          {item.question}
          <span className="accordion-icon"></span>
        </button>
      </h2>
      <div
        id={`collapse-${item.id}`}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
