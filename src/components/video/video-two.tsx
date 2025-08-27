'use client';
import React from "react";
import { Leaf } from "../svg";

const VideoTwo = () => {
  
  return (
    <div className="tp-video-area">
      <div className="container container-1870">
        <div className="row">
          <div className="col-xl-12" >
            <div className="tp-video-wrap p-relative">
              <video
                className="play-video"
                loop={true}
                muted={true}
                autoPlay={true}
                playsInline={true}
              >
                <source
                  src="https://html.hixstudio.net/videos/liko/liko-4.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="tp-video-content text-center">
                <span className="tp-video-subtitle">
                  <span>
                    <Leaf />
                  </span>
                  Work in motion
                </span>
                <h2 className="tp-video-title">Play Reel</h2>
                <p>
                  Our work is best experienced in motion. {"Don't"}
                  forget to put on your headphones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTwo;
