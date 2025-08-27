import { Metadata } from "next";
import BlogDetailsMain from "@/pages/blog/blog-details";
import product_data from "@/data/product-data";
import ShopDetailsMain from "@/pages/shop/shop-details-main";

export const metadata: Metadata = {
  title: "Liko - Shop Details page",
};

export default function ShopDetailsPage({params}:{params:{id:string}}) {
  const product = [...product_data].find((p) => p.id === Number(params.id));
  return product ? (
    <ShopDetailsMain product={product} />
  ) : (
    <div className="text-center pt-100">
      Product not found with id: {params.id}
    </div>
  );
}
