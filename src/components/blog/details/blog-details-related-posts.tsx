import React from "react";
import { blog_home_five } from "@/data/blog-data";
import BlogItemTwo from "../blog-item/blog-item-2";

export default function BlogDetailsRelatedPosts() {
  const blog_items = [...blog_home_five].slice(0, 3);
  return (
    <div className="blog-details-realated-area grey-bg-2 pt-90 pb-40">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="blog-details-realated-title-box text-center mb-50">
              <h3 className="blog-details-realated-title">Related posts</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {blog_items.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 mb-50">
              <BlogItemTwo item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
