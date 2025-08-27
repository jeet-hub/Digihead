"use client";
import React from "react";
import ProjectTextLine from "./project-text-line";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// project images
import p_1 from "@/assets/img/home-01/project/project-1-1.jpg";
import p_2 from "@/assets/img/home-01/project/project-1-2.jpg";
import p_3 from "@/assets/img/home-01/project/project-1-3.jpg";
import p_4 from "@/assets/img/home-01/project/project-1-4.jpg";
import p_5 from "@/assets/img/home-01/project/project-1-5.jpg";
import p_6 from "@/assets/img/home-01/project/project-1-6.jpg";

// type
type IProject = {
  id: number;
  cls: string;
  cls_2: string;
  img: StaticImageData;
};

const project_data: IProject[] = [
  {
    id: 1,
    cls: "tp-project-mr",
    cls_2: "height-1",
    img: p_1,
  },
  {
    id: 2,
    cls: "text-end",
    cls_2: "height-2 d-inline-flex justify-content-end",
    img: p_2,
  },
  {
    id: 3,
    cls: "tp-project-mr",
    cls_2: "height-3",
    img: p_3,
  },
  {
    id: 4,
    cls: "",
    cls_2: "height-4",
    img: p_4,
  },
  {
    id: 5,
    cls: "tp-project-ml",
    cls_2: "height-5",
    img: p_5,
  },
  {
    id: 6,
    cls: "",
    cls_2: "height-6",
    img: p_6,
  },
];

function ProjectItem({ item }: { item: IProject }) {
  return (
    <div className={`tp-project-item ${item.cls} mb-200`}>
      <div
        className={`tp-project-img ${item.cls_2} fix not-hide-cursor`}
        data-cursor="View<br>Demo"
      >
        <Link className="cursor-hide" href="/portfolio-details-3">
          <Image data-speed=".8" src={item.img} alt="project-img" style={{ height: "auto" }} />
        </Link>
      </div>
    </div>
  );
}

// prop type
type IProps = {
  style_2?: boolean;
};
const ProjectOne = ({style_2=false}:IProps) => {
  return (
    <>
      <div className={`${style_2 ? "tp-project-area-2" : "tp-project-area"} fix`}>
        {!style_2 && (
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-xl-12">
                <ProjectTextLine />
              </div>
            </div>
          </div>
        )}
        <div className="tp-project-gallery-wrapper">
          <div className="container container-1630">
            <div className="tp-project-gallery-top pb-50">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="tp-project-left-wrap">
                    {project_data.slice(0, 3).map((item, i) => (
                      <ProjectItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="tp-project-right-wrap">
                    {project_data.slice(3, 6).map((item) => (
                      <ProjectItem key={item.id} item={item} />
                    ))}

                    <div className="tp-project-btn tp-btn-trigger">
                      <div className="tp-btn-bounce">
                        <Link
                          className="tp-btn-border"
                          href="/portfolio-grid-col-3"
                        >
                          <span className="tp-btn-border-wrap">
                            <span className="text-1">View all projects</span>
                            <span className="text-2">View all projects</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!style_2 && (
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-xl-12">
                  <div className="tp-project-full-img-wrap p-relative fix">
                    <div
                      className="tp-project-full-img"
                      data-speed="auto"
                      style={{
                        backgroundImage:
                          "url(/assets/img/inner-service/hero/hero-1-2.jpg)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectOne;
