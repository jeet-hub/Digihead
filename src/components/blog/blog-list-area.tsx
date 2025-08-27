import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blog_lists } from "@/data/blog-data";
import usePagination from "@/hooks/use-pagination";
import Pagination from "../ui/pagination";

export default function BlogListArea() {
  const blog_items = [...blog_lists];
  const { currentItems, handlePageClick, pageCount } = usePagination(blog_items,4);
  return (
    <div className="tp-blog-list-area mb-30">
      <div className="container container-1480">
        <div className="tp-blog-list-wrap">
          {currentItems.map((item) => (
            <div key={item.id} className="tp-blog-list-item">
              <div className="row">
                <div className="col-xl-2 col-lg-2 tp-flex-end">
                  <div className="tp-blog-list-meta">
                    <span>{item.date}</span>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-7">
                  <div className="tp-blog-list-content-wrap">
                    <div className="tp-blog-list-thumb anim-zoomin-wrap">
                      <Link href={`/blog-details/${item.id}`}>
                        <Image
                          className="anim-zoomin"
                          src={item.img!}
                          alt="blog-img"
                          style={{height: "auto"}}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5">
                  <div className="tp-blog-list-content tp-flex-column">
                    <div className="tp-blog-list-title-wrap">
                      <h4 className="tp-blog-list-title-sm">
                        <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                      </h4>
                    </div>
                    <div className="tp-blog-list-link-wrap">
                      <Link className="tp-blog-list-link" href={`/blog-details/${item.id}`}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="col-12">
            <div className="basic-pagination mt-80 d-flex align-items-center justify-content-center">
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
  );
}
