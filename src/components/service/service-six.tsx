
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RightArrow, ShapeTwo } from "../svg";

import { service_details_data } from "@/data/service-details-data";

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">

        {service_details_data.map((item) => (

          <div
            key={item.id}
            className="sv-service-item project-panel-2"
          >

            <div className="row g-0">

              {/* IMAGE */}
              <div className="col-xl-6 col-lg-6">

                <div className="sv-service-thumb">

                  <Image
                    src={item.img}
                    alt={item.title}
                    style={{ height: "auto" }}
                  />

                </div>

              </div>


              {/* CONTENT */}
              <div className="col-xl-6 col-lg-6">

                <div className="sv-service-content-wrap d-flex align-items-center">

                  <div className="sv-service-content">

                    <div className="sv-service-title-box">

                      <span className="sv-service-subtitle">

                        <i>
                          {item.id < 10
                            ? `0${item.id}`
                            : item.id}
                        </i>

                        {item.subtitle}

                      </span>

                      <h4 className="sv-service-title">
                        {item.title}
                      </h4>

                    </div>


                    <div className="sv-service-space-wrap">

                      <div className="sv-service-text">

                        <p>
                          {item.description}
                        </p>

                      </div>


                      <div className="sv-service-list">

                        <ul>

                          {item.lists.map((list, index) => (

                            <li key={index}>
                              {list}
                            </li>

                          ))}

                        </ul>

                      </div>


                      {/* DETAILS BUTTON */}
                      <div className="sv-service-btn">

                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href={`/service-details?id=${item.id}`}
                        >

                          <span className="zikzak-content">

                            See <br />
                            Details

                            <RightArrow clr="currentColor" />

                          </span>

                          <ShapeTwo />

                        </Link>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
}
