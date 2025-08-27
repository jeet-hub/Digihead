import React from "react";
import Image from "next/image";

// images
import c_img_1 from "@/assets/img/inner-contact/contact/contact-1.jpg";
import c_img_2 from "@/assets/img/inner-contact/contact/contact-2.jpg";
import c_img_3 from "@/assets/img/inner-contact/contact/contact-3.jpg";
import c_img_4 from "@/assets/img/inner-contact/contact/contact-4.jpg";
import c_img_5 from "@/assets/img/inner-contact/contact/contact-5.jpg";
import c_img_6 from "@/assets/img/inner-contact/contact/contact-6.jpg";

const location_data = [
  {
    id: 1,
    country: "Sydney",
    img_1: c_img_1,
    img_2: c_img_2,
    map: "https://www.google.com/maps/@23.822356,90.3671947,15z?entry=ttu",
    address: "C26, 99 Jones Street, Ultimo. Sydney. 2007, NSW- Australia",
    phone: "(+91) 76001726",
    email: "sydney@contact.com",
  },
  {
    id: 2,
    country: "London",
    img_1: c_img_3,
    img_2: c_img_4,
    map: "https://www.google.com/maps/@23.822356,90.3671947,15z?entry=ttu",
    address: "86-90 Paul Street. London. EC2A 4NE, I-United Kingdom",
    phone: "(+91) 76001726",
    email: "london@contact.com",
  },
  {
    id: 3,
    country: "Join us",
    img_1: c_img_5,
    img_2: c_img_6,
    map: "https://www.google.com/maps/@23.822356,90.3671947,15z?entry=ttu",
    address:
      "We're always looking for bright new talent. If you're keen. drop us a note:",
    note: "( no 100mb PDFs please )",
    email: "Hello@contact.com",
  },
];
const ContactLocationTwo = () => {
  return (
    <div className="cn-contact-2-info-area pb-90">
      <div className="container container-1530">
        <div className="row">
          {location_data.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className={`cn-contact-2-content ${item.id === 2 ? "mt-60" : ""} text-center`}>
                <h4 className="cn-contact-2-title">{item.country}</h4>
                <div className="cn-contact-2-thumb d-flex justify-content-center">
                  <Image
                    src={item.img_1}
                    alt="contact-img"
                    style={{ height: "auto" }}
                  />
                  <Image
                    src={item.img_2}
                    alt="contact-img"
                    style={{ height: "auto" }}
                  />
                </div>
                <div className="cn-contact-2-info-details">
                  <a className="pb-15" href={item.map} target="_blank">
                    {item.address}
                  </a>
                  <a href={`mailto:${item.email}`}>{item.email}</a>
                  {item.phone && <a href={`tel:${item.phone}`}>{item.phone}</a>}
                  {item.note && <span>{item.note}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactLocationTwo;
