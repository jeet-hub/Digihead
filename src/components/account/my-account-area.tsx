import React from "react";
import ProfileNavs from "./profile-navs";
import AccountProfile from "./account-profile";
import PersonalInfoForm from "../form/personal-info-form";
import ProfileAddress from "./profile-address";
import ChangePassword from "../form/change-password";
import ProfileNotification from "./profile-notification";
import ProfileTicket from "./profile-ticket";

export default function MyAccountArea() {
  return (
    <section className="profile__area pt-200 pb-120">
      <div className="container">
        <div className="profile__inner p-relative">
          <div className="row">
            <div className="col-xxl-4 col-lg-4">
              <div className="profile__tab mr-40">
                <nav>
                  {/* profile nav */}
                  <ProfileNavs />
                  {/* profile nav */}
                </nav>
              </div>
            </div>
            <div className="col-xxl-8 col-lg-8">
              <div className="profile__tab-content">
                <div className="tab-content" id="profile-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-1"
                    role="tabpanel"
                    aria-labelledby="nav-1-tab"
                  >
                    {/* profile main */}
                    <AccountProfile />
                    {/* profile main */}
                  </div>

                  <div
                    className="tab-pane fade"
                    id="nav-2"
                    role="tabpanel"
                    aria-labelledby="nav-2-tab"
                  >
                    <div className="profile__info">
                      <h3 className="profile__info-title">Personal Details</h3>
                      <div className="profile__info-content">
                        {/* form start */}
                        <PersonalInfoForm />
                        {/* form end */}
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="nav-3"
                    role="tabpanel"
                    aria-labelledby="nav-3-tab"
                  >
                    <div className="profile__password">
                      {/* address */}
                      <ProfileAddress />
                      {/* address */}
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="nav-4"
                    role="tabpanel"
                    aria-labelledby="nav-4-tab"
                  >
                    {/* profile ticket */}
                    <ProfileTicket />
                    {/* profile ticket */}
                  </div>

                  <div
                    className="tab-pane fade"
                    id="nav-5"
                    role="tabpanel"
                    aria-labelledby="nav-5-tab"
                  >
                    {/* Profile Notification */}
                    <ProfileNotification />
                    {/* Profile Notification */}
                  </div>

                  <div
                    className="tab-pane fade"
                    id="nav-6"
                    role="tabpanel"
                    aria-labelledby="nav-6-tab"
                  >
                    {/* change password */}
                    <div className="profile__password">
                     <ChangePassword />
                    </div>
                    {/* change password */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
