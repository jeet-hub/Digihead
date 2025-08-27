import React from 'react';
import Image, { StaticImageData } from 'next/image';
import CounterItem from './counter-item';

// images 
import marque_1 from '@/assets/img/home-05/marque/marque-1.jpg';
import marque_2 from '@/assets/img/home-05/marque/marque-2.jpg';
import marque_3 from '@/assets/img/home-05/marque/marque-3.jpg';
import marque_4 from '@/assets/img/home-05/marque/marque-4.jpg';
import marque_5 from '@/assets/img/home-05/marque/marque-5.jpg';
import marque_6 from '@/assets/img/home-05/marque/marque-6.jpg';
import marque_7 from '@/assets/img/home-05/marque/marque-7.jpg';
import marque_8 from '@/assets/img/home-05/marque/marque-8.jpg';
import marque_9 from '@/assets/img/home-05/marque/marque-9.jpg';

function MarqueImage({src}: {src: StaticImageData}) {
  return <Image src={src} alt="marque-img" style={{height: 'auto'}} />
}
export default function CounterOne() {
  return (
    <div className="slide-funfact-height slide-funfact p-relative d-flex align-items-center justify-content-center">
      <div className="img-marq slide-funfact-overlay">
        <div className="middle-shadow">
          <span></span>
        </div>
        <div className="slide-img-left">
          <div className="box">
            <MarqueImage src={marque_1} />
            <MarqueImage src={marque_2} />
            <MarqueImage src={marque_3} />
            <MarqueImage src={marque_4} />
            <MarqueImage src={marque_5} />
            <MarqueImage src={marque_6} />
            <MarqueImage src={marque_7} />
            <MarqueImage src={marque_8} />
            <MarqueImage src={marque_9} />
          </div>
          <div className="box">
            <MarqueImage src={marque_1} />
            <MarqueImage src={marque_2} />
            <MarqueImage src={marque_3} />
            <MarqueImage src={marque_4} />
            <MarqueImage src={marque_5} />
            <MarqueImage src={marque_6} />
            <MarqueImage src={marque_7} />
            <MarqueImage src={marque_8} />
            <MarqueImage src={marque_9} />
          </div>
        </div>
        <div className="slide-img-right">
          <div className="box">
            <MarqueImage src={marque_1} />
            <MarqueImage src={marque_2} />
            <MarqueImage src={marque_3} />
            <MarqueImage src={marque_4} />
            <MarqueImage src={marque_5} />
            <MarqueImage src={marque_6} />
            <MarqueImage src={marque_7} />
            <MarqueImage src={marque_8} />
            <MarqueImage src={marque_9} />
          </div>
          <div className="box">
            <MarqueImage src={marque_1} />
            <MarqueImage src={marque_2} />
            <MarqueImage src={marque_3} />
            <MarqueImage src={marque_4} />
            <MarqueImage src={marque_5} />
            <MarqueImage src={marque_6} />
            <MarqueImage src={marque_7} />
            <MarqueImage src={marque_8} />
            <MarqueImage src={marque_9} />
          </div>
        </div>
      </div>
      <div className="slide-funfact-wrap">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                <div className="slide-funfact-item text-center">
                  <h4>
                    <CounterItem min={0} max={235} />+
                  </h4>
                  <span>Projects Finished</span>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                <div className="slide-funfact-item text-center">
                  <h4><CounterItem min={0} max={12} />+</h4>
                  <span>Years of Experience</span>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                <div className="slide-funfact-item text-center">
                  <h4><CounterItem min={0} max={140} />+</h4>
                  <span>Clients Worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
