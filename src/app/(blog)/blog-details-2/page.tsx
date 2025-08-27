import React from "react";
import { Metadata } from "next";
import BlogDetailsTwoMain from "@/pages/blog/blog-details-2";

export const metadata: Metadata = {
  title: "Liko - Blog Details 2 page",
};

const BlogDetailsTwoPage = () => {
  return (
    <BlogDetailsTwoMain/>
  );
};

export default BlogDetailsTwoPage;
