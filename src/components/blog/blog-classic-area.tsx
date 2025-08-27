import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

import BlogSidebar from "./blog-sidebar";
import { blog_classic } from "@/data/blog-data";
import { Quote, QuoteTwo } from "../svg";
import usePagination from "@/hooks/use-pagination";
import { IBlogDT } from "@/types/blog-d-t";
import PaginationCom from "../ui/pagination";

// slider setting
const slider_setting: SwiperOptions = {
  slidesPerView: 1,
  loop: true,
  autoplay: false,
  spaceBetween: 0,
  speed: 1000,
  effect: "fade",
  pagination: {
    el: ".blog-sidebar-dot",
    clickable: true,
  },
  navigation: {
    prevEl: ".postbox-arrow-prev",
    nextEl: ".postbox-arrow-next",
  },
};

// prop type
type IProps = {
  setIsVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setVideoId: React.Dispatch<React.SetStateAction<string>>;
};

export default function BlogClassicArea({setIsVideoOpen,setVideoId}:IProps) {
  const blog_items = [...blog_classic.filter((b) => !b.blogHeroSlider)];
  const { currentItems, handlePageClick, pageCount } = usePagination<IBlogDT>(blog_items,4);

  function handleVideoModal(id: string) {
    setIsVideoOpen(true);
    setVideoId(id);
  }
  return (
    <section
      id="postbox"
      className="postbox__area tp-blog-sidebar-sticky-area pt-120 pb-80"
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="postbox__wrapper">
              {currentItems.map((item) => (
                <article key={item.id} className="postbox__item mb-80">
                  {!item.blogQuote && !item.blogQuoteTwo && !item.imgSlider && (
                    <div className="postbox__thumb">
                      <Link href={`/blog-details/${item.id}`}>
                        <Image src={item.img!} alt="blog-img" />
                      </Link>
                      {item.video && (
                        <div className="postbox__play-btn">
                          <a
                            className="popup-video pointer"
                            onClick={() => handleVideoModal(item.videoId!)}
                          >
                            <i className="fa-sharp fa-solid fa-play"></i>
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                  {item.imgSlider && (
                    <div className="postbox__thumb w-img">
                      <div className="postbox__thumb-slider p-relative">
                        <Swiper
                          {...slider_setting}
                          modules={[Navigation, Pagination]}
                          className="swiper-container postbox__thumb-slider-active fix"
                        >
                          {item.images &&
                            item.images.map((src, i) => (
                              <SwiperSlide key={i}>
                                <Image src={src} alt="" />
                              </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="postbox__slider-arrow-wrap d-none d-sm-block">
                          <button className="postbox-arrow-prev">
                            <i className="fa-sharp fa-solid fa-arrow-left"></i>
                          </button>
                          <button className="postbox-arrow-next">
                            <i className="fa-sharp fa-solid fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {!item.blogQuote && !item.blogQuoteTwo && (
                    <div className="postbox__content">
                      <div className="postbox__meta">
                        <span>
                          {item.category} . {item.date}
                        </span>
                      </div>
                      <h3 className="postbox__title">
                        <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                      </h3>
                      <div className="postbox__text">
                        <p>{item.desc}</p>
                      </div>
                      <div className="postbox__read-more">
                        <Link href={`/blog-details/${item.id}`}
                          className="tp-btn-border-lg"
                        >
                          read more
                        </Link>
                      </div>
                    </div>
                  )}
                  {item.blogQuoteTwo && (
                    <div className="postbox__link-post-wrap d-flex align-items-center">
                      <span className="postbox__link-post-icon">
                        <Quote />
                      </span>
                      <p>
                        MERGE DIFFERENT TO CREATE A PERFECT <br /> PLAYLIST FOR
                        EACH.
                      </p>
                    </div>
                  )}
                  {item.blogQuote && (
                    <div className="postbox__blockquote">
                      <blockquote>
                        <span className="postbox__blockquote-icon">
                          <QuoteTwo />
                        </span>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr,uyam erat.!
                        </p>
                        <span className="postbox__blockquote-info">
                          SEM SMITH, CREATIVE DIRECTOR
                        </span>
                      </blockquote>
                    </div>
                  )}
                </article>
              ))}

              <div className="basic-pagination">
                <nav>
                  <PaginationCom
                    handlePageClick={handlePageClick}
                    pageCount={pageCount}
                  />
                </nav>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            {/* blog sidebar area */}
            <BlogSidebar />
            {/* blog sidebar area */}
          </div>
        </div>
      </div>
    </section>
  );
}
