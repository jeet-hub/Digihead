import React from "react";
import Image from "next/image";
import BlogSidebar from "../blog-sidebar";
import { QuoteThree, Share, Tag } from "@/components/svg";
import BlogDetailsAuthor from "./blog-details-author";
import BlogDetailsNavigation from "./blog-details-navigation";
import BlogDetailsComments from "./blog-details-comments";
import BlogReplyForm from "@/components/form/blog-reply-form";
import details_thumb_1 from "@/assets/img/inner-blog/blog-details/blog-details-2.jpg";
import details_thumb_2 from "@/assets/img/inner-blog/blog-details/blog-details-3.jpg";
import details_thumb_3 from "@/assets/img/inner-blog/blog-details/blog-details-4.jpg";

export default function BlogDetailsArea() {
  return (
    <section className="postbox__area tp-blog-sidebar-sticky-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="postbox__wrapper">
              <div className="blog-details-top-text">
                <p>
                  The metaverse can be viewed as an evolution of today’s
                  internet, which in turn evolved from passive media that we
                  simply consumed. In the age of radio and television, the
                  consumer’s only job was to listen and decide if they wanted to
                  buy.{" "}
                </p>
              </div>
              <div className="blog-details-left-content">
                <h4 className="blog-details-left-title">
                  What is Lorem Ipsum?
                </h4>
                <p className="mb-20">
                  <span>Lorem Ipsum</span> is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged
                </p>
              </div>
              <div className="blog-details-thumb-box">
                <div className="row">
                  <div className="col-md-6">
                    <div className="blog-details-thumb">
                      <Image
                        className="w-100 mb-20"
                        src={details_thumb_1}
                        alt="details-thumb"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="blog-details-thumb">
                      <Image
                        className="w-100 mb-20"
                        src={details_thumb_2}
                        alt="details-thumb"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-details-left-content">
                <h4 className="blog-details-left-title">
                  Relationship & Communication
                </h4>
                <p>
                  But, like most politicians, he promised more than he could
                  deliver. Why not indeed! Daylight and everything. And then the
                  battle’s not so bad? Hello, little man. I will destroy you!
                  No, I’m Santa Claus! Kif might! Man, I’m sore all over. I feel
                  like I just went ten rounds with mighty Thor. I found what I
                  need. And it’s not friends, it’s things. Then we’ll go with
                  that data file!
                </p>
              </div>
              <div className="blog-details-blockquote">
                <blockquote>
                  <span className="quote-icon">
                    <QuoteThree />
                  </span>
                  <p>{"Don't"} watch the clock; do what it does. keep going.</p>
                  <span className="blockquote-info">Sam Levenson</span>
                </blockquote>
              </div>
              <div className="blog-details-left-content">
                <p>
                  With any accomplished project, great time management is an
                  essential component. We business owners hire product
                  designers, they expect them to not only perform well, but also
                  on time. At Stan Vision, we provide you with an experienced
                  design team, led by an expert PM who knows how to prioritise
                  your platform and product.
                </p>
              </div>
              <div className="blog-details-thumb-box">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="blog-details-thumb">
                      <Image
                        src={details_thumb_3}
                        alt="details-thumb"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-details-left-content">
                <h4 className="blog-details-left-title">
                  What is Lorem Ipsum?
                </h4>
                <p>
                  <span>Lorem Ipsum</span> is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged
                </p>
              </div>
              <div className="blog-details-share-wrap mb-40">
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    <div className="blog-details-tag">
                      <span>
                        <Tag />
                      </span>
                      <a href="#">Creative</a>
                      <a href="#">Photography</a>
                      <a href="#">Lifestyle</a>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <div className="blog-details-share text-start text-md-end">
                      <span>
                        <Share />
                      </span>
                      <a href="#">Share Post</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* blog details author */}
              <BlogDetailsAuthor />
              {/* blog details author */}

              {/* blog details navigation */}
              <BlogDetailsNavigation />
              {/* blog details navigation */}

              <div className="postbox__comment mb-100">
                <h3 className="postbox__comment-title">3 Comments</h3>
                {/* blog details comments */}
                <BlogDetailsComments />
                {/* blog details comments */}
              </div>

              <div className="tp-postbox-details-form">
                <h3 className="tp-postbox-details-form-title">Leave a Reply</h3>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>

                {/* blog reply form */}
                <BlogReplyForm />
                {/* blog reply form */}
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
