import React from 'react';
import Image from 'next/image';

// images
import team_1 from '@/assets/img/home-01/team/team-1-2.jpg';
import team_2 from '@/assets/img/home-01/team/team-1-3.jpg';
import team_3 from '@/assets/img/home-01/team/team-1-4.jpg';
import { useGSAP } from '@gsap/react';
import { hoverBtn } from '@/utils/hover-btn';


// team data 
const team_data = [
  {
    id:1,
    img:team_1,
    designation:"Art direction",
    name:"Jane Mills",
    socials:[
      {icon:'fa-brands fa-twitter',link:'https://twitter.com'},
      {icon:'fa-brands fa-facebook',link:'https://facebook.com'},
      {icon:'fa-brands fa-instagram',link:'https://instagram.com'},
      {icon:'fa-brands fa-linkedin-in',link:'https://linkedin.com'},
    ]
  },
  {
    id:2,
    img:team_2,
    designation:"Designer",
    name:"Chigusa Kisa",
    socials:[
      {icon:'fa-brands fa-twitter',link:'https://twitter.com'},
      {icon:'fa-brands fa-facebook',link:'https://facebook.com'},
      {icon:'fa-brands fa-instagram',link:'https://instagram.com'},
      {icon:'fa-brands fa-linkedin-in',link:'https://linkedin.com'},
    ]
  },
  {
    id:3,
    img:team_3,
    designation:"Developer",
    name:"Lilah Ioselev",
    socials:[
      {icon:'fa-brands fa-twitter',link:'https://twitter.com'},
      {icon:'fa-brands fa-facebook',link:'https://facebook.com'},
      {icon:'fa-brands fa-instagram',link:'https://instagram.com'},
      {icon:'fa-brands fa-linkedin-in',link:'https://linkedin.com'},
    ]
  }
]
export default function TeamTwo() {
  return (
    <div className="tp-team-4-area pt-120 pb-90" style={{backgroundImage:"url(/assets/img/home-04/brand/overly.png)"}}>
        <div className="container">
          <div className="row">
            {team_data.map((item) => (
              <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 mb-30">
                <div className="tp-team-4-item text-center tp_fade_bottom">
                    <div className="tp-hover-btn-wrapper fix">
                      <div className="tp-hover-btn-item">
                          <Image className="w-100" src={item.img} alt="team-img"/>
                      </div>
                    </div>
                    <div className="tp-team-4-content">
                      <span>{item.designation}</span>
                      <h4 className="tp-team-4-title-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <a href="#">{item.name}</a>
                      </h4>
                      <div className="tp-team-4-social">
                        {item.socials.map((social,i) => (
                          <a key={i} href={social.link} target='_blank'>
                            <i className={social.icon}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}
