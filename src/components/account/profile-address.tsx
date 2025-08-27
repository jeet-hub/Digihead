import React from "react";
import { Address, Shipping } from "../svg";

export default function ProfileAddress() {
  return (
    <div className="profile__address">
      <div className="row">
        <div className="col-md-6">
          <div className="profile__address-item d-sm-flex align-items-start">
            <div className="profile__address-icon">
              <span>
                <Address />
              </span>
            </div>
            <div className="profile__address-content">
              <h3 className="profile__address-title">Billing Address</h3>
              <p>
                <span>Street:</span>4076 Glen Street
              </p>
              <p>
                <span>City:</span>Summer Shade
              </p>
              <p>
                <span>State/province/area:</span>Kentucky
              </p>
              <p>
                <span>Phone number:</span>270-428-8478
              </p>
              <p>
                <span>Zip code:</span>42166
              </p>
              <p>
                <span>Country calling code:</span> +1
              </p>
              <p>
                <span>Country:</span>United States
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="profile__address-item d-sm-flex align-items-start">
            <div className="profile__address-icon">
              <span>
                <Shipping />
              </span>
            </div>
            <div className="profile__address-content">
              <h3 className="profile__address-title">Shipping Address</h3>
              <p>
                <span>Street:</span>21986 Lewis Street
              </p>
              <p>
                <span>City:</span>Naperville
              </p>
              <p>
                <span>State/province/area:</span>Illinois
              </p>
              <p>
                <span>Phone number:</span>680-887-9127
              </p>
              <p>
                <span>Zip code:</span> 60060
              </p>
              <p>
                <span>Country calling code:</span>+1
              </p>
              <p>
                <span>Country:</span>United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
