import React from "react";
import { blog_home_five } from "@/data/blog-data";
import BlogItemTwo from "./blog-item/blog-item-2";

export default function BlogOne() {
  const blog_items = [...blog_home_five];
  return (
    <div className="tp-blog-area pb-70">
      <div className="container container-1775">
        <div className="row">
          {blog_items.map((item) => (
            <div key={item.id} className="col-xl-3 col-lg-6 col-md-6 mb-50">
              <BlogItemTwo item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
