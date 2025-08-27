"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import BlogDetailsRelatedPosts from "@/components/blog/details/blog-details-related-posts";
// animation
import { charAnimation } from "@/utils/title-animation";
import BlogDetailsAreaTwo from "@/components/blog/details/blog-details-area-2";
// image
import blog_bg from "@/assets/img/inner-blog/blog-details-without-sidebar/blog-details-3.jpg";

const BlogDetailsTwoMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* blog details hero */}
            <div className="blog-details-area blog-details-without-sidebar">
              <div className="blog-details-without-sidebar p-relative d-flex align-items-end pt-170 pb-70">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="blog-details-content z-index-5">
                        <span className="blog-details-meta text-black">
                          Creative
                        </span>
                        <h4 className="blog-details-title tp-text-black tp-char-animation">
                          Taking Your <br /> brand in the Metaverse
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container container-1800">
                <div className="blog-details-thumb-wrap">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="blog-details-top-meta text-center">
                        <span>Mark Hopkins</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="blog-details-top-meta text-center">
                        <span>01 October, 2022</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="blog-details-top-meta text-center">
                        <span>7 mins</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="blog-details-thumb">
                        <Image
                          className="w-100"
                          data-speed=".8"
                          src={blog_bg}
                          alt="blog_bg"
                          style={{ height: "auto" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* blog details hero */}

            {/* blog details area */}
            <BlogDetailsAreaTwo />
            {/* blog details area */}

            {/* related posts */}
            <BlogDetailsRelatedPosts />
            {/* related posts */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogDetailsTwoMain;
