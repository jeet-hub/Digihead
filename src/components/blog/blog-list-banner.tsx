import React from "react";

export default function BlogListBanner() {
  return (
    <div className="tp-blog-list-banner">
      <div
        className="tp-blog-list-bg tp-blog-list-bg-overlay"
        style={{backgroundImage:`url(/assets/img/inner-blog/blog-right-sidebar/blog-banner.jpg)`}}
      >
        <div className="container z-index">
          <div className="row align-items-end">
            <div className="col-xl-7 col-lg-7 col-md-7">
              <div className="tp-blog-list-title-box">
                <h2 className="tp-section-title fs-160 tp-char-animation">
                  Read <br /> All News
                </h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5">
              <div className="tp-blog-list-text text-start text-md-end">
                <span>FEATURED STORIES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
