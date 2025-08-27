import React from "react";
import { Facebook, Instagram, Linkdin, Twitter } from "../svg";

const social_data = [
  {
    id: 1,
    icon: <Linkdin />,
    link: "https://www.facebook.com/",
  },
  {
    id: 2,
    icon: <Twitter />,
    link: "https://twitter.com/",
  },
  {
    id: 3,
    icon: <Instagram />,
    link: "https://www.instagram.com/",
  },
  {
    id: 4,
    icon: <Facebook />,
    link: "https://www.facebook.com/",
  },
];

export default function Social() {
  return (
    <>
      {social_data.map((item) => (
        <a href={item.link} key={item.id} target="_blank">
          <span>{item.icon}</span>
        </a>
      ))}
    </>
  );
}
