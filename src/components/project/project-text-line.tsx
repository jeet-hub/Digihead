"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import shape from "@/assets/img/home-01/project/project-shape-1-1.png";

const ProjectTextLine = () => {
  useGSAP(() => {
    gsap.set(".tp-project-textline", {
      x: "25%",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".tp-project-textline ",
          start: "-1500 10%",
          end: "bottom 20%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
      .to(".tp-project-textline ", {
        x: "-80%",
      });
  });
  return (
    <div
      className="tp-project-textline tp-project-effect mb-115"
      data-scrub="0.0001"
    >
      <span className="textline-1">
        Co
        <span>
          <Image src={shape} alt="shape" />
        </span>
        lest
      </span>
      <span className="textline-2">Project</span>
      <span className="textline-1">
        Co
        <span>
          <Image src={shape} alt="shape" />
        </span>
        lest
      </span>
      <span className="textline-2">Project</span>
      <span className="textline-1">
        Co
        <span>
          <Image src={shape} alt="shape" />
        </span>
        lest
      </span>
      <span className="textline-2">Project</span>
      <span className="textline-1">
        Co
        <span>
          <Image src={shape} alt="shape" />
        </span>
        lest
      </span>
      <span className="textline-2">Project</span>
    </div>
  );
};

export default ProjectTextLine;
