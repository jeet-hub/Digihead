import React from "react";
import { Email, LocationTwo, Phone, User } from "../svg";
import NiceSelect from "../ui/nice-select";

export default function PersonalInfoForm() {
  const handleGender = (item: { value: string; label: string }) => {};
  return (
    <form action="#">
      <div className="row">
        <div className="col-xxl-6 col-md-6">
          <div className="profile__input-box">
            <div className="profile__input">
              <input
                type="text"
                placeholder="Enter your username"
                defaultValue="Farhan Firoz"
              />
              <span>
                <User />
              </span>
            </div>
          </div>
        </div>

        <div className="col-xxl-6 col-md-6">
          <div className="profile__input-box">
            <div className="profile__input">
              <input
                type="email"
                placeholder="Enter your email"
                defaultValue="example@mail.com"
              />
              <span>
                <Email />
              </span>
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-md-6">
          <div className="profile__input-box">
            <div className="profile__input">
              <input
                type="text"
                placeholder="Enter username"
                defaultValue="farhanfiroz"
              />
              <span>
                <i className="fa-brands fa-facebook-f"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-md-6">
          <div className="profile__input-box">
            <div className="profile__input">
              <input
                type="text"
                placeholder="Enter username"
                defaultValue="farhanfiroz"
              />
              <span>
                <i className="fa-brands fa-twitter"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-md-6">
          <div className="profile__input-box">
            <div className="profile__input">
              <input
                type="text"
                placeholder="Enter your number"
                defaultValue="0123 456 7889"
              />
              <span>
                <Phone />
              </span>
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-md-6">
          <div className="profile__input-box">
            <div className="profile__input">
              <NiceSelect
                options={[
                  { value: "", label: "Gender" },
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                  { value: "others", label: "Others" },
                ]}
                defaultCurrent={0}
                onChange={(item) => handleGender(item)}
                name="Gender"
              />
            </div>
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="profile__input-box">
            <div className="profile__input">
              <input
                type="text"
                placeholder="Enter your address"
                defaultValue="3304 Randall Drive"
              />
              <span>
                <LocationTwo />
              </span>
            </div>
          </div>
        </div>

        <div className="col-xxl-12">
          <div className="profile__input-box">
            <div className="profile__input">
              <textarea placeholder="Enter your bio"></textarea>
            </div>
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="profile__btn">
            <button type="submit" className="tp-btn-cart sm">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
