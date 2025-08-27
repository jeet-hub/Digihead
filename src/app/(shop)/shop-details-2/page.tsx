import React from "react";
import { Metadata } from "next";
import ShopDetailsTwoMain from "@/pages/shop/shop-details-2-main";
import product_data from "@/data/product-data";

export const metadata: Metadata = {
  title: "Liko - Shop Details 2 page",
};

const ShopDetailsTwoPage = () => {
  const product = [...product_data][0];
  return <ShopDetailsTwoMain product={product} />;
};

export default ShopDetailsTwoPage;
