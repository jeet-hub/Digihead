'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";
import { ScrollDown } from "@/components/svg";
import { blog_classic } from "@/data/blog-data";
import { scroller } from "react-scroll";

// slider setting
const slider_setting: SwiperOptions = {
  slidesPerView: 1,
  loop: true,
  autoplay: false,
  spaceBetween: 0,
  speed: 1000,
  pagination: {
    el: ".blog-sidebar-dot",
    clickable: true,
  },
  navigation: {
    nextEl: ".blog-sidebar-prev",
    prevEl: ".blog-sidebar-next",
  },
};

export default function BlogClassicSlider() {
  const slider_blog_data = [...blog_classic.filter((b) => b.blogHeroSlider)];

  const scrollTo = () => {
    scroller.scrollTo('postbox', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <div className="blog-sidebar-slider-area">
      <div className="blog-sidebar-slider-wrapper p-relative">
        <div className="blog-sidebar-scrollbar smooth">
          <a className="pointer" onClick={scrollTo}>
            Scroll to explore
            <span>
              <ScrollDown />
            </span>
          </a>
        </div>
        <div className="blog-sidebar-arrow-box">
          <button className="blog-sidebar-prev">Next</button>
          <button className="blog-sidebar-next d-none">prev</button>
        </div>
        <Swiper
          {...slider_setting}
          modules={[Navigation, Pagination]}
          className="swiper-container blog-sidebar-slider-active"
        >
          {slider_blog_data.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="blog-sidebar-slider-bg blog-sidebar-slider-height d-flex align-items-center pt-170 pb-120"
                style={{ backgroundImage: `url(/assets/img/inner-blog/blog-sidebar/blog-sidebar-bg.jpg)` }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-xl-9">
                      <div className="blog-sidebar-content-box">
                        <div className="blog-sidebar-avatar-box d-flex align-items-center">
                          <Image
                            src={item.avatar!}
                            alt="avatar"
                          />
                          <span>{item.author}</span>
                        </div>
                        <div className="blog-sidebar-title-box">
                          <span className="blog-sidebar-slider-meta">
                            {item.category} . {item.date}
                          </span>
                          <h4 className="blog-sidebar-slider-title tp-char-animation">
                            {item.title}
                          </h4>
                          <Link href={`/blog-details/${item.id}`}
                            className="blog-sidebar-slider-link"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
