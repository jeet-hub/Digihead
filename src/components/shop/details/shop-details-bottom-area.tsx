import React from "react";
import DetailsDescription from "./details-description";
import DetailsSizes from "./details-sizes";
import DetailsReview from "./details-review";
import { IProductDT } from "@/types/product-d-t";


// prop type
type IProps = {
  product: IProductDT;
};

export default function ShopDetailsBottomArea({ product }: IProps) {
  const activeRef = React.useRef<HTMLButtonElement | null>(null)
  const marker = React.useRef<HTMLSpanElement | null>(null);
  // handleActive
  const handleActive = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement;
    if (target.classList.contains('active') && marker.current) {
      marker.current.style.left = target.offsetLeft + "px";
      marker.current.style.width = target.offsetWidth + "px";
    }
  }
  React.useEffect(() => {
    if (activeRef.current?.classList.contains('active') && marker.current) {
      marker.current.style.left = activeRef.current.offsetLeft + 'px';
      marker.current.style.width = activeRef.current.offsetWidth + 'px';
    }
  }, []);
  return (
    <section className="tp-product-details-area">
      <div className="tp-product-details-bottom pt-120 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-product-details-tab-nav tp-tab">
                <nav>
                  <div
                    className="nav nav-tabs justify-content-center p-relative tp-product-tab"
                    id="navPresentationTab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="nav-description-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-description"
                      type="button"
                      role="tab"
                      aria-controls="nav-description"
                      aria-selected="true"
                      ref={activeRef}
                      onClick={(e) => handleActive(e)}
                    >
                      Description
                    </button>
                    <button
                      className="nav-link"
                      id="nav-addInfo-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-addInfo"
                      type="button"
                      role="tab"
                      aria-controls="nav-addInfo"
                      aria-selected="false"
                      onClick={e => handleActive(e)}
                    >
                      Size & Fit information
                    </button>
                    <button
                      className="nav-link"
                      id="nav-review-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-review"
                      type="button"
                      role="tab"
                      aria-controls="nav-review"
                      aria-selected="false"
                      onClick={e => handleActive(e)}
                    >
                      Reviews (2)
                    </button>

                    <span
                      id="productTabMarker"
                      className="tp-product-details-tab-line"
                      ref={marker}
                    ></span>
                  </div>
                </nav>
                <div className="tab-content" id="navPresentationTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-description"
                    role="tabpanel"
                    aria-labelledby="nav-description-tab"
                    tabIndex={0}
                  >
                    {/* description */}
                    <DetailsDescription />
                    {/* description */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-addInfo"
                    role="tabpanel"
                    aria-labelledby="nav-addInfo-tab"
                    tabIndex={0}
                  >
                    {/* details sizes */}
                    <DetailsSizes />
                    {/* details sizes */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-review"
                    role="tabpanel"
                    aria-labelledby="nav-review-tab"
                    tabIndex={0}
                  >
                    <DetailsReview />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
