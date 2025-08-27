"use client";
import React from "react";
import ShopSidebar from "./sidebar/shop-sidebar";
import usePagination from "@/hooks/use-pagination";
import product_data from "@/data/product-data";
import ShopItem from "./shop-item";
import Pagination from "../ui/pagination";
import { Filter } from "../svg";
import ProductModal from "../modal/product-modal";
import { IProductDT } from "@/types/product-d-t";
import NiceSelect from "../ui/nice-select";

export default function ShopArea() {
  const products = [...product_data];
  const { currentItems, handlePageClick, pageCount } = usePagination(products,9);
  const [productItem, setProductItem] = React.useState<IProductDT | null>(null);
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  function handleProductModal (product: IProductDT) {
    setModalOpen(true);
    setProductItem(product);
  };

  const handleSorting = (item: { value: string; label: string }) => {};
  return (
    <>
      <div className="tp-shop-sidebar-area pb-80">
        <div className="container container-1720">
          <div className="row">
            {/* shop sidebar area end */}
            <div className="col-xl-2 col-lg-4">
              <ShopSidebar />
            </div>
            {/* shop sidebar area end */}

            {/* shop main area start */}
            <div className="col-xl-10 col-lg-8">
              <div className="tp-shop-sidebar-wrap">
                <div className="tp-shop-top mb-45">
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-5 col-md-5">
                      <div className="tp-shop-top-left">
                        <div className="tp-shop-top-result">
                          <p>Showing 1–14 of 26 results</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-7">
                      <div className="tp-shop-top-right d-flex justify-content-start align-items-center justify-content-md-end">
                        <div className="tp-shop-top-select">
                          <NiceSelect
                            options={[
                              { value: "", label: "Default Sorting" },
                              { value: "low-to-hight", label: "Low to Hight" },
                              { value: "high-to-low", label: "High to Low" },
                              { value: "new-added", label: "New Added" },
                              { value: "on-sale", label: "On Sale" },
                            ]}
                            defaultCurrent={0}
                            onChange={(item) => handleSorting(item)}
                            name="Sorting"
                          />
                        </div>
                        <div className="tp-shop-top-filter">
                          <button
                            type="button"
                            className="tp-filter-btn filter-open-btn"
                          >
                            <span>
                              <Filter />
                            </span>
                            Filter
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-shop-main-wrap">
                      <div className="row">
                        {currentItems.map((item) => (
                          <div
                            key={item.id}
                            className="col-xl-4 col-lg-6 col-md-6"
                          >
                            <ShopItem product={item} handleProductModal={handleProductModal} />
                          </div>
                        ))}

                        <div className="col-12">
                          <div className="basic-pagination mt-40 text-center">
                            <nav>
                              <Pagination
                                handlePageClick={handlePageClick}
                                pageCount={pageCount}
                              />
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* shop main area end*/}
          </div>
        </div>
      </div>

      {/* product modal */}
      {productItem && (
        <ProductModal
          showModal={modalOpen}
          setShowModal={setModalOpen}
          productItem={productItem}
          setProductItem={setProductItem}
        />
      )}
      {/* product modal */}
    </>
  );
}
