import React from "react";

export default function LineText() {
  return (
    <div className="tp-line-text-area tp-line-text-space black-bg z-index-4 fix">
      <div className="container-fuild">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-line-text-box">
              <h4 className="tp-line-text mb-15">
                LinkedIn <span>- Facebook -</span> Twitter{" "}
                <span>- Facebook -</span> Twitter <span>- Facebook -</span>{" "}
                LinkedIn
              </h4>
              <h4 className="tp-line-text tp-line-text-2">
                - Behance <span>- Youtube -</span> Dribble{" "}
                <span>- Behance -</span> Youtube <span>- Dribble -</span>{" "}
                LinkedIn
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
