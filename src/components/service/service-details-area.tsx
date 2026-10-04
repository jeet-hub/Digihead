"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// images
import sv_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";

// ======================================================
// SERVICE DATA
// ======================================================

const service_details_data = [
  {
    id: 1,
    category: "Design Studio",
    title: "Logo Design",
    image: sv_1,

    description:
      "Your brand deserves a logo that actually feels like you — no matter how big or small you're starting out. That's why we don't just design; we listen. We take the time to understand your story, your values, what makes you different, and turn all of that into a mark you'll be proud to put your name on. And because your brand shows up everywhere — your website, your packaging, your Instagram feed — we make sure your logo looks just as good in every single place people find you.",

    features: [
      "DISCOVER AND BRAND ALIGNMENT",
      "MOODBOARD AND CREATIVE DIRECTION",
      "TYPOGRAPHY AND SYMBOL DESIGN",
      "ICON AND WORDMARK VARIANTS",
      "USAGE GUIDELINES AND FILE EXPORT",
      "LOGO ANIMATION (OPTIONAL)",
    ],

    shortDescription:
      "Your logo is at the heart of your identity. An impactful design, tailor-made and aligned with your activity, helps you differentiate yourself and make a lasting impression.",

    sideTitle: "Logo Design",
  },

  {
    id: 2,
    category: "Brand Design",
    title: "Brand Identity",
    image: sv_2,

    description:
      "Your brand isn't just a logo — it's everything people feel when they see you. We build the visual system that makes that feeling unmistakable: the colors, the fonts, the icons, the layouts, every detail working together. So whether it's your website or your packaging or a single Instagram post, people know it's you — instantly, every time.",

    features: [
      "BRAND STRATEGY & POSITIONING",
      "COLOR PALETTE & TYPOGRAPHY",
      "VISUAL LANGUAGE & ICONS",
      "DESIGN SYSTEM & TEMPLATES",
      "BRAND BOOK & GUIDELINES",
      "APPLICATION MOCKUPS",
    ],

    shortDescription:
      "We create a complete visual identity that keeps your brand consistent, recognizable and memorable across every platform and touchpoint.",

    sideTitle: "Brand Identity",
  },

  {
    id: 3,
    category: "Packaging Design",
    title: "Packaging",
    image: sv_3,

    description:
      "First impressions happen fast — and for most people, that's your packaging. Before they visit your website, before they read a single word about you, they're holding your product in their hands, forming an opinion in seconds. That's why we design packaging that doesn't just look good — it feels right and speaks your brand the moment someone picks it up. We dig into what makes you different and translate it into every detail: the texture, the color, the way it opens, the way it feels to hold. On a shelf, in an unboxing video, or on a screen, we make sure you stop the scroll, catch the eye, and steal the spotlight — every single time.",

    features: [
      "STRUCTURAL PACKAGING CONSULTATIONS",
      "LABEL AND SURFACE DESIGN",
      "TYPOGRAPHY AND MATERIAL RESEARCH",
      "MOCKUPS AND PRINT READY FILES",
      "UNBOXING EXPERIENCE",
      "COORDINATION WITH PRINTERS",
    ],

    shortDescription:
      "We create packaging experiences that attract attention, communicate your brand and make your product memorable from the very first interaction.",

    sideTitle: "Packaging",
  },

  {
    id: 4,
    category: "Digital Studio",
    title: "Website Design & Development",
    image: sv_1,

    description:
      "Your website is where people decide if they trust you. In just a few seconds, they're forming an opinion — about your brand, your credibility, whether you're worth their time. That's the moment we design for. We build sites that look stunning and work just as hard — fast, seamless, unforgettable on every screen, whether someone's scrolling on their phone or browsing on a desktop. Nothing messy. Nothing confusing. Just clean design and smart development working together, so nothing gets in the way of what matters. The result is a site that feels like you, tells your story clearly, and makes people want to stick around — and come back.",

    features: [
      "UX STRATEGY & WIREFRAMING",
      "UI DESIGN & PROTOTYPING",
      "FRONTEND DEVELOPMENT",
      "RESPONSIVE & MOBILE OPTIMIZATION",
      "CMS INTEGRATION (WEBFLOW OR WORDPRESS)",
      "SEO & LAUNCH SUPPORT",
    ],

    shortDescription:
      "We design and develop fast, responsive websites that communicate your brand clearly and create a seamless experience across every device.",

    sideTitle: "Website Design & Development",
  },

  {
    id: 5,
    category: "Application Development",
    title: "Application Development",
    image: sv_2,

    description:
      "A great app isn't just downloaded — it's used, day after day. We design and build apps that people actually want to open: fast, simple, and easy to use from the very first tap. Every screen, every button, every interaction is built with purpose, so nothing feels confusing and nothing gets in the way. The result is an app that feels like you, works the way people expect, and earns a place on their home screen — not just their phone.",

    features: [
      "PRODUCT STRATEGY",
      "UX & UI DESIGN",
      "APP DEVELOPMENT",
      "RESPONSIVE INTERACTIONS",
      "API & BACKEND INTEGRATION",
      "TESTING & LAUNCH SUPPORT",
    ],

    shortDescription:
      "We create simple, fast and purposeful applications designed around real users and real business goals.",

    sideTitle: "Application Development",
  },
];

