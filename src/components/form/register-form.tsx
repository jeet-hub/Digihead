import React from "react";
import { CloseEye, OpenEye } from "../svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from "../error-msg";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(6).label("Password"),
});


export default function RegisterForm() {
  const [showPass, setShowPass] = React.useState(false);
  const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data))
    reset()
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="tp-login-input-wrapper">

        <div className="tp-login-input-box">
          <div className="tp-login-input-title">
            <label htmlFor="text">Your Name</label>
          </div>
          <div className="tp-login-input">
            <input id="name" {...register("name")} type="text" placeholder="Your Name" />
          </div>
          <ErrorMsg msg={errors.name?.message!} />
        </div>

        <div className="tp-login-input-box">
          <div className="tp-login-input-title">
            <label htmlFor="email">Your Email</label>
          </div>
          <div className="tp-login-input">
            <input id="email" {...register("email")} type="email" placeholder="liko@mail.com" />
          </div>
          <ErrorMsg msg={errors.email?.message!} />
        </div>

        <div className="tp-login-input-box">
          <div className="tp-login-input-title">
            <label htmlFor="password">Password</label>
          </div>
          <div className="tp-login-input p-relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Min. 6 character"
              id="password"
              {...register("password")}
            />
            <div
              className="tp-login-input-eye"
              id="password-show-toggle"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass && (
                <span id="open-eye" className="open-eye">
                  <OpenEye />
                </span>
              )}
              {!showPass && (
                <span id="close-eye" className="open-close">
                  <CloseEye />
                </span>
              )}
            </div>
          </div>
          <ErrorMsg msg={errors.password?.message!} />
        </div>

      </div>
      <div className="tp-login-suggetions d-sm-flex align-items-center justify-content-between mb-20">
        <div className="tp-login-remeber">
          <input id="remeber" type="checkbox" />
          <label htmlFor="remeber">
            I accept the terms of the Service & Privacy Policy.
          </label>
        </div>
      </div>
      <div className="tp-login-bottom">
        <button type="submit" className="tp-login-btn w-100">
          Sign Up
        </button>
      </div>
    </form>
  );
}
