import React from "react";
import Image from "next/image";
import google from "@/assets/img/login/google.svg";
import facebook from "@/assets/img/login/facebook.svg";
import apple from "@/assets/img/login/apple.svg";

export default function SocialLogin() {
  return (
    <div className="tp-login-social mb-10 d-flex flex-wrap align-items-center justify-content-center">
      <div className="tp-login-option-item has-google">
        <a href="#">
          <Image src={google} alt="google" />
          Sign in with google
        </a>
      </div>
      <div className="tp-login-option-item">
        <a href="#">
          <Image src={facebook} alt="facebook" />
        </a>
      </div>
      <div className="tp-login-option-item">
        <a href="#">
          <Image src={apple} alt="apple" className="apple" />
        </a>
      </div>
    </div>
  );
}
