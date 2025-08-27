import React from "react";
import { CloseEye, OpenEye } from "../svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from "../error-msg";

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(6).label("Password"),
});


export default function LoginForm() {
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
              id="password"
              type={showPass ? "text" : "password"}
              placeholder="Min. 6 character"
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
          <label htmlFor="remeber">Remember me</label>
        </div>
        <div className="tp-login-forgot">
          <a href="#">Forgot Password?</a>
        </div>
      </div>
      <div className="tp-login-bottom">
        <button type="submit" className="tp-login-btn w-100">
          Login
        </button>
      </div>
    </form>
  );
}