// ======================================================
// CONTENT COMPONENT
// ======================================================

const ServiceDetailsContent = () => {
  const searchParams = useSearchParams();

  /*
  |--------------------------------------------------------------------------
  | GET SERVICE ID FROM URL
  |--------------------------------------------------------------------------
  |
  | /service-details?id=1
  | /service-details?id=2
  | /service-details?id=3
  |
  */

  const serviceId = Number(searchParams?.get("id")) || 1;

  const currentIndex = service_details_data.findIndex(
    (item) => item.id === serviceId
  );

  const service =
    currentIndex !== -1
      ? service_details_data[currentIndex]
      : service_details_data[0];

  return (
    <div className="service-details__area service-details__space pt-200 pb-120">

      {/* ======================================================
          HERO
      ====================================================== */}

      <div className="container">
        <div className="row">

          <div className="col-xl-12">

            <div className="service-details__title-box mb-40">

              <span className="service-details__subtitle tp-char-animation">
                {service.category}
              </span>

              <h4 className="sv-hero-title tp-char-animation">
                {service.title}
              </h4>

            </div>

          </div>

          <div className="row">

            <div className="offset-xl-4 col-xl-5">

              <div className="service-details__banner-text mb-80">

                <p className="mb-30 tp_title_anim">
                  {service.description}
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ======================================================
          MAIN IMAGE
      ====================================================== */}

      <div className="container-fluid">

        <div className="row">

          <div className="col-xl-12">

            <div className="service-details__tab-wrapper text-center mb-120">

              <div className="service-details__tab-thumb">

                <Image
                  data-speed="0.4"
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div className="container">

        <div className="row">

          {/* LEFT */}
          <div className="col-xl-7 col-lg-7">

            <div className="service-details__left-wrap">

              <div className="service-details__left-text pb-20">

                <p className="text-1 tp_title_anim">
                  {service.shortDescription}
                </p>

                <p>
                  Every detail is designed with purpose to create a strong,
                  consistent and memorable experience for your audience.
                </p>

              </div>

              {/* FEATURES */}

              <div className="service-details__fea-list">

                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      {feature}
                    </li>
                  ))}
                </ul>

              </div>

              {/* SMALL IMAGES */}

              <div className="service-details__sm-thumb-wrap mb-60">

                <div className="row">

                  <div className="col-xl-6 col-lg-6 col-md-6 mb-20">

                    <div className="service-details__sm-thumb">

                      <Image
                        src={sv_2}
                        alt={service.title}
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                      />

                    </div>

                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 mb-20">

                    <div className="service-details__sm-thumb">

                      <Image
                        src={sv_3}
                        alt={service.title}
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                      />

                    </div>

                  </div>

                </div>

              </div>

              <div className="service-details__left-text">

                <p>
                  Great design should not only look aesthetically pleasing;
                  it should communicate clearly, create emotion and help your
                  brand connect with the right audience.
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="col-xl-5 col-lg-5">

            <div className="service-details__right-wrap fix p-relative">

              <div className="service-details__rotate-text">

                <span>Full list of services</span>

              </div>

              {/* SERVICE NAVIGATION */}

              <div className="service-details__right-category">

                {service_details_data.map((item) => (

                  <Link
                    key={item.id}
                    className={item.id === service.id ? "active" : ""}
                    href={`/service-details?id=${item.id}`}
                  >
                    {item.title}
                  </Link>

                ))}

              </div>

              {/* RIGHT CONTENT */}

              <div className="service-details__right-text-box">

                <h4>
                  {service.sideTitle}
                </h4>

                <p className="mb-20">
                  {service.shortDescription}
                </p>

                <Link
                  className="tp-btn-white background-black"
                  href="/contact"
                >
                  Let’s Talk
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

// ======================================================
// MAIN COMPONENT
// ======================================================

const ServiceDetailsArea = () => {
  return (
    <Suspense fallback={null}>
      <ServiceDetailsContent />
    </Suspense>
  );
};

export default ServiceDetailsArea;