import React from "react";

export default function BlogReplyForm() {
  return (
    <form className="tp-postbox-details-form-wrapper">
      <div className="tp-postbox-details-form-inner">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-postbox-details-input-box">
              <div className="tp-postbox-details-input">
                <textarea
                  id="msg"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="tp-postbox-details-input-box">
              <div className="tp-postbox-details-input">
                <input type="text" placeholder="Farhan Firoz" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="tp-postbox-details-input-box">
              <div className="tp-postbox-details-input">
                <input type="email" placeholder="liko@mail.com" />
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="tp-postbox-details-input-box">
              <div className="tp-postbox-details-input">
                <input type="text" placeholder="Website" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-postbox-details-suggetions mb-20">
        <div className="tp-postbox-details-remeber d-flex align-items-start">
          <input id="remeber" type="checkbox" />
          <label htmlFor="remeber">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
      </div>
      <div className="tp-postbox-details-input-box">
        <button className="tp-btn-border-lg" type="submit">
          Post Comment
        </button>
      </div>
    </form>
  );
}
