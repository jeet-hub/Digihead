import React from "react";

export default function ChangePassword() {
  return (
    <form action="#">
      <div className="row">
        <div className="col-xxl-12">
          <div className="tp-profile-input-box">
            <div className="tp-profile-input-title">
              <label htmlFor="old_pass">Old Password</label>
            </div>
            <div className="tp-contact-input">
              <input name="old_pass" id="old_pass" type="password" />
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-md-6">
          <div className="tp-profile-input-box">
            <div className="tp-profile-input-title">
              <label htmlFor="new_pass">New Password</label>
            </div>
            <div className="tp-profile-input">
              <input name="new_pass" id="new_pass" type="password" />
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-md-6">
          <div className="tp-profile-input-box">
            <div className="tp-profile-input-title">
              <label htmlFor="con_new_pass">Confirm Password</label>
            </div>
            <div className="tp-profile-input">
              <input name="con_new_pass" id="con_new_pass" type="password" />
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-md-6">
          <div className="profile__btn">
            <button type="submit" className="tp-btn-cart sm">
              Update
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
